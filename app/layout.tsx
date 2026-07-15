import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import CursorTracker from "@/components/cursor-tracker";
import BackToTop from "@/components/back-to-top";
import CookieConsent from "@/components/cookie-consent";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap"
});

const siteUrl = "https://initom.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ini Tom — Data Analyst & Data Scientist",
    template: "%s | Ini Tom"
  },
  description:
    "Portfolio of Ini Tom, a Data Analyst and Data Scientist with 3 years of experience building analytics, machine learning, and AI systems that drive business decisions.",
  keywords: [
    "Ini Tom",
    "Data Analyst",
    "Data Scientist",
    "Machine Learning Engineer",
    "Portfolio",
    "Python",
    "SQL",
    "Power BI"
  ],
  authors: [{ name: "Ini Tom", url: siteUrl }],
  creator: "Ini Tom",
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Ini Tom — Data Analyst & Data Scientist",
    description:
      "Turning raw data into decisions — 3 years building analytics, ML, and AI systems that ship.",
    siteName: "Ini Tom Portfolio",
    images: [{ url: "/images/og-cover.svg", width: 1200, height: 630, alt: "Ini Tom Portfolio" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ini Tom — Data Analyst & Data Scientist",
    description: "Turning raw data into decisions — analytics, ML, and AI systems that ship.",
    images: ["/images/og-cover.svg"]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ini Tom",
  jobTitle: "Data Analyst & Data Scientist",
  url: siteUrl,
  sameAs: ["https://github.com/initom", "https://linkedin.com/in/initom"],
  knowsAbout: [
    "Data Analysis",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Data Engineering"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body`}
      >
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-signal-amber focus:px-4 focus:py-2 focus:text-ink"
          >
            Skip to content
          </a>
          <CursorTracker />
          {children}
          <BackToTop />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
