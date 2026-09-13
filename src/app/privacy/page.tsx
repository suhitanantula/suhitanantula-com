import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Privacy",
  description:
    "How this site handles analytics and the information you send when you subscribe or get in touch.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <section
        style={{
          background: "var(--doc-white)",
          padding: "8rem 1.5rem 6rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
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
            Privacy
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "var(--legal-gray)",
              marginBottom: "1.5rem",
            }}
          >
            How this site uses information
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-muted)",
              lineHeight: 1.75,
            }}
          >
            This page describes what the site collects today. It is a factual
            account of the current implementation — not a full legal policy.
          </p>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem 6rem" }}>
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
            color: "var(--text-muted)",
            lineHeight: 1.8,
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "var(--legal-gray)",
                marginBottom: "0.75rem",
              }}
            >
              Who this covers
            </h2>
            <p>
              This website is operated by Suhit Anantula. Helix Lab is the
              practice named on the site. Questions:{" "}
              <a href="mailto:hello@suhitanantula.com">
                hello@suhitanantula.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "var(--legal-gray)",
                marginBottom: "0.75rem",
              }}
            >
              Analytics
            </h2>
            <p>
              The site uses Vercel Analytics to count visits and understand
              which pages are read. It is first-party analytics on Vercel. It
              is not an advertising tracker.
            </p>
          </div>

          <div>
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "var(--legal-gray)",
                marginBottom: "0.75rem",
              }}
            >
              Email subscribe
            </h2>
            <p>
              If you join the book list on The Co-Intelligent Organisation
              page, we collect the email address you submit. Delivery and the
              audience list are handled by Resend. You can unsubscribe from
              any email we send.
            </p>
          </div>

          <div>
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "var(--legal-gray)",
                marginBottom: "0.75rem",
              }}
            >
              Contact messages
            </h2>
            <p>
              If you send a message through the contact form, we receive the
              name, email, organisation, stage, and message you enter so we
              can reply. Messages are emailed to
              hello@suhitanantula.com.
            </p>
          </div>

          <div>
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "var(--legal-gray)",
                marginBottom: "0.75rem",
              }}
            >
              What this page does not yet cover
            </h2>
            <p>
              Retention periods, subprocessors beyond Vercel and Resend, and
              any other legal wording still need a founder review. Email
              hello@suhitanantula.com if you want a copy of your data or
              want it deleted.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
