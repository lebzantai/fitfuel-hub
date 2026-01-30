import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { siteConfig } from "@/content/site";
import { generateWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: siteConfig.pageTitles.programs,
  description: siteConfig.hero.programs.subtitle
};

export default function ProgramsPage() {
  return (
    <div>
      <Hero
        title={siteConfig.hero.programs.title}
        subtitle={siteConfig.hero.programs.subtitle}
        primaryAction={{
          label: siteConfig.programs.heroCta,
          href: generateWhatsAppLink(
            siteConfig.whatsapp.messages.forge,
            siteConfig.whatsapp.phone
          )
        }}
        secondaryAction={{ label: siteConfig.labels.pricing, href: "/pricing" }}
        eyebrow={siteConfig.eyebrows.programs}
      />

      <Section>
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <p className="text-sm text-forge-300">{siteConfig.programs.overview}</p>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="text-lg font-semibold text-forge-100">{siteConfig.programs.tracksTitle}</h3>
              <ul className="mt-4 space-y-2 text-sm text-forge-200">
                {siteConfig.programs.tracks.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-ember-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-forge-100">{siteConfig.programs.includesTitle}</h3>
              <ul className="mt-4 space-y-2 text-sm text-forge-200">
                {siteConfig.programs.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-ember-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <div>
            <Button
              href={generateWhatsAppLink(
                siteConfig.whatsapp.messages.forge,
                siteConfig.whatsapp.phone
              )}
            >
              {siteConfig.programs.buttonLabel}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
