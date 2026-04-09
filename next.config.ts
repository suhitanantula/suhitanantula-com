import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect thehelixpattern.com → /methodology (CONTENT-AUDIT spec)
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
      // Redirect holographicarchitecture.com → /methodology (CONTENT-AUDIT spec)
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
