import { cn } from "@/lib/utils";
import { site } from "@/config/site";

/** Brand mark: emblem image plus crisp CSS text. `tone="dark"` = navy, for light backgrounds. */
export function Logo({
  className,
  tone = "light",
  size = "md",
}: {
  className?: string;
  tone?: "light" | "dark";
  size?: "sm" | "md"; // sm = compact navbar version
}) {
  const dark = tone === "dark";
  const sm = size === "sm";
  return (
    <span className={cn("inline-flex items-center", sm ? "gap-2.5" : "gap-3", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={dark ? "/images/logo/emblem-navy.png" : "/images/logo/emblem-white.png"}
        alt={site.name}
        className={cn("w-auto shrink-0", sm ? "h-9 sm:h-10" : "h-11 sm:h-14")}
      />
      <span className="flex flex-col whitespace-nowrap leading-none">
        <span
          className={cn(
            "font-display font-black uppercase tracking-[0.02em]",
            sm ? "text-[0.95rem] sm:text-[1.1rem]" : "text-[1.05rem] sm:text-[1.5rem]",
            dark ? "text-teal-800" : "text-white"
          )}
        >
          Fresh Air Quality
        </span>
        <span
          className={cn(
            "mt-1 font-bold uppercase",
            sm ? "text-[9px] tracking-[0.18em] sm:text-[9.5px]" : "text-[10px] tracking-[0.2em] sm:text-[11px]",
            dark ? "text-teal-500" : "text-[#CBD5E1]"
          )}
        >
          Air Duct Cleaning Services
        </span>
      </span>
    </span>
  );
}
