import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Helix Lab products and services across four stages: Explore, Evaluate, Execute, and Elevate. From free diagnostics to enterprise transformation.",
};

const stages = [
  {
    overline: "01 — Explore",
    headline: "Orientation, Opportunity & Inspiration",
    subhead: "Where are you? Where is the real leverage?",
    body: "The Explore stage is about orientation, inspiration, and honest opportunity mapping. Leadership teams leave knowing what AI actually means for their specific context — the market landscape, the genuine leverage points, the realistic starting position.",
    entry: "Free through to K",
    products: [
      {
        id: "ai-opportunity-scan",
        name: "AI Opportunity Scan",
        subtitle: null,
        description:
          "Free 5-minute conversation diagnostic. Instant output. See where AI creates real leverage in your organisation.",
        cta: "Take the Scan →",
        ctaHref: "/contact",
      },
      {
        id: "gain-sprint",
        name: "GAIN Sprint",
        subtitle: null,
        description:
          "1–2 day facilitated opportunity workshop. Growth, Amplification, Innovation, Next-Level. You leave with a prioritised map of what to act on first.",
        cta: null,
        ctaHref: null,
      },
      {
        id: "ai-keynote",
        name: "AI Keynote",
        subtitle: null,
        description:
          "Inspire the leadership team. Make the case for moving. Tailored to your sector and context.",
        cta: null,
        ctaHref: null,
      },
      {
        id: "board-briefing",
        name: "Board Briefing",
        subtitle: null,
        description:
          "Orient your board on AI risk, opportunity, and governance baseline. 75 minutes, pre-survey, facilitated.",
        cta: null,
        ctaHref: null,
      },
    ],
  },
  {
    overline: "02 — Evaluate",
    headline: "Strategy, Governance & Architecture",
    subhead: "What should you do, in what order, with what guardrails?",
    body: "Clear use cases. A governance framework you can defend. An architecture that will not need rebuilding in 18 months. A strategy the whole leadership team believes in — because it is grounded in evidence, not assumptions.",
    entry: "K through to K+",
    products: [
      {
        id: "sensemaking-studio",
        name: "Sensemaking Studio",
        subtitle: null,
        description:
          "Ethnobot workforce intelligence (50 to 5,000 participants — teams to entire organisations) combined with a facilitated strategy session. The only diagnostic that gives you qualitative human insight at any scale. Stop guessing at adoption risk.",
        cta: null,
        ctaHref: null,
      },
      {
        id: "ai-sherpa",
        name: "AI Sherpa Expedition",
        subtitle: "Strategy",
        description:
          "Full co-intelligent roadmap. Strategy. Architecture. Governance. 8–12 weeks. Board-ready.",
        cta: null,
        ctaHref: null,
      },
      {
        id: "governance-framework",
        name: "Governance Framework",
        subtitle: null,
        description:
          "The rules that enable confident action, not compliance theatre. Built around your specific risk profile and operating context.",
        cta: null,
        ctaHref: null,
      },
    ],
  },
  {
    overline: "03 — Execute",
    headline: "Prototypes, Pilots & Pods",
    subhead: "Build something real. Learn fast. Make it work.",
    body: "Not proof-of-concepts that never ship. Not enterprise programmes that take 18 months to show anything. Helix Lab works in loops, not waterfall: a prototype that proves the use case, a pilot that tests it with real users, a Pod that runs the ongoing learning loop inside your organisation.",
    entry: "K through to K+",
    products: [
      {
        id: "prototype-studio",
        name: "Prototype Studio",
        subtitle: null,
        description:
          "First working version of your highest-priority use case. Built to be tested, not demonstrated.",
        cta: null,
        ctaHref: null,
      },
      {
        id: "pilot",
        name: "Pilot",
        subtitle: null,
        description:
          "Tested deployment with real users. Measured outcomes. A loop that surfaces what works before you scale.",
        cta: null,
        ctaHref: null,
      },
      {
        id: "ai-pod",
        name: "AI Pod",
        subtitle: "Build",
        description:
          "Embedded co-intelligent team running inside your organisation. The Mitcham model: structured learning loops, capability transfer, measurable progress.",
        cta: null,
        ctaHref: null,
      },
    ],
  },
  {
    overline: "04 — Elevate",
    headline: "Transformation",
    subhead: "Co-intelligence becomes how you operate — permanently.",
    body: "The organisations that reach this stage describe the same thing: AI is no longer a project. It is part of how the organisation thinks. The Elevate stage is the long game — strategic partner, ongoing lab, longitudinal measurement, and the compound return of a co-intelligent operating rhythm.",
    entry: "K/month through to multi-year partnership",
    products: [
      {
        id: "fractional-caio",
        name: "Fractional CAIO Retainer",
        subtitle: null,
        description:
          "Strategic partner embedded in your leadership cadence. Ongoing AI Sherpa. K/month.",
        cta: null,
        ctaHref: null,
      },
      {
        id: "co-intelligence-lab",
        name: "Co-Intelligence Lab",
        subtitle: null,
        description:
          "Ongoing capability build, learning loops, maturity tracking. Your organisation's AI R&D function.",
        cta: null,
        ctaHref: null,
      },
      {
        id: "helix-adoption-index",
        name: "Helix Adoption Index",
        subtitle: null,
        description:
          "Longitudinal measurement of real co-intelligent transformation. Know whether it is actually working.",
        cta: null,
        ctaHref: null,
      },
      {
        id: "enterprise-ethnobot",
        name: "Enterprise Ethnobot Programme",
        subtitle: null,
        description:
          "Workforce intelligence year-round. Two studies, four quarterly pulses. The measurement layer that makes Elevate sticky.",
        cta: null,
        ctaHref: null,
      },
    ],
  },
];

const stageColors = ["var(--doc-white)", "#fff", "var(--doc-white)", "#fff"];

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
            Four stages. Fourteen products. Every engagement is designed to
            build the capability your organisation actually keeps.
          </p>
        </div>
      </section>

      {/* Stage sections */}
      {stages.map((stage, si) => (
        <section
          key={stage.overline}
          id={stage.overline.split(" — ")[1].toLowerCase()}
          style={{
            padding: "6rem 1.5rem",
            background: stageColors[si],
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            {/* Stage header */}
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
                    fontFamily:
                      "var(--font-mono), IBM Plex Mono, monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--helix-blue)",
                    marginBottom: "1rem",
                  }}
                >
                  {stage.overline}
                </p>
                <h2
                  style={{
                    fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                    fontWeight: 300,
                    color: "var(--legal-gray)",
                    marginBottom: "0.75rem",
                    lineHeight: 1.25,
                  }}
                >
                  {stage.headline}
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "var(--helix-blue)",
                    marginBottom: "1.5rem",
                    lineHeight: 1.4,
                  }}
                >
                  {stage.subhead}
                </p>
                <div
                  style={{
                    padding: "0.6rem 1rem",
                    border: "1px solid var(--border)",
                    background: "rgba(45,91,255,0.04)",
                    display: "inline-block",
                  }}
                >
                  <span
                    style={{
                      fontFamily:
                        "var(--font-mono), IBM Plex Mono, monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-light)",
                    }}
                  >
                    Entry:{" "}
                  </span>
                  <span
                    style={{
                      fontFamily:
                        "var(--font-mono), IBM Plex Mono, monospace",
                      fontSize: "0.65rem",
                      color: "var(--helix-blue)",
                    }}
                  >
                    {stage.entry}
                  </span>
                </div>
              </div>
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  fontSize: "1rem",
                }}
              >
                {stage.body}
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
              {stage.products.map((product) => (
                <div
                  key={product.id}
                  id={product.id}
                  style={{
                    border: "1px solid var(--border)",
                    padding: "1.75rem",
                    background: si % 2 === 0 ? "#fff" : "var(--doc-white)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "0.6rem",
                      marginBottom: "0.75rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 500,
                        color: "var(--legal-gray)",
                      }}
                    >
                      {product.name}
                    </h3>
                    {product.subtitle && (
                      <span
                        style={{
                          fontFamily:
                            "var(--font-mono), IBM Plex Mono, monospace",
                          fontSize: "0.6rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--helix-blue)",
                          border: "1px solid #c7d7fe",
                          background: "#eff4ff",
                          padding: "0.15rem 0.5rem",
                          borderRadius: "999px",
                        }}
                      >
                        {product.subtitle}
                      </span>
                    )}
                  </div>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.875rem",
                      lineHeight: 1.65,
                      marginBottom: product.cta ? "1.25rem" : "0",
                    }}
                  >
                    {product.description}
                  </p>
                  {product.cta && product.ctaHref && (
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
                      }}
                    >
                      {product.cta}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Ethnobot — the diagnostic backbone */}
      <section
        style={{
          padding: "6rem 1.5rem",
          background: "var(--legal-gray)",
          color: "#fff",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "4rem",
              alignItems: "start",
            }}
            className="stage-header"
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: "1rem",
                }}
              >
                The Diagnostic Backbone
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  fontWeight: 300,
                  lineHeight: 1.25,
                  color: "#fff",
                  marginBottom: "2rem",
                }}
              >
                Ethnobot — Workforce Intelligence for the AI Era
              </h2>
              <a
                href="https://ethnobot.ai"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "#fff",
                  color: "var(--helix-blue)",
                  textDecoration: "none",
                  padding: "0.75rem 1.5rem",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  borderRadius: "2px",
                }}
              >
                Visit Ethnobot ↗
              </a>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.8,
                fontSize: "1rem",
              }}
            >
              Ethnobot is not a consulting product. It is a standalone
              AI-powered workforce intelligence platform that runs underneath
              every stage of the Helix Lab journey. At Explore, it tells you
              what your workforce actually thinks about AI. At Evaluate, it
              grounds your strategy in real data. At Execute, it surfaces
              adoption risk before go-live. At Elevate, it measures whether
              the transformation is real. Powered by Helix Lab. Available as a
              standalone product.
            </p>
          </div>
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
            Not sure where to start?
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              marginBottom: "2rem",
              lineHeight: 1.8,
            }}
          >
            Most organisations begin with the AI Opportunity Scan — it is
            free, takes five minutes, and gives you an honest read of where
            you actually are.
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
              Take the Scan →
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
              Or start a conversation →
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
