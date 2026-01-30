import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@/components/Analytics";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { siteConfig } from "@/content/site";
import { Bebas_Neue, Inter } from "next/font/google";

const displayFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display"
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.meta.baseUrl),
  title: {
    default: siteConfig.meta.defaultTitle,
    template: siteConfig.meta.titleTemplate
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.meta.ogTitle,
    description: siteConfig.description,
    url: siteConfig.meta.baseUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-placeholder.svg",
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ],
    locale: siteConfig.locale,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.ogTitle,
    description: siteConfig.description,
    images: ["/og-placeholder.svg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <Analytics />
        <Navbar />
        <main className="min-h-screen bg-forge-900">
          {children}
          <WhatsAppFloatingButton />
        </main>
        <Footer />
      </body>
    </html>
  );
}
