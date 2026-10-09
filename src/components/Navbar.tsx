"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./ui/Container";
import { nav, site, telHref } from "@/config/site";
import { cn } from "@/lib/utils";

// White header (reference design): logo · pill menu · dark "Call Now" button.
// Shrinks and gains a shadow once the page scrolls.
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tel = telHref(site.defaultPhone);
  // Only real page links get an "active" state; /#anchors never do.
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href);

  return (
    <motion.header
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.5, 0.27, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300",
        scrolled && "shadow-[0_12px_40px_-18px_rgba(3,42,91,0.35)]"
      )}
    >
      <Container
        className={cn(
          "flex max-w-7xl items-center justify-between gap-4 transition-all duration-300",
          scrolled ? "h-[72px]" : "h-[88px] sm:h-[100px]"
        )}
      >
        <Link href="/" aria-label={site.name} className="min-w-0">
          <Logo tone="dark" />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-gradient-to-b from-white to-slate-50 px-3 py-2 shadow-[0_6px_20px_-12px_rgba(3,42,91,0.4)] xl:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative rounded-full px-4 py-2 text-[13px] font-bold uppercase tracking-[0.08em] transition-colors",
                isActive(item.href) ? "text-teal-500" : "text-teal-800 hover:text-teal-500"
              )}
            >
              {item.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded bg-teal-400 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <a
          href={tel}
          className="group hidden items-center gap-2 whitespace-nowrap rounded-xl bg-teal-800 px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_28px_-14px_rgba(3,42,91,0.9)] transition-all hover:-translate-y-0.5 hover:bg-teal-700 xl:inline-flex"
        >
          <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
          Call Now: {site.defaultPhone}
        </a>

        <button
          className="rounded-lg p-2 text-teal-800 xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-slate-200 bg-white xl:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm font-bold uppercase tracking-wide text-teal-800 hover:bg-teal-50"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href={tel}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-800 px-6 py-4 font-bold uppercase tracking-wide text-white"
              >
                <Phone className="h-5 w-5" />
                Call Now: {site.defaultPhone}
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
