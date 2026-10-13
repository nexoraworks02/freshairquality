import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import type { ProvincePage } from "@/config/service-areas";
import { site, provinces, phoneFor, telHref } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CardDecor } from "@/components/ui/CardDecor";
import { BookingCTA } from "@/components/sections/BookingCTA";

export function ProvinceLanding({ page }: { page: ProvincePage }) {
  const area = provinces.find((p) => p.code === page.code);
  const priceFrom = area?.priceFrom ?? 149;
  const waUrl = `https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent(
    `Hi ${site.name}, I want a free duct cleaning quote in ${page.name}.`
  )}`;
  const phone = phoneFor(page.code);
  const tel = telHref(phone);
  const [first, ...rest] = page.sections;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Air Duct Cleaning",
    provider: {
      "@type": "HVACBusiness",
      name: site.name,
      telephone: phone,
      email: site.email,
      url: site.url,
    },
    areaServed: { "@type": "State", name: page.name },
    description: page.metaDescription,
    offers: { "@type": "Offer", price: priceFrom, priceCurrency: "CAD" },
  };

  return (
    <main className="bg-canvas">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero band — the area's landmark photo behind the first WordPress
          section, with a navy shade so the text stays readable */}
      <section className="relative isolate overflow-hidden bg-band-900 pb-16 pt-28 sm:pt-32">
        {area && (
          <Image
            src={area.photo}
            alt={`${area.landmark} — air duct cleaning in ${area.name}`}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="-z-10 object-cover"
          />
        )}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#021B3D]/95 via-[#021B3D]/80 to-[#021B3D]/45" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#021B3D]/80 via-transparent to-transparent" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Link
                href="/service-areas/"
                className="group mb-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-300 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                All Service Areas
              </Link>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
                <MapPin className="h-4 w-4 text-mint-500" />
                {page.name} · from ${priceFrom}
              </p>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                {first.heading}
              </h1>
              {first.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-5 text-lg leading-relaxed text-slate-300">
                  {p}
                </p>
              ))}
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="#quote" size="lg" className="!border-mint-500 !bg-white !text-teal-800 hover:!bg-mint-600">
                  Book Online
                </Button>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-7 py-4 font-display text-lg font-bold text-white transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Free Quote
                </a>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-3xl border border-white/10 shadow-soft">
                <Image
                  src={page.heroImage}
                  alt={`Fresh Air Quality technician cleaning air ducts in ${page.name}`}
                  fill
                  quality={90}
                  priority
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Remaining WordPress sections */}
      {rest.map((s, i) => (
        <section key={s.heading} className={i % 2 === 0 ? "bg-surface py-20" : "bg-canvas py-20"}>
          <Container className={i === 0 ? "grid items-center gap-12 lg:grid-cols-2" : "max-w-3xl"}>
            <Reveal>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                {s.heading}
              </h2>
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-5 leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="mt-6 space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-ink">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {s.closing && <p className="mt-6 leading-relaxed text-ink-soft">{s.closing}</p>}
            </Reveal>
            {i === 0 && (
              <Reveal delay={0.1}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft">
                  <Image
                    src={page.sideImage}
                    alt={`Air duct cleaning equipment in a ${page.name} home`}
                    fill
                    quality={90}
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            )}
          </Container>
        </section>
      ))}

      {/* Cities + contact info (WordPress "Contact Info" block) */}
      <section className="border-t border-line bg-surface py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-ink">
              Areas we serve in {page.name}
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {page.cities.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1.5 text-sm font-semibold text-teal-700"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative isolate overflow-hidden rounded-[2rem] rounded-br-[4rem] border border-line bg-white p-7 shadow-[0_30px_70px_-40px_rgba(3,42,91,0.45)]">
              <CardDecor size="lg" />
              <h2 className="font-display text-2xl font-extrabold text-ink">Contact Info</h2>
              <ul className="mt-5 space-y-3 text-ink-soft">
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-teal-500" />
                  {site.address}
                </li>
                <li>
                  <a href={tel} className="flex items-center gap-3 font-semibold text-ink hover:text-teal-600">
                    <Phone className="h-5 w-5 text-teal-500" />
                    {phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="flex items-center gap-3 font-semibold text-ink hover:text-teal-600">
                    <Mail className="h-5 w-5 text-teal-500" />
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Opens the booking pop-up, pre-set to this province */}
      <BookingCTA areaName={page.name} priceFrom={priceFrom} />
    </main>
  );
}
