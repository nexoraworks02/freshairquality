"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { site } from "@/config/site";

// Hero: one cinematic video (3D map of Canada) behind the headline.
// To swap in a new/4K version, replace these two files (same names):
//   public/videos/hero/hero-4.mp4   — the video (muted, ~8–10 s)
//   public/videos/hero/hero-4.webp  — its FIRST frame (shown while loading,
//                                      and used for the seamless loop fade)
const VIDEO = "/videos/hero/hero-4.mp4";
const POSTER = "/videos/hero/hero-4.webp";

// The clip ends zoomed in but starts on the full map, so instead of a hard
// loop jump we fade the video out over its first frame, restart, fade in.
const FADE_S = 0.9;

// Video is skipped for visitors with "data saver" on (still image instead).
const noop = () => () => {};
const getSaveData = () =>
  Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);
const getSaveDataServer = () => true; // server render: still only

export function Hero() {
  const reduce = useReducedMotion();
  const saveData = useSyncExternalStore(noop, getSaveData, getSaveDataServer);
  const playVideo = !reduce && !saveData;

  const videoRef = useRef<HTMLVideoElement>(null);
  const [fading, setFading] = useState(false);

  // Pause while scrolled out of view (saves CPU/battery), resume when back.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()),
      { threshold: 0.1 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [playVideo]);

  const onTimeUpdate = () => {
    const v = videoRef.current;
    if (v && v.duration && v.duration - v.currentTime < FADE_S && !fading) setFading(true);
  };
  const onEnded = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {});
    setFading(false);
  };

  const waUrl = `https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent(
    `Hi ${site.name}, I want a free duct cleaning quote.`
  )}`;

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.5, 0.27, 1] as const } },
  };

  return (
    <section className="relative mt-[68px] overflow-hidden bg-[#0b1a33] sm:mt-[76px]">
      {/* First frame (always underneath) + video on top */}
      <Image src={POSTER} alt="" fill priority quality={90} sizes="100vw" className="object-cover" />
      {playVideo && (
        <video
          ref={videoRef}
          src={VIDEO}
          poster={POSTER}
          autoPlay
          muted
          playsInline
          preload="auto"
          onTimeUpdate={onTimeUpdate}
          onEnded={onEnded}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover transition-opacity ease-in-out"
          style={{ opacity: fading ? 0 : 1, transitionDuration: `${FADE_S}s` }}
        />
      )}

      {/* Neutral dark shade only on the left behind the text */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-[640px] w-full max-w-6xl flex-col justify-center px-5 pb-44 pt-20 sm:min-h-[720px] sm:px-8 lg:pb-52">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
          className="max-w-3xl"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/35 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-mint-600 backdrop-blur"
          >
            Air duct cleaning · Coast to coast
          </motion.p>
          {/* SEO heading (keyword-rich); the visible headline below is decorative */}
          <h1 className="sr-only">
            Fresh Air Quality — Professional Air Duct Cleaning Services Across Canada
          </h1>
          <motion.p
            aria-hidden="true"
            variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.5, 0.27, 1] } } }}
            className="mt-5 max-w-[16ch] text-balance font-display text-3xl font-black uppercase leading-[1.08] tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.55)] sm:text-[2.6rem] lg:text-[3.1rem]"
          >
            Serving 8 regions across Canada
          </motion.p>
          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base font-medium sm:text-lg leading-relaxed text-white/90 [text-shadow:0_1px_12px_rgba(0,0,0,0.7)]"
          >
            Professional air duct, furnace and dryer vent cleaning from British
            Columbia to the Maritimes — from{" "}
            <span className="font-bold text-white">$149</span>, no hidden charges.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#quote"
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-teal-800 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)] transition-all hover:-translate-y-0.5 hover:bg-mint-600"
            >
              Get a Free Quote
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
          <motion.div variants={item} className="mt-6">
            <Link
              href="/service-areas/"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white/85 underline-offset-4 [text-shadow:0_1px_10px_rgba(0,0,0,0.7)] hover:text-white hover:underline"
            >
              See all service areas
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
