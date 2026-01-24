import { principles, manifestoLong } from "@/content/copy";

export const metadata = {
  title: "About FitFuel | Philosophy",
  description:
    "The FitFuel philosophy is built on discipline, pressure, and measurable systems."
};

export default function AboutPage() {
  return (
    <div className="bg-charcoal">
      <section className="grid-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 md:px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-steel">
            About FitFuel
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase tracking-[0.2em] text-fog md:text-6xl">
            A brand forged through pressure.
          </h1>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {manifestoLong.map((paragraph) => (
              <p key={paragraph} className="text-sm text-steel md:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-graphite">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
          <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-fog">
            The manifesto
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              "Discipline is the advantage.",
              "Systems beat motivation.",
              "The Forge: you are built through pressure.",
              "We measure. We refine. We execute.",
              "No noise. No excuses. Just output."
            ].map((line) => (
              <div
                key={line}
                className="rounded-3xl border border-black/10 bg-charcoal p-6 text-sm text-fog"
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
        <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-fog">
          Principles
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {principles.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-black/10 bg-graphite p-5 text-sm text-fog"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
