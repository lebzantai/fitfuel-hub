"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site";
import { Card } from "@/components/Card";

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const testimonials = siteConfig.testimonials;
  const active = testimonials[index % testimonials.length];

  return (
    <Card className="space-y-4">
      <p className="text-lg text-forge-100">“{active.quote}”</p>
      <div className="text-sm text-forge-300">
        <span className="font-semibold text-forge-100">{active.name}</span> — {active.result}
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
          className="text-xs uppercase tracking-[0.3em] text-forge-300 hover:text-ember-400"
        >
          {siteConfig.labels.prev}
        </button>
        <button
          type="button"
          onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
          className="text-xs uppercase tracking-[0.3em] text-forge-300 hover:text-ember-400"
        >
          {siteConfig.labels.next}
        </button>
      </div>
    </Card>
  );
}
