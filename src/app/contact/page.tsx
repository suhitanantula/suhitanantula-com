import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Start the conversation. Work with Suhit Anantula and Helix Lab to build co-intelligent capability in your organisation.",
  path: "/contact",
});

export default function ContactPage() {
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
            Work With Me
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
            Start the
            <br />
            conversation.
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-muted)",
              lineHeight: 1.75,
              maxWidth: "520px",
            }}
          >
            I work with a small number of founders and organisations at a
            time. The best next step is a conversation about where you are
            and what you&apos;re trying to build.
          </p>
        </div>
      </section>

      {/* Contact form + info */}
      <section style={{ padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: "6rem",
            }}
            className="two-col"
          >
            {/* Left: context */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-light)",
                  marginBottom: "1.5rem",
                }}
              >
                What to expect
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  {
                    step: "01",
                    title: "Introductory call",
                    description:
                      "A 30-minute conversation to understand where your organisation is and what you\u2019re trying to build.",
                  },
                  {
                    step: "02",
                    title: "Honest assessment",
                    description:
                      "I\u2019ll share my read of your situation and where co-intelligence would create the most leverage.",
                  },
                  {
                    step: "03",
                    title: "Clear proposal",
                    description:
                      "If there\u2019s a fit, I\u2019ll propose a specific engagement — the right stage, the right format, the right scope.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    style={{ display: "flex", gap: "1.25rem", alignItems: "start" }}
                  >
                    <span
                      style={{
                        fontFamily:
                          "var(--font-mono), IBM Plex Mono, monospace",
                        color: "var(--helix-blue)",
                        fontSize: "0.75rem",
                        minWidth: "24px",
                        paddingTop: "3px",
                        flexShrink: 0,
                      }}
                    >
                      {item.step}
                    </span>
                    <div>
                      <p
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 500,
                          color: "var(--legal-gray)",
                          marginBottom: "0.3rem",
                        }}
                      >
                        {item.title}
                      </p>
                      <p
                        style={{
                          color: "var(--text-muted)",
                          fontSize: "0.875rem",
                          lineHeight: 1.65,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "3rem",
                  padding: "1.5rem",
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
                    marginBottom: "0.75rem",
                  }}
                >
                  Location
                </p>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                  }}
                >
                  Helix Lab · Adelaide, South Australia
                  <br />
                  Working with organisations across Australia
                  and internationally.
                </p>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    marginTop: "1rem",
                  }}
                >
                  Or email{" "}
                  <a href="mailto:hello@suhitanantula.com">
                    hello@suhitanantula.com
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-light)",
                  marginBottom: "1.5rem",
                }}
              >
                Send a message
              </p>

              <ContactForm />
            </div>
          </div>
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
