import { cn } from "@/lib/utils";

export function GridBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30",
        className
      )}
    />
  );
}
