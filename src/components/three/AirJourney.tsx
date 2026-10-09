"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button, onDarkSecondary } from "../ui/Button";

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

// Hero backdrop image (real brand photo). Used whenever no video is set.
const HERO_IMAGE = "/images/fresh/home-banner.webp";

// Optional hero video. Leave "" to use the image backdrop. When the client's
// video is ready, drop it in /public/videos and set the path (e.g. "/videos/hero.mp4").
const HERO_VIDEO_SRC = ""; // TODO: set to the client's hero mp4 path when available

// ─────────────────────────────────────────────────────────────────
// Motion gate
// Video set + motion OK → autoplay video; otherwise → image backdrop.
// ─────────────────────────────────────────────────────────────────
function subscribeMedia(callback: () => void) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  reduced.addEventListener("change", callback);
  return () => reduced.removeEventListener("change", callback);
}
function getEnableVideo() {
  return (
    HERO_VIDEO_SRC !== "" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
const getEnableVideoServer = () => false;

// ─────────────────────────────────────────────────────────────────
// Public export
// ─────────────────────────────────────────────────────────────────
export function AirJourney() {
  const enableVideo = useSyncExternalStore(
    subscribeMedia,
    getEnableVideo,
    getEnableVideoServer
  );
  return <VideoHero enableVideo={enableVideo} />;
}

// ─────────────────────────────────────────────────────────────────
// VideoHero — standard autoplay/loop hero (no scroll scrubbing)
// ─────────────────────────────────────────────────────────────────
// The video autoplays as soon as the page opens.
// An IntersectionObserver pauses it when scrolled out of view and
// resumes it when scrolled back in — saves CPU/battery.
// `progress` (0..1) is derived from currentTime / duration each RAF
// tick and drives the headline cross-fades, CTA glow, and timeline.
// ─────────────────────────────────────────────────────────────────
function VideoHero({ enableVideo }: { enableVideo: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef  = useRef<HTMLVideoElement>(null);

  // 0..1 playback progress — drives all animated overlays.
  const progress = useMotionValue(0);

  useEffect(() => {
    if (!enableVideo) return;
    const v       = videoRef.current;
    const section = sectionRef.current;
    if (!v || !section) return;

    let raf     = 0;
    let visible = true;

    // Update progress every frame while the section is visible.
    const tick = () => {
      if (visible && v.duration > 0) {
        progress.set(clamp(v.currentTime / v.duration));
      }
      raf = requestAnimationFrame(tick);
    };

    // Pause decode when hero is off-screen, resume when back.
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) v.play().catch(() => {});
        else          v.pause();
      },
      { threshold: 0.05 }
    );
    io.observe(section);

    v.play().catch(() => {});
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [enableVideo, progress]);

  // No video → drive the headline cross-fade on a gentle time loop
  // (skipped for reduced-motion, which keeps the first phrase static).
  useEffect(() => {
    if (enableVideo) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const section = sectionRef.current;
    let raf = 0;
    let start = 0;
    let visible = true;
    const loop = (t: number) => {
      if (visible && !document.hidden) {
        if (!start) start = t;
        progress.set(((t - start) / 15000) % 1); // 15s loop
      }
      raf = requestAnimationFrame(loop);
    };
    const io =
      section &&
      new IntersectionObserver(
        ([entry]) => {
          visible = entry.isIntersecting;
        },
        { threshold: 0.05 }
      );
    if (section && io) io.observe(section);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, [enableVideo, progress]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[620px] w-full overflow-hidden bg-[#071A3D]"
    >
      {/* ── Media layer ─────────────────────────────────────────── */}
      {enableVideo ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={HERO_IMAGE}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})`, backgroundPosition: "center 30%" }}
        />
      )}

      {/* Dark gradient — keeps text readable over any video frame */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071A3D]/85 via-[#071A3D]/45 to-[#071A3D]/95" />

      {/* Subtle cyan / blue ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_38%,rgba(47,122,216,0.16),transparent_65%)]" />

      {/* ── Hero content ─────────────────────────────────────────── */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <span className="eyebrow rounded-md border border-teal-400/40 bg-teal-500/15 px-4 py-2 text-teal-100 backdrop-blur">
          🍁 Fresh Air Quality · Air Duct Cleaning Services
        </span>

        {/* Headline cross-fades with video playback */}
        <ReactiveHeadline progress={progress} />

        <p className="mt-5 max-w-xl text-lg font-medium text-slate-200">
          Certified air duct, furnace, dryer vent &amp; HRV cleaning across
          Canada — from <span className="font-bold text-mint-500">$149</span>.
          No hidden charges.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {/* CTA glow builds in the clean-air phase */}
          <HeroCTA progress={progress} />
          <Button href="/#quote" size="lg" variant="secondary" className={onDarkSecondary}>
            See Pricing
          </Button>
        </div>
      </div>

      {/* Scroll-down hint */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-cyan-300/80">
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// ReactiveHeadline — three phrases cross-fade with video playback
// ─────────────────────────────────────────────────────────────────
// Phrase 1  "Breathe Cleaner Air"         0 % – 35 %
// Phrase 2  "We Remove Years of Dust"    35 % – 70 %
// Phrase 3  "Experience Fresh Indoor Air" 70 % – 100 %
//
// 7 pp cross-fade window at each transition — only one phrase is
// fully opaque at any moment; they never both sit at 1.0 together.
//
// Accessibility: static sr-only <h1> always carries the heading.
// Animated spans are aria-hidden — screen readers see one clean name.
// ─────────────────────────────────────────────────────────────────
const HERO_PHRASES = [
  "Breathe Cleaner Air",
  "We Remove Years of Dust",
  "Experience Fresh Indoor Air",
] as const;

function ReactiveHeadline({ progress }: { progress: MotionValue<number> }) {
  // Phrase 1: opaque 0→30 %, fades out 30→37 %.
  const o1 = useTransform(progress, [0, 0.30, 0.37], [1, 1, 0]);
  // Phrase 2: fades in 30→37 %, stays 37→63 %, fades out 63→70 %.
  const o2 = useTransform(progress, [0.30, 0.37, 0.63, 0.70], [0, 1, 1, 0]);
  // Phrase 3: fades in 63→70 %, opaque to 100 %.
  const o3 = useTransform(progress, [0.63, 0.70, 1], [0, 1, 1]);

  const opacities = [o1, o2, o3];

  const cls =
    "pointer-events-none absolute inset-x-0 font-display text-5xl font-extrabold " +
    "leading-[1] tracking-[-0.03em] text-white uppercase " +
    "drop-shadow-[0_2px_28px_rgba(4,13,24,0.8)] sm:text-7xl";

  return (
    <div className="relative mt-6 h-28 w-full max-w-4xl sm:h-40">
      {/* Accessible static heading for screen readers */}
      <h1 className="sr-only">
        Professional Air Duct Cleaning Services Across Canada
      </h1>

      {/* Visually animated phrases — hidden from assistive tech */}
      {HERO_PHRASES.map((phrase, i) => (
        <motion.span
          key={phrase}
          aria-hidden="true"
          style={{ opacity: opacities[i] }}
          className={cls}
        >
          {phrase}
        </motion.span>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// HeroCTA — CTA glow builds subtly during the clean-air phase
// ─────────────────────────────────────────────────────────────────
function HeroCTA({ progress }: { progress: MotionValue<number> }) {
  // Glow ramps from 80 % → 100 % of video playback. Subtle, not flashy.
  const glow = useTransform(progress, (p) => {
    const g = clamp((p - 0.8) / 0.2);
    return `0 0 ${14 + g * 22}px rgba(47,122,216,${(0.28 + g * 0.37).toFixed(3)})`;
  });
  return (
    <motion.div style={{ boxShadow: glow }} className="rounded-full">
      <Button href="/#quote" size="lg">
        Get a Free Quote
      </Button>
    </motion.div>
  );
}
