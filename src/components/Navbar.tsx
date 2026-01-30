import Link from "next/link";
import { FitFuelLogo } from "@/components/FitFuelLogo";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/Button";
import { MobileDrawer } from "@/components/MobileDrawer";
import { generateWhatsAppLink } from "@/lib/utils";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-forge-700/60 bg-forge-900/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-forge-100">
          <FitFuelLogo className="h-8 w-auto" />
          <span className="hidden text-xs font-semibold tracking-[0.4em] md:inline">
            {siteConfig.wordmark}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-forge-200 md:flex">
          {siteConfig.navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ember-400">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button
            href={generateWhatsAppLink(
              siteConfig.whatsapp.messages.home,
              siteConfig.whatsapp.phone
            )}
            size="sm"
          >
            {siteConfig.labels.applyWhatsApp}
          </Button>
          <MobileDrawer />
        </div>
      </div>
    </header>
  );
}
