import { Phone, MessageCircle } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { site } from "@/config/site";

export function FinalCTA() {
  const tel = `tel:${site.defaultPhone.replace(/[^\d+]/g, "")}`;
  const waUrl = `https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent(
    `Hi ${site.name}, I want a free duct cleaning quote.`
  )}`;
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border-b-4 border-teal-500 bg-gradient-to-br from-[#0f3a78] via-[#0b2a5e] to-[#071a3d] px-8 py-20 text-center shadow-[0_36px_90px_-30px_rgba(20,40,80,0.7)] sm:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(247,161,74,0.22),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_92%,rgba(47,122,216,0.22),transparent_55%)]" />
          <div className="relative">
            <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
              Ready to breathe cleaner air?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-200">
              Get your free, no-obligation quote today. Book online in minutes or
              message us on WhatsApp — we&apos;ll confirm your appointment fast.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/#quote" size="lg">
                Get My Free Quote
              </Button>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-display font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" />
                Get a Free Quote on WhatsApp
              </a>
              <a
                href={tel}
                className="inline-flex items-center gap-2 font-display text-lg font-semibold text-white hover:text-mint-400"
              >
                <Phone className="h-5 w-5" />
                {site.defaultPhone}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
