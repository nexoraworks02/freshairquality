import { cn } from "@/lib/utils";
import { site } from "@/config/site";

/** Brand mark: emblem image plus crisp CSS text. `tone="dark"` = navy, for light backgrounds. */
export function Logo({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={dark ? "/images/logo/emblem-navy.png" : "/images/logo/emblem-white.png"}
        alt={site.name}
        className="h-11 w-auto shrink-0 sm:h-14"
      />
      <span className="flex flex-col whitespace-nowrap leading-none">
        <span
          className={cn(
            "font-display text-[1.05rem] font-black uppercase tracking-[0.02em] sm:text-[1.5rem]",
            dark ? "text-teal-800" : "text-white"
          )}
        >
          Fresh Air Quality
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] font-bold uppercase tracking-[0.2em] sm:text-[11px]",
            dark ? "text-teal-500" : "text-[#CBD5E1]"
          )}
        >
          Air Duct Cleaning Services
        </span>
      </span>
    </span>
  );
}
