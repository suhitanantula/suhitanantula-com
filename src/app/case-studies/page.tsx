import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "How organisations like City of Mitcham, DfE, RAA, PAE, and EDA have built co-intelligent capability with Helix Lab.",
};

const caseStudies = [
  {
    client: "City of Mitcham",
    sector: "Local Government",
    stage: "Explore + Evaluate",
    summary:
      "Understanding where AI creates genuine leverage in a local government context — without the hype. We helped Mitcham's leadership team see their actual starting point and build shared language for the co-intelligent journey.",
    outcomes: [
      "Leadership alignment on co-intelligent opportunities",
      "Prioritised capability roadmap for 12 months",
      "Clear governance principles for confident AI action",
    ],
  },
  {
    client: "Department for Education",
    sector: "State Government",
    stage: "Evaluate + Execute",
    summary:
      "A large, complex organisation navigating AI adoption at scale. We worked with DfE to move beyond experimentation and into sustained capability build — with governance that enabled confident action rather than compliance theatre.",
    outcomes: [
      "Co-intelligent operating rhythm embedded in key teams",
      "Governance framework that enables rather than constrains",
      "Measurable improvement in decision quality across priority areas",
    ],
  },
  {
    client: "RAA",
    sector: "Member Services",
    stage: "Explore",
    summary:
      "An organisation with strong operational culture, beginning its co-intelligent journey. We helped RAA understand where AI creates real value for their members — and where human judgement remains irreplaceable.",
    outcomes: [
      "Honest assessment of current AI capability and use",
      "Member-centric opportunity map",
      "Foundation for the Evaluate stage",
    ],
  },
  {
    client: "PAE",
    sector: "Local Government",
    stage: "Explore + Execute",
    summary:
      "PAE came to us with a specific challenge: how to use AI to improve community engagement without losing the human quality that makes engagement meaningful. We designed a co-intelligent approach that amplified their capacity rather than replacing it.",
    outcomes: [
      "Co-intelligent community research capability",
      "Ethnobot deployment for qualitative synthesis",
      "Sustained practice embedded in the engagement team",
    ],
  },
  {
    client: "EDA",
    sector: "Economic Development",
    stage: "Evaluate + Execute",
    summary:
      "Strategic intelligence at a new level. EDA needed to understand and respond to fast-changing economic conditions. We built the co-intelligent sensemaking capability that lets their team see further and act faster — with confidence, not just speed.",
    outcomes: [
      "Strategic sensemaking rhythm embedded in leadership team",
      "Co-intelligent analysis capability across key workstreams",
      "Faster, higher-quality strategic decision-making",
    ],
  },
];

export default function CaseStudiesPage() {
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
            Case Studies
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
            Co-intelligence
            <br />
            in practice
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-muted)",
              lineHeight: 1.75,
              maxWidth: "560px",
            }}
          >
            Real organisations, real journeys. How government, civic, and
            service organisations in South Australia have built co-intelligent
            capability.
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section style={{ padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {caseStudies.map((cs, i) => (
              <div
                key={cs.client}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gap: "4rem",
                  padding: "3rem",
                  border: "1px solid var(--border)",
                  background: i % 2 === 0 ? "#fff" : "var(--doc-white)",
                }}
                className="two-col"
              >
                <div>
                  <p
                    style={{
                      fontFamily:
                        "var(--font-mono), IBM Plex Mono, monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-light)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {cs.sector}
                  </p>
                  <h2
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 500,
                      color: "var(--legal-gray)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {cs.client}
                  </h2>
                  <span
                    style={{
                      display: "inline-block",
                      background: "var(--helix-blue-light)",
                      color: "var(--helix-blue)",
                      fontSize: "0.75rem",
                      fontFamily:
                        "var(--font-mono), IBM Plex Mono, monospace",
                      letterSpacing: "0.06em",
                      padding: "0.3rem 0.75rem",
                      border: "1px solid #c5d0ff",
                    }}
                  >
                    {cs.stage}
                  </span>
                </div>

                <div>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.8,
                      marginBottom: "2rem",
                    }}
                  >
                    {cs.summary}
                  </p>

                  <p
                    style={{
                      fontFamily:
                        "var(--font-mono), IBM Plex Mono, monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-light)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Outcomes
                  </p>
                  {cs.outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      style={{
                        display: "flex",
                        gap: "0.75rem",
                        marginBottom: "0.5rem",
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
                          fontSize: "0.875rem",
                          lineHeight: 1.65,
                        }}
                      >
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
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
            Your organisation could be next.
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              marginBottom: "2rem",
              lineHeight: 1.8,
            }}
          >
            Every journey starts with understanding where you actually are.
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
            Start the Conversation
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .two-col { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </>
  );
}
