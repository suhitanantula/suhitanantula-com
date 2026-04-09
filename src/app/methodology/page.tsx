import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Methodology — Helix Lab Frameworks",
  description:
    "The Helix Lab methodology: GAIN, AAA, 4A, 9Q Grid, and LLV frameworks for co-intelligent transformation.",
};

const frameworks = [
  {
    name: "GAIN",
    tagline: "The co-intelligent opportunity map.",
    description:
      "GAIN is the framework for understanding where AI creates genuine leverage in an organisation. It maps four dimensions — Generate, Augment, Integrate, Navigate — and helps teams see exactly where co-intelligent practice would have the most impact for their specific context.",
  },
  {
    name: "AAA",
    tagline: "Assess, Amplify, Align.",
    description:
      "The AAA framework guides the Evaluate stage: a structured method for assessing the current state, identifying what to amplify with co-intelligent practice, and aligning the organisation around the strategic direction. It turns analysis into action.",
  },
  {
    name: "4A",
    tagline: "The four dimensions of co-intelligent action.",
    description:
      "4A provides the operational framework for the Execute stage: Awareness, Agency, Accountability, Adaptation. Each dimension addresses a different aspect of what it means to work co-intelligently — how teams stay aware, exercise agency, maintain accountability, and adapt over time.",
  },
  {
    name: "9Q Grid",
    tagline: "Sensemaking at scale.",
    description:
      "The 9Q Grid is the Sensemaking Studio's core tool: nine questions that structure how leadership teams think through complex strategic challenges. It\u2019s designed to surface blind spots, build shared understanding, and create the conditions for genuinely better decisions.",
  },
  {
    name: "LLV",
    tagline: "Learn, Loop, Verify.",
    description:
      "LLV is the Elevate-stage rhythm: the cadence of learning, looping improvement, and verifying that co-intelligent practice is actually creating the outcomes it should. It\u2019s how organisations avoid drift and keep the capability compounding.",
  },
];

export default function MethodologyPage() {
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
              maxWidth: "640px",
              marginBottom: "1.5rem",
            }}
          >
            Frameworks for
            <br />
            co-intelligent thinking
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-muted)",
              lineHeight: 1.75,
              maxWidth: "560px",
            }}
          >
            The Helix Lab frameworks emerged from fieldwork — not academic
            theory. They exist because organisations needed better tools for
            thinking clearly about AI, not just using it.
          </p>
        </div>
      </section>

      {/* Frameworks */}
      <section style={{ padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {frameworks.map((fw) => (
              <div
                key={fw.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  gap: "4rem",
                  padding: "3rem 0",
                  borderBottom: "1px solid var(--border)",
                  alignItems: "start",
                }}
                className="fw-grid"
              >
                <div>
                  <span
                    style={{
                      fontFamily:
                        "var(--font-mono), IBM Plex Mono, monospace",
                      fontSize: "2rem",
                      fontWeight: 500,
                      color: "var(--helix-blue)",
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {fw.name}
                  </span>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-muted)",
                      fontStyle: "italic",
                    }}
                  >
                    {fw.tagline}
                  </p>
                </div>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.8,
                  }}
                >
                  {fw.description}
                </p>
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
            See these frameworks in action
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              marginBottom: "2rem",
              lineHeight: 1.8,
            }}
          >
            The best way to understand the methodology is to work through it
            with your specific challenge. The Sensemaking Studio is a good
            starting point.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/products#sensemaking-studio"
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
              Sensemaking Studio
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
                borderRadius: "2px",
              }}
            >
              The Journey →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .fw-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
        }
      `}</style>
    </>
  );
}
