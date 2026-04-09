import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Journey — Explore · Evaluate · Execute · Elevate",
  description:
    "The Helix Lab methodology: four stages for building genuine co-intelligent capability in your organisation.",
};

const stages = [
  {
    number: "01",
    name: "Explore",
    tagline: "Understand where you actually are.",
    description:
      "Most organisations overestimate their AI readiness and underestimate the organisational change required. The Explore stage is about getting an honest read — no hype, no theatre. We surface what's actually happening: how your people are (and aren't) working with AI, where the real blockers are, and what your organisation's genuine starting point is.",
    outcomes: [
      "Honest assessment of current AI use and capability",
      "Identification of highest-leverage co-intelligence opportunities",
      "Shared language across leadership for the journey ahead",
    ],
    product: "AI Opportunity Scan",
    productHref: "/products#ai-opportunity-scan",
  },
  {
    number: "02",
    name: "Evaluate",
    tagline: "Build the strategic case on evidence.",
    description:
      "Once you know where you are, you need to understand which moves will create the most leverage. The Evaluate stage is about rigorous sense-making: understanding your organisation's specific context, the options available, and what a co-intelligent transformation would actually require. We help you make better decisions, not just faster ones.",
    outcomes: [
      "Strategic clarity on where co-intelligence creates genuine value",
      "Evidence-based prioritisation of transformation initiatives",
      "Leadership alignment on the path forward",
    ],
    product: "Sensemaking Studio",
    productHref: "/products#sensemaking-studio",
  },
  {
    number: "03",
    name: "Execute",
    tagline: "Build capability through rapid learning loops.",
    description:
      "This is where co-intelligence becomes real. The Execute stage is about building the practices, rhythms, and capability that embed co-intelligent working into how your organisation actually functions day-to-day. Not a one-off training programme — a sustained capability build that creates lasting change.",
    outcomes: [
      "Co-intelligent operating rhythms embedded in daily work",
      "Teams that can think clearly with AI, not just use AI tools",
      "Organisational capability that compounds over time",
    ],
    product: "Helix Navigator",
    productHref: "/products#helix-navigator",
  },
  {
    number: "04",
    name: "Elevate",
    tagline: "Operate from a permanently higher floor.",
    description:
      "The Elevate stage is what co-intelligence ultimately enables: an organisation that genuinely thinks at a new level. Not because of any single tool or initiative, but because co-intelligent thinking has become the natural way your organisation operates. The learning advantage compounds — and the gap between your organisation and others grows.",
    outcomes: [
      "Organisational learning advantage that grows over time",
      "Leadership and teams that think with AI as a default",
      "The platform for continued co-intelligent evolution",
    ],
    product: "Ethnobot",
    productHref: "https://ethnobot.ai",
    productExternal: true,
  },
];

export default function JourneyPage() {
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
            Helix Lab · Methodology
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "var(--legal-gray)",
              maxWidth: "700px",
              marginBottom: "1.5rem",
            }}
          >
            The journey to
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
            Four stages. A clear developmental path. Every organisation that
            becomes genuinely co-intelligent moves through Explore, Evaluate,
            Execute, and Elevate — in that order.
          </p>
        </div>
      </section>

      {/* Stage nav */}
      <section
        style={{
          borderBottom: "1px solid var(--border)",
          position: "sticky",
          top: "64px",
          background: "#fff",
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            gap: "0",
          }}
        >
          {stages.map((stage) => (
            <a
              key={stage.name}
              href={`#${stage.name.toLowerCase()}`}
              style={{
                padding: "1rem 1.5rem",
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                borderRight: "1px solid var(--border)",
                whiteSpace: "nowrap",
              }}
            >
              {stage.number} {stage.name}
            </a>
          ))}
        </div>
      </section>

      {/* Stages */}
      {stages.map((stage, i) => (
        <section
          key={stage.name}
          id={stage.name.toLowerCase()}
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
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--helix-blue)",
                    marginBottom: "1rem",
                  }}
                >
                  Stage {stage.number}
                </p>
                <h2
                  style={{
                    fontSize: "clamp(2rem, 3.5vw, 3rem)",
                    fontWeight: 300,
                    marginBottom: "1rem",
                    color: "var(--legal-gray)",
                  }}
                >
                  {stage.name}
                </h2>
                <p
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 500,
                    color: "var(--helix-blue)",
                    marginBottom: "2rem",
                    lineHeight: 1.4,
                  }}
                >
                  {stage.tagline}
                </p>
                <div
                  style={{
                    border: "1px solid var(--helix-blue)",
                    borderLeft: "3px solid var(--helix-blue)",
                    padding: "1rem 1.25rem",
                    background: "var(--helix-blue-light)",
                  }}
                >
                  <p
                    style={{
                      fontFamily:
                        "var(--font-mono), IBM Plex Mono, monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--helix-blue)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Primary Product
                  </p>
                  <Link
                    href={stage.productHref}
                    target={stage.productExternal ? "_blank" : undefined}
                    rel={
                      stage.productExternal ? "noopener noreferrer" : undefined
                    }
                    style={{
                      color: "var(--helix-blue)",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                    }}
                  >
                    {stage.product}
                    {stage.productExternal ? " ↗" : " →"}
                  </Link>
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
                  {stage.description}
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
                    Outcomes
                  </p>
                  {stage.outcomes.map((outcome) => (
                    <div
                      key={outcome}
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
                          fontSize: "1rem",
                          lineHeight: 1.5,
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      <p
                        style={{
                          color: "var(--text-muted)",
                          fontSize: "0.9rem",
                          lineHeight: 1.65,
                        }}
                      >
                        {outcome}
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
            Where does your organisation sit on this journey?
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              marginBottom: "2rem",
              lineHeight: 1.8,
            }}
          >
            The first step is an honest assessment. Let&apos;s start there.
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
            Begin the Conversation
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
