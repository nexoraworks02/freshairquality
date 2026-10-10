"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { BadgeCheck, CheckCircle2, Quote } from "lucide-react";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";

// Points taken from the WordPress "Why Choose Fresh Air Quality" content.
const POINTS = [
  "Certified technicians",
  "No hidden charges",
  "Eco-friendly cleaning methods",
  "Guaranteed satisfaction",
  "Residential & commercial",
  "Morning & afternoon slots",
];

// "About company" block (reference layout): parallax photo with an
// overlapping blue quote card, heading, checklist and a second photo.
export function About() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-40, 40]);

  return (
    <section ref={ref} id="about" className="scroll-mt-24 overflow-hidden bg-white py-24 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Photo + quote card */}
        <Reveal from="left" className="relative mx-auto w-full max-w-[480px] pb-16 sm:pb-10">
          {/* Vertical (4:5) frame + vertical photo so nothing is awkwardly cropped */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_30px_70px_-30px_rgba(3,42,91,0.5)]">
            <motion.div style={{ y: imgY }} className="absolute -inset-y-12 inset-x-0">
              <Image
                src="/images/fresh/maritime.webp"
                alt="Fresh Air Quality technicians cleaning flexible air ducts in a bright home"
                fill
                quality={90}
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
            </motion.div>
          </div>
          <Reveal
            from="up"
            delay={0.3}
            className="absolute -bottom-2 left-6 right-6 rounded-2xl bg-teal-400 p-7 text-white shadow-[0_24px_50px_-20px_rgba(3,42,91,0.9)] sm:left-16 sm:right-[-1.5rem]"
          >
            <Quote className="absolute right-5 top-4 h-10 w-10 text-white/25" />
            <p className="relative text-base italic leading-relaxed">
              We believe every family deserves to breathe fresh, clean air at
              home — with honest, upfront pricing and no hidden charges.
            </p>
          </Reveal>
          {/* Floating badge */}
          <div className="absolute -right-3 top-8 hidden rounded-2xl rounded-br-[1.75rem] bg-white px-5 py-4 shadow-xl motion-safe:animate-[float-y_5s_ease-in-out_infinite] sm:block">
            <p className="font-display text-3xl font-black text-teal-800">$149</p>
            <p className="text-xs font-bold uppercase tracking-wider text-ink-soft">Starting price</p>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <Eyebrow>About company</Eyebrow>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-teal-800 sm:text-5xl">
              Personalized air duct cleaning
            </h2>
            <p className="mt-5 text-lg font-light leading-relaxed text-ink-soft">
              Every home is different. Our certified technicians use high-powered
              vacuums, rotary brushes and HEPA-grade filtration to remove dust,
              pet dander and allergens from every duct and vent — improving your
              air quality and helping your HVAC system run efficiently.
            </p>
          </Reveal>

          <Stagger className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
            {POINTS.map((p) => (
              <StaggerItem key={p}>
                <span className="flex items-center gap-3 font-medium text-teal-800">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-400" />
                  {p}
                </span>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.2} className="mt-10 flex items-center gap-6">
            <div className="relative h-32 w-40 shrink-0 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/fresh/duct-hose.webp"
                alt="Duct cleaning hose inside an air duct"
                fill
                quality={90}
                sizes="160px"
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="flex items-start gap-3">
              <BadgeCheck className="mt-1 h-8 w-8 shrink-0 text-teal-400" />
              <p className="font-light leading-relaxed text-ink-soft">
                <span className="font-bold text-teal-800">Licensed &amp; insured.</span>{" "}
                Serving homes and businesses from the GTA to BC and the Maritimes.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
