import { cn } from "@/lib/utils";

export function Card({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-forge-600/60 bg-forge-800/70 p-6 shadow-[0_0_30px_rgba(0,0,0,0.25)]",
        className
      )}
    >
      {children}
    </div>
  );
}
