import Link from "next/link";
import { Button } from "@/components/ui/button";
import { contactMessages } from "@/content/copy";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata = {
  title: "Contact FitFuel | WhatsApp",
  description:
    "Connect with FitFuel via WhatsApp for coaching, apparel orders, or event registration."
};

export default function ContactPage() {
  return (
    <div className="bg-charcoal">
      <section className="grid-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 md:px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-steel">
            Contact
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase tracking-[0.2em] text-fog md:text-6xl">
            WhatsApp-first. Precision response.
          </h1>
          <p className="mt-6 max-w-2xl text-sm text-steel md:text-base">
            Start with WhatsApp for fast action. If you want a structured
            callback, complete the form and we will follow up.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Forge enrollment",
              message: contactMessages.forge
            },
            {
              title: "Apparel order",
              message: contactMessages.apparel
            },
            {
              title: "FitFuel Games",
              message: contactMessages.games
            }
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/10 bg-graphite p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-steel">
                {card.title}
              </p>
              <p className="mt-3 text-sm text-fog">{card.message}</p>
              <Button asChild className="mt-6 w-full">
                <Link href={buildWhatsAppLink(card.message)}>
                  WhatsApp now
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-graphite">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
          <div>
            <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-fog">
              Contact form
            </h2>
            <p className="mt-4 text-sm text-steel">
              Provide your details and we will craft a response within 24 hours.
            </p>
            <div className="mt-6 space-y-4 text-sm text-fog">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-steel">
                  Location
                </p>
                <p className="mt-2">Westonaria, Gauteng</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-steel">
                  Email
                </p>
                <p className="mt-2">lebzantai@gmail.com</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-steel">
                  Business hours
                </p>
                <p className="mt-2">Mon - Sat, 6am to 7pm</p>
              </div>
            </div>
          </div>
          <form className="rounded-3xl border border-white/10 bg-charcoal p-6">
            <label className="text-xs uppercase tracking-[0.3em] text-steel">
              Name
              <input
                type="text"
                name="name"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-graphite px-4 py-3 text-sm text-fog focus:border-accent focus:outline-none"
                placeholder="Full name"
              />
            </label>
            <label className="mt-4 block text-xs uppercase tracking-[0.3em] text-steel">
              Phone
              <input
                type="tel"
                name="phone"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-graphite px-4 py-3 text-sm text-fog focus:border-accent focus:outline-none"
                placeholder="+27"
              />
            </label>
            <label className="mt-4 block text-xs uppercase tracking-[0.3em] text-steel">
              Goal
              <input
                type="text"
                name="goal"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-graphite px-4 py-3 text-sm text-fog focus:border-accent focus:outline-none"
                placeholder="Strength, fat loss, structure"
              />
            </label>
            <label className="mt-4 block text-xs uppercase tracking-[0.3em] text-steel">
              Budget range
              <select
                name="budget"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-graphite px-4 py-3 text-sm text-fog focus:border-accent focus:outline-none"
              >
                <option>R1,000 - R2,000</option>
                <option>R2,000 - R4,000</option>
                <option>R4,000+</option>
              </select>
            </label>
            <Button className="mt-6 w-full" type="submit">
              Send request
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
