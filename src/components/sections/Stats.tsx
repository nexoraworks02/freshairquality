import { Container } from "../ui/Container";
import { CountUp } from "../ui/CountUp";
import { Reveal } from "../ui/Reveal";

// Only verifiable facts here — no invented customer counts or ratings.
const stats: { to: number; label: string; prefix?: string; suffix?: string; decimals?: number }[] = [
  { to: 8, label: "Service areas across Canada" },
  { to: 149, prefix: "$", label: "Starting price" },
  { to: 2, label: "Booking time slots daily" },
  { to: 100, suffix: "%", label: "Satisfaction guaranteed" },
];

export function Stats() {
  return (
    <section className="border-y-4 border-teal-600 bg-navy">
      <Container className="grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="text-center">
            <p className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              <CountUp to={s.to} decimals={s.decimals ?? 0} prefix={s.prefix} suffix={s.suffix} />
            </p>
            <span className="mx-auto mt-3 block h-1 w-8 rounded bg-teal-500" />
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-300">
              {s.label}
            </p>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
