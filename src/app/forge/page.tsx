import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { faqs, howItWorks, tiers } from "@/content/copy";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata = {
  title: "FitFuel Forge | Coaching Programs",
  description:
    "Structured coaching built on accountability, measurable progress, and disciplined systems."
};

export default function ForgePage() {
  return (
    <div className="bg-charcoal">
      <section className="grid-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 md:px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-steel">
            FitFuel Forge
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase tracking-[0.2em] text-fog md:text-6xl">
            Coaching built like a system.
          </h1>
          <p className="mt-6 max-w-2xl text-sm text-steel md:text-base">
            FitFuel Forge is for professionals who value structure, precision,
            and results. We build plans around your schedule, then refine weekly
            with data.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href={buildWhatsAppLink("I want FitFuel Forge details.")}>
                WhatsApp Forge
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/pricing">View pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-graphite">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:px-6">
          <div>
            <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-fog">
              What it is
            </h2>
            <p className="mt-4 text-sm text-steel">
              A premium coaching system with clear training phases, nutrition
              guidance, recovery protocols, and ruthless accountability.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-fog">
              {[
                "Training plan engineered around goals and equipment.",
                "Nutrition guidance built for real schedules.",
                "Check-ins that force clarity and iteration."
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-fog">
              Who it is for
            </h2>
            <p className="mt-4 text-sm text-steel">
              Busy adults who want structure, disciplined training, and proof of
              progress. We work with gym-goers, founders, professionals, and
              committed first-timers.
            </p>
            <div className="mt-6 rounded-3xl border border-white/10 bg-charcoal p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-steel">
                FitFuel Principles
              </p>
              <p className="mt-4 text-sm text-fog">
                Discipline is the advantage. Systems beat motivation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
        <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-fog">
          Forge tiers
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="rounded-3xl border border-white/10 bg-graphite p-6"
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
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-steel">
                Limits
              </p>
              <ul className="mt-2 space-y-2 text-xs text-steel">
                {tier.limits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-graphite">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
          <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-fog">
            What&apos;s included
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              "Training plan + progression tracking",
              "Nutrition guidance with flexible targets",
              "Weekly accountability check-ins",
              "Progress photos + metrics review",
              "Recovery protocols + sleep goals",
              "Habit system for consistency"
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-charcoal p-5 text-sm text-fog"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
        <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-fog">
          Onboarding flow
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {howItWorks.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-graphite p-6 text-sm text-fog"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-steel">
                {step.title}
              </p>
              <p className="mt-4">{step.description}</p>
            </div>
          ))}
          <div className="rounded-3xl border border-white/10 bg-graphite p-6 text-sm text-fog">
            <p className="text-xs uppercase tracking-[0.3em] text-steel">
              Review
            </p>
            <p className="mt-4">
              We refine every cycle based on results and recovery metrics.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-graphite">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
          <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-fog">
            FAQ
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-white/10 bg-charcoal p-6"
              >
                <p className="text-sm text-fog">{faq.question}</p>
                <p className="mt-4 text-xs text-steel">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
