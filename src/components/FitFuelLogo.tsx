import { siteConfig } from "@/content/site";

export function FitFuelLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 40"
      role="img"
      aria-label={siteConfig.labels.logoAria}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="2" />
      <path
        d="M14 24c4-6 10-8 20-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 16c4 2 8 2 14 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text
        x="50"
        y="26"
        fill="currentColor"
        fontSize="16"
        fontFamily="inherit"
        letterSpacing="2"
      >
        {siteConfig.wordmark}
      </text>
    </svg>
  );
}
