import Link from "next/link";
import { Sparkle } from "../ui/Sparkle";
import { provinces } from "@/config/site";

// Infinite scrolling ticker of service areas (CSS-only, pauses on hover,
// static for reduced motion). The list is rendered twice for a seamless loop.
export function AreaMarquee() {
  const items = provinces.map((p) => (
    <Link
      key={p.code}
      href={`/${p.slug}/`}
      className="flex shrink-0 items-center gap-3 px-6 font-display text-lg font-bold uppercase tracking-wide text-teal-800 transition-colors hover:text-teal-300"
    >
      <Sparkle className="h-4 w-4 text-teal-400" />
      Air Duct Cleaning {p.name}
    </Link>
  ));
  return (
    <div className="group relative overflow-hidden border-y border-slate-200 bg-white py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />
      <div className="flex w-max motion-safe:animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]">
        <div className="flex">{items}</div>
        <div className="flex" aria-hidden="true">{items}</div>
      </div>
    </div>
  );
}
