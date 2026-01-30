import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-[0.18em] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember-400";

const variants = {
  primary:
    "bg-ember-500 text-black shadow-glow hover:bg-ember-400",
  secondary:
    "border border-forge-600 text-forge-100 hover:border-ember-400 hover:text-white",
  ghost: "text-forge-100 hover:text-ember-400"
};

const sizes = {
  sm: "px-4 py-2 text-[0.65rem]",
  md: "px-6 py-3 text-[0.7rem]",
  lg: "px-8 py-4 text-[0.75rem]"
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  onClick,
  type = "button"
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
