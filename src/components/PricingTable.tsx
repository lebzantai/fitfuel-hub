import { siteConfig } from "@/content/site";
import { Card } from "@/components/Card";

export function PricingTable() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {siteConfig.pricingTiers.map((tier) => (
        <Card key={tier.name} className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-forge-100">{tier.name}</h3>
            <p className="text-sm text-forge-300">{tier.for}</p>
          </div>
          <p className="text-2xl font-semibold text-ember-400">{tier.price}</p>
          <ul className="space-y-2 text-sm text-forge-200">
            {tier.includes.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-ember-400" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
