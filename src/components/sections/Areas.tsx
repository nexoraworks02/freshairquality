import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { CardDecor } from "../ui/CardDecor";
import { provinces } from "@/config/site";

export function Areas() {
  return (
    <Section id="areas" className="bg-white">
      <SectionHeading
        eyebrow="Where we serve"
        title="Air duct cleaning across Canada"
        subtitle="From the Greater Toronto Area to British Columbia and the Maritimes — find Fresh Air Quality in your province."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {provinces.map((p, i) => (
          <Reveal key={p.code} delay={(i % 4) * 0.06}>
            <Link
              href={`/${p.slug}/`}
              className="group relative isolate flex h-full items-center justify-between overflow-hidden rounded-2xl rounded-br-[2.5rem] border border-slate-200 border-l-4 border-l-teal-500 bg-white p-5 transition-all hover:-translate-y-1 hover:border-l-mint-400 hover:bg-white hover:shadow-[0_16px_40px_-24px_rgba(3,42,91,0.5)]"
            >
              <CardDecor />
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-teal-800 text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display font-extrabold leading-tight tracking-tight text-ink">
                    {p.name}
                  </p>
                  <p className="text-sm font-semibold text-teal-600">
                    from ${p.priceFrom}
                  </p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-teal-500 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href="/service-areas/" size="lg" variant="secondary">
          View all service areas
        </Button>
      </div>
    </Section>
  );
}
