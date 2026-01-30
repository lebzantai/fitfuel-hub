import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/Button";
import { siteConfig } from "@/content/site";
import { generateWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: siteConfig.pageTitles.games,
  description: siteConfig.hero.games.subtitle
};

export default function GamesPage() {
  return (
    <div>
      <Hero
        title={siteConfig.hero.games.title}
        subtitle={siteConfig.hero.games.subtitle}
        primaryAction={{
          label: siteConfig.labels.registerInterest,
          href: generateWhatsAppLink(
            siteConfig.whatsapp.messages.games,
            siteConfig.whatsapp.phone
          )
        }}
        secondaryAction={{ label: siteConfig.labels.sponsors, href: "/sponsors" }}
        eyebrow={siteConfig.eyebrows.games}
      />

      <Section>
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <div>
            <h2 className="text-2xl font-semibold text-forge-100">{siteConfig.games.purpose.title}</h2>
            <p className="text-sm text-forge-300">{siteConfig.games.purpose.subtitle}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {siteConfig.games.purpose.items.map((item) => (
              <Card key={item}>
                <p className="text-sm text-forge-200">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-forge-850">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <div>
            <h2 className="text-2xl font-semibold text-forge-100">{siteConfig.games.format.title}</h2>
            <p className="text-sm text-forge-300">{siteConfig.games.format.subtitle}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {siteConfig.games.format.items.map((item) => (
              <Card key={item}>
                <p className="text-sm text-forge-200">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <div>
            <h2 className="text-2xl font-semibold text-forge-100">{siteConfig.games.sponsors.title}</h2>
            <p className="text-sm text-forge-300">{siteConfig.games.sponsors.subtitle}</p>
          </div>
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
            <h2 className="text-2xl font-semibold text-forge-100">{siteConfig.games.volunteer.title}</h2>
            <p className="text-sm text-forge-300">{siteConfig.games.volunteer.subtitle}</p>
            <Button href="/contact" variant="secondary">
              {siteConfig.games.volunteer.buttonLabel}
            </Button>
          </div>
          <LeadForm
            title={siteConfig.games.volunteer.formTitle}
            description={siteConfig.games.volunteer.formDescription}
            source="games"
            buttonLabel={siteConfig.labels.registerInterest}
            messageOverride={siteConfig.whatsapp.messages.games}
          />
        </div>
      </Section>
    </div>
  );
}
