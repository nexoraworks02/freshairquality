"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import { CardDecor } from "../ui/CardDecor";
import { services } from "@/config/site";
import { cn } from "@/lib/utils";

type IconName = keyof typeof Icons;

// Light-blue services block (reference layout). One card is "active" (solid
// blue); hovering another card moves the highlight to it.
export function Services() {
  const [active, setActive] = useState(0);
  return (
    <section id="services" className="scroll-mt-24 overflow-hidden bg-[#EEF2F8] py-24 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Our services</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-teal-800 sm:text-5xl">
            Complete air quality care
          </h2>
          <p className="mt-4 text-lg font-light text-ink-soft">
            Fresh Air Quality offers every type of duct and HVAC cleaning — with
            upfront, province-based pricing.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = (Icons[s.icon as IconName] || Icons.Wind) as Icons.LucideIcon;
            const on = active === i;
            return (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}/`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={cn(
                    "group relative isolate flex h-full flex-col overflow-hidden rounded-3xl rounded-br-[3rem] border p-8 transition-all duration-500",
                    on
                      ? "-translate-y-2 border-transparent bg-teal-400 text-white shadow-[0_30px_60px_-25px_rgba(3,42,91,0.9)]"
                      : "border-teal-100 bg-white/70 text-teal-800"
                  )}
                >
                  <CardDecor tone={on ? "dark" : "light"} />
                  <Icon
                    className={cn(
                      "h-12 w-12 transition-all duration-500",
                      on ? "scale-110 text-white" : "text-teal-400"
                    )}
                    strokeWidth={1.6}
                  />
                  <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-tight">{s.name}</h3>
                  <p className={cn("mt-3 flex-1 font-light leading-relaxed", on ? "text-white/90" : "text-ink-soft")}>
                    {s.short}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide">
                    Learn more
                    <Icons.ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
          {/* Final tile: booking prompt */}
          <StaggerItem>
            <Link
              href="/#quote"
              onMouseEnter={() => setActive(-1)}
              className="group relative flex h-full min-h-[260px] flex-col justify-end overflow-hidden rounded-3xl rounded-br-[3rem] p-8 text-white"
            >
              <Image
                src="/images/fresh/ac-unit.webp"
                alt="Air conditioning unit outside a home"
                fill
                sizes="(min-width: 1024px) 30vw, 90vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-teal-800/95 via-teal-800/50 to-transparent" />
              <span className="relative font-display text-2xl font-bold">Not sure what you need?</span>
              <span className="relative mt-2 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-mint-600">
                Get a free quote
                <Icons.ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
              </span>
            </Link>
          </StaggerItem>
        </Stagger>

        {/* Photo row + quote (reference "Experience a cleaner home" strip) */}
        <div className="mt-16 grid items-center gap-6 md:grid-cols-[1fr_1fr_1.1fr]">
          {["/images/fresh/vent-dusty.webp", "/images/fresh/tech-ceiling-vent.webp"].map((src, i) => (
            <Reveal key={src} delay={i * 0.12} from="zoom">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src={src}
                  alt={i === 0 ? "Dusty air vent before cleaning" : "Technician cleaning a ceiling air vent"}
                  fill
                  sizes="(min-width: 768px) 30vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
          <Reveal from="right" delay={0.2}>
            <div className="border-l-4 border-teal-400 pl-7">
              <p className="font-display text-2xl font-light leading-snug text-teal-800">
                Experience a cleaner, healthier home with
              </p>
              <p className="mt-3 font-display text-xl font-bold text-teal-400">Fresh Air Quality</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
