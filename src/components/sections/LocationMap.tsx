import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { site } from "@/config/site";

export function LocationMap() {
  return (
    <Section id="location" className="bg-white">
      <SectionHeading
        eyebrow="Find us"
        title="Contact Info"
        subtitle="Based in Toronto, Ontario — serving customers coast to coast."
      />
      <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-stretch">
        <Reveal className="flex flex-col justify-center rounded-lg border border-slate-200 border-l-4 border-l-teal-500 bg-slate-50 p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-teal-600 text-white">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-lg font-extrabold uppercase tracking-tight text-ink">
                Our Address
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                {site.address}
              </p>
            </div>
          </div>

          <ul className="mt-6 space-y-3 border-t border-slate-200 pt-6 text-sm">
            <li>
              <a
                href={`tel:${site.defaultPhone.replace(/\D/g, "")}`}
                className="flex items-center gap-2 text-ink-soft transition-colors hover:text-teal-700"
              >
                <Phone className="h-4 w-4 text-teal-600" />
                {site.defaultPhone}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent(
                  `Hi ${site.name}, I want a free duct cleaning quote.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-ink-soft transition-colors hover:text-teal-700"
              >
                <MessageCircle className="h-4 w-4 text-teal-600" />
                WhatsApp: {site.whatsapp}
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.08} className="min-h-[320px] overflow-hidden rounded-lg border border-slate-200 shadow-[0_16px_40px_-24px_rgba(20,40,80,0.35)]">
          <iframe
            src={site.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[320px] w-full"
            title={`${site.name} location map`}
          />
        </Reveal>
      </div>
    </Section>
  );
}
