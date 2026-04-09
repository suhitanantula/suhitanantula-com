import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suhit Anantula — Co-Intelligent Founder",
  description:
    "I help organisations become co-intelligent. Helix Lab — the practice that makes humans and AI think better together.",
};

const stages = [
  {
    name: "Explore",
    label: "01",
    description:
      "Surface where your organisation actually is on the co-intelligent journey. No hype, no theatre — an honest read of the landscape.",
  },
  {
    name: "Evaluate",
    label: "02",
    description:
      "Understand where co-intelligence creates real leverage. Build the strategic case on evidence, not aspiration.",
  },
  {
    name: "Execute",
    label: "03",
    description:
      "Build capability through rapid learning loops. Embed co-intelligent practice into how your organisation actually works.",
  },
  {
    name: "Elevate",
    label: "04",
    description:
      "Reach the organisational learning advantage. Operate from a higher floor — permanently.",
  },
];

const products = [
  {
    name: "AI Opportunity Scan",
    href: "/products#ai-opportunity-scan",
    stage: "Explore",
    description:
      "A structured 90-day diagnostic of where AI creates genuine leverage in your organisation — and where it doesn't.",
  },
  {
    name: "Sensemaking Studio",
    href: "/products#sensemaking-studio",
    stage: "Evaluate",
    description:
      "Deep facilitation for leadership teams making high-stakes decisions in complex, fast-changing environments.",
  },
  {
    name: "Helix Navigator",
    href: "/products#helix-navigator",
    stage: "Execute",
    description:
      "Embedded practice design. We build the co-intelligent operating rhythm your organisation will actually sustain.",
  },
  {
    name: "Ethnobot",
    href: "https://ethnobot.ai",
    stage: "Elevate",
    external: true,
    description:
      "AI-powered ethnographic research. Human insight at machine scale — the diagnostic backbone of co-intelligent fieldwork.",
  },
];

const clients = [
  "City of Mitcham",
  "Dept for Education",
  "RAA",
  "PAE",
  "EDA",
];

export default function Home() {
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
          <div style={{ maxWidth: "700px" }}>
            <p
              style={{
                fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                color: "var(--helix-blue)",
                marginBottom: "2rem",
                textTransform: "uppercase",
              }}
            >
              Helix Lab · Co-Intelligent Practice
            </p>

            <h1
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                marginBottom: "2rem",
                color: "var(--legal-gray)",
              }}
            >
              I help organisations
              <br />
              <span
                style={{
                  color: "var(--helix-blue)",
                  fontWeight: 400,
                }}
              >
                become co-intelligent.
              </span>
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--text-muted)",
                lineHeight: 1.75,
                marginBottom: "3rem",
                maxWidth: "580px",
              }}
            >
              The organisations that will lead the next decade aren&apos;t the
              ones with the most AI tools — they&apos;re the ones that have
              built the capability to think with them. That&apos;s
              co-intelligence.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
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
                Work With Me
              </Link>
              <Link
                href="/journey"
                style={{
                  display: "inline-block",
                  border: "1px solid var(--border)",
                  color: "var(--legal-gray)",
                  textDecoration: "none",
                  padding: "0.9rem 2rem",
                  fontSize: "0.9rem",
                  fontWeight: 400,
                  borderRadius: "2px",
                }}
              >
                The Journey →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is co-intelligence */}
      <section style={{ padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr",
              gap: "5rem",
              alignItems: "start",
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
                The Shift
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: 300,
                  marginBottom: "1.5rem",
                  lineHeight: 1.2,
                  color: "var(--legal-gray)",
                }}
              >
                Not AI strategy.
                <br />
                Co-intelligent practice.
              </h2>
              <p
                style={{
                  color: "var(--text-muted)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.8,
                }}
              >
                Most organisations are trying to add AI to how they already
                work. Co-intelligence is a different proposition: building the
                capability to think with AI in a way that transforms what&apos;s
                possible — not just what&apos;s faster.
              </p>
              <p
                style={{ color: "var(--text-muted)", lineHeight: 1.8 }}
              >
                Helix Lab is the practice that makes this real. We work with
                founders and leadership teams to embed co-intelligent ways of
                working — so the capability compounds over time.
              </p>
              <div style={{ marginTop: "2rem" }}>
                <Link
                  href="/about"
                  style={{
                    color: "var(--helix-blue)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  About Suhit Anantula →
                </Link>
              </div>
            </div>

            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "1.5rem",
                }}
              >
                The Four Stages
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {stages.map((stage, i) => (
                  <div
                    key={stage.name}
                    style={{
                      display: "flex",
                      gap: "1.5rem",
                      padding: "1.5rem 0",
                      borderBottom:
                        i < stages.length - 1
                          ? "1px solid var(--border)"
                          : "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                        color: "var(--helix-blue)",
                        fontSize: "0.75rem",
                        minWidth: "24px",
                        paddingTop: "4px",
                      }}
                    >
                      {stage.label}
                    </span>
                    <div>
                      <p
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 500,
                          marginBottom: "0.4rem",
                          color: "var(--legal-gray)",
                        }}
                      >
                        {stage.name}
                      </p>
                      <p
                        style={{
                          color: "var(--text-muted)",
                          fontSize: "0.875rem",
                          lineHeight: 1.65,
                        }}
                      >
                        {stage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <Link
                  href="/journey"
                  style={{
                    color: "var(--helix-blue)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  Explore the full journey →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .two-col {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
          }
        `}</style>
      </section>

      {/* Products */}
      <section
        style={{
          padding: "6rem 1.5rem",
          background: "var(--doc-white)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "3rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--helix-blue)",
                  marginBottom: "0.75rem",
                }}
              >
                Products &amp; Services
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 300,
                  color: "var(--legal-gray)",
                }}
              >
                The tools of co-intelligence
              </h2>
            </div>
            <Link
              href="/products"
              style={{
                color: "var(--helix-blue)",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
              }}
            >
              All products →
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                target={product.external ? "_blank" : undefined}
                rel={product.external ? "noopener noreferrer" : undefined}
                style={{
                  display: "block",
                  border: "1px solid var(--border)",
                  padding: "2rem",
                  textDecoration: "none",
                  background: "#fff",
                  transition: "box-shadow 0.2s",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--helix-blue)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {product.stage}
                </p>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 500,
                    marginBottom: "0.75rem",
                    color: "var(--legal-gray)",
                  }}
                >
                  {product.name}
                  {product.external && (
                    <span
                      style={{ color: "var(--text-muted)", marginLeft: "0.3rem" }}
                    >
                      ↗
                    </span>
                  )}
                </h3>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                  }}
                >
                  {product.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section
        style={{
          padding: "4rem 1.5rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--text-light)",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Organisations we&apos;ve worked with
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            {clients.map((client) => (
              <span
                key={client}
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                }}
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section
        style={{
          padding: "6rem 1.5rem",
          background: "var(--helix-blue)",
          color: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "3rem",
            alignItems: "center",
          }}
          className="book-cta"
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                marginBottom: "1rem",
              }}
            >
              New · April 2026
            </p>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 300,
                marginBottom: "1rem",
                color: "#fff",
              }}
            >
              The Co-Intelligent Organisation
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.75,
                maxWidth: "500px",
              }}
            >
              The field guide to building an organisation that thinks at a new
              level — with humans and AI working as genuine partners.
            </p>
          </div>
          <div>
            <Link
              href="/book"
              style={{
                display: "inline-block",
                background: "#fff",
                color: "var(--helix-blue)",
                textDecoration: "none",
                padding: "0.9rem 2rem",
                fontSize: "0.9rem",
                fontWeight: 600,
                whiteSpace: "nowrap",
                borderRadius: "2px",
              }}
            >
              Read the Book →
            </Link>
          </div>
        </div>

        <style>{`
          @media (max-width: 600px) {
            .book-cta {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Final CTA */}
      <section
        style={{
          padding: "8rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
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
            Ready to Begin
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 300,
              marginBottom: "1.5rem",
              lineHeight: 1.2,
              color: "var(--legal-gray)",
            }}
          >
            Co-intelligence is a practice,
            <br />
            not a purchase.
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              marginBottom: "2.5rem",
              lineHeight: 1.8,
            }}
          >
            It starts with a conversation. Tell me where your organisation
            is, and we&apos;ll work out what becoming co-intelligent would
            actually mean for you.
          </p>
          <Link
            href="/contact"
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
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
