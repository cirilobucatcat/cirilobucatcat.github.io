import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SITE } from "../lib/site";
import "./globals.css";

// Terminal Blueprint uses one family, in three weights.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const socialImage = {
  url: SITE.ogImage,
  width: 1200,
  height: 630,
  alt: SITE.title,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    SITE.name,
    "Full-stack Web Developer",
    "Web Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "Laravel",
    "Portfolio",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050e1f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // data-scroll-behavior keeps route changes instant while in-page links scroll smoothly.
    <html lang="en" className={jetbrainsMono.variable} data-scroll-behavior="smooth">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div id="top" className="tb-grid site-page">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
