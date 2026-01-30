import { Button } from "@/components/Button";
import { GridBackground } from "@/components/GridBackground";
import { Divider } from "@/components/Divider";
import { cn } from "@/lib/utils";

type HeroProps = {
  title: string;
  subtitle: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  align?: "left" | "center";
  eyebrow?: string;
};

export function Hero({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  align = "left",
  eyebrow
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-forge-900 py-20">
      <GridBackground className="opacity-20" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
        {eyebrow ? (
          <span className="text-xs uppercase tracking-[0.4em] text-ember-400">
            {eyebrow}
          </span>
        ) : null}
        <div className={cn("space-y-4", align === "center" && "text-center")}>
          <h1 className="text-4xl font-semibold text-forge-100 md:text-5xl">{title}</h1>
          <p className="max-w-2xl text-base text-forge-300 md:text-lg">
            {subtitle}
          </p>
        </div>
        <div className={cn("flex flex-wrap gap-4", align === "center" && "justify-center")}>
          {primaryAction ? (
            <Button href={primaryAction.href}>{primaryAction.label}</Button>
          ) : null}
          {secondaryAction ? (
            <Button href={secondaryAction.href} variant="secondary">
              {secondaryAction.label}
            </Button>
          ) : null}
        </div>
        <Divider />
      </div>
    </section>
  );
}
