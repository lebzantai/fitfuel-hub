"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/Button";
import { generateWhatsAppLink } from "@/lib/utils";

export function MobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={siteConfig.labels.openMenu}
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-full border border-forge-600 p-2 text-forge-100"
      >
        <span className="h-5 w-5 border-y-2 border-current" />
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 bg-forge-900/95 backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-forge-700 px-6 py-5">
            <span className="text-sm font-semibold tracking-[0.3em] text-forge-100">
              {siteConfig.labels.menu.toUpperCase()}
            </span>
            <button
              type="button"
              aria-label={siteConfig.labels.closeMenu}
              onClick={() => setOpen(false)}
              className="text-forge-100"
            >
              ✕
            </button>
          </div>
          <nav className="flex flex-col gap-6 px-6 py-8 text-lg text-forge-100">
            {siteConfig.navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="pt-6">
              <Button
                href={generateWhatsAppLink(
                  siteConfig.whatsapp.messages.home,
                  siteConfig.whatsapp.phone
                )}
              >
                {siteConfig.labels.applyWhatsApp}
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
