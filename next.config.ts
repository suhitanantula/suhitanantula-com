import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // /book → /co-intelligent-org (permanent, canonical URL)
      {
        source: "/book",
        destination: "/co-intelligent-org",
        permanent: true,
      },
      // P1: stale route cleanup
      {
        source: "/services",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/work-with-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/helix-lab",
        destination: "/journey",
        permanent: true,
      },
      // cointelligentorganisation.com 301 (CEO plan requirement)
      {
        source: "/:path*",
        has: [{ type: "host", value: "cointelligentorganisation.com" }],
        destination: "https://suhitanantula.com/co-intelligent-org",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.cointelligentorganisation.com" }],
        destination: "https://suhitanantula.com/co-intelligent-org",
        permanent: true,
      },
      // thehelixpattern.com → /methodology
      {
        source: "/:path*",
        has: [{ type: "host", value: "thehelixpattern.com" }],
        destination: "https://suhitanantula.com/methodology",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.thehelixpattern.com" }],
        destination: "https://suhitanantula.com/methodology",
        permanent: true,
      },
      // holographicarchitecture.com → /methodology
      {
        source: "/:path*",
        has: [{ type: "host", value: "holographicarchitecture.com" }],
        destination: "https://suhitanantula.com/methodology",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.holographicarchitecture.com" }],
        destination: "https://suhitanantula.com/methodology",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
