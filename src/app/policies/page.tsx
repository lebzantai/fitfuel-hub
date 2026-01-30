import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: siteConfig.pageTitles.policies,
  description: siteConfig.hero.policies.subtitle
};

function PolicyBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-forge-100">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-forge-200">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ember-400" />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default function PoliciesPage() {
  return (
    <div>
      <Hero
        title={siteConfig.hero.policies.title}
        subtitle={siteConfig.hero.policies.subtitle}
        eyebrow={siteConfig.eyebrows.policies}
      />

      <Section>
        <div className="mx-auto w-full max-w-6xl grid gap-6 px-6 md:grid-cols-2">
          <PolicyBlock title={siteConfig.policies.titles.terms} items={siteConfig.policies.terms} />
          <PolicyBlock title={siteConfig.policies.titles.privacy} items={siteConfig.policies.privacy} />
          <PolicyBlock title={siteConfig.policies.titles.payments} items={siteConfig.policies.payments} />
          <PolicyBlock title={siteConfig.policies.titles.refunds} items={siteConfig.policies.refunds} />
          <PolicyBlock title={siteConfig.policies.titles.conduct} items={siteConfig.policies.conduct} />
          <PolicyBlock title={siteConfig.policies.titles.commitment} items={siteConfig.policies.commitment} />
        </div>
      </Section>
    </div>
  );
}
