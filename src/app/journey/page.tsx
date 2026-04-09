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
    whatItIs:
      "Most organisations overestimate their AI readiness and underestimate the organisational change required. The Explore stage is about getting an honest read — no hype, no theatre.",
    whatChanges:
      "You move from assumption to evidence. Leaders develop shared language for co-intelligence. The organisation surfaces what is actually happening with AI — not the story people tell, but the reality on the ground.",
    whatTheJourneyLooksLike:
      "A structured engagement that maps current AI use across the organisation, identifies the highest-leverage opportunities, and creates alignment at the leadership level before any further investment is made.",
    productsHref: "/products#explore",
    productsLabel: "See Explore products →",
  },
  {
    number: "02",
    name: "Evaluate",
    tagline: "Build the strategic case on evidence.",
    whatItIs:
      "Once you know where you are, you need to understand which moves will create the most leverage. The Evaluate stage is rigorous sense-making: not generating more options, but making better decisions.",
    whatChanges:
      "Strategy shifts from instinct to evidence. The organisation develops a clear picture of what co-intelligent transformation would actually require — and what it is worth. Decision-makers stop asking 'should we?' and start asking 'how?'",
    whatTheJourneyLooksLike:
      "A facilitated deep-dive that synthesises your context, stress-tests your assumptions, and produces a concrete view of where co-intelligence creates genuine, defensible value for your organisation.",
    productsHref: "/products#evaluate",
    productsLabel: "See Evaluate products →",
  },
  {
    number: "03",
    name: "Execute",
    tagline: "Build capability through rapid learning loops.",
    whatItIs:
      "This is where co-intelligence becomes real. The Execute stage is about building the practices, rhythms, and capability that embed co-intelligent working into how your organisation actually functions — not a training programme, a sustained capability build.",
    whatChanges:
      "Teams stop using AI as a faster search engine and start thinking with it. Co-intelligent practices become rhythms, not events. The organisation's ability to learn compounds over time rather than stalling after an initial push.",
    whatTheJourneyLooksLike:
      "Prototypes that surface real learning fast. Pilots that test co-intelligent working in live contexts. Embedded support that builds capability in the people doing the work — not just the people sponsoring it.",
    productsHref: "/products#execute",
    productsLabel: "See Execute products →",
  },
  {
    number: "04",
    name: "Elevate",
    tagline: "Operate from a permanently higher floor.",
    whatItIs:
      "The Elevate stage is what co-intelligence ultimately enables: an organisation that genuinely thinks at a new level. Not because of any single tool or initiative, but because co-intelligent thinking has become the natural operating mode.",
    whatChanges:
      "The learning advantage begins to compound. The gap between your organisation and others — in speed, in insight, in decision quality — grows in your favour. Co-intelligence stops being a project and becomes the way work gets done.",
    whatTheJourneyLooksLike:
      "Ongoing strategic support at the executive level. Labs that continue generating learning. Measurement systems that track co-intelligent capability over time and make the improvement visible to the whole organisation.",
    productsHref: "/products#elevate",
    productsLabel: "See Elevate products →",
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
            The journey towards a
            <br />
            co-intelligent organisation.
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
                    fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
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
                    marginBottom: "2.5rem",
                    lineHeight: 1.4,
                  }}
                >
                  {stage.tagline}
                </p>
                <Link
                  href={stage.productsHref}
                  style={{
                    display: "inline-block",
                    color: "var(--helix-blue)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    borderBottom: "1px solid var(--helix-blue)",
                    paddingBottom: "2px",
                  }}
                >
                  {stage.productsLabel}
                </Link>
              </div>

              <div>
                <div style={{ marginBottom: "2rem" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-light)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    What it is
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.8,
                    }}
                  >
                    {stage.whatItIs}
                  </p>
                </div>

                <div style={{ marginBottom: "2rem" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-light)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    What changes
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.8,
                    }}
                  >
                    {stage.whatChanges}
                  </p>
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-light)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    What the journey looks like
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.8,
                    }}
                  >
                    {stage.whatTheJourneyLooksLike}
                  </p>
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
