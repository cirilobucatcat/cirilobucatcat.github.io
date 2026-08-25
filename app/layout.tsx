import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://cirilobucatcat.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cirilo Bucatcat Jr. — Web Developer & Software Engineer",
    template: "%s — Cirilo Bucatcat Jr.",
  },
  description:
    "Portfolio of Cirilo Bucatcat Jr. — Web Developer, Software Developer, and Software Engineer building fast, accessible web and software products.",
  keywords: ["Cirilo Bucatcat Jr.", "Web Developer", "Software Developer", "Software Engineer", "Portfolio"],
  authors: [{ name: "Cirilo Bucatcat Jr." }],
  creator: "Cirilo Bucatcat Jr.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Cirilo Bucatcat Jr. — Web Developer & Software Engineer",
    description: "Portfolio of Cirilo Bucatcat Jr. — Web Developer, Software Developer, and Software Engineer.",
    siteName: "Cirilo Bucatcat Jr.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cirilo Bucatcat Jr. — Web Developer & Software Engineer",
    description: "Portfolio of Cirilo Bucatcat Jr. — Web Developer, Software Developer, and Software Engineer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cirilo Bucatcat Jr.",
  url: siteUrl,
  jobTitle: ["Web Developer", "Software Developer", "Software Engineer"],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "ABC University",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plexMono.variable} ${plexSans.variable}`}>
      <body className="bg-zinc-950 font-sans text-zinc-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}