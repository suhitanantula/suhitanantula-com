"use client";

import { useState, type CSSProperties } from "react";

type State = "idle" | "loading" | "success" | "error";

const fieldLabel: CSSProperties = {
  display: "block",
  fontSize: "0.8rem",
  color: "var(--text-muted)",
  marginBottom: "0.5rem",
  fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
};

const fieldInput: CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  border: "1px solid var(--border)",
  background: "#fff",
  fontSize: "0.9rem",
  color: "var(--legal-gray)",
  outline: "none",
  borderRadius: "2px",
};

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? "").trim(),
          organisation: String(data.get("organisation") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          stage: String(data.get("stage") ?? "").trim(),
          message: String(data.get("message") ?? "").trim(),
          website: String(data.get("website") ?? ""),
        }),
      });

      const payload: { ok?: boolean; error?: string } = await res.json();

      if (payload.ok) {
        setState("success");
        form.reset();
        return;
      }

      setState("error");
      setErrorMsg(payload.error ?? "Something went wrong. Please try again.");
    } catch {
      setState("error");
      setErrorMsg(
        "Could not send the message. Email hello@suhitanantula.com instead."
      );
    }
  }

  if (state === "success") {
    return (
      <div
        style={{
          padding: "2rem",
          background: "#f0fdf4",
          border: "1px solid #bbf7d0",
          borderRadius: "2px",
        }}
      >
        <p
          style={{
            color: "#166534",
            fontSize: "1rem",
            fontWeight: 500,
            marginBottom: "0.5rem",
          }}
        >
          Message sent.
        </p>
        <p style={{ color: "#166534", fontSize: "0.9rem", lineHeight: 1.65 }}>
          I&apos;ll read it and reply to the email you left.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
        }}
        className="form-two"
      >
        <div>
          <label htmlFor="name" style={fieldLabel}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={state === "loading"}
            style={fieldInput}
          />
        </div>
        <div>
          <label htmlFor="org" style={fieldLabel}>
            Organisation
          </label>
          <input
            type="text"
            id="org"
            name="organisation"
            disabled={state === "loading"}
            style={fieldInput}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" style={fieldLabel}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={state === "loading"}
          style={fieldInput}
        />
      </div>

      <div>
        <label htmlFor="stage" style={fieldLabel}>
          Where are you on the journey?
        </label>
        <select
          id="stage"
          name="stage"
          disabled={state === "loading"}
          style={{ ...fieldInput, fontFamily: "inherit" }}
        >
          <option value="">Select a stage...</option>
          <option value="explore">
            Explore — just beginning to understand our situation
          </option>
          <option value="evaluate">Evaluate — building the strategic case</option>
          <option value="execute">Execute — ready to build capability</option>
          <option value="elevate">
            Elevate — operating at a high level, want to go further
          </option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" style={fieldLabel}>
          What are you working on?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={state === "loading"}
          style={{ ...fieldInput, resize: "vertical", fontFamily: "inherit" }}
        />
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        style={{
          background: "var(--helix-blue)",
          color: "#fff",
          border: "none",
          padding: "1rem 2rem",
          fontSize: "0.9rem",
          fontWeight: 500,
          cursor: state === "loading" ? "not-allowed" : "pointer",
          opacity: state === "loading" ? 0.7 : 1,
          alignSelf: "flex-start",
          borderRadius: "2px",
          fontFamily: "inherit",
        }}
      >
        {state === "loading" ? "Sending..." : "Send Message"}
      </button>

      {state === "error" && errorMsg && (
        <p style={{ color: "#dc2626", fontSize: "0.825rem" }}>
          {errorMsg}{" "}
          <a href="mailto:hello@suhitanantula.com">hello@suhitanantula.com</a>
        </p>
      )}

      <style>{`
        @media (max-width: 600px) {
          .form-two { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}
