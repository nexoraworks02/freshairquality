"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Phone, Thermometer, Wind } from "lucide-react";
import { Container } from "../ui/Container";
import { Stagger, StaggerItem } from "../ui/Reveal";
import { CardDecor } from "../ui/CardDecor";
import { site } from "@/config/site";

const CARDS = [
  { icon: Wind, title: "Duct Cleaning", text: "Every duct and vent deep-cleaned", href: "/services/air-duct-cleaning/" },
  { icon: Thermometer, title: "Furnace Cleaning", text: "Heating system deep clean & brushing", href: "/services/furnace-cleaning/" },
  { icon: Flame, title: "Dryer Vent Cleaning", text: "Prevent lint build-up & fire hazards", href: "/services/dryer-vent-cleaning/" },
];

// White service cards + blue "Make Appointment" card that overlap the bottom
// of the hero (reference layout). Cards rise in one after another.
export function ServiceCards() {
  const tel = `tel:${site.defaultPhone.replace(/[^\d+]/g, "")}`;
  return (
    <section className="relative z-10 -mt-32 pb-8 lg:-mt-36">
      <Container>
        <Stagger className="grid gap-5 lg:grid-cols-4">
          <StaggerItem className="lg:col-span-3">
            <div className="relative isolate grid overflow-hidden rounded-3xl rounded-br-[4rem] bg-white shadow-[0_30px_70px_-30px_rgba(3,42,91,0.45)] sm:grid-cols-3">
              <CardDecor size="lg" />
              {CARDS.map((c, i) => (
                <Link
                  key={c.title}
                  href={c.href}
                  className={`group relative grid grid-cols-[auto_1fr_auto] items-center gap-x-4 px-5 py-5 text-left transition-colors duration-300 hover:bg-teal-50 sm:flex sm:flex-col sm:items-center sm:px-6 sm:py-10 sm:text-center ${
                    i > 0 ? "border-t border-slate-100 sm:border-l sm:border-t-0" : ""
                  }`}
                >
                  <motion.span
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="row-span-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-500 transition-colors duration-300 group-hover:bg-teal-400 group-hover:text-white sm:h-16 sm:w-16"
                  >
                    <c.icon className="h-8 w-8" />
                  </motion.span>
                  <h3 className="font-display text-lg font-bold text-teal-800 sm:mt-5 sm:text-xl">{c.title}</h3>
                  <p className="col-start-2 text-sm font-light text-ink-soft sm:mt-2">{c.text}</p>
                  <span className="col-start-3 row-span-2 row-start-1 flex h-8 w-8 items-center justify-center rounded-full bg-teal-400 text-white transition-transform duration-300 group-hover:translate-x-1.5 sm:mt-5">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <span className="absolute inset-x-8 bottom-0 h-1 origin-center scale-x-0 rounded-t bg-teal-400 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="relative isolate flex h-full flex-col justify-center overflow-hidden rounded-3xl rounded-br-[4rem] bg-gradient-to-br from-teal-400 to-teal-600 p-8 text-white shadow-[0_30px_70px_-30px_rgba(3,42,91,0.9)]">
              <CardDecor tone="dark" size="lg" />
              <h3 className="relative font-display text-2xl font-bold">Make Appointment</h3>
              <p className="relative mt-3 font-light text-white/90">
                Need your ducts cleaned or want a quote? Feel free to call us!
              </p>
              <a
                href={tel}
                className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-teal-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}
