import { cn } from "@/lib/utils";
import { site } from "@/config/site";

/** Navbar brand mark: emblem image plus crisp CSS text. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo/emblem-white.png"
        alt={site.name}
        className="h-11 w-auto shrink-0 sm:h-14"
      />
      <span className="flex flex-col whitespace-nowrap leading-none">
        <span className="font-display text-[1.05rem] font-extrabold uppercase tracking-[0.02em] text-white sm:text-[1.55rem]">
          Fresh Air Quality
        </span>
        <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#CBD5E1] sm:text-[11px]">
          Air Duct Cleaning Services
        </span>
      </span>
    </span>
  );
}
