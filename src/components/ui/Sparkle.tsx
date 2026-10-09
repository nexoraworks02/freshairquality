import { cn } from "@/lib/utils";

/** The 4-point star from the logo. Inherits colour from `currentColor`. */
export function Sparkle({
  className,
  twinkle = false,
  delay = 0,
}: {
  className?: string;
  twinkle?: boolean;
  delay?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={cn(twinkle && "motion-safe:animate-[twinkle_3.2s_ease-in-out_infinite]", className)}
      style={twinkle ? { animationDelay: `${delay}s` } : undefined}
    >
      <path d="M12 0c.6 5.9 2.5 10.1 12 12-9.5 1.9-11.4 6.1-12 12-.6-5.9-2.5-10.1-12-12 9.5-1.9 11.4-6.1 12-12Z" />
    </svg>
  );
}

/** A scattered cluster of twinkling sparkles, like around the logo's cloud. */
export function SparkleField({ className }: { className?: string }) {
  const stars = [
    { c: "left-[6%] top-[14%] h-5 w-5", d: 0 },
    { c: "left-[18%] top-[70%] h-3 w-3", d: 1.1 },
    { c: "right-[10%] top-[18%] h-6 w-6", d: 0.5 },
    { c: "right-[24%] top-[62%] h-3.5 w-3.5", d: 1.6 },
    { c: "left-[42%] top-[8%] h-2.5 w-2.5", d: 2.2 },
    { c: "right-[4%] bottom-[12%] h-4 w-4", d: 0.8 },
  ];
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0", className)}>
      {stars.map((s, i) => (
        <Sparkle key={i} twinkle delay={s.d} className={cn("absolute", s.c)} />
      ))}
    </div>
  );
}
