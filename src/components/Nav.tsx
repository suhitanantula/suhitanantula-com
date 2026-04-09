"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/journey", label: "The Journey" },
  { href: "/products", label: "Products" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/co-intelligent-org", label: "Book" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        <Link
          href="/"
          style={{
            color: "var(--legal-gray)",
            textDecoration: "none",
            fontSize: "0.95rem",
            letterSpacing: "0.04em",
            fontWeight: 500,
          }}
        >
          Suhit Anantula
        </Link>

        {/* Desktop nav */}
        <div
          style={{ display: "flex", gap: "2rem", alignItems: "center" }}
          className="nav-desktop"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 400,
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "var(--helix-blue)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "var(--text-muted)";
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              background: "var(--helix-blue)",
              color: "#fff",
              textDecoration: "none",
              padding: "0.5rem 1.25rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              borderRadius: "2px",
            }}
          >
            Work With Me
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            color: "var(--legal-gray)",
            cursor: "pointer",
            fontSize: "1.2rem",
            display: "none",
          }}
          className="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "#fff",
            borderTop: "1px solid var(--border)",
            padding: "1rem 1.5rem",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "0.95rem",
                padding: "0.75rem 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              background: "var(--helix-blue)",
              color: "#fff",
              textDecoration: "none",
              padding: "0.75rem 1rem",
              marginTop: "1rem",
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            Work With Me
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
