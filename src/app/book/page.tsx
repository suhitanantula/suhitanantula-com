import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Co-Intelligent Organisation — Book",
  description:
    "The field guide to building an organisation that thinks at a new level, with humans and AI as genuine partners. By Suhit Anantula.",
};

const chapters = [
  {
    number: "01",
    title: "What Co-Intelligence Actually Means",
    description:
      "Beyond the hype. A precise account of what it means for an organisation to think with AI — and why most don't, yet.",
  },
  {
    number: "02",
    title: "The Four Stages of the Journey",
    description:
      "Explore, Evaluate, Execute, Elevate. The developmental path every organisation must move through — and what gets stuck where.",
  },
  {
    number: "03",
    title: "Building the Co-Intelligent Operating Rhythm",
    description:
      "The practical architecture of daily work that embeds co-intelligence into how your organisation actually functions.",
  },
  {
    number: "04",
    title: "Governance That Enables Confident Action",
    description:
      "Not compliance theatre — the governance that gives your people permission to move fast and think clearly with AI.",
  },
  {
    number: "05",
    title: "The Organisational Learning Advantage",
    description:
      "How co-intelligence compounds. What it means to operate from a permanently higher floor.",
  },
];

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "var(--helix-blue)",
          color: "#fff",
          padding: "8rem 1.5rem 6rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
            className="two-col"
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: "1.5rem",
                }}
              >
                New · April 2026
              </p>
              <h1
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                  fontWeight: 300,
                  lineHeight: 1.15,
                  marginBottom: "1.5rem",
                  color: "#fff",
                }}
              >
                The Co-Intelligent
                <br />
                Organisation
              </h1>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                }}
              >
                A field guide for founders and leadership teams who want to
                build organisations that genuinely think with AI — not just
                use it.
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: "2.5rem",
                }}
              >
                By Suhit Anantula
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a
                  href="https://github.com/suhitanantula/cointelligent-org-book"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    background: "#fff",
                    color: "var(--helix-blue)",
                    textDecoration: "none",
                    padding: "0.9rem 2rem",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    borderRadius: "2px",
                  }}
                >
                  Read the Book ↗
                </a>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-block",
                    border: "1px solid rgba(255,255,255,0.3)",
                    color: "#fff",
                    textDecoration: "none",
                    padding: "0.9rem 2rem",
                    fontSize: "0.9rem",
                    fontWeight: 400,
                    borderRadius: "2px",
                  }}
                >
                  Work With Me
                </Link>
              </div>
            </div>

            {/* Book cover placeholder */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: "280px",
                  height: "380px",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "2.5rem 2rem",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div>
                  <div
                    style={{
                      width: "40px",
                      height: "2px",
                      background: "rgba(255,255,255,0.6)",
                      marginBottom: "1.5rem",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 300,
                      lineHeight: 1.3,
                      color: "#fff",
                      marginBottom: "0.5rem",
                    }}
                  >
                    The Co-Intelligent Organisation
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                      fontSize: "0.7rem",
                      letterSpacing: "0.08em",
                      color: "rgba(255,255,255,0.5)",
                      textTransform: "uppercase",
                    }}
                  >
                    Suhit Anantula
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.06em",
                      color: "rgba(255,255,255,0.35)",
                      textTransform: "uppercase",
                      marginTop: "0.25rem",
                    }}
                  >
                    Helix Lab
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .two-col { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* About the book */}
      <section style={{ padding: "6rem 1.5rem", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "5rem",
            }}
            className="two-col"
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--helix-blue)",
                  marginBottom: "1.5rem",
                }}
              >
                About the Book
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                  fontWeight: 300,
                  lineHeight: 1.3,
                  color: "var(--legal-gray)",
                }}
              >
                The field guide to thinking at a new level
              </h2>
            </div>
            <div>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                }}
              >
                Most books about AI in business are either too abstract to act
                on, or too tactical to last. This book is different. It&apos;s
                built from real fieldwork — the patterns that emerge when you
                spend years helping organisations move from AI experimentation
                to genuine co-intelligent capability.
              </p>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                }}
              >
                The Co-Intelligent Organisation doesn&apos;t promise
                shortcuts. It maps the terrain honestly: where organisations
                get stuck, what it actually takes to move through each stage,
                and what operating from a genuine learning advantage looks
                like in practice.
              </p>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                }}
              >
                This is the book Suhit wishes had existed when he started
                doing this work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section
        style={{
          padding: "6rem 1.5rem",
          background: "var(--doc-white)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--helix-blue)",
              marginBottom: "2.5rem",
            }}
          >
            Contents
          </p>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {chapters.map((chapter, i) => (
              <div
                key={chapter.number}
                style={{
                  display: "flex",
                  gap: "2rem",
                  padding: "2rem 0",
                  borderBottom:
                    i < chapters.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                  alignItems: "start",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                    color: "var(--helix-blue)",
                    fontSize: "0.8rem",
                    minWidth: "30px",
                    paddingTop: "4px",
                  }}
                >
                  {chapter.number}
                </span>
                <div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      marginBottom: "0.5rem",
                      color: "var(--legal-gray)",
                    }}
                  >
                    {chapter.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                    }}
                  >
                    {chapter.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ padding: "6rem 1.5rem", textAlign: "center" }}
      >
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 300,
              marginBottom: "1.5rem",
              color: "var(--legal-gray)",
            }}
          >
            Ready to read it?
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              marginBottom: "2.5rem",
              lineHeight: 1.8,
            }}
          >
            The book is available now. It&apos;s the best starting point for
            understanding what becoming co-intelligent really means.
          </p>
          <a
            href="https://github.com/suhitanantula/cointelligent-org-book"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "var(--helix-blue)",
              color: "#fff",
              textDecoration: "none",
              padding: "1rem 2.5rem",
              fontSize: "0.9rem",
              fontWeight: 500,
              borderRadius: "2px",
            }}
          >
            Read the Book ↗
          </a>
          <p
            style={{
              marginTop: "1.5rem",
              color: "var(--text-light)",
              fontSize: "0.85rem",
            }}
          >
            Or if you&apos;d rather start with a conversation —{" "}
            <Link
              href="/contact"
              style={{ color: "var(--helix-blue)", fontWeight: 500 }}
            >
              work with me directly
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
