import { siteConfig } from "@/content/site";
import { Card } from "@/components/Card";

export function OfferCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {siteConfig.forge.offerCards.map((offer) => (
        <Card key={offer.title} className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-forge-100">{offer.title}</h3>
            <p className="text-sm text-forge-300">{offer.description}</p>
          </div>
          <ul className="space-y-2 text-sm text-forge-200">
            {offer.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-ember-400" />
                {bullet}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
