import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata = {
  title: "FitFuel Threads | Premium Apparel",
  description:
    "Luxury performance apparel engineered for identity, precision fit, and durability."
};

export default function ThreadsPage() {
  return (
    <div className="bg-charcoal">
      <section className="grid-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 md:px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-steel">
            FitFuel Threads
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase tracking-[0.2em] text-fog md:text-6xl">
            Apparel built for precision and identity.
          </h1>
          <p className="mt-6 max-w-2xl text-sm text-steel md:text-base">
            Drop-based apparel that feels premium, fits sharp, and signals
            discipline. Every piece is engineered for repetition.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href={buildWhatsAppLink("I want to order FitFuel Threads.")}>
                Checkout via WhatsApp
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Size help</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-fog">
            Drop 02: Blackout
          </h2>
          <p className="text-xs uppercase tracking-[0.3em] text-steel">
            Limited release
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.slug}
              className="rounded-3xl border border-black/10 bg-graphite p-6"
            >
              <div className="relative h-40 overflow-hidden rounded-2xl border border-black/10 bg-charcoal/70">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-5 text-sm text-steel">{product.name}</p>
              <p className="mt-2 text-lg font-semibold text-fog">
                {product.price}
              </p>
              <p className="mt-3 text-xs text-steel">{product.description}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.3em] text-steel">
                {product.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-black/10 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild variant="secondary" className="mt-6 w-full">
                <Link href={`/threads/${product.slug}`}>View details</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-graphite">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
          <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-fog">
            The Drop System
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              "Limited releases to keep standards high.",
              "Every piece tested for fit, durability, and movement.",
              "Members get priority access via WhatsApp."
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-black/10 bg-charcoal p-6 text-sm text-fog"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
