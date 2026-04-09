import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { getAllChapters, getPublishedChapters, formatShortDate } from "@/lib/chapters";
import LapCountdown from "@/components/LapCountdown";
import LlvChip from "@/components/LlvChip";
import SubscribeForm from "@/components/SubscribeForm";
import ShareButton from "@/components/ShareButton";

// Revalidate every 5 minutes so chapter unlocking is near-real-time
export const revalidate = 300;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lap?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const lapParam = params.lap ? parseInt(params.lap, 10) : null;
  const all = getAllChapters();
  const chapter = lapParam ? all.find((c) => c.lapNumber === lapParam) : null;

  if (chapter) {
    return {
      title: `Lap ${chapter.lapNumber}: ${chapter.title} — The Co-Intelligent Organisation`,
      description: chapter.excerpt,
      openGraph: {
        title: `Lap ${chapter.lapNumber}: ${chapter.title}`,
        description: chapter.excerpt,
        images: [
          {
            url: `/og/lap-${chapter.lapNumber}.png`,
            width: 1200,
            height: 630,
            alt: `Lap ${chapter.lapNumber}: ${chapter.title}`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `Lap ${chapter.lapNumber}: ${chapter.title}`,
        description: chapter.excerpt,
        images: [`/og/lap-${chapter.lapNumber}.png`],
      },
    };
  }

  return {
    title: "The Co-Intelligent Organisation — 21-Lap Grand Prix",
    description:
      "A weekly serialised book by Suhit Anantula. One lap every Monday. 21 laps. The race to build an organisation that thinks with AI.",
    openGraph: {
      title: "The Co-Intelligent Organisation",
      description:
        "A weekly serialised book by Suhit Anantula. One lap every Monday. 21 laps.",
      images: [{ url: "/og/lap-1.png", width: 1200, height: 630 }],
    },
  };
}

export default async function CoIntelligentOrgPage({
  searchParams,
}: {
  searchParams: Promise<{ lap?: string }>;
}) {
  const params = await searchParams;
  const focusLap = params.lap ? parseInt(params.lap, 10) : null;

  const now = new Date();
  const all = getAllChapters();
  const published = getPublishedChapters(now);
  const currentLap = published.length;

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "var(--legal-gray)",
          color: "#fff",
          padding: "6rem 1.5rem 4rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              marginBottom: "1.5rem",
            }}
          >
            Serialised Book · Monday 9am ACST · Suhit Anantula
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "#fff",
              maxWidth: "680px",
              marginBottom: "1rem",
            }}
          >
            The Co-Intelligent
            <br />
            Organisation
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.75,
              maxWidth: "520px",
              marginBottom: "2.5rem",
            }}
          >
            One lap every Monday. 21 laps. The field guide for founders and
            leadership teams who want to build organisations that genuinely
            think with AI — not just use it.
          </p>

          {/* Email subscribe */}
          <div style={{ maxWidth: "480px" }}>
            <p
              style={{
                fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "0.75rem",
              }}
            >
              Get each lap in your inbox
            </p>
            <SubscribeForm />
          </div>
        </div>
      </section>

      {/* F1 Progress bar + countdown */}
      <LapCountdown currentLap={currentLap} totalLaps={21} />

      {/* Chapter list */}
      <section style={{ padding: "4rem 1.5rem 6rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {all.map((chapter) => {
              const isPublished =
                new Date(chapter.publishDate).getTime() <= now.getTime();
              const isFocus = chapter.lapNumber === focusLap;

              return (
                <div
                  key={chapter.lapNumber}
                  id={`lap-${chapter.lapNumber}`}
                  style={{
                    borderBottom: "1px solid var(--border)",
                    padding: "2rem 0",
                    scrollMarginTop: "80px",
                    ...(isFocus
                      ? {
                          background: "var(--helix-blue-light)",
                          margin: "0 -1rem",
                          padding: "2rem 1rem",
                        }
                      : {}),
                  }}
                >
                  {/* Lap header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      marginBottom: isPublished ? "1rem" : "0",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "1rem",
                        flex: 1,
                        minWidth: 0,
                      }}
                    >
                      {/* Lap number */}
                      <span
                        style={{
                          fontFamily:
                            "var(--font-mono), IBM Plex Mono, monospace",
                          fontSize: "0.8rem",
                          color: isPublished
                            ? "var(--helix-blue)"
                            : "var(--text-light)",
                          minWidth: "40px",
                          paddingTop: "3px",
                          flexShrink: 0,
                        }}
                      >
                        {String(chapter.lapNumber).padStart(2, "0")}
                      </span>

                      <div>
                        {/* LLV chip + title */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.6rem",
                            flexWrap: "wrap",
                            marginBottom: "0.4rem",
                          }}
                        >
                          <LlvChip mode={chapter.llvMode} />
                          {!isPublished && (
                            <span
                              style={{
                                fontFamily:
                                  "var(--font-mono), IBM Plex Mono, monospace",
                                fontSize: "0.65rem",
                                color: "var(--text-light)",
                                letterSpacing: "0.04em",
                              }}
                            >
                              {formatShortDate(chapter.publishDate)}
                            </span>
                          )}
                        </div>

                        <h2
                          style={{
                            fontSize: isPublished ? "1.15rem" : "1rem",
                            fontWeight: isPublished ? 500 : 400,
                            color: isPublished
                              ? "var(--legal-gray)"
                              : "var(--text-muted)",
                            lineHeight: 1.3,
                            marginBottom: "0.5rem",
                          }}
                        >
                          {chapter.title}
                        </h2>

                        <p
                          style={{
                            color: "var(--text-muted)",
                            fontSize: "0.875rem",
                            lineHeight: 1.65,
                          }}
                        >
                          {chapter.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Action: read link or locked badge */}
                    <div
                      style={{ flexShrink: 0, paddingTop: "3px" }}
                    >
                      {isPublished ? (
                        <a
                          href={`#lap-${chapter.lapNumber}-content`}
                          style={{
                            display: "inline-block",
                            background: "var(--helix-blue)",
                            color: "#fff",
                            textDecoration: "none",
                            padding: "0.4rem 1rem",
                            fontSize: "0.8rem",
                            fontWeight: 500,
                            borderRadius: "2px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Read →
                        </a>
                      ) : (
                        <span
                          style={{
                            display: "inline-block",
                            border: "1px solid var(--border)",
                            color: "var(--text-light)",
                            padding: "0.4rem 0.8rem",
                            fontSize: "0.75rem",
                            fontFamily:
                              "var(--font-mono), IBM Plex Mono, monospace",
                            borderRadius: "2px",
                            letterSpacing: "0.04em",
                          }}
                        >
                          🔒 Locked
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Full chapter content (published only) */}
                  {isPublished && (
                    <div
                      id={`lap-${chapter.lapNumber}-content`}
                      style={{
                        marginTop: "2rem",
                        paddingTop: "2rem",
                        borderTop: "1px solid var(--border)",
                        scrollMarginTop: "80px",
                      }}
                    >
                      <div
                        className="prose"
                        style={{
                          color: "var(--text)",
                          lineHeight: 1.8,
                          fontSize: "1rem",
                        }}
                      >
                        <ReactMarkdown>{chapter.content}</ReactMarkdown>
                      </div>

                      <div
                        style={{
                          marginTop: "2rem",
                          paddingTop: "1.5rem",
                          borderTop: "1px solid var(--border)",
                          display: "flex",
                          gap: "1rem",
                          alignItems: "center",
                          flexWrap: "wrap",
                        }}
                      >
                        <ShareButton
                          lapNumber={chapter.lapNumber}
                          title={chapter.title}
                        />
                        <p
                          style={{
                            color: "var(--text-muted)",
                            fontSize: "0.825rem",
                          }}
                        >
                          New lap every Monday 9am ACST
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Email capture at the bottom of the list */}
          <div
            style={{
              marginTop: "4rem",
              padding: "3rem",
              background: "var(--doc-white)",
              border: "1px solid var(--border)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--helix-blue)",
                marginBottom: "1rem",
              }}
            >
              Don&apos;t miss a lap
            </p>
            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: 300,
                color: "var(--legal-gray)",
                marginBottom: "0.75rem",
              }}
            >
              Every Monday. Your inbox.
            </h3>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                marginBottom: "1.5rem",
              }}
            >
              New lap drops every Monday 9am ACST.
              No spam. Unsubscribe anytime.
            </p>
            <div style={{ maxWidth: "420px", margin: "0 auto" }}>
              <SubscribeForm />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .prose h2 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--legal-gray);
          margin: 2rem 0 0.75rem;
        }
        .prose h3 {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--legal-gray);
          margin: 1.5rem 0 0.5rem;
        }
        .prose p {
          margin-bottom: 1.25rem;
          color: var(--text-muted);
        }
        .prose strong {
          color: var(--legal-gray);
          font-weight: 600;
        }
        .prose em {
          font-style: italic;
        }
        .prose hr {
          border: none;
          border-top: 1px solid var(--border);
          margin: 2rem 0;
        }
        .prose ul, .prose ol {
          margin: 1rem 0 1.25rem 1.5rem;
          color: var(--text-muted);
        }
        .prose li {
          margin-bottom: 0.4rem;
        }
        .prose blockquote {
          border-left: 3px solid var(--helix-blue);
          padding-left: 1rem;
          margin: 1.5rem 0;
          color: var(--text-muted);
          font-style: italic;
        }
      `}</style>
    </>
  );
}
