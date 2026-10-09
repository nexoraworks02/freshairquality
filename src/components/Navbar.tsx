"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./ui/Container";
import { nav, site } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tel = `tel:${site.defaultPhone.replace(/[^\d+]/g, "")}`;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#051433]/90 shadow-[0_18px_48px_-28px_rgba(0,0,0,0.95)] backdrop-blur-xl"
          : "bg-gradient-to-b from-black/95 via-[#051433]/78 to-transparent shadow-[0_30px_80px_-34px_rgba(0,0,0,0.98)]"
      )}
    >
      <Container className="relative z-10 flex h-20 max-w-7xl items-center justify-between sm:h-28">
        <Link href="/" aria-label={site.name} className="min-w-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex 2xl:gap-9">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-extrabold uppercase tracking-normal text-white/90 transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-[#2F7AD8] shadow-[0_0_10px_rgba(47,122,216,0.75)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <a
            href={tel}
            className="flex items-center gap-2 whitespace-nowrap text-base font-extrabold text-white transition-colors hover:text-[#9CC4F2]"
          >
            <Phone className="h-5 w-5 text-[#9CC4F2]" />
            {site.defaultPhone}
          </a>
          <Link
            href="/#quote"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-gradient-to-r from-[#0B2A5E] to-[#2F7AD8] px-5 py-3.5 font-display text-base font-extrabold text-white shadow-[0_16px_34px_-18px_rgba(47,122,216,0.95)] transition-all duration-200 hover:brightness-110"
          >
            Get a Free Quote
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>

        <button
          className="p-2 text-white xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#071A3D]/95 shadow-[0_22px_55px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl xl:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-bold uppercase tracking-wide text-white/85 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={tel}
              className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-bold text-white"
            >
              <Phone className="h-4 w-4" />
              {site.defaultPhone}
            </a>
            <div onClick={() => setOpen(false)}>
              <Link
                href="/#quote"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#0B2A5E] to-[#2F7AD8] px-6 py-4 font-display font-extrabold text-white"
              >
                Get a Free Quote
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
