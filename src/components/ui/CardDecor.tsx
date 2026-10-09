import { cn } from "@/lib/utils";
import { Sparkle } from "./Sparkle";

/**
 * Logo-style card decoration: a soft "cloud" bubble in the top-right corner,
 * a smaller floating bubble, and twinkling sparkles.
 *
 * Usage: give the card `relative isolate overflow-hidden` (+ a curved corner,
 * e.g. `rounded-br-[4rem]`) and drop <CardDecor /> inside. It sits at -z-10,
 * so it paints above the card's background but below its content — no
 * wrapper needed around the content.
 */
export function CardDecor({
  tone = "light",
  size = "sm",
  className,
}: {
  tone?: "light" | "dark";
  size?: "sm" | "lg";
  className?: string;
}) {
  const dark = tone === "dark";
  const bubble = dark ? "bg-white/[0.06]" : "bg-teal-50";
  const star = dark ? "text-white/35" : "text-teal-200";

  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 -z-10", className)}>
      {size === "lg" ? (
        <>
          <div className={cn("absolute -right-16 -top-16 h-56 w-56 rounded-full", bubble)} />
          <div
            className={cn(
              "absolute -right-4 top-20 h-28 w-28 rounded-full motion-safe:animate-[float-y_6s_ease-in-out_infinite]",
              bubble
            )}
          />
          <Sparkle twinkle className={cn("absolute left-[8%] top-[12%] h-4 w-4", star)} />
          <Sparkle twinkle delay={0.9} className={cn("absolute right-[22%] top-[18%] h-3 w-3", star)} />
          <Sparkle twinkle delay={1.6} className={cn("absolute bottom-[14%] right-[8%] h-5 w-5", star)} />
          <Sparkle twinkle delay={2.3} className={cn("absolute bottom-[22%] left-[46%] h-2.5 w-2.5", star)} />
        </>
      ) : (
        <>
          <div
            className={cn(
              "absolute -right-10 -top-10 h-28 w-28 rounded-full transition-transform duration-500 group-hover:scale-125",
              bubble
            )}
          />
          <Sparkle twinkle className={cn("absolute right-5 top-5 h-3.5 w-3.5", star)} />
          <Sparkle twinkle delay={1.4} className={cn("absolute bottom-5 right-[30%] h-2.5 w-2.5", star)} />
        </>
      )}
    </div>
  );
}
