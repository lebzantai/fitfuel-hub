import Link from "next/link";
import { footerLinks } from "@/content/copy";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-graphite">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.5fr_1fr_1fr] md:px-6">
        <div>
          <p className="font-display text-xl uppercase tracking-[0.25em] text-fog">
            FitFuel
          </p>
          <p className="mt-4 text-sm text-steel">
            Westonaria, Gauteng. Built to scale across Africa. Precision over
            noise.
          </p>
          <p className="mt-3 text-sm text-steel">lebzantai@gmail.com</p>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-steel">
            Discipline is the advantage.
          </p>
        </div>
        {footerLinks.map((group) => (
          <div key={group.title}>
            <p className="text-xs uppercase tracking-[0.3em] text-steel">
              {group.title}
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-fog">
              {group.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-steel md:px-6">
        © 2024 FitFuel. Privacy + Terms placeholders.
      </div>
    </footer>
  );
}
