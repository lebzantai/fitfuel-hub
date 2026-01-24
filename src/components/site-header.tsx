"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/content/copy";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-charcoal/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/fitfuel-mark.svg"
            alt="FitFuel"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
          <span className="sr-only">FitFuel</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm uppercase tracking-[0.2em] text-steel md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-fog"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Button asChild>
            <Link href="/contact">WhatsApp Us</Link>
          </Button>
        </div>
        <button
          className="md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-black/10 bg-charcoal md:hidden">
          <div className="flex flex-col gap-4 px-4 py-6 text-sm uppercase tracking-[0.2em] text-steel">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-fog"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild>
              <Link href="/contact">WhatsApp Us</Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
