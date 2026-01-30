import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { FAQAccordion } from "@/components/FAQAccordion";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: siteConfig.pageTitles.faq,
  description: siteConfig.hero.faq.subtitle
};

export default function FAQPage() {
  return (
    <div>
      <Hero
        title={siteConfig.hero.faq.title}
        subtitle={siteConfig.hero.faq.subtitle}
        eyebrow={siteConfig.eyebrows.faq}
      />

      <Section>
        <div className="mx-auto w-full max-w-6xl space-y-8 px-6">
          <FAQAccordion />
        </div>
      </Section>
    </div>
  );
}
