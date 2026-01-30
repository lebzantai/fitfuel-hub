import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata = {
  title: "FitFuel Games | Events & Activations",
  description:
    "FitFuel Games are disciplined, scalable events that test strength, systems, and community."
};

export default function GamesPage() {
  return (
    <div className="bg-charcoal">
      <section className="grid-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 md:px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-steel">
            FitFuel Games
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase tracking-[0.2em] text-fog md:text-6xl">
            Events built for output.
          </h1>
          <p className="mt-6 max-w-2xl text-sm text-steel md:text-base">
            FitFuel Games are low-budget, high-discipline activations. We test
            strength, grit, and teamwork while showcasing the FitFuel standard.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href={buildWhatsAppLink("Register me for FitFuel Games.")}>
                Register interest
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Partner with us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-graphite">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:px-6">
          <div>
            <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-fog">
              Purpose
            </h2>
            <p className="mt-4 text-sm text-steel">
              Showcase disciplined performance, create local momentum, and
              connect the FitFuel community with measurable benchmarks.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-fog">
              Format
            </h2>
            <p className="mt-4 text-sm text-steel">
              Compact stations, timed challenges, and clear scoring. Scalable
              for gyms, corporate teams, or community pop-ups.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Categories",
              items: [
                "Individual strength",
                "Pairs endurance",
                "Team output",
                "Elite showcase"
              ]
            },
            {
              title: "Rules",
              items: [
                "Standardized rep counts",
                "Clock-based scoring",
                "Technique-first judging",
                "No ego lifting"
              ]
            },
            {
              title: "Partners",
              items: [
                "Local gyms",
                "Performance brands",
                "Nutrition partners",
                "Corporate sponsors"
              ]
            }
          ].map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-black/10 bg-graphite p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-steel">
                {section.title}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-fog">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-graphite">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-fog">
                Join the Games
              </h2>
              <p className="mt-4 text-sm text-steel">
                Register your interest and receive the next event brief.
              </p>
            </div>
            <Button asChild size="lg">
              <Link href={buildWhatsAppLink("I want to join FitFuel Games.")}>
                WhatsApp Registration
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
