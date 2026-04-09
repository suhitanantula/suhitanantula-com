import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Work With Me",
  description:
    "Start the conversation. Work with Suhit Anantula and Helix Lab to build co-intelligent capability in your organisation.",
};

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

              <form
                action="mailto:hello@suhitanantula.com"
                method="GET"
                style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <label
                      htmlFor="name"
                      style={{
                        display: "block",
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        marginBottom: "0.5rem",
                        fontFamily:
                          "var(--font-mono), IBM Plex Mono, monospace",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        border: "1px solid var(--border)",
                        background: "#fff",
                        fontSize: "0.9rem",
                        color: "var(--legal-gray)",
                        outline: "none",
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="org"
                      style={{
                        display: "block",
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        marginBottom: "0.5rem",
                        fontFamily:
                          "var(--font-mono), IBM Plex Mono, monospace",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      Organisation
                    </label>
                    <input
                      type="text"
                      id="org"
                      name="organisation"
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        border: "1px solid var(--border)",
                        background: "#fff",
                        fontSize: "0.9rem",
                        color: "var(--legal-gray)",
                        outline: "none",
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      marginBottom: "0.5rem",
                      fontFamily:
                        "var(--font-mono), IBM Plex Mono, monospace",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      border: "1px solid var(--border)",
                      background: "#fff",
                      fontSize: "0.9rem",
                      color: "var(--legal-gray)",
                      outline: "none",
                      borderRadius: "2px",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="stage"
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      marginBottom: "0.5rem",
                      fontFamily:
                        "var(--font-mono), IBM Plex Mono, monospace",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Where are you on the journey?
                  </label>
                  <select
                    id="stage"
                    name="stage"
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      border: "1px solid var(--border)",
                      background: "#fff",
                      fontSize: "0.9rem",
                      color: "var(--legal-gray)",
                      outline: "none",
                      borderRadius: "2px",
                    }}
                  >
                    <option value="">Select a stage...</option>
                    <option value="explore">
                      Explore — just beginning to understand our situation
                    </option>
                    <option value="evaluate">
                      Evaluate — building the strategic case
                    </option>
                    <option value="execute">
                      Execute — ready to build capability
                    </option>
                    <option value="elevate">
                      Elevate — operating at a high level, want to go further
                    </option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      marginBottom: "0.5rem",
                      fontFamily:
                        "var(--font-mono), IBM Plex Mono, monospace",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    What are you working on?
                  </label>
                  <textarea
                    id="message"
                    name="body"
                    rows={5}
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      border: "1px solid var(--border)",
                      background: "#fff",
                      fontSize: "0.9rem",
                      color: "var(--legal-gray)",
                      outline: "none",
                      resize: "vertical",
                      borderRadius: "2px",
                      fontFamily: "inherit",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: "var(--helix-blue)",
                    color: "#fff",
                    border: "none",
                    padding: "1rem 2rem",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    alignSelf: "flex-start",
                    borderRadius: "2px",
                    fontFamily: "inherit",
                  }}
                >
                  Send Message
                </button>
              </form>
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
