import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/Button";
import { siteConfig } from "@/content/site";
import { generateWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: siteConfig.pageTitles.threads,
  description: siteConfig.hero.threads.subtitle
};

export default function ThreadsPage() {
  return (
    <div>
      <Hero
        title={siteConfig.hero.threads.title}
        subtitle={siteConfig.hero.threads.subtitle}
        primaryAction={{
          label: siteConfig.labels.joinWaitlist,
          href: generateWhatsAppLink(
            siteConfig.whatsapp.messages.threads,
            siteConfig.whatsapp.phone
          )
        }}
        secondaryAction={{ label: siteConfig.labels.contact, href: "/contact" }}
        eyebrow={siteConfig.eyebrows.threads}
      />

      <Section>
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <div>
            <h2 className="text-2xl font-semibold text-forge-100">
              {siteConfig.threads.quality.title}
            </h2>
            <p className="text-sm text-forge-300">{siteConfig.threads.quality.subtitle}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {siteConfig.threads.quality.items.map((item) => (
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
              {siteConfig.threads.categories.title}
            </h2>
            <p className="text-sm text-forge-300">{siteConfig.threads.categories.subtitle}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-5">
            {siteConfig.threads.categories.items.map((item) => (
              <Card key={item}>
                <p className="text-sm text-forge-200">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto w-full max-w-6xl items-start gap-10 px-6 md:grid md:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-forge-100">{siteConfig.threads.drops.title}</h2>
            <p className="text-sm text-forge-300">{siteConfig.threads.drops.subtitle}</p>
            <Button
              href={generateWhatsAppLink(
                siteConfig.whatsapp.messages.threads,
                siteConfig.whatsapp.phone
              )}
            >
              {siteConfig.threads.drops.buttonLabel}
            </Button>
          </div>
          <LeadForm
            title={siteConfig.threads.drops.formTitle}
            description={siteConfig.threads.drops.formDescription}
            source="threads"
            buttonLabel={siteConfig.labels.joinWaitlist}
            messageOverride={siteConfig.whatsapp.messages.threads}
          />
        </div>
      </Section>

      <Section className="bg-forge-850">
        <div className="mx-auto w-full max-w-6xl grid gap-6 px-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-forge-100">{siteConfig.threads.sizeGuide.title}</h3>
            <p className="text-sm text-forge-300">{siteConfig.threads.sizeGuide.subtitle}</p>
            <div className="mt-4 grid grid-cols-4 gap-2 text-xs text-forge-200">
              {siteConfig.threads.sizeGuide.sizes.map((size) => (
                <div key={size} className="rounded-lg border border-forge-600 px-3 py-2 text-center">
                  {size}
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-forge-100">{siteConfig.threads.care.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-forge-200">
              {siteConfig.threads.care.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember-400" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>
    </div>
  );
}
