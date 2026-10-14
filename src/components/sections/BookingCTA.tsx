"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck, Clock, MessageCircle, ShieldCheck } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { CardDecor } from "../ui/CardDecor";
import { provinces, site } from "@/config/site";

/**
 * "Book your cleaning in minutes" banner — sits at the top of the footer on
 * every page (overlapping it). The Book now button links to "#quote", which
 * the site-wide <BookingModal /> opens as the booking pop-up. On a province
 * page it names that area and shows its starting price.
 */
export function BookingCTA() {
  const pathname = usePathname();
  const slug = pathname.split("/").filter(Boolean)[0];
  const area = provinces.find((p) => p.slug === slug);
  const priceFrom = area?.priceFrom ?? Math.min(...provinces.map((p) => p.priceFrom));

  const waUrl = `https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent(
    `Hi ${site.name}, I want a free duct cleaning quote${area ? ` in ${area.name}` : ""}.`
  )}`;

  return (
    <Reveal from="zoom">
      <div
        id="quote"
        className="relative isolate scroll-mt-24 overflow-hidden rounded-[2rem] rounded-br-[5rem] bg-gradient-to-br from-band-900 via-band-700 to-band-500 px-6 py-10 text-white shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)] sm:px-12 sm:py-12"
      >
        <CardDecor tone="dark" size="lg" />
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint-400">Book online</p>
            <h2 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Book your {area ? `${area.name} ` : ""}cleaning in minutes
            </h2>
            <ul className="mt-5 grid gap-2.5 text-sm text-white/90 sm:grid-cols-3 sm:gap-4">
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0 text-mint-400" />
                From ${priceFrom}, no hidden charges
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-mint-400" />
                Morning or afternoon slots
              </li>
              <li className="flex items-center gap-2">
                <CalendarCheck className="h-4 w-4 shrink-0 text-mint-400" />
                Takes under 2 minutes
              </li>
            </ul>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
            <Link
              href="#quote"
              className="btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-teal-800 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-mint-600"
            >
              <CalendarCheck className="h-5 w-5" />
              Book now
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border-2 border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
