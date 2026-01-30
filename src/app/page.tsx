"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  howItWorks,
  manifestoShort,
  metrics,
  principles,
  testimonials
} from "@/content/copy";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 }
};

export default function HomePage() {
  return (
    <div className="bg-charcoal">
      <section className="grid-border relative overflow-hidden">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-20 md:flex-row md:items-center md:px-6">
          <div className="flex-1 space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-steel">
              FitFuel — Discipline Built
            </p>
            <h1 className="font-display text-4xl uppercase tracking-[0.2em] text-fog md:text-6xl">
              Forge the body. Forge the mind.
            </h1>
            <p className="max-w-xl text-base text-steel md:text-lg">
              Systems over hype. FitFuel is a premium fitness brand delivering
              disciplined coaching, elite apparel, and events engineered for
              measurable output.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">WhatsApp Us</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/forge">Explore Forge</Link>
              </Button>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-steel">
              {manifestoShort}
            </p>
          </div>
          <motion.div
            className="flex-1 rounded-3xl border border-black/10 bg-graphite p-8 shadow-soft"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-steel">
                  The FitFuel Standard
                </p>
                <ShieldCheck className="h-5 w-5 text-accent" />
              </div>
              <ul className="space-y-3 text-sm text-fog">
                {principles.slice(0, 5).map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-black/10 bg-charcoal p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-steel">
                  Results Preview
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-fog">
                  {metrics.slice(0, 2).map((metric) => (
                    <div key={metric.label}>
                      <p className="text-lg font-semibold">{metric.value}</p>
                      <p className="text-xs text-steel">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-graphite">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-6 px-4 py-10 text-xs uppercase tracking-[0.3em] text-steel md:grid-cols-4 md:px-6">
          <span>Trusted by Gauteng founders</span>
          <span>Used by shift workers</span>
          <span>Proof-led athletes</span>
          <span>Disciplined teams</span>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "FitFuel Forge",
              description:
                "Structured coaching built on measurable progress and accountable systems.",
              href: "/forge"
            },
            {
              title: "FitFuel Threads",
              description:
                "Luxury performance apparel engineered for identity and precision.",
              href: "/threads"
            },
            {
              title: "FitFuel Games",
              description:
                "High-output events that test strength, discipline, and community.",
              href: "/games"
            }
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-black/10 bg-graphite p-8"
            >
              <h3 className="font-display text-2xl uppercase tracking-[0.2em] text-fog">
                {item.title}
              </h3>
              <p className="mt-4 text-sm text-steel">{item.description}</p>
              <Link
                href={item.href}
                className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent"
              >
                Enter
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-graphite">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-fog">
              The FitFuel Standard
            </h2>
            <Sparkles className="h-5 w-5 text-accent" />
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {principles.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-black/10 bg-charcoal p-5 text-sm text-fog"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
        <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-fog">
          How it works
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {howItWorks.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-black/10 bg-graphite p-8"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-steel">
                {step.title}
              </p>
              <p className="mt-4 text-sm text-fog">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-graphite">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
          <div className="rounded-3xl border border-black/10 bg-charcoal p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-steel">
              Featured program
            </p>
            <h3 className="mt-4 font-display text-3xl uppercase tracking-[0.2em] text-fog">
              Forge Prime
            </h3>
            <p className="mt-4 text-sm text-steel">
              High-touch coaching designed for ambitious professionals. Limited
              slots.
            </p>
            <Button asChild className="mt-6">
              <Link href="/pricing">View pricing</Link>
            </Button>
          </div>
          <div className="rounded-3xl border border-black/10 bg-charcoal p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-steel">
              Apparel drop
            </p>
            <h3 className="mt-4 font-display text-3xl uppercase tracking-[0.2em] text-fog">
              Drop 02: Blackout
            </h3>
            <p className="mt-4 text-sm text-steel">
              Precision-fit layers built for training and status-through-competence.
            </p>
            <Button asChild variant="secondary" className="mt-6">
              <Link href="/threads">Shop Threads</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-fog">
            Proof
          </h2>
          <Link
            href="/results"
            className="text-xs uppercase tracking-[0.3em] text-accent"
          >
            View Results
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-black/10 bg-graphite p-6"
            >
              <p className="text-sm text-fog">“{item.quote}”</p>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-steel">
                {item.name} — {item.location}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-black/10 bg-graphite p-4"
            >
              <p className="text-lg font-semibold text-fog">{metric.value}</p>
              <p className="text-xs text-steel">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-graphite">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-16 md:flex-row md:items-center md:justify-between md:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-steel">
              Ready to commit?
            </p>
            <h2 className="mt-4 font-display text-3xl uppercase tracking-[0.2em] text-fog">
              WhatsApp FitFuel. Start the system.
            </h2>
          </div>
          <Button asChild size="lg">
            <Link href={buildWhatsAppLink("I want to start with FitFuel.")}>
              WhatsApp Us
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
