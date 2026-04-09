import type { Metadata } from "next";
import { Roboto, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://suhitanantula.com",
    siteName: "Suhit Anantula",
    title: "Suhit Anantula — Co-Intelligent Founder",
    description:
      "I help organisations become co-intelligent. Helix Lab — the practice that makes humans and AI think better together.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhit Anantula — Co-Intelligent Founder",
    description:
      "I help organisations become co-intelligent.",
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
      </body>
    </html>
  );
}
