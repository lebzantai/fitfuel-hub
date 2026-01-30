import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { Button } from "@/components/Button";
import { siteConfig } from "@/content/site";
import { generateWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: siteConfig.pageTitles.results,
  description: siteConfig.hero.results.subtitle
};

export default function ResultsPage() {
  return (
    <div>
      <Hero
        title={siteConfig.hero.results.title}
        subtitle={siteConfig.hero.results.subtitle}
        primaryAction={{
          label: siteConfig.labels.applyOnWhatsApp,
          href: generateWhatsAppLink(
            siteConfig.whatsapp.messages.apply,
            siteConfig.whatsapp.phone
          )
        }}
        secondaryAction={{ label: siteConfig.labels.pricing, href: "/pricing" }}
        eyebrow={siteConfig.eyebrows.results}
      />

      <Section>
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <div>
            <h2 className="text-2xl font-semibold text-forge-100">
              {siteConfig.results.testimonials.title}
            </h2>
            <p className="text-sm text-forge-300">{siteConfig.results.testimonials.subtitle}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {siteConfig.testimonials.map((item) => (
              <Card key={item.name} className="space-y-3">
                <p className="text-sm text-forge-200">“{item.quote}”</p>
                <p className="text-xs uppercase tracking-[0.3em] text-ember-400">{item.name}</p>
                <p className="text-xs text-forge-400">{item.result}</p>
              </Card>
            ))}
          </div>
          <TestimonialSlider />
        </div>
      </Section>

      <Section className="bg-forge-850">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <div>
            <h2 className="text-2xl font-semibold text-forge-100">
              {siteConfig.results.standards.title}
            </h2>
            <p className="text-sm text-forge-300">{siteConfig.results.standards.subtitle}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {siteConfig.results.standards.items.map((item) => (
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
              {siteConfig.results.gallery.title}
            </h2>
            <p className="text-sm text-forge-300">{siteConfig.results.gallery.subtitle}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={`placeholder-${index}`}
                className="flex h-48 items-center justify-center rounded-2xl border border-forge-600/60 bg-gradient-to-br from-forge-800 to-forge-700 text-xs uppercase tracking-[0.3em] text-forge-300"
              >
                {siteConfig.results.gallery.placeholderLabel} {index + 1}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-forge-850">
        <div className="mx-auto w-full max-w-6xl text-center px-6">
          <h2 className="text-2xl font-semibold text-forge-100">
            {siteConfig.results.finalCta.title}
          </h2>
          <p className="mt-2 text-sm text-forge-300">{siteConfig.results.finalCta.subtitle}</p>
          <div className="mt-6 flex justify-center">
            <Button
              href={generateWhatsAppLink(
                siteConfig.whatsapp.messages.apply,
                siteConfig.whatsapp.phone
              )}
            >
              {siteConfig.results.finalCta.buttonLabel}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
