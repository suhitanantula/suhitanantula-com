import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--legal-gray)",
        color: "#fff",
        padding: "3rem 1.5rem",
        marginTop: "6rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "3rem",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "0.95rem",
              fontWeight: 500,
              marginBottom: "0.75rem",
              color: "#fff",
            }}
          >
            Suhit Anantula
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.875rem",
              lineHeight: 1.6,
            }}
          >
            Co-Intelligent transformation for founders and organisations
            ready to operate at a new level.
          </p>
        </div>

        <div>
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "1rem",
            }}
          >
            Practice
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              { href: "/about", label: "About" },
              { href: "/journey", label: "The Journey" },
              { href: "/methodology", label: "Methodology" },
              { href: "/case-studies", label: "Case Studies" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "1rem",
            }}
          >
            Products
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              {
                href: "https://ethnobot.ai",
                label: "Ethnobot ↗",
                external: true,
              },
              { href: "/products#ai-opportunity-scan", label: "AI Opportunity Scan" },
              { href: "/products#sensemaking-studio", label: "Sensemaking Studio" },
              { href: "/products#helix-navigator", label: "Helix Navigator" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                style={{
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "1rem",
            }}
          >
            Connect
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              { href: "/books", label: "Books" },
              { href: "/contact", label: "Work With Me" },
              {
                href: "https://thehelixloop.com",
                label: "The Helix Loop ↗",
                external: true,
              },
              {
                href: "https://thehelixmoment.com",
                label: "The Helix Moment ↗",
                external: true,
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                style={{
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "3rem auto 0",
          paddingTop: "1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>
          © {currentYear} Suhit Anantula. All rights reserved.
        </p>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>
          Helix Lab · Adelaide, Australia
        </p>
      </div>
    </footer>
  );
}
