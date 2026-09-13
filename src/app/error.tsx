"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section
      style={{
        background: "var(--doc-white)",
        padding: "8rem 1.5rem",
        borderBottom: "1px solid var(--border)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "560px", margin: "0 auto" }}>
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
          500
        </p>
        <h1
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 300,
            lineHeight: 1.15,
            color: "var(--legal-gray)",
            marginBottom: "1.25rem",
          }}
        >
          Something went wrong.
        </h1>
        <p
          style={{
            color: "var(--text-muted)",
            lineHeight: 1.75,
            marginBottom: "2.5rem",
          }}
        >
          Please try again. If it keeps happening, email hello@suhitanantula.com.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            onClick={() => reset()}
            style={{
              background: "var(--helix-blue)",
              color: "#fff",
              border: "none",
              padding: "0.9rem 2rem",
              fontSize: "0.9rem",
              fontWeight: 500,
              borderRadius: "2px",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Try again
          </button>
          <Link
            href="/"
            style={{
              display: "inline-block",
              border: "1px solid var(--border)",
              color: "var(--legal-gray)",
              textDecoration: "none",
              padding: "0.9rem 2rem",
              fontSize: "0.9rem",
              fontWeight: 400,
              borderRadius: "2px",
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
