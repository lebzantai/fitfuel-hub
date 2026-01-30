import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/Button";
import { siteConfig } from "@/content/site";
import { generateWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: siteConfig.pageTitles.apply,
  description: siteConfig.hero.apply.subtitle
};

export default function ApplyPage() {
  return (
    <div>
      <Hero
        title={siteConfig.hero.apply.title}
        subtitle={siteConfig.hero.apply.subtitle}
        primaryAction={{
          label: siteConfig.labels.whatsappNow,
          href: generateWhatsAppLink(
            siteConfig.whatsapp.messages.apply,
            siteConfig.whatsapp.phone
          )
        }}
        secondaryAction={{ label: siteConfig.labels.pricing, href: "/pricing" }}
        eyebrow={siteConfig.eyebrows.apply}
      />

      <Section>
        <div className="mx-auto w-full max-w-6xl items-start gap-10 px-6 md:grid md:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <Card>
              <h3 className="text-lg font-semibold text-forge-100">{siteConfig.apply.acceptTitle}</h3>
              <ul className="mt-4 space-y-2 text-sm text-forge-200">
                {siteConfig.apply.accept.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ember-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-forge-100">{siteConfig.apply.rejectTitle}</h3>
              <ul className="mt-4 space-y-2 text-sm text-forge-200">
                {siteConfig.apply.reject.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ember-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Button
              href={generateWhatsAppLink(
                siteConfig.whatsapp.messages.apply,
                siteConfig.whatsapp.phone
              )}
            >
              {siteConfig.apply.buttonLabel}
            </Button>
          </div>
          <LeadForm
            title={siteConfig.apply.formTitle}
            description={siteConfig.apply.formDescription}
            source="apply"
            messageOverride={siteConfig.whatsapp.messages.apply}
          />
        </div>
      </Section>
    </div>
  );
}
