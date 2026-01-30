import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { PricingTable } from "@/components/PricingTable";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { siteConfig } from "@/content/site";
import { generateWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: siteConfig.pageTitles.pricing,
  description: siteConfig.hero.pricing.subtitle
};

export default function PricingPage() {
  return (
    <div>
      <Hero
        title={siteConfig.hero.pricing.title}
        subtitle={siteConfig.hero.pricing.subtitle}
        primaryAction={{
          label: siteConfig.labels.applyOnWhatsApp,
          href: generateWhatsAppLink(
            siteConfig.whatsapp.messages.apply,
            siteConfig.whatsapp.phone
          )
        }}
        secondaryAction={{ label: siteConfig.labels.contact, href: "/contact" }}
        eyebrow={siteConfig.eyebrows.pricing}
      />

      <Section>
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <div>
            <h2 className="text-2xl font-semibold text-forge-100">
              {siteConfig.pricing.tiers.title}
            </h2>
            <p className="text-sm text-forge-300">{siteConfig.pricing.tiers.subtitle}</p>
          </div>
          <PricingTable />
        </div>
      </Section>

      <Section className="bg-forge-850">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <div>
            <h2 className="text-2xl font-semibold text-forge-100">
              {siteConfig.pricing.comparison.title}
            </h2>
            <p className="text-sm text-forge-300">{siteConfig.pricing.comparison.subtitle}</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-forge-600/60 bg-forge-800/70">
            <table className="w-full text-left text-sm text-forge-200">
              <thead className="bg-forge-800 text-xs uppercase tracking-[0.3em] text-forge-300">
                <tr>
                  {siteConfig.pricing.comparison.headings.map((heading) => (
                    <th key={heading} className="px-6 py-4">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {siteConfig.pricingComparison.map((row) => (
                  <tr key={row.label} className="border-t border-forge-700">
                    <td className="px-6 py-4 text-forge-100">{row.label}</td>
                    <td className="px-6 py-4">{row.essential}</td>
                    <td className="px-6 py-4">{row.forge}</td>
                    <td className="px-6 py-4">{row.sovereign}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {siteConfig.pricingAddOns.map((item) => (
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
            <h2 className="text-2xl font-semibold text-forge-100">{siteConfig.pricing.faq.title}</h2>
            <p className="text-sm text-forge-300">{siteConfig.pricing.faq.subtitle}</p>
          </div>
          <FAQAccordion />
        </div>
      </Section>

      <Section className="bg-forge-850">
        <div className="mx-auto w-full max-w-6xl text-center px-6">
          <h2 className="text-2xl font-semibold text-forge-100">
            {siteConfig.pricing.finalCta.title}
          </h2>
          <p className="mt-2 text-sm text-forge-300">{siteConfig.pricing.finalCta.subtitle}</p>
          <div className="mt-6 flex justify-center">
            <Button
              href={generateWhatsAppLink(
                siteConfig.whatsapp.messages.apply,
                siteConfig.whatsapp.phone
              )}
            >
              {siteConfig.pricing.finalCta.buttonLabel}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
