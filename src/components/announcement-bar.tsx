import { Flame } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="border-b border-white/10 bg-graphite px-4 py-2 text-center text-xs uppercase tracking-[0.3em] text-steel">
      <span className="inline-flex items-center gap-2">
        <Flame className="h-4 w-4 text-accent" aria-hidden="true" />
        New drop. Limited slots for Forge Black.
      </span>
    </div>
  );
}
