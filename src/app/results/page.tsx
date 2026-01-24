import { metrics, testimonials } from "@/content/copy";

export const metadata = {
  title: "FitFuel Results | Proof",
  description:
    "Proof-led results built on systems, accountability, and measurable output."
};

export default function ResultsPage() {
  return (
    <div className="bg-charcoal">
      <section className="grid-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 md:px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-steel">
            Results / Proof
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase tracking-[0.2em] text-fog md:text-6xl">
            Measurable output. Documented.
          </h1>
          <p className="mt-6 max-w-2xl text-sm text-steel md:text-base">
            FitFuel measures progress across strength, composition, and
            consistency. We track output, refine the plan, and document wins.
          </p>
        </div>
      </section>

      <section className="bg-graphite">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
          <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-fog">
            Testimonials
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-white/10 bg-charcoal p-6"
              >
                <p className="text-sm text-fog">“{item.quote}”</p>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-steel">
                  {item.name} — {item.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
        <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-fog">
          Before / After
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-graphite p-6"
            >
              <div className="h-48 rounded-2xl border border-white/10 bg-charcoal" />
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-steel">
                Placeholder transformation
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-graphite">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
          <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-fog">
            Metrics
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-charcoal p-5"
              >
                <p className="text-lg font-semibold text-fog">{metric.value}</p>
                <p className="text-xs text-steel">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
        <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-fog">
          Case study template
        </h2>
        <div className="mt-8 rounded-3xl border border-white/10 bg-graphite p-8">
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-steel">
                Client
              </p>
              <p className="mt-2 text-sm text-fog">
                Working professional, 34, managing high-stress workload.
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-steel">
                Objective
              </p>
              <p className="mt-2 text-sm text-fog">
                Build strength and routine consistency without overtraining.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-steel">
                Outcome
              </p>
              <p className="mt-2 text-sm text-fog">
                Strength up 15%. Body composition improved. Schedule now
                stabilized with 4 sessions/week.
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-steel">
                System
              </p>
              <p className="mt-2 text-sm text-fog">
                Periodized training + habit loop tracking + fortnightly review.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
