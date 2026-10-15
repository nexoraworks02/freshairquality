import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { provinces, site, EXTRA_FURNACE_PRICE } from "@/config/site";
import { provincePages } from "@/config/service-areas";
import { citiesIn, costUrl } from "@/config/cities";
import { COMPARE_TIPS, COST_YEAR, INCLUDED, costFaqs } from "@/config/cost";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CardDecor } from "@/components/ui/CardDecor";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PriceTable } from "@/components/PriceTable";

const ontario = provinces.find((p) => p.code === "ON")!;
const rest = provinces.find((p) => p.code === "AB")!;

const title = `Air Duct Cleaning Cost in Canada (${COST_YEAR} Price Guide) | ${site.name}`;
const description = `How much does duct cleaning cost? Our upfront prices: from $${ontario.priceFrom} in Ontario and $${rest.priceFrom} in other provinces — every duct & vent included, no hidden charges.`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/duct-cleaning-cost/" },
  openGraph: { title, description, url: "/duct-cleaning-cost/" },
};

const faqs = [
  ...costFaqs("Ontario", ontario).slice(0, 1),
  {
    question: "How much does duct cleaning cost outside Ontario?",
    answer: `In Alberta, Quebec, British Columbia, Manitoba, Saskatchewan and the Maritimes, our Basic package with 1 furnace is $${rest.priceFrom}. Each extra furnace is $${EXTRA_FURNACE_PRICE}.`,
  },
  ...costFaqs("your area", ontario).slice(1, 2),
  ...costFaqs("your area", ontario).slice(3),
];

export default function CostHubPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `Air Duct Cleaning Cost in Canada (${COST_YEAR} Price Guide)`,
      description,
      author: { "@type": "Organization", name: site.name, url: site.url },
      publisher: { "@type": "Organization", name: site.name, url: site.url },
      mainEntityOfPage: `${site.url}/duct-cleaning-cost/`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
    },
  ];

  return (
    <div className="theme-dark relative min-h-screen pt-28 sm:pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Container className="py-12">
        <Reveal>
          <Breadcrumbs items={[{ label: "Duct cleaning cost", href: "/duct-cleaning-cost/" }]} />
          <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Air Duct Cleaning Cost in Canada ({COST_YEAR} Price Guide)
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#d3ddeb]">
            Duct cleaning prices vary a lot between companies — and the advertised price doesn’t always
            match the final bill. Here are our real, upfront prices for every area we serve, what’s
            included, and what changes the cost.
          </p>
          <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            {[ontario, rest].map((p, i) => (
              <div key={p.code} className="relative isolate overflow-hidden rounded-2xl rounded-br-[3rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                <CardDecor tone="dark" />
                <p className="text-sm font-semibold uppercase tracking-wider text-[#c3d4ea]">
                  {i === 0 ? "Ontario" : "All other provinces"}
                </p>
                <p className="mt-2 font-display text-4xl font-bold text-white">${p.priceFrom}</p>
                <p className="mt-1 text-sm text-slate-300">Basic with 1 furnace · every duct &amp; vent</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>

      <section className="border-y border-white/5 bg-white/[0.03] py-16">
        <Container className="space-y-12">
          <div>
            <h2 className="mb-6 font-display text-2xl font-bold text-white sm:text-3xl">Ontario prices</h2>
            <PriceTable pricing={ontario.pricing} areaName="Ontario" />
          </div>
          <div>
            <h2 className="mb-6 font-display text-2xl font-bold text-white sm:text-3xl">
              Alberta, Quebec, BC, Manitoba, Saskatchewan &amp; Maritimes prices
            </h2>
            <PriceTable pricing={rest.pricing} areaName="All other provinces" />
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white">What’s included</h2>
            <ul className="mt-6 space-y-3">
              {INCLUDED.map((t) => (
                <li key={t} className="flex items-start gap-3 text-slate-100">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-mint-400" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-bold text-white">How to compare quotes</h2>
            <ul className="mt-6 space-y-3">
              {COMPARE_TIPS.map((t) => (
                <li key={t} className="flex items-start gap-3 text-slate-100">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-mint-400" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-slate-300">
              Want the details? Read{" "}
              <Link href="/blog/how-much-does-duct-cleaning-cost/" className="font-semibold text-mint-400 underline underline-offset-4 hover:text-white">
                how much duct cleaning costs in Canada
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </Section>

      {/* City guides */}
      <section className="border-y border-white/5 bg-white/[0.03] py-16">
        <Container>
          <SectionHeading tone="dark" eyebrow="By city" title="Duct cleaning cost in your city" />
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {provincePages.map((area) => {
              const list = citiesIn(area.slug);
              if (!list.length) return null;
              return (
                <Reveal key={area.slug}>
                  <div className="relative isolate h-full overflow-hidden rounded-2xl rounded-br-[3rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <CardDecor tone="dark" />
                    <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-white">
                      <MapPin className="h-4 w-4 text-mint-400" />
                      {area.name}
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {list.map((c) => (
                        <li key={c.slug}>
                          <Link href={costUrl(c)} className="group inline-flex items-center gap-1.5 text-slate-100 hover:text-white">
                            {`${c.name} duct cleaning cost`}
                            <ArrowRight className="h-3.5 w-3.5 text-mint-400 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading tone="dark" eyebrow="FAQs" title="Duct cleaning cost questions" />
          <Reveal delay={0.1}>
            <ServiceFAQ faqs={faqs} />
          </Reveal>
          <div className="mt-10 text-center">
            <Button href="#quote" size="lg">See your exact total — Book online</Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
