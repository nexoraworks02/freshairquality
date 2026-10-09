import Link from "next/link";
import { ArrowRight, Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./ui/Eyebrow";
import { SparkleField } from "./ui/Sparkle";
import { services, site, telHref } from "@/config/site";
import { provincePages } from "@/config/service-areas";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="relative mt-16 scroll-mt-24 bg-gradient-to-br from-[#021B3D] via-[#032A5B] to-[#0D376C] pt-28 text-slate-300 sm:mt-24">
      {/* "Make appointment" banner overlapping the footer top (reference layout) */}
      <Container className="relative -mt-40 sm:-mt-52">
        <Reveal from="zoom">
          <div className="relative overflow-hidden rounded-[2rem] rounded-br-[5rem] border border-teal-100 bg-white px-8 py-12 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.55)] sm:px-14">
            {/* Logo-style cloud bubbles + sparkles */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal-50" />
            <div className="pointer-events-none absolute -right-4 top-16 h-32 w-32 rounded-full bg-teal-50 motion-safe:animate-[float-y_6s_ease-in-out_infinite]" />
            <SparkleField className="text-teal-200" />
            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <Eyebrow className="text-xs">Make appointment</Eyebrow>
                <h2 className="mt-3 max-w-xl font-display text-3xl font-bold leading-tight text-teal-800 sm:text-4xl">
                  Fresh Air Quality — the smart choice for air duct cleaning
                </h2>
                <p className="mt-3 font-medium text-ink-soft">Free quotes · Upfront pricing · No hidden charges</p>
              </div>
              <Link
                href="/#quote"
                className="group relative inline-flex shrink-0 items-center gap-2 rounded-xl bg-teal-800 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-teal-600"
              >
                Free quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
            {site.description}
          </p>
          <div className="mt-6 flex gap-3">
            {site.facebookUrl && (
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-mint-500 hover:text-navy"
              >
                <FacebookIcon />
              </a>
            )}
            {site.instagramUrl && (
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-mint-500 hover:text-navy"
              >
                <InstagramIcon />
              </a>
            )}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
            Services
          </h3>
          <span className="mt-3 block h-0.5 w-8 bg-mint-500" />
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
            Service Areas
          </h3>
          <span className="mt-3 block h-0.5 w-8 bg-mint-500" />
          <ul className="mt-4 space-y-2.5 text-sm">
            {provincePages.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/${p.slug}/`}
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Air Duct Cleaning {p.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/service-areas/"
                className="text-slate-400 transition-colors hover:text-white"
              >
                All service areas
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
            Contact
          </h3>
          <span className="mt-3 block h-0.5 w-8 bg-mint-500" />
          <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-white">
            <MapPin className="h-4 w-4 shrink-0 text-mint-400" />
            {site.name}
          </p>
          <div className="mt-2 overflow-hidden rounded-lg border border-white/10">
            <iframe
              src={site.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-28 w-full"
              title={`${site.name} location map`}
            />
          </div>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex items-start gap-2 text-slate-400">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mint-400" />
              <span>{site.address}</span>
            </li>
            {site.phones.map((p) => (
              <li key={p.region} className="space-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {p.region}
                </p>
                <a
                  href={telHref(p.phone)}
                  className="flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-mint-400" />
                  {p.phone}
                </a>
                <a
                  href={`https://wa.me/${p.whatsappDigits}?text=${encodeURIComponent(
                    `Hi ${site.name}, I want a free duct cleaning quote.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 text-mint-400" />
                  WhatsApp: {p.phone}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-mint-400" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Certified Technicians · No Hidden Charges · Guaranteed Satisfaction</p>
        </Container>
      </div>
    </footer>
  );
}
