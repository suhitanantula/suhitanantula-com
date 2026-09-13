import type { Metadata } from "next";
import { Roboto, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Suhit Anantula — Co-Intelligent Founder",
    template: "%s | Suhit Anantula",
  },
  description:
    "I help organisations become co-intelligent. Helix Lab — the practice that makes humans and AI think better together.",
  keywords: [
    "co-intelligent",
    "AI transformation",
    "Helix Lab",
    "organisational intelligence",
    "founder",
    "Suhit Anantula",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon" }],
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Suhit Anantula — Co-Intelligent Founder",
    description:
      "I help organisations become co-intelligent. Helix Lab — the practice that makes humans and AI think better together.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhit Anantula — Co-Intelligent Founder",
    description:
      "I help organisations become co-intelligent. Helix Lab — the practice that makes humans and AI think better together.",
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${ibmPlexMono.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
