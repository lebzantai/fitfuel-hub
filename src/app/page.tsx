import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { PricingTable } from "@/components/PricingTable";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { FAQAccordion } from "@/components/FAQAccordion";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/Button";
import { siteConfig } from "@/content/site";
import { generateWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: siteConfig.pageTitles.home,
  description: siteConfig.description
};

export default function HomePage() {
  return (
    <div>
      <Hero
        title={siteConfig.hero.home.title}
        subtitle={siteConfig.hero.home.subtitle}
        primaryAction={{
          label: siteConfig.hero.home.ctaPrimary,
          href: generateWhatsAppLink(
            siteConfig.whatsapp.messages.home,
            siteConfig.whatsapp.phone
          )
        }}
        secondaryAction={{
          label: siteConfig.hero.home.ctaSecondary,
          href: "/pricing"
        }}
        eyebrow={siteConfig.eyebrows.home}
      />

      <Section className="bg-forge-900">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6 rounded-2xl border border-forge-600/60 bg-forge-800/70 p-6 md:grid-cols-5">
            {siteConfig.trustRow.map((item) => (
              <div key={item} className="text-xs uppercase tracking-[0.3em] text-forge-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <div>
            <h2 className="text-2xl font-semibold text-forge-100">{siteConfig.home.theForge.title}</h2>
            <p className="text-sm text-forge-300">{siteConfig.home.theForge.subtitle}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {siteConfig.home.theForge.items.map((item) => (
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
            <h2 className="text-2xl font-semibold text-forge-100">
              {siteConfig.home.choosePath.title}
            </h2>
            <p className="text-sm text-forge-300">{siteConfig.home.choosePath.subtitle}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {siteConfig.home.choosePath.cards.map((item) => (
              <Card key={item.title} className="flex flex-col justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-forge-100">{item.title}</h3>
                  <p className="text-sm text-forge-300">{item.body}</p>
                </div>
                <Link href={item.href} className="text-xs uppercase tracking-[0.3em] text-ember-400">
                  {siteConfig.labels.explore}
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <div>
            <h2 className="text-2xl font-semibold text-forge-100">
              {siteConfig.home.standards.title}
            </h2>
            <p className="text-sm text-forge-300">{siteConfig.home.standards.subtitle}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {siteConfig.home.standards.items.map((item) => (
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
            <h2 className="text-2xl font-semibold text-forge-100">
              {siteConfig.home.howItWorks.title}
            </h2>
            <p className="text-sm text-forge-300">{siteConfig.home.howItWorks.subtitle}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-5">
            {siteConfig.home.howItWorks.steps.map((step, index) => (
              <Card key={step} className="text-center">
                <p className="text-xs uppercase tracking-[0.4em] text-ember-400">0{index + 1}</p>
                <p className="mt-2 text-sm text-forge-100">{step}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-forge-100">
                {siteConfig.home.resultsPreview.title}
              </h2>
              <p className="text-sm text-forge-300">{siteConfig.home.resultsPreview.subtitle}</p>
            </div>
            <Button href="/results" variant="secondary" size="sm">
              {siteConfig.home.resultsPreview.cta}
            </Button>
          </div>
          <TestimonialSlider />
        </div>
      </Section>

      <Section className="bg-forge-850">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-forge-100">
                {siteConfig.home.pricingPreview.title}
              </h2>
              <p className="text-sm text-forge-300">{siteConfig.home.pricingPreview.subtitle}</p>
            </div>
            <Button href="/pricing" variant="secondary" size="sm">
              {siteConfig.home.pricingPreview.cta}
            </Button>
          </div>
          <PricingTable />
        </div>
      </Section>

      <Section>
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <div>
            <h2 className="text-2xl font-semibold text-forge-100">
              {siteConfig.home.faqPreview.title}
            </h2>
            <p className="text-sm text-forge-300">{siteConfig.home.faqPreview.subtitle}</p>
          </div>
          <FAQAccordion limit={6} />
        </div>
      </Section>

      <Section className="bg-forge-850">
        <div className="mx-auto w-full max-w-6xl items-start gap-10 px-6 md:grid md:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-forge-100">
              {siteConfig.home.finalCta.title}
            </h2>
            <p className="text-sm text-forge-300">{siteConfig.home.finalCta.subtitle}</p>
            <Divider />
            <Button
              href={generateWhatsAppLink(
                siteConfig.whatsapp.messages.apply,
                siteConfig.whatsapp.phone
              )}
              size="lg"
            >
              {siteConfig.home.finalCta.buttonLabel}
            </Button>
          </div>
          <LeadForm
            title={siteConfig.home.finalCta.formTitle}
            description={siteConfig.home.finalCta.formDescription}
            source="home"
            messageOverride={siteConfig.whatsapp.messages.apply}
          />
        </div>
      </Section>
    </div>
  );
}
