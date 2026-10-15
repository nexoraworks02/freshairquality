import { Hero } from "@/components/sections/Hero";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { PricingPlans } from "@/components/sections/PricingPlans";
import { Stats } from "@/components/sections/Stats";
import { VideoTestimonials } from "@/components/sections/VideoTestimonials";
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

// Layout follows the reference design: video hero → overlapping service
// cards → about → services → pricing → stats band → video testimonials →
// areas → FAQ. The booking banner sits at the top of the footer (all pages).
// Written reviews (components/sections/Reviews.tsx) are hidden until real
// Google reviews exist — add <Reviews /> back here then.
// The "make appointment" banner lives at the top of the footer.
export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <ServiceCards />
      <About />
      <Services />
      <PricingPlans />
      <Stats />
      <VideoTestimonials />
      <Areas />
      <FAQ />
    </main>
  );
}
