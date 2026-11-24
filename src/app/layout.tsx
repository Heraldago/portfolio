import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.heraldago.com"),
  title: "Herald Ago | Product Designer",
  description:
    "Product Designer based in Padua, Italy with 3+ years of international experience and an MSc in IT - Web Communication Design (SDU Denmark). Designing digital products that simplify and improve people's lives.",
  authors: [{ name: "Herald Ago", url: "https://www.heraldago.com" }],
  keywords: [
    "Herald Ago",
    "Product Designer",
    "UX UI Designer",
    "Product Design",
    "Design Systems",
    "UX Research",
    "WCAG 2.2",
    "Mobile Design",
    "Figma",
    "Superwall",
    "A/B Testing",
    "CRO",
    "Padua",
    "Italy",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/herald-ago-icon.svg",
    apple: "/herald-ago-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.heraldago.com",
    siteName: "Herald Ago",
    title: "Herald Ago | Product Designer",
    description:
      "Product Designer based in Padua, Italy with 3+ years of international experience and an MSc in IT - Web Communication Design (SDU Denmark). Designing digital products that simplify and improve people's lives.",
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
    title: "Herald Ago | Product Designer",
    description:
      "Product Designer based in Padua, Italy with 3+ years of international experience and an MSc in IT - Web Communication Design (SDU Denmark). Designing digital products that simplify and improve people's lives.",
    images: ["https://www.heraldago.com/metacard.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090a0c" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.heraldago.com/#person",
        name: "Herald Ago",
        jobTitle: "Product Designer",
        url: "https://www.heraldago.com",
        email: "mailto:heraldago1@gmail.com",
        image: "https://www.heraldago.com/assets/profile-pms1FE7T.jpg",
        description:
          "Product Designer based in Padua, Italy with 3+ years of international experience across Denmark, Spain, and Italy and an MSc in IT - Web Communication Design (SDU Denmark).",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Padua",
          addressRegion: "Veneto",
          addressCountry: "IT",
        },
        alumniOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "University of Southern Denmark",
          },
          {
            "@type": "CollegeOrUniversity",
            name: "University of Ferrara",
          },
        ],
        knowsAbout: [
          "Product Design",
          "UX/UI Design",
          "Design Systems",
          "User Research",
          "Conversion Rate Optimization",
          "A/B Testing",
          "WCAG 2.2 Accessibility",
          "Figma",
          "Superwall",
        ],
        knowsLanguage: ["Italian", "English", "Spanish", "French"],
        sameAs: ["https://www.linkedin.com/in/heraldago/"],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.heraldago.com/#website",
        url: "https://www.heraldago.com",
        name: "Herald Ago | Product Designer",
        author: { "@id": "https://www.heraldago.com/#person" },
      },
    ],
  };

  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
        className={`${GeistSans.variable} ${GeistSans.className} bg-background text-foreground min-h-screen flex flex-col font-sans selection:bg-lime selection:text-lime-fg antialiased text-rendering-optimize`}
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
