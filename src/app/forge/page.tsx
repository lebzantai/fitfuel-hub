import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { OfferCards } from "@/components/OfferCards";
import { Card } from "@/components/Card";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { FAQAccordion } from "@/components/FAQAccordion";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/Button";
import { siteConfig } from "@/content/site";
import { generateWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: siteConfig.pageTitles.forge,
  description: siteConfig.hero.forge.subtitle
};

export default function ForgePage() {
  return (
    <div>
      <Hero
        title={siteConfig.hero.forge.title}
        subtitle={siteConfig.hero.forge.subtitle}
        primaryAction={{
          label: siteConfig.labels.applyOnWhatsApp,
          href: generateWhatsAppLink(
            siteConfig.whatsapp.messages.forge,
            siteConfig.whatsapp.phone
          )
        }}
        secondaryAction={{ label: siteConfig.labels.viewPricing, href: "/pricing" }}
        eyebrow={siteConfig.eyebrows.forge}
      />

      <Section>
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <div>
            <h2 className="text-2xl font-semibold text-forge-100">
              {siteConfig.forge.offerings.title}
            </h2>
            <p className="text-sm text-forge-300">{siteConfig.forge.offerings.subtitle}</p>
          </div>
          <OfferCards />
        </div>
      </Section>

      <Section className="bg-forge-850">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <div>
            <h2 className="text-2xl font-semibold text-forge-100">
              {siteConfig.forge.includes.title}
            </h2>
            <p className="text-sm text-forge-300">{siteConfig.forge.includes.subtitle}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {siteConfig.forge.includes.items.map((item) => (
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
            <h2 className="text-2xl font-semibold text-forge-100">
              {siteConfig.forge.standards.title}
            </h2>
            <p className="text-sm text-forge-300">{siteConfig.forge.standards.subtitle}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {siteConfig.forge.standards.items.map((item) => (
              <Card key={item}>
                <p className="text-sm text-forge-200">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-forge-850">
        <div className="mx-auto w-full max-w-6xl items-center gap-10 px-6 md:grid md:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-forge-100">
              {siteConfig.forge.tracking.title}
            </h2>
            <p className="text-sm text-forge-300">{siteConfig.forge.tracking.subtitle}</p>
          </div>
          <Card>
            <ul className="space-y-3 text-sm text-forge-200">
              {siteConfig.forge.tracking.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-forge-100">
                {siteConfig.forge.testimonials.title}
              </h2>
              <p className="text-sm text-forge-300">{siteConfig.forge.testimonials.subtitle}</p>
            </div>
            <Button href="/results" variant="secondary" size="sm">
              {siteConfig.forge.testimonials.cta}
            </Button>
          </div>
          <TestimonialSlider />
        </div>
      </Section>

      <Section className="bg-forge-850">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <div>
            <h2 className="text-2xl font-semibold text-forge-100">
              {siteConfig.forge.faq.title}
            </h2>
            <p className="text-sm text-forge-300">{siteConfig.forge.faq.subtitle}</p>
          </div>
          <FAQAccordion />
        </div>
      </Section>

      <Section>
        <div className="mx-auto w-full max-w-6xl items-start gap-10 px-6 md:grid md:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-forge-100">
              {siteConfig.forge.cta.title}
            </h2>
            <p className="text-sm text-forge-300">{siteConfig.forge.cta.subtitle}</p>
            <Button
              href={generateWhatsAppLink(
                siteConfig.whatsapp.messages.forge,
                siteConfig.whatsapp.phone
              )}
            >
              {siteConfig.forge.cta.buttonLabel}
            </Button>
          </div>
          <LeadForm
            title={siteConfig.forge.cta.formTitle}
            description={siteConfig.forge.cta.formDescription}
            source="forge"
            messageOverride={siteConfig.whatsapp.messages.forge}
          />
        </div>
      </Section>
    </div>
  );
}
