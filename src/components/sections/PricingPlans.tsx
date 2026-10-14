"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Plus } from "lucide-react";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import { CardDecor } from "../ui/CardDecor";
import { provinces, type PriceTier } from "@/config/site";
import { cn } from "@/lib/utils";

// Group provinces by their shared price tier → one tab per tier
// (Ontario + GTA have their own prices; every other area shares one tier).
const TIERS = provinces
  .reduce<{ codes: string[]; pricing: PriceTier }[]>((acc, p) => {
    const found = acc.find((t) => t.pricing === p.pricing);
    if (found) found.codes.push(p.code);
    else acc.push({ codes: [p.code], pricing: p.pricing });
    return acc;
  }, [])
  .map((t) => ({
    label: t.codes.includes("ON") ? "Ontario & GTA" : "All other provinces",
    pricing: t.pricing,
  }));

// What each package includes — taken from the WordPress service copy.
const INCLUDES: Record<string, string[]> = {
  "basic-1": [
    "Every duct & vent cleaned",
    "1 furnace cleaned",
    "High-powered vacuum & rotary brushes",
    "HEPA-grade filtration",
    "No hidden charges",
  ],
  "basic-2": [
    "Every duct & vent cleaned",
    "2 furnaces cleaned",
    "High-powered vacuum & rotary brushes",
    "HEPA-grade filtration",
    "No hidden charges",
  ],
  "basic-3": [
    "Every duct & vent cleaned",
    "3 furnaces cleaned",
    "High-powered vacuum & rotary brushes",
    "HEPA-grade filtration",
    "No hidden charges",
  ],
};

function Price({ value, light }: { value: number; light?: boolean }) {
  return (
    // Keyed remount: the new price replaces the old one instantly, then slides up.
    <span className="relative inline-flex h-14 items-end overflow-hidden">
      <motion.span
        key={value}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className={cn("font-display text-5xl font-black", light ? "text-white" : "text-teal-400")}
      >
        ${value}
      </motion.span>
    </span>
  );
}

export function PricingPlans() {
  const [tier, setTier] = useState(0);
  const { packages, addons } = TIERS[tier].pricing;

  return (
    <section id="pricing" className="scroll-mt-24 bg-white py-24 sm:py-28">
      <Container>
        <div className="grid items-end gap-6 md:grid-cols-2">
          <Reveal>
            <Eyebrow>Pricing plan</Eyebrow>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-teal-800 sm:text-5xl">
              Choose the best pricing
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-light text-ink-soft md:text-right">
              Prices depend on your area. Pick your region below — your exact
              quote is confirmed when we book your appointment.
            </p>
          </Reveal>
        </div>

        {/* Region tabs */}
        <Reveal delay={0.15} className="mt-10 flex flex-wrap gap-2">
          {TIERS.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setTier(i)}
              aria-pressed={tier === i}
              className={cn(
                "relative rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors",
                tier === i ? "text-white" : "bg-teal-50 text-teal-800 hover:bg-teal-100"
              )}
            >
              {tier === i && (
                <motion.span
                  layoutId="tier-pill"
                  className="absolute inset-0 rounded-full bg-teal-400"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{t.label}</span>
            </button>
          ))}
        </Reveal>

        <Stagger className="relative isolate mt-10 grid overflow-hidden rounded-[2rem] rounded-br-[5rem] border border-slate-200 bg-white shadow-[0_30px_70px_-40px_rgba(3,42,91,0.45)] lg:grid-cols-4">
          <CardDecor size="lg" />
          {/* Extras */}
          <StaggerItem className="flex flex-col p-8">
            <h3 className="font-display text-2xl font-bold text-teal-800">For extra services:</h3>
            <span className="mt-4 block h-px w-full bg-slate-200" />
            <ul className="mt-6 flex-1 space-y-4">
              {addons.map((a) => (
                <li key={a.id} className="flex items-center gap-3 text-sm font-medium text-ink-soft">
                  <Plus className="h-4 w-4 shrink-0 text-teal-400" />
                  <span className="flex-1">{a.label}</span>
                  <motion.span
                    key={a.price}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-bold text-teal-800"
                  >
                    ${a.price}
                  </motion.span>
                </li>
              ))}
            </ul>
            <Link
              href="/#quote"
              className="mt-8 rounded-xl bg-teal-400 py-3.5 text-center text-sm font-bold uppercase tracking-[0.12em] text-white transition-all hover:-translate-y-0.5 hover:bg-teal-500"
            >
              Book now
            </Link>
          </StaggerItem>

          {packages.map((p, i) => {
            const featured = i === 1;
            return (
              <StaggerItem
                key={p.id}
                className={cn(
                  "flex flex-col border-t border-slate-200 p-8 lg:border-l lg:border-t-0",
                  featured && "relative bg-teal-400 text-white lg:-my-px"
                )}
              >
                <h3 className={cn("font-display text-2xl font-bold", featured ? "text-white" : "text-teal-800")}>
                  {p.label}
                </h3>
                <div className="mt-4 flex items-end gap-2">
                  <Price value={p.price} light={featured} />
                  <span
                    className={cn(
                      "mb-2 rounded border px-1.5 text-xs font-medium",
                      featured ? "border-white/50 text-white/90" : "border-slate-300 text-ink-soft"
                    )}
                  >
                    Starting
                  </span>
                </div>
                <span className={cn("mt-5 block h-px w-full", featured ? "bg-white/30" : "bg-slate-200")} />
                <ul className="mt-6 flex-1 space-y-3.5">
                  {(INCLUDES[p.id] ?? []).map((item) => (
                    <li
                      key={item}
                      className={cn("flex items-start gap-3 text-sm", featured ? "text-white/95" : "text-ink-soft")}
                    >
                      <Check className={cn("mt-0.5 h-4 w-4 shrink-0", featured ? "text-white" : "text-teal-400")} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#quote"
                  className={cn(
                    "mt-8 rounded-xl py-3.5 text-center text-sm font-bold uppercase tracking-[0.12em] transition-all hover:-translate-y-0.5",
                    featured
                      ? "bg-white text-teal-500 hover:shadow-lg"
                      : "bg-teal-400 text-white hover:bg-teal-500"
                  )}
                >
                  Schedule cleaning now
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
