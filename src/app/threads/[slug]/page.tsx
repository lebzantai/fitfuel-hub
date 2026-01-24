import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { products, sizeGuide } from "@/data/products";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const dynamicParams = false;

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-charcoal">
      <section className="grid-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
          <Link href="/threads" className="text-xs uppercase tracking-[0.3em] text-steel">
            Back to Threads
          </Link>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div className="h-80 rounded-3xl border border-white/10 bg-graphite" />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-steel">
                {product.tags.join(" • ")}
              </p>
              <h1 className="mt-4 font-display text-4xl uppercase tracking-[0.2em] text-fog">
                {product.name}
              </h1>
              <p className="mt-4 text-lg font-semibold text-fog">
                {product.price}
              </p>
              <p className="mt-4 text-sm text-steel">{product.description}</p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-graphite p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-steel">
                  Fabric + Fit
                </p>
                <p className="mt-3 text-sm text-fog">
                  Premium, matte finish with reinforced seams and precise cut
                  for training or daily wear.
                </p>
              </div>
              <Button asChild size="lg" className="mt-6">
                <Link
                  href={buildWhatsAppLink(
                    `I want ${product.name} in size [size].`
                  )}
                >
                  Order via WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-graphite">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
          <h2 className="font-display text-3xl uppercase tracking-[0.2em] text-fog">
            Size guide
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {sizeGuide.map((size) => (
              <div
                key={size.size}
                className="rounded-2xl border border-white/10 bg-charcoal p-5 text-sm text-fog"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-steel">
                  {size.size}
                </p>
                <p className="mt-2">Chest: {size.chest}</p>
                <p>Waist: {size.waist}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
