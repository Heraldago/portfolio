import type { Metadata, Viewport } from "next";
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700"],
  display: "swap",
  preload: true,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.heraldago.com"),
  title: "Herald Ago | Digital Product Designer",
  description:
    "Digital Product Designer based in Barcelona. MSc in IT from the University of Southern Denmark. Designing mobile onboarding, paywalls, and scalable design systems.",
  authors: [{ name: "Herald Ago", url: "https://www.heraldago.com" }],
  keywords: [
    "Herald Ago",
    "Digital Product Designer",
    "UX UI Designer",
    "Product Design",
    "Design Systems",
    "Mobile Design",
    "Figma",
    "Superwall",
  ],
  icons: {
    icon: "/herald-ago-icon.svg",
    apple: "/herald-ago-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.heraldago.com",
    siteName: "Herald Ago",
    title: "Herald Ago | Digital Product Designer",
    description:
      "Digital Product Designer based in Barcelona. MSc in IT from the University of Southern Denmark. Designing mobile onboarding, paywalls, and scalable design systems.",
    images: [
      {
        url: "https://www.heraldago.com/metacard.png",
        width: 1200,
        height: 630,
        alt: "Herald Ago Portfolio Card",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Herald Ago | Digital Product Designer",
    description:
      "Digital Product Designer based in Barcelona. MSc in IT from the University of Southern Denmark. Designing mobile onboarding, paywalls, and scalable design systems.",
    images: ["https://www.heraldago.com/metacard.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FD1Y93T0VL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FD1Y93T0VL');
          `}
        </Script>
      </head>
      <body
        className={`${syne.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} bg-background text-foreground min-h-screen flex flex-col font-sans selection:bg-lime selection:text-lime-fg antialiased text-rendering-optimize`}
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
