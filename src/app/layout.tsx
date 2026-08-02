import type { Metadata, Viewport } from "next";
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.heraldago.com"),
  title: "Herald Ago — Digital Product Designer & Design Engineer",
  description:
    "Digital Product Designer & UX Engineer with an MSc in IT. Bridging empirical user research, scalable design systems, and front-end engineering for WCAG-compliant software.",
  authors: [{ name: "Herald Ago", url: "https://www.heraldago.com" }],
  keywords: [
    "Herald Ago",
    "Digital Product Designer",
    "UX UI Designer",
    "UX Engineer",
    "Design Systems",
    "WCAG 2.2 AA Accessibility",
    "Front-End Developer",
    "Next.js",
    "Framer Motion",
    "Figma",
    "Denmark UX Designer",
  ],
  icons: {
    icon: "/herald-ago-icon.svg",
    apple: "/herald-ago-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.heraldago.com",
    siteName: "Herald Ago Portfolio",
    title: "Herald Ago — Digital Product Designer & Design Engineer",
    description:
      "Digital Product Designer & UX Engineer with an MSc in IT. Bridging empirical user research, scalable design systems, and front-end engineering for WCAG 2.2 compliant software.",
    images: [
      {
        url: "https://www.heraldago.com/metacard.png",
        width: 1200,
        height: 630,
        alt: "Herald Ago — Digital Product Designer Official Card",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Herald Ago — Digital Product Designer & Design Engineer",
    description:
      "Digital Product Designer & UX Engineer (MSc in IT). Bridging empirical user research, scalable design token systems, and front-end engineering.",
    images: ["https://www.heraldago.com/metacard.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#090a0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${syne.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} bg-background text-foreground min-h-screen flex flex-col font-sans selection:bg-lime selection:text-lime-fg`}
      >
        {/* WCAG Skip to Main Content Link */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />

        {/* Vercel Speed Insights & Real-Time Analytics */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
