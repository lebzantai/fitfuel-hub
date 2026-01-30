"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site";

export function FAQAccordion({ limit }: { limit?: number }) {
  const items = limit ? siteConfig.faqs.slice(0, limit) : siteConfig.faqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((faq, index) => {
        const open = openIndex === index;
        return (
          <div
            key={faq.question}
            className="rounded-2xl border border-forge-600/60 bg-forge-800/70"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full items-center justify-between px-6 py-4 text-left text-sm text-forge-100"
            >
              <span>{faq.question}</span>
              <span className="text-ember-400">{open ? "-" : "+"}</span>
            </button>
            {open ? (
              <div className="px-6 pb-4 text-sm text-forge-300">{faq.answer}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
