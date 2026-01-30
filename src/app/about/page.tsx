import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { siteConfig } from "@/content/site";
import { generateWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: siteConfig.pageTitles.about,
  description: siteConfig.hero.about.subtitle
};

export default function AboutPage() {
  return (
    <div>
      <Hero
        title={siteConfig.hero.about.title}
        subtitle={siteConfig.hero.about.subtitle}
        primaryAction={{
          label: siteConfig.labels.applyOnWhatsApp,
          href: generateWhatsAppLink(
            siteConfig.whatsapp.messages.apply,
            siteConfig.whatsapp.phone
          )
        }}
        secondaryAction={{ label: siteConfig.labels.contact, href: "/contact" }}
        eyebrow={siteConfig.eyebrows.about}
      />

      <Section>
        <div className="mx-auto w-full max-w-6xl grid gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-forge-100">{siteConfig.about.why.title}</h2>
            <ul className="mt-4 space-y-3 text-sm text-forge-200">
              {siteConfig.about.why.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ember-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Card>
            <h3 className="text-lg font-semibold text-forge-100">{siteConfig.about.founder.title}</h3>
            <p className="mt-3 text-sm text-forge-300">{siteConfig.about.founder.bodyOne}</p>
            <p className="mt-3 text-sm text-forge-300">{siteConfig.about.founder.bodyTwo}</p>
          </Card>
        </div>
      </Section>

      <Section className="bg-forge-850">
        <div className="mx-auto w-full max-w-6xl grid gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-forge-100">
              {siteConfig.about.philosophy.title}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-forge-200">
              {siteConfig.about.philosophy.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ember-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Card>
            <h3 className="text-lg font-semibold text-forge-100">{siteConfig.about.values.title}</h3>
            <div className="mt-4 grid gap-3 text-xs uppercase tracking-[0.3em] text-forge-200">
              {siteConfig.about.values.items.map((value) => (
                <div key={value} className="rounded-lg border border-forge-600 px-4 py-3">
                  {value}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="mx-auto w-full max-w-6xl text-center px-6">
          <h2 className="text-2xl font-semibold text-forge-100">{siteConfig.about.cta.title}</h2>
          <p className="mt-2 text-sm text-forge-300">{siteConfig.about.cta.subtitle}</p>
          <div className="mt-6 flex justify-center">
            <Button
              href={generateWhatsAppLink(
                siteConfig.whatsapp.messages.apply,
                siteConfig.whatsapp.phone
              )}
            >
              {siteConfig.about.cta.buttonLabel}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
