"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { site } from "@/config/site";
import { Sparkle, SparkleField } from "../ui/Sparkle";

// Reference-style hero: full-width photo slideshow with a dark overlay,
// big uppercase headline that slides in, and a CTA. Slides cross-fade with a
// slow "Ken Burns" zoom. Bottom padding leaves room for the overlapping
// service cards (<ServiceCards />).
const SLIDES = [
  {
    image: "/images/fresh/home-banner.webp",
    eyebrow: "Air duct cleaning services",
    title: "Breathe cleaner air in every room of your home",
    text: "Certified technicians, high-powered vacuums and rotary brushes remove years of dust, pet hair and allergens from your ducts.",
  },
  {
    image: "/images/fresh/tech-duct-system.webp",
    eyebrow: "Furnace · Dryer vent · HRV",
    title: "Lower energy bills with a cleaner HVAC system",
    text: "Clean ducts and furnaces run smoother, use less energy and last longer — for homes and businesses across Canada.",
  },
  {
    image: "/images/fresh/tech-attic.webp",
    eyebrow: "From $149 · No hidden charges",
    title: "Book your duct cleaning in minutes",
    text: "Pick your service, add any extras, and choose a morning or afternoon slot. We'll confirm your appointment fast.",
  },
];

const INTERVAL = 7000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length),
    []
  );

  useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(() => go(1), INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused, reduce, go]);

  const slide = SLIDES[index];
  const waUrl = `https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent(
    `Hi ${site.name}, I want a free duct cleaning quote.`
  )}`;

  return (
    <section
      className="relative mt-[88px] overflow-hidden bg-band-700 sm:mt-[100px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Slides (cross-fade + slow zoom) */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.15 }}
            animate={{ scale: reduce ? 1.15 : 1 }}
            transition={{ duration: INTERVAL / 1000 + 1.5, ease: "linear" }}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-band-900/92 via-band-700/78 to-band-500/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-band-900/60 via-transparent to-transparent" />
      <SparkleField className="text-white/70" />

      <div className="relative mx-auto flex min-h-[640px] w-full max-w-6xl flex-col justify-center px-5 pb-44 pt-20 sm:min-h-[720px] sm:px-8 lg:pb-52">
        <h1 className="sr-only">
          Fresh Air Quality — Professional Air Duct Cleaning Services Across Canada
        </h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
              exit: { opacity: 0, transition: { duration: 0.3 } },
            }}
            className="max-w-3xl"
          >
            <motion.p
              variants={{ hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-mint-600 backdrop-blur"
            >
              <Sparkle twinkle className="h-3.5 w-3.5 text-white" />
              {slide.eyebrow}
            </motion.p>
            <motion.p
              aria-hidden="true"
              variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: [0.21, 0.5, 0.27, 1] }}
              className="mt-6 font-display text-4xl font-black uppercase leading-[1.05] tracking-tight text-white drop-shadow-lg sm:text-6xl"
            >
              {slide.title}
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200"
            >
              {slide.text}
            </motion.p>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/#quote"
                className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-teal-800 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)] transition-all hover:-translate-y-0.5 hover:bg-mint-600"
              >
                Schedule Cleaning Now
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Free Quote
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="mt-10 flex items-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-teal-800"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.image}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className="relative h-1.5 w-10 overflow-hidden rounded-full bg-white/25"
              >
                {i === index && (
                  <motion.span
                    key={`${index}-${paused}`}
                    className="absolute inset-y-0 left-0 bg-mint-500"
                    initial={{ width: reduce || paused ? "100%" : "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: reduce || paused ? 0 : INTERVAL / 1000, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next slide"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-teal-800"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
