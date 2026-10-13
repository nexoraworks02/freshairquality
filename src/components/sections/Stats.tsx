"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { SparkleField } from "../ui/Sparkle";
import { CardDecor } from "../ui/CardDecor";
import { CountUp } from "../ui/CountUp";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import { provinces } from "@/config/site";

// Only verifiable facts here — no invented customer counts or ratings.
const stats: { to: number; label: string; prefix?: string; suffix?: string }[] = [
  { to: 8, label: "Service areas across Canada" },
  { to: 149, prefix: "$", label: "Starting price" },
  { to: provinces[0].pricing.addons.length, label: "Add-on services" },
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
        <Image src="/images/fresh/tech-attic.webp" alt="" fill quality={90} sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-br from-band-900/90 via-band-700/88 to-band-500/85" />
      <SparkleField className="text-white/40" />

      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="dark">Why Fresh Air Quality</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Breathe easy with professional duct cleaning
          </h2>
        </Reveal>
        <Stagger className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="group relative isolate h-full overflow-hidden rounded-3xl rounded-br-[3rem] border border-white/10 bg-white/5 p-7 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/10">
                <CardDecor tone="dark" />
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
