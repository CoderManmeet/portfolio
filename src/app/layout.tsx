import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE_URL = "https://your-portfolio-domain.vercel.app";
const SITE_NAME = "Manmeet Singh";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} `,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Portfolio of Your Name, a full-stack developer building modern, performant web applications with React, Next.js, and TypeScript.",
  keywords: [
    "full-stack developer",
    "web developer portfolio",
    "React developer",
    "Next.js developer",
    "Your Name",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${SITE_NAME} | Full-Stack Developer`,
    description:
      "Portfolio of Your Name, a full-stack developer building modern, performant web applications.",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Full-Stack Developer`,
    description:
      "Portfolio of Your Name, a full-stack developer building modern, performant web applications.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0b",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Your Name",
  url: SITE_URL,
  jobTitle: "Full-Stack Developer",
  sameAs: [
    "https://github.com/yourusername",
    "https://linkedin.com/in/yourusername",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
