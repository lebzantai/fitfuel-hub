import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/Button";
import { generateWhatsAppLink } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-forge-700 bg-forge-900">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-forge-100">
            {siteConfig.wordmark}
          </h3>
          <p className="text-sm text-forge-300">{siteConfig.description}</p>
          <Button
            href={generateWhatsAppLink(
              siteConfig.whatsapp.defaultMessage,
              siteConfig.whatsapp.phone
            )}
            size="sm"
          >
            {siteConfig.labels.applyWhatsApp}
          </Button>
        </div>
        <div className="space-y-2 text-sm text-forge-300">
          <h4 className="text-xs uppercase tracking-[0.3em] text-forge-100">
            {siteConfig.footer.exploreTitle}
          </h4>
          {siteConfig.navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block hover:text-ember-400">
              {link.label}
            </Link>
          ))}
          <Link href="/policies" className="block hover:text-ember-400">
            {siteConfig.labels.policies}
          </Link>
        </div>
        <div className="space-y-2 text-sm text-forge-300">
          <h4 className="text-xs uppercase tracking-[0.3em] text-forge-100">
            {siteConfig.footer.contactTitle}
          </h4>
          <p>{siteConfig.social.email}</p>
          <p>WhatsApp: {siteConfig.whatsapp.phone}</p>
          <div className="flex gap-3 pt-2 text-xs uppercase tracking-[0.2em]">
            <a href={siteConfig.social.instagram} className="hover:text-ember-400">
              {siteConfig.socialLabels.instagram}
            </a>
            <a href={siteConfig.social.tiktok} className="hover:text-ember-400">
              {siteConfig.socialLabels.tiktok}
            </a>
            <a href={siteConfig.social.youtube} className="hover:text-ember-400">
              {siteConfig.socialLabels.youtube}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-forge-800 py-6 text-center text-xs text-forge-500">
        © {new Date().getFullYear()} FitFuel. {siteConfig.footer.rights}
      </div>
    </footer>
  );
}
