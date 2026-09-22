import type { Metadata, Viewport } from "next";
import { Fraunces, Nunito, Caveat } from "next/font/google";
import { siteUrl } from "@/lib/data";
import SiteShell from "@/components/SiteShell";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["500"],
});

const description =
  "PTL Treehouse is a Christian bilingual (Korean-English) preschool in Bothell, WA for ages 2.5 to 5, built on play-based learning, faith, and community.";

/**
 * Each route supplies its own title and description; this is the fallback and
 * the shared half. `metadataBase` is what lets the per-page share cards
 * resolve /og.jpg to an absolute URL, which is the only kind a preview bot
 * will fetch.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PTL Treehouse | Christian Bilingual Preschool in Bothell, WA",
    template: "%s | PTL Treehouse",
  },
  description,
  applicationName: "PTL Treehouse",
  openGraph: {
    type: "website",
    siteName: "PTL Treehouse",
    locale: "en_US",
    url: siteUrl,
    title: "PTL Treehouse | Christian Bilingual Preschool in Bothell, WA",
    description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "PTL Treehouse" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PTL Treehouse | Christian Bilingual Preschool in Bothell, WA",
    description,
    images: ["/og.jpg"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

/** Tints the browser chrome on mobile to match the header. */
export const viewport: Viewport = {
  themeColor: "#fbf6ee",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${nunito.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal font-body">
        <SiteShell>{children}</SiteShell>
        <StructuredData />
      </body>
    </html>
  );
}
