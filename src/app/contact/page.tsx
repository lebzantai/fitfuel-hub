import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { LeadForm } from "@/components/LeadForm";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { siteConfig } from "@/content/site";
import { generateWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: siteConfig.pageTitles.contact,
  description: siteConfig.hero.contact.subtitle
};

export default function ContactPage() {
  return (
    <div>
      <Hero
        title={siteConfig.hero.contact.title}
        subtitle={siteConfig.hero.contact.subtitle}
        primaryAction={{
          label: siteConfig.labels.whatsappNow,
          href: generateWhatsAppLink(
            siteConfig.whatsapp.messages.contact,
            siteConfig.whatsapp.phone
          )
        }}
        secondaryAction={{ label: siteConfig.labels.apply, href: "/apply" }}
        eyebrow={siteConfig.eyebrows.contact}
      />

      <Section>
        <div className="mx-auto w-full max-w-6xl items-start gap-10 px-6 md:grid md:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-forge-100">
              {siteConfig.contact.whatsapp.title}
            </h2>
            <p className="text-sm text-forge-300">{siteConfig.contact.whatsapp.subtitle}</p>
            <Button
              href={generateWhatsAppLink(
                siteConfig.whatsapp.messages.contact,
                siteConfig.whatsapp.phone
              )}
            >
              {siteConfig.contact.whatsapp.buttonLabel}
            </Button>
            <Card>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-forge-100">
                {siteConfig.contact.hoursTitle}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-forge-300">
                {siteConfig.contact.hours.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-forge-100">
                {siteConfig.contact.standardsTitle}
              </h3>
              <p className="mt-3 text-sm text-forge-300">{siteConfig.contact.standardsNote}</p>
            </Card>
          </div>
          <LeadForm
            title={siteConfig.contact.form.title}
            description={siteConfig.contact.form.description}
            source="contact"
            messageOverride={siteConfig.whatsapp.messages.contact}
          />
        </div>
      </Section>

      <Section className="bg-forge-850">
        <div className="mx-auto w-full max-w-6xl space-y-6 px-6">
          <h2 className="text-2xl font-semibold text-forge-100">{siteConfig.contact.map.title}</h2>
          <div className="flex h-64 items-center justify-center rounded-2xl border border-forge-600/60 bg-forge-800/60 text-xs uppercase tracking-[0.3em] text-forge-300">
            {siteConfig.contact.map.label}
          </div>
        </div>
      </Section>
    </div>
  );
}
