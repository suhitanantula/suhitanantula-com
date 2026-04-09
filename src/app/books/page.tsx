import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Three books by Suhit Anantula. One through-line: how organisations and the people in them can think at a new level by working with AI as a genuine partner.",
};

export default function BooksPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "var(--doc-white)",
          padding: "8rem 1.5rem 6rem",
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
              marginBottom: "1.5rem",
            }}
          >
            Books
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "var(--legal-gray)",
              maxWidth: "600px",
              marginBottom: "1.5rem",
            }}
          >
            The thinking behind
            <br />
            the practice.
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-muted)",
              lineHeight: 1.75,
              maxWidth: "540px",
            }}
          >
            Three books. One through-line: how organisations and the people in
            them can think at a new level by working with AI as a genuine
            partner.
          </p>
        </div>
      </section>

      {/* Featured book — The Co-Intelligent Organisation */}
      <section
        style={{
          background: "var(--helix-blue)",
          color: "#fff",
          padding: "6rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              alignItems: "center",
            }}
            className="two-col"
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "1.5rem",
                }}
              >
                Featured · F1-Inspired · 21 Laps
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 300,
                  lineHeight: 1.2,
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                The Co-Intelligent
                <br />
                Organisation
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.75,
                  marginBottom: "1rem",
                }}
              >
                The field guide to building an organisation where humans and AI
                genuinely think together.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: "0.4rem",
                }}
              >
                Season 1 launching Monday 21 April 2026 — chapter by chapter.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.45)",
                  marginBottom: "2.5rem",
                }}
              >
                By Suhit Anantula
              </p>
              <Link
                href="/co-intelligent-org"
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
                Read the book →
              </Link>
              <p
                style={{
                  marginTop: "1rem",
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.8rem",
                }}
              >
                F1-inspired. 21 laps. The book that makes
                &lsquo;co-intelligent&rsquo; language real.
              </p>
            </div>

            {/* Book cover visual */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: "260px",
                  height: "360px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "2.5rem 2rem",
                }}
              >
                <div>
                  <div
                    style={{
                      width: "36px",
                      height: "2px",
                      background: "rgba(255,255,255,0.5)",
                      marginBottom: "1.5rem",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 300,
                      lineHeight: 1.3,
                      color: "#fff",
                    }}
                  >
                    The Co-Intelligent Organisation
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily:
                        "var(--font-mono), IBM Plex Mono, monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.08em",
                      color: "rgba(255,255,255,0.45)",
                      textTransform: "uppercase",
                    }}
                  >
                    Suhit Anantula · Helix Lab
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary books */}
      <section style={{ padding: "6rem 1.5rem", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-light)",
              marginBottom: "2.5rem",
            }}
          >
            Also published
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            }}
            className="two-col"
          >
            {/* The Policy Playbook */}
            <div
              style={{
                border: "1px solid var(--border)",
                padding: "2.5rem",
                background: "var(--doc-white)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "2rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text-light)",
                    marginBottom: "1rem",
                  }}
                >
                  Published January 2026 · Co-authored
                </p>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    color: "var(--legal-gray)",
                    marginBottom: "0.75rem",
                  }}
                >
                  The Policy Playbook
                </h3>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  The co-intelligent framework applied to government, policy,
                  and public sector decision-making.
                </p>
              </div>
              <a
                href="https://www.thepolicyplaybook.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "var(--helix-blue)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                Visit thepolicyplaybook.org ↗
              </a>
            </div>

            {/* The Helix Moment */}
            <div
              style={{
                border: "1px solid var(--border)",
                padding: "2.5rem",
                background: "var(--doc-white)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "2rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text-light)",
                    marginBottom: "1rem",
                  }}
                >
                  Published October 2025
                </p>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    color: "var(--legal-gray)",
                    marginBottom: "0.75rem",
                  }}
                >
                  The Helix Moment
                </h3>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  The foundational philosophy. Where the thinking started —
                  and what the moment of transformation actually feels like.
                </p>
              </div>
              <a
                href="https://www.thehelixmoment.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "var(--helix-blue)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                Visit thehelixmoment.com ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reading order */}
      <section
        style={{
          padding: "4rem 1.5rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-light)",
                paddingTop: "2px",
                whiteSpace: "nowrap",
              }}
            >
              Reading order
            </p>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                maxWidth: "680px",
              }}
            >
              If you are reading all three:{" "}
              <strong style={{ color: "var(--legal-gray)" }}>
                The Helix Moment
              </strong>{" "}
              establishes the philosophy →{" "}
              <strong style={{ color: "var(--legal-gray)" }}>
                The Policy Playbook
              </strong>{" "}
              applies it to government →{" "}
              <strong style={{ color: "var(--legal-gray)" }}>
                The Co-Intelligent Organisation
              </strong>{" "}
              is the complete system.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </>
  );
}
