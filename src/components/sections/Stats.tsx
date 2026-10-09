"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Container } from "../ui/Container";
import { CountUp } from "../ui/CountUp";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";

// Only verifiable facts here — no invented customer counts or ratings.
const stats: { to: number; label: string; prefix?: string; suffix?: string }[] = [
  { to: 8, label: "Service areas across Canada" },
  { to: 149, prefix: "$", label: "Starting price" },
  { to: 6, label: "Add-on services" },
  { to: 100, suffix: "%", label: "Satisfaction guaranteed" },
];

// Dark photo band with parallax background (sits where the reference has
// its testimonials slider).
export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-15%", "15%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-28">
      <motion.div style={{ y }} className="absolute -inset-y-[20%] inset-x-0">
        <Image src="/images/fresh/tech-attic.webp" alt="" fill sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-teal-800/90" />

      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-300">Why Fresh Air Quality</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Breathe easy with professional duct cleaning
          </h2>
        </Reveal>
        <Stagger className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/10">
                <p className="font-display text-5xl font-black tracking-tight text-white">
                  <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <span className="mx-auto mt-4 block h-1 w-10 rounded bg-mint-500" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-300">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
