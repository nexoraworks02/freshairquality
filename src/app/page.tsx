import { HeroSlider } from "@/components/sections/HeroSlider";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { AreaMarquee } from "@/components/sections/AreaMarquee";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { PricingPlans } from "@/components/sections/PricingPlans";
import { Stats } from "@/components/sections/Stats";
import { Reviews } from "@/components/sections/Reviews";
import { QuoteCalculator } from "@/components/sections/QuoteCalculator";
import { Areas } from "@/components/sections/Areas";
import { FAQ } from "@/components/sections/FAQ";
import { faqs } from "@/config/faqs";

// FAQ rich-result schema — mirrors the FAQ section visible on this page.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// Layout follows the reference design: slider hero → overlapping service
// cards → about → services → pricing → stats band → booking → areas →
// reviews → FAQ.
// The "make appointment" banner lives at the top of the footer.
export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSlider />
      <ServiceCards />
      <AreaMarquee />
      <About />
      <Services />
      <PricingPlans />
      <Stats />
      <QuoteCalculator />
      <Areas />
      <Reviews />
      <FAQ />
    </main>
  );
}
