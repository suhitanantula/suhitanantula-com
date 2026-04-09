import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "The tools of co-intelligence: AI Opportunity Scan, Sensemaking Studio, Helix Navigator, and Ethnobot.",
};

const products = [
  {
    id: "ai-opportunity-scan",
    stage: "Explore",
    stageNum: "01",
    name: "AI Opportunity Scan",
    tagline: "See where AI creates real leverage — honestly.",
    description:
      "A structured 90-day diagnostic that surfaces where AI genuinely creates leverage in your specific organisation. Not a generic readiness checklist — a real investigation of your workflows, your people, and your context. You leave with a prioritised view of where co-intelligent practice would have the most impact, and where it wouldn't.",
    format: "90-day engagement",
    deliverables: [
      "Current-state assessment across key operational areas",
      "Prioritised opportunity map with effort/impact analysis",
      "Co-intelligent capability baseline",
      "Roadmap for the Evaluate and Execute stages",
    ],
    suitable: "Leadership teams beginning the co-intelligent journey",
  },
  {
    id: "sensemaking-studio",
    stage: "Evaluate",
    stageNum: "02",
    name: "Sensemaking Studio",
    tagline: "Think through what matters most — together.",
    description:
      "Deep facilitation for leadership teams making high-stakes decisions in complex, fast-changing environments. The Sensemaking Studio isn't a workshop — it's a structured thinking process that helps your team build genuine shared understanding of where you are, what the options are, and what moving forward would actually require.",
    format: "1–3 day intensive or multi-session engagement",
    deliverables: [
      "Shared strategic clarity across the leadership team",
      "Evidence-based prioritisation framework",
      "Decision rationale documented for future use",
      "Next-stage action plan with clear ownership",
    ],
    suitable: "Leadership teams at a strategic inflection point",
  },
  {
    id: "helix-navigator",
    stage: "Execute",
    stageNum: "03",
    name: "Helix Navigator",
    tagline: "Build the co-intelligent operating rhythm.",
    description:
      "Embedded practice design for organisations ready to make co-intelligence real. The Helix Navigator works with your teams to design and embed the practices, tools, and rhythms that make co-intelligent working the natural way you operate — not a special initiative, but how you work. The capability compounds over time.",
    format: "6–12 month engagement",
    deliverables: [
      "Co-intelligent operating rhythm designed for your context",
      "Team capability build across priority workflows",
      "Governance framework that enables confident action",
      "Measurement and learning system for ongoing improvement",
    ],
    suitable: "Organisations committed to sustained capability transformation",
  },
  {
    id: "ethnobot",
    stage: "Elevate",
    stageNum: "04",
    name: "Ethnobot",
    href: "https://ethnobot.ai",
    external: true,
    tagline: "Human insight at machine scale.",
    description:
      "Ethnobot is an AI-powered ethnographic research tool — the diagnostic backbone of co-intelligent fieldwork. It enables organisations to conduct deep human-centred research at a scale that was previously impossible: combining the insight quality of traditional ethnography with the reach and speed of AI-powered analysis.",
    format: "Standalone product — ethnobot.ai",
    deliverables: [
      "AI-powered interview and observation synthesis",
      "Pattern identification across large qualitative datasets",
      "Human-centred insight at organisational scale",
      "Integration with co-intelligent research practice",
    ],
    suitable: "Organisations doing serious human-centred research",
  },
];

export default function ProductsPage() {
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
            Products &amp; Services
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "var(--legal-gray)",
              maxWidth: "640px",
              marginBottom: "1.5rem",
            }}
          >
            The tools of
            <br />
            co-intelligence
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-muted)",
              lineHeight: 1.75,
              maxWidth: "560px",
            }}
          >
            Each product maps to a stage of the co-intelligent journey.
            Most organisations begin with the AI Opportunity Scan.
          </p>
        </div>
      </section>

      {/* Products */}
      {products.map((product, i) => (
        <section
          key={product.id}
          id={product.id}
          style={{
            padding: "6rem 1.5rem",
            background: i % 2 === 0 ? "#fff" : "var(--doc-white)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.5fr",
                gap: "5rem",
                alignItems: "start",
              }}
              className="two-col"
            >
              <div>
                <p
                  style={{
                    fontFamily:
                      "var(--font-mono), IBM Plex Mono, monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--helix-blue)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Stage {product.stageNum} · {product.stage}
                </p>
                <h2
                  style={{
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                    fontWeight: 300,
                    marginBottom: "1rem",
                    color: "var(--legal-gray)",
                  }}
                >
                  {product.name}
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "var(--helix-blue)",
                    marginBottom: "2rem",
                  }}
                >
                  {product.tagline}
                </p>

                <div
                  style={{
                    padding: "1.25rem",
                    background: "var(--helix-blue-light)",
                    border: "1px solid #c5d0ff",
                    marginBottom: "1.5rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily:
                        "var(--font-mono), IBM Plex Mono, monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-light)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Format
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--legal-gray)",
                      fontWeight: 500,
                    }}
                  >
                    {product.format}
                  </p>
                </div>

                <div
                  style={{
                    padding: "1.25rem",
                    border: "1px solid var(--border)",
                    background: "var(--doc-white)",
                  }}
                >
                  <p
                    style={{
                      fontFamily:
                        "var(--font-mono), IBM Plex Mono, monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-light)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Best for
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {product.suitable}
                  </p>
                </div>

                <div style={{ marginTop: "1.5rem" }}>
                  {product.external ? (
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        background: "var(--helix-blue)",
                        color: "#fff",
                        textDecoration: "none",
                        padding: "0.75rem 1.5rem",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        borderRadius: "2px",
                      }}
                    >
                      Visit Ethnobot ↗
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      style={{
                        display: "inline-block",
                        background: "var(--helix-blue)",
                        color: "#fff",
                        textDecoration: "none",
                        padding: "0.75rem 1.5rem",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        borderRadius: "2px",
                      }}
                    >
                      Enquire →
                    </Link>
                  )}
                </div>
              </div>

              <div>
                <p
                  style={{
                    fontSize: "1.05rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.8,
                    marginBottom: "2.5rem",
                  }}
                >
                  {product.description}
                </p>

                <div>
                  <p
                    style={{
                      fontFamily:
                        "var(--font-mono), IBM Plex Mono, monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-light)",
                      marginBottom: "1rem",
                    }}
                  >
                    What you get
                  </p>
                  {product.deliverables.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        gap: "0.75rem",
                        marginBottom: "0.75rem",
                        alignItems: "start",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--helix-blue)",
                          fontSize: "0.9rem",
                          lineHeight: 1.65,
                          flexShrink: 0,
                        }}
                      >
                        →
                      </span>
                      <p
                        style={{
                          color: "var(--text-muted)",
                          fontSize: "0.9rem",
                          lineHeight: 1.65,
                        }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ padding: "6rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 300,
              marginBottom: "1.5rem",
              color: "var(--legal-gray)",
            }}
          >
            Not sure where to start?
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              marginBottom: "2rem",
              lineHeight: 1.8,
            }}
          >
            Most organisations begin with the AI Opportunity Scan. But
            the best next step depends on where you actually are.
            Let&apos;s figure it out together.
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

      <style>{`
        @media (max-width: 860px) {
          .two-col { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </>
  );
}
