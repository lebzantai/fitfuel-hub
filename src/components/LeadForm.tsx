"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { siteConfig } from "@/content/site";
import { generateWhatsAppLink } from "@/lib/utils";

type LeadFormProps = {
  title?: string;
  description?: string;
  source?: string;
  buttonLabel?: string;
  messageOverride?: string;
};

export function LeadForm({
  title = siteConfig.forms.defaultTitle,
  description = siteConfig.forms.defaultDescription,
  source = "general",
  buttonLabel = siteConfig.labels.submitApplication,
  messageOverride
}: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-ember-400/30 bg-forge-800/80 p-6 text-sm text-forge-200">
        <p className="text-lg font-semibold text-forge-100">
          {siteConfig.forms.successTitle}
        </p>
        <p className="mt-2">{siteConfig.forms.successBody}</p>
        <Button
          href={generateWhatsAppLink(
            messageOverride ?? siteConfig.whatsapp.defaultMessage,
            siteConfig.whatsapp.phone
          )}
          className="mt-4"
          size="sm"
        >
          {siteConfig.forms.successButton}
        </Button>
      </div>
    );
  }

  return (
    <form
      className="space-y-4 rounded-2xl border border-forge-600/60 bg-forge-800/70 p-6 text-sm text-forge-200"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div>
        <h3 className="text-lg font-semibold text-forge-100">{title}</h3>
        <p className="text-sm text-forge-300">{description}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="w-full rounded-lg border border-forge-600 bg-forge-900/80 px-4 py-3 text-sm text-forge-100"
          placeholder={siteConfig.forms.placeholders.name}
          name="name"
          required
        />
        <input
          className="w-full rounded-lg border border-forge-600 bg-forge-900/80 px-4 py-3 text-sm text-forge-100"
          placeholder={siteConfig.forms.placeholders.phone}
          name="phone"
          required
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="w-full rounded-lg border border-forge-600 bg-forge-900/80 px-4 py-3 text-sm text-forge-100"
          placeholder={siteConfig.forms.placeholders.location}
          name="location"
        />
        <select
          className="w-full rounded-lg border border-forge-600 bg-forge-900/80 px-4 py-3 text-sm text-forge-100"
          name="budget"
        >
          {siteConfig.forms.budgetOptions.map((option) => (
            <option key={option} value={option === siteConfig.forms.budgetOptions[0] ? "" : option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <textarea
        className="min-h-[120px] w-full rounded-lg border border-forge-600 bg-forge-900/80 px-4 py-3 text-sm text-forge-100"
        placeholder={siteConfig.forms.placeholders.goal}
        name="goal"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <select
          className="w-full rounded-lg border border-forge-600 bg-forge-900/80 px-4 py-3 text-sm text-forge-100"
          name="availability"
        >
          {siteConfig.forms.availabilityOptions.map((option) => (
            <option key={option} value={option === siteConfig.forms.availabilityOptions[0] ? "" : option}>
              {option}
            </option>
          ))}
        </select>
        <select
          className="w-full rounded-lg border border-forge-600 bg-forge-900/80 px-4 py-3 text-sm text-forge-100"
          name="source"
          defaultValue={siteConfig.forms.sourceOptions[0]?.value ?? "general"}
        >
          {siteConfig.forms.sourceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <input type="hidden" name="pageSource" value={source} />
      <Button type="submit" className="w-full">
        {buttonLabel}
      </Button>
      <p className="text-xs text-forge-400">
        {siteConfig.forms.note}
      </p>
    </form>
  );
}
