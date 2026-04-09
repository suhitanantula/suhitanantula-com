"use client";

import { useState } from "react";

type State = "idle" | "loading" | "success" | "error";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data: { ok?: boolean; error?: string } = await res.json();

      if (data.ok) {
        setState("success");
        setEmail("");
      } else {
        setState("error");
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setState("error");
      setErrorMsg("Could not connect. Please check your connection and try again.");
    }
  }

  if (state === "success") {
    return (
      <div
        style={{
          padding: "1.5rem 2rem",
          background: "#f0fdf4",
          border: "1px solid #bbf7d0",
          borderRadius: "2px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#166534",
            fontSize: "0.95rem",
            fontWeight: 500,
          }}
        >
          You&apos;re in the pit crew. Every Monday lap lands in your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={state === "loading"}
          style={{
            flex: "1 1 220px",
            padding: "0.75rem 1rem",
            border: "1px solid var(--border)",
            background: "#fff",
            fontSize: "0.9rem",
            color: "var(--legal-gray)",
            outline: "none",
            borderRadius: "2px",
          }}
        />
        <button
          type="submit"
          disabled={state === "loading"}
          style={{
            background: "var(--helix-blue)",
            color: "#fff",
            border: "none",
            padding: "0.75rem 1.5rem",
            fontSize: "0.875rem",
            fontWeight: 500,
            cursor: state === "loading" ? "not-allowed" : "pointer",
            opacity: state === "loading" ? 0.7 : 1,
            borderRadius: "2px",
            whiteSpace: "nowrap",
            fontFamily: "inherit",
          }}
        >
          {state === "loading" ? "Joining..." : "Join the Pit Crew"}
        </button>
      </div>
      {state === "error" && errorMsg && (
        <p
          style={{
            color: "#dc2626",
            fontSize: "0.825rem",
            marginTop: "0.5rem",
          }}
        >
          {errorMsg}
        </p>
      )}
    </form>
  );
}
