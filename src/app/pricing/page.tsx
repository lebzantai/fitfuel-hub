import Link from "next/link";
import { Button } from "@/components/ui/button";
import { pricingTable, tiers } from "@/content/copy";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata = {
  title: "FitFuel Pricing | Memberships",
  description:
    "Clear tiers for FitFuel Forge coaching and premium support."
};

export default function PricingPage() {
  return (
    <div className="bg-charcoal">
      <section className="grid-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 md:px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-steel">
            Pricing
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase tracking-[0.2em] text-fog md:text-6xl">
            Choose your level of precision.
          </h1>
          <p className="mt-6 max-w-2xl text-sm text-steel md:text-base">
            Three tiers. Each one delivers structure, accountability, and
            measurable progress. Upgrade any time.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="rounded-3xl border border-black/10 bg-graphite p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-steel">
                {tier.name}
              </p>
              <p className="mt-3 text-2xl font-semibold text-fog">
                {tier.price}
              </p>
              <p className="mt-4 text-sm text-steel">{tier.focus}</p>
              <ul className="mt-4 space-y-2 text-sm text-fog">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6 w-full">
                <Link
                  href={buildWhatsAppLink(`I want ${tier.name} details.`)}
                >
                  Start now
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-graphite">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
          <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-fog">
            Comparison
          </h2>
          <div className="mt-8 overflow-hidden rounded-3xl border border-black/10">
            <table className="w-full text-left text-sm text-fog">
              <thead className="bg-charcoal text-xs uppercase tracking-[0.3em] text-steel">
                <tr>
                  <th className="px-6 py-4">Feature</th>
                  <th className="px-6 py-4">Core</th>
                  <th className="px-6 py-4">Prime</th>
                  <th className="px-6 py-4">Black</th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((row) => (
                  <tr key={row.feature} className="border-t border-black/10">
                    <td className="px-6 py-4 text-steel">{row.feature}</td>
                    <td className="px-6 py-4">
                      {row.core ? "Included" : "—"}
                    </td>
                    <td className="px-6 py-4">
                      {row.prime ? "Included" : "—"}
                    </td>
                    <td className="px-6 py-4">
                      {row.black ? "Included" : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/forge">Explore Forge</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Talk to FitFuel</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
