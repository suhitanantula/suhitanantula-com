import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Suhit Anantula is a co-intelligent founder and the founder of Helix Lab. He works with organisations to build genuine co-intelligent capability.",
};

export default function AboutPage() {
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
            About
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "var(--legal-gray)",
              maxWidth: "640px",
            }}
          >
            I help organisations
            <br />
            become co-intelligent.
          </h1>
        </div>
      </section>

      {/* Bio */}
      <section style={{ padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "5rem",
            }}
            className="two-col"
          >
            <div>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  color: "var(--text-muted)",
                  marginBottom: "1.5rem",
                }}
              >
                I&apos;m Suhit Anantula — a founder, practitioner, and the
                creator of Helix Lab. I&apos;ve spent the last several years
                working with organisations to build genuine co-intelligent
                capability: the kind that compounds over time, not the kind
                that gets abandoned after the first AI project.
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  color: "var(--text-muted)",
                  marginBottom: "1.5rem",
                }}
              >
                My work sits at the intersection of strategy, design, and
                organisational practice. I&apos;ve worked across government,
                education, transport, and civic organisations — developing the
                frameworks and tools that make co-intelligence practical, not
                just theoretical.
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  color: "var(--text-muted)",
                  marginBottom: "1.5rem",
                }}
              >
                The frameworks I work with — GAIN, AAA, 4A, 9Q Grid, LLV —
                emerged from real fieldwork, not academic abstraction. They
                exist because organisations kept needing better tools for
                thinking clearly about AI, not just using it.
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  color: "var(--text-muted)",
                }}
              >
                Based in Adelaide, Australia. Working with organisations
                across Australia and internationally.
              </p>
            </div>

            <div>
              <div
                style={{
                  border: "1px solid var(--border)",
                  padding: "2rem",
                  background: "var(--doc-white)",
                  marginBottom: "1.5rem",
                }}
              >
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
                  The Practice
                </p>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "var(--legal-gray)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Helix Lab
                </p>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    marginBottom: "1.5rem",
                  }}
                >
                  The practice that makes co-intelligence real for
                  organisations ready to think at a new level.
                </p>
                <Link
                  href="/journey"
                  style={{
                    color: "var(--helix-blue)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  The Journey →
                </Link>
              </div>

              <div
                style={{
                  border: "1px solid var(--border)",
                  padding: "2rem",
                  background: "var(--doc-white)",
                }}
              >
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
                  Frameworks
                </p>
                {["GAIN", "AAA", "4A", "9Q Grid", "LLV"].map((fw) => (
                  <p
                    key={fw}
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-muted)",
                      padding: "0.4rem 0",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    {fw}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .two-col { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "6rem 1.5rem",
          background: "var(--doc-white)",
          borderTop: "1px solid var(--border)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 300,
              marginBottom: "1.5rem",
              color: "var(--legal-gray)",
            }}
          >
            Want to work together?
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              marginBottom: "2rem",
              lineHeight: 1.8,
            }}
          >
            I work with a small number of founders and organisations at a
            time. The best starting point is a conversation.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              background: "var(--helix-blue)",
              color: "#fff",
              textDecoration: "none",
              padding: "0.9rem 2rem",
              fontSize: "0.9rem",
              fontWeight: 500,
              borderRadius: "2px",
            }}
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
