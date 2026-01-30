import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/Button";
import { siteConfig } from "@/content/site";
import { generateWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: siteConfig.pageTitles.sponsors,
  description: siteConfig.hero.sponsors.subtitle
};

export default function SponsorsPage() {
  return (
    <div>
      <Hero
        title={siteConfig.hero.sponsors.title}
        subtitle={siteConfig.hero.sponsors.subtitle}
        primaryAction={{
          label: siteConfig.sponsors.buttonLabel,
          href: generateWhatsAppLink(
            siteConfig.whatsapp.messages.games,
            siteConfig.whatsapp.phone
          )
        }}
        secondaryAction={{ label: siteConfig.hero.games.title, href: "/games" }}
        eyebrow={siteConfig.eyebrows.sponsors}
      />

      <Section>
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {siteConfig.games.sponsors.tiers.map((tier) => (
              <Card key={tier.title}>
                <h3 className="text-lg font-semibold text-forge-100">{tier.title}</h3>
                <p className="text-sm text-forge-300">{tier.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-forge-850">
        <div className="mx-auto w-full max-w-6xl items-start gap-10 px-6 md:grid md:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-forge-100">{siteConfig.sponsors.ctaTitle}</h2>
            <p className="text-sm text-forge-300">{siteConfig.sponsors.ctaSubtitle}</p>
            <Button
              href={generateWhatsAppLink(
                siteConfig.whatsapp.messages.games,
                siteConfig.whatsapp.phone
              )}
            >
              {siteConfig.sponsors.buttonLabel}
            </Button>
          </div>
          <LeadForm
            title={siteConfig.sponsors.formTitle}
            description={siteConfig.sponsors.formDescription}
            source="sponsor"
            buttonLabel={siteConfig.labels.submitInterest}
            messageOverride={siteConfig.whatsapp.messages.games}
          />
        </div>
      </Section>
    </div>
  );
}
