import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Oswald } from "next/font/google";
import { AnnouncementBar } from "@/components/announcement-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const display = Oswald({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "FitFuel | Discipline Built",
  description:
    "FitFuel is a premium fitness brand forged in South Africa. Discipline over motivation. Systems over hype.",
  openGraph: {
    title: "FitFuel | Discipline Built",
    description:
      "Forge your body and mind with structured coaching, elite apparel, and precision-led events.",
    type: "website"
  },
  metadataBase: new URL("https://fitfuel.co.za")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable} font-sans`}>
        <AnnouncementBar />
        <SiteHeader />
        <main className="min-h-screen bg-charcoal">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
