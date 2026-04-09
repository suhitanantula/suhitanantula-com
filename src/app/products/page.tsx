import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products — The Co-Intelligent Grand Prix",
  description:
    "Four stages from starting grid to championship. The Map, The License, The Machine, The Race. Ethnobot workforce intelligence runs underneath all of them.",
};

type Product = {
  id: string;
  name: string;
  tag: string;
  description: string;
  cta?: string;
  ctaHref?: string;
  ctaExternal?: boolean;
};

type Section = {
  id: string;
  number: string;
  header: string;
  strapline: string;
  body: string;
  products: Product[];
};

const sections: Section[] = [
  {
    id: "the-map",
    number: "01",
    header: "The Map",
    strapline: "Your starting position determines everything.",
    body: "Before strategy, before roadmaps, before investment — you need an honest read of where your organisation actually is. Not where leadership thinks it is. Where it actually is.",
    products: [
      {
        id: "position-scan",
        name: "Position Scan",
        tag: "Free entry",
        description:
          "A structured conversation that surfaces where AI creates real leverage in your specific organisation. Instant output.",
        cta: "Take the Scan →",
        ctaHref: "/contact",
      },
      {
        id: "capability-navigator",
        name: "Capability Navigator",
        tag: "Explore",
        description:
          "A scored assessment across 7 capability dimensions — Data, Integration, Human-AI Interaction, Governance, Inclusion, Readiness, Business Value. You leave knowing your shape.",
      },
      {
        id: "executive-immersion",
        name: "Executive Immersion",
        tag: "Explore",
        description:
          "A tailored keynote or facilitated session that builds shared language across your leadership team. The case for moving, made for your context.",
      },
      {
        id: "board-briefing",
        name: "Board Briefing",
        tag: "Explore",
        description:
          "75 minutes. Pre-survey. AI risk, opportunity, and governance baseline for your board — no hype, no theatre.",
      },
    ],
  },
  {
    id: "the-license",
    number: "02",
    header: "The License",
    strapline:
      "Earn the right to operate at higher autonomy — safely and confidently.",
    body: "In F1, the Super License is not given. It is earned through demonstrated competence at every level. Organisations are no different. The License stage builds the strategy, evidence base, and governance that let you move fast without creating risk.",
    products: [
      {
        id: "ethnobot-org-study",
        name: "Ethnobot Org Study",
        tag: "Standalone product — Ethnobot",
        description:
          "AI-mediated workforce intelligence at any scale — 50 to 5,000 participants. The honest read of what your people actually think about AI. Powered by Ethnobot.",
        cta: "Visit Ethnobot ↗",
        ctaHref: "https://ethnobot.ai",
        ctaExternal: true,
      },
      {
        id: "sensemaking-studio",
        name: "Sensemaking Studio",
        tag: "Evaluate",
        description:
          "Ethnobot workforce data (50–5,000 participants) combined with a facilitated strategy session. Stop guessing at adoption risk. Start planning from evidence.",
      },
      {
        id: "license-expedition",
        name: "License Expedition",
        tag: "Evaluate — Strategy",
        description:
          "Full co-intelligent strategy, architecture, and governance. 8–12 weeks. Board-ready. The roadmap your organisation can actually defend and deliver.",
      },
      {
        id: "governance-license",
        name: "Governance License",
        tag: "Evaluate — Governance",
        description:
          "The governance framework that enables confident AI action — not compliance theatre. Built around your risk profile, your sector, and your operating constraints.",
      },
    ],
  },
  {
    id: "the-machine",
    number: "03",
    header: "The Machine",
    strapline: "Turn strategy into working systems that actually run every lap.",
    body: "Not proof-of-concepts that never ship. Not enterprise programmes that take 18 months to show anything. Helix Lab works in loops: a prototype that proves the use case, a pilot that tests it with real users, a Pod that runs the ongoing learning loop inside your organisation.",
    products: [
      {
        id: "pilot-forge",
        name: "Pilot Forge",
        tag: "Execute",
        description:
          "Design and run your first co-intelligent pilot. Real users. Measured outcomes. A loop that surfaces what works before you scale.",
      },
      {
        id: "execution-lab",
        name: "Execution Lab",
        tag: "Execute — Build",
        description:
          "Embedded co-intelligent delivery. We build alongside your team — prototype to deployment — with the capability transfer built in from day one.",
      },
      {
        id: "prototype-studio",
        name: "Prototype Studio",
        tag: "Execute",
        description:
          "First working version of your highest-priority use case. Built to be tested, not demonstrated.",
      },
      {
        id: "ai-pod",
        name: "AI Pod",
        tag: "Execute — Ongoing",
        description:
          "An embedded co-intelligent team running inside your organisation. Structured learning loops, real outcomes, capability transfer. The Mitcham model.",
      },
    ],
  },
  {
    id: "the-race",
    number: "04",
    header: "The Race",
    strapline:
      "The organisations that win are the ones still learning in Lap 21.",
    body: "The Elevate stage is not a project. It is a championship. The organisations that reach co-intelligent operation describe the same thing: AI is no longer something their team has to think about adopting. It is simply part of how they work.",
    products: [
      {
        id: "sherpa-retainer",
        name: "Sherpa Retainer",
        tag: "Elevate — Ongoing",
        description:
          "Strategic partner embedded in your leadership cadence. Ongoing AI Sherpa and Fractional CAIO. The long game.",
      },
      {
        id: "velocity-programme",
        name: "Velocity Programme",
        tag: "Elevate — Transformation",
        description:
          "Full co-intelligent transformation. Multi-phase, multi-year, organisation-wide. For organisations ready to make co-intelligence permanent.",
      },
      {
        id: "adoption-index",
        name: "Adoption Index",
        tag: "Elevate — Measurement",
        description:
          "Longitudinal measurement of real co-intelligent transformation. Not tool adoption — capability change. Know whether it is actually working.",
      },
      {
        id: "ethnobot-enterprise",
        name: "Ethnobot Enterprise Programme",
        tag: "Elevate — Standalone product — Ethnobot",
        description:
          "Workforce intelligence year-round. Two studies, four quarterly pulses. The measurement layer that makes Elevate sticky.",
        cta: "Visit Ethnobot ↗",
        ctaHref: "https://ethnobot.ai",
        ctaExternal: true,
      },
    ],
  },
];

const sectionBg = ["var(--doc-white)", "#fff", "var(--doc-white)", "#fff"];
const cardBg = ["#fff", "var(--doc-white)", "#fff", "var(--doc-white)"];

function TagChip({ tag }: { tag: string }) {
  const isEthnobot = tag.includes("Ethnobot");
  const isFree = tag === "Free entry";
  const parts = tag.split(" — ");

  return (
    <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
      {parts.map((part, i) => {
        const isEthnobotPart = part === "Ethnobot";
        const isFreePart = isFree && i === 0;
        return (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "0.2rem 0.55rem",
              borderRadius: "2px",
              border: isFreePart
                ? "1px solid #bbf7d0"
                : isEthnobotPart
                ? "1px solid #fed7aa"
                : isEthnobot && i > 0
                ? "1px solid #fed7aa"
                : "1px solid #c7d7fe",
              background: isFreePart
                ? "#f0fdf4"
                : isEthnobotPart
                ? "#fff7ed"
                : isEthnobot && i > 0
                ? "#fff7ed"
                : "#eff4ff",
              color: isFreePart
                ? "#16a34a"
                : isEthnobotPart
                ? "#ea580c"
                : isEthnobot && i > 0
                ? "#ea580c"
                : "var(--helix-blue)",
            }}
          >
            {part}
          </span>
        );
      })}
    </div>
  );
}

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
            The Co-Intelligent Grand Prix
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
            Your journey from starting grid
            <br />
            to championship.
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-muted)",
              lineHeight: 1.75,
              maxWidth: "600px",
            }}
          >
            Every organisation starts somewhere. Every organisation can go
            further. The journey has four stages — each with its own question,
            its own products, and its own destination. Ethnobot workforce
            intelligence runs underneath all of them.
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
          }}
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
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
              {s.number} {s.header}
            </a>
          ))}
        </div>
      </section>

      {/* Four sections */}
      {sections.map((section, si) => (
        <section
          key={section.id}
          id={section.id}
          style={{
            padding: "6rem 1.5rem",
            background: sectionBg[si],
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            {/* Section header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "4rem",
                marginBottom: "4rem",
                alignItems: "start",
              }}
              className="stage-header"
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--helix-blue)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {section.number}
                </p>
                <h2
                  style={{
                    fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                    fontWeight: 300,
                    color: "var(--legal-gray)",
                    marginBottom: "0.75rem",
                    lineHeight: 1.2,
                  }}
                >
                  {section.header}
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "var(--helix-blue)",
                    lineHeight: 1.4,
                  }}
                >
                  {section.strapline}
                </p>
              </div>
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  fontSize: "1rem",
                  paddingTop: "0.25rem",
                }}
              >
                {section.body}
              </p>
            </div>

            {/* Product cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "1rem",
              }}
            >
              {section.products.map((product) => (
                <div
                  key={product.id}
                  id={product.id}
                  style={{
                    border: "1px solid var(--border)",
                    padding: "1.75rem",
                    background: cardBg[si],
                    display: "flex",
                    flexDirection: "column",
                    gap: "0",
                  }}
                >
                  <TagChip tag={product.tag} />
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "var(--legal-gray)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {product.name}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.875rem",
                      lineHeight: 1.65,
                      flex: 1,
                      marginBottom: product.cta ? "1.25rem" : "0",
                    }}
                  >
                    {product.description}
                  </p>
                  {product.cta && product.ctaHref && (
                    product.ctaExternal ? (
                      <a
                        href={product.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-block",
                          background: "var(--helix-blue)",
                          color: "#fff",
                          textDecoration: "none",
                          padding: "0.5rem 1.25rem",
                          fontSize: "0.825rem",
                          fontWeight: 500,
                          borderRadius: "2px",
                          alignSelf: "flex-start",
                        }}
                      >
                        {product.cta}
                      </a>
                    ) : (
                      <Link
                        href={product.ctaHref}
                        style={{
                          display: "inline-block",
                          background: "var(--helix-blue)",
                          color: "#fff",
                          textDecoration: "none",
                          padding: "0.5rem 1.25rem",
                          fontSize: "0.825rem",
                          fontWeight: 500,
                          borderRadius: "2px",
                          alignSelf: "flex-start",
                        }}
                      >
                        {product.cta}
                      </Link>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Footer strip */}
      <section
        style={{
          padding: "2.5rem 1.5rem",
          background: "var(--legal-gray)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "0.5rem",
              lineHeight: 1.6,
            }}
          >
            All diagnostics and frameworks run on HelixOS — the API layer that powers the Grand Prix.
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.6,
            }}
          >
            Workforce intelligence by{" "}
            <a
              href="https://ethnobot.ai"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}
            >
              Ethnobot
            </a>{" "}
            — a standalone product, powered by Helix Lab.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "6rem 1.5rem",
          textAlign: "center",
          background: "var(--doc-white)",
        }}
      >
        <div style={{ maxWidth: "540px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 300,
              marginBottom: "1.25rem",
              color: "var(--legal-gray)",
            }}
          >
            Not sure where you are on the grid?
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              marginBottom: "2rem",
              lineHeight: 1.8,
            }}
          >
            The Position Scan is free, takes five minutes, and gives you an
            honest read. No pitch. No follow-up unless you want one.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
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
              Take the Position Scan →
            </Link>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                border: "1px solid var(--border)",
                color: "var(--legal-gray)",
                textDecoration: "none",
                padding: "0.9rem 2rem",
                fontSize: "0.9rem",
                borderRadius: "2px",
              }}
            >
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .stage-header { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </>
  );
}
