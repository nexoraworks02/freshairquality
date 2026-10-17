"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck, Clock, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { CardDecor } from "../ui/CardDecor";
import { provinces, site, telHref } from "@/config/site";

/**
 * "Book your cleaning in minutes" banner — sits at the top of the footer on
 * every page (overlapping it). The Book now button links to "#quote", which
 * the site-wide <BookingModal /> opens as the booking pop-up. On a province
 * page it names that area and shows its starting price. Below, every contact
 * line (Ontario/Canada-wide, Quebec) gets its own Call + WhatsApp buttons —
 * the visitor's own province first.
 */
export function BookingCTA() {
  const pathname = usePathname();
  const slug = pathname.split("/").filter(Boolean)[0];
  const area = provinces.find((p) => p.slug === slug);
  const priceFrom = area?.priceFrom ?? Math.min(...provinces.map((p) => p.priceFrom));

  const waText = encodeURIComponent(
    `Hi ${site.name}, I want a free duct cleaning quote${area ? ` in ${area.name}` : ""}.`
  );
  const lines = [...site.phones].sort((a, b) => Number(b.code === area?.code) - Number(a.code === area?.code));

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
          <div className="flex w-full sm:w-auto">
            <Link
              href="#quote"
              className="btn-primary inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl sm:w-auto bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-teal-800 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-mint-600"
            >
              <CalendarCheck className="h-5 w-5" />
              Book now
            </Link>
          </div>
        </div>

        {/* Call / WhatsApp — one row per contact line */}
        <div className="mt-8 grid gap-3 border-t border-white/15 pt-6 sm:grid-cols-2">
          {lines.map((l) => (
            <div key={l.code} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white/10 px-4 py-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-mint-400">{l.region}</p>
                <p className="font-display text-lg font-bold">{l.phone}</p>
              </div>
              <div className="flex gap-2">
                <a
                  href={telHref(l.phone)}
                  aria-label={`Call ${l.region} ${l.phone}`}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-sm font-bold text-teal-800 transition-transform hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" />
                  Call
                </a>
                <a
                  href={`https://wa.me/${l.whatsappDigits}?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp ${l.region} ${l.phone}`}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#25D366] px-3.5 py-2 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
