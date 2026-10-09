"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Section, SectionHeading } from "../ui/Section";
import { Button, onDarkSecondary } from "../ui/Button";
import { site, provinces, phoneFor } from "@/config/site";
import { trackMeta } from "../MetaPixel";
import { cn } from "@/lib/utils";

/* ---------------- Form options (same as the old WordPress booking form) ---------------- */

const NOT_LISTED = "not-listed";
const TIME_SLOTS = ["Morning (8:00 am - 1:00 pm)", "Afternoon (11:00 am - 6:00 pm)"];
const DWELLINGS = ["House", "Commercial", "Duplex", "Townhouse", "Other"];
const FURNACES = ["1", "2", "3"];
const VENTS = ["10", "20", "30", "40"];

type Step = "form" | "done";

/* Smoothly-animated dollar amount (spring) — used for the live total. */
function AnimatedAmount({ value, className }: { value: number; className?: string }) {
  const spring = useSpring(value, { stiffness: 140, damping: 20 });
  const text = useTransform(spring, (v) => `$${Math.round(v)}`);
  useEffect(() => {
    spring.set(value);
  }, [value, spring]);
  return <motion.span className={className}>{text}</motion.span>;
}

function formatDate(d: string) {
  if (!d) return "—";
  return new Date(`${d}T00:00:00`).toLocaleDateString("en-CA", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

export function QuoteCalculator({
  defaultProvince = "ON",
  title = "Book Your Cleaning in Minutes!",
  subtitle = "Choose your service, add any extras, pick a day and time — and we'll confirm your appointment.",
}: {
  defaultProvince?: string;
  title?: string;
  subtitle?: string;
}) {
  const [step, setStep] = useState<Step>("form");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const submittingRef = useRef(false);
  // Honeypot anti-spam: real users never see or fill this hidden field; bots do.
  const honeypot = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    houseSize: "",
    province: defaultProvince,
    packageId: "basic-1",
    date: "",
    time: TIME_SLOTS[0],
    dwelling: DWELLINGS[0],
    address: "",
    postalCode: "",
    furnaces: FURNACES[0],
    vents: VENTS[0],
    message: "",
  });
  const [selected, setSelected] = useState<string[]>([]);
  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  // Earliest bookable day = today (YYYY-MM-DD), so past dates can't be picked.
  const minDate = useMemo(() => new Date().toLocaleDateString("en-CA"), []);

  // Prices (packages + add-ons) are set by the customer's province.
  const selectedProvince =
    provinces.find((p) => p.code === form.province) ?? provinces[0];
  const { packages, addons } = selectedProvince.pricing;
  const pkg = packages.find((p) => p.id === form.packageId);
  const selectedAddons = addons.filter((a) => selected.includes(a.id));
  const total =
    (pkg?.price ?? 0) + selectedAddons.reduce((sum, a) => sum + a.price, 0);
  const pkgLabel = pkg ? `${pkg.label} ($${pkg.price})` : "Not listed — please quote";

  const toggleAddon = (id: string) =>
    setSelected((cur) =>
      cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]
    );

  const fullName = `${form.firstName} ${form.lastName}`.trim();

  // Pre-filled WhatsApp booking message (used on the success/error screens).
  const waMessage = encodeURIComponent(
    [
      `New Booking — ${site.name}`,
      "",
      `Customer: ${fullName}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Address: ${form.address} ${form.postalCode}`,
      `Province: ${selectedProvince.name}`,
      `Dwelling: ${form.dwelling} · House size: ${form.houseSize || "—"}`,
      `Furnaces: ${form.furnaces} · Vents: ${form.vents}`,
      `Preferred Date: ${formatDate(form.date)}`,
      `Preferred Time: ${form.time}`,
      "",
      `Service: ${pkgLabel}`,
      selectedAddons.length ? "Additional services:" : "Additional services: None",
      ...selectedAddons.map((a) => `• ${a.label} (+$${a.price})`),
      "",
      `Estimated total: $${total}`,
    ].join("\n")
  );
  const waUrl = `https://wa.me/${site.whatsappDigits}?text=${waMessage}`;
  const tel = `tel:${phoneFor(selectedProvince.code).replace(/[^\d+]/g, "")}`;

  async function submitBooking(e: React.FormEvent) {
    e.preventDefault();

    if (submittingRef.current) return;

    // Honeypot tripped → it's a bot. Abort silently: no success, no error.
    if (honeypot.current?.value) return;

    if (!isValidPhone(form.phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!isValidEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    submittingRef.current = true;
    setSubmitting(true);
    setError(null);

    try {
      if (!site.web3formsAccessKey) {
        throw new Error("missing-web3forms-key");
      }

      // Email the booking to the business via Web3Forms.
      // Success is shown ONLY when Web3Forms confirms delivery.
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.web3formsAccessKey,
          // Web3Forms built-in honeypot: must stay empty.
          botcheck: honeypot.current?.value ?? "",
          subject: `New Booking — ${fullName} (${selectedProvince.name}, $${total})`,
          from_name: `${site.name} Website`,
          name: fullName,
          // "email" is special in Web3Forms: it becomes the reply-to address.
          email: form.email,
          phone: form.phone,
          province: selectedProvince.name,
          address: form.address,
          postalCode: form.postalCode,
          dwelling: form.dwelling,
          houseSize: form.houseSize || "—",
          furnaces: form.furnaces,
          vents: form.vents,
          preferredDate: formatDate(form.date),
          preferredTime: form.time,
          service: pkgLabel,
          additionalServices:
            selectedAddons.map((a) => `${a.label} ($${a.price})`).join(", ") || "None",
          estimatedTotal: `$${total}`,
          message: form.message || "None",
          source: "booking-form",
        }),
      });
      const data = await res.json().catch(() => ({ success: false }));
      if (!res.ok || !data.success) throw new Error(data.message || "submit-failed");

      // Only on confirmed delivery: track the lead + show success.
      trackMeta("Lead", { value: total, currency: "CAD" });
      setStep("done");
    } catch {
      setError(
        "Sorry — we couldn't send your booking just now. Please try again, or message us on WhatsApp below."
      );
    } finally {
      submittingRef.current = false;
      setSubmitting(false);
    }
  }

  return (
    <Section id="quote" className="bg-gradient-to-b from-midnight to-navy">
      <SectionHeading tone="dark" eyebrow="Book online" title={title} subtitle={subtitle} />

      <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-xl sm:p-10">
        {step === "form" && (
          <form onSubmit={submitBooking} className="space-y-10">
            {/* Step 1 — Contact details */}
            <div>
              <StepLabel n={1} title="Your details" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First name *">
                  <input required suppressHydrationWarning autoComplete="given-name" value={form.firstName} onChange={set("firstName")} className="input" />
                </Field>
                <Field label="Last name *">
                  <input required suppressHydrationWarning autoComplete="family-name" value={form.lastName} onChange={set("lastName")} className="input" />
                </Field>
                <Field label="Email *">
                  <input
                    required
                    suppressHydrationWarning
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
                    title="Enter a valid email address, for example name@example.com"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={set("email")}
                    className="input"
                  />
                </Field>
                <Field label="Phone *">
                  <input
                    required
                    suppressHydrationWarning
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    pattern="(?:\+?1[\s.-]?)?\(?[2-9]\d{2}\)?[\s.-]?\d{3}[\s.-]?\d{4}"
                    title="Enter a valid 10-digit phone number, for example (647) 367-0164"
                    placeholder="(647) 367-0164"
                    value={form.phone}
                    onChange={set("phone")}
                    className="input"
                  />
                </Field>
              </div>
            </div>

            {/* Step 2 — Property */}
            <div>
              <StepLabel n={2} title="Your property" />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Field label="Province / area * (sets your prices)">
                    <select required suppressHydrationWarning value={form.province} onChange={set("province")} className="input">
                      {provinces.map((p) => (
                        <option key={p.code} value={p.code}>
                          {p.name} — from ${p.priceFrom}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Field label="Address *">
                    <input required suppressHydrationWarning autoComplete="street-address" placeholder="Street address, city" value={form.address} onChange={set("address")} className="input" />
                  </Field>
                </div>
                <Field label="Postal code *">
                  <input required suppressHydrationWarning autoComplete="postal-code" placeholder="M5E 1P8" value={form.postalCode} onChange={set("postalCode")} className="input" />
                </Field>
                <Field label="Dwelling">
                  <select suppressHydrationWarning value={form.dwelling} onChange={set("dwelling")} className="input">
                    {DWELLINGS.map((d) => <option key={d}>{d}</option>)}
                  </select>
                </Field>
                <Field label="House size">
                  <input suppressHydrationWarning placeholder="e.g. 2,000 sq ft" value={form.houseSize} onChange={set("houseSize")} className="input" />
                </Field>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Furnaces">
                    <select suppressHydrationWarning value={form.furnaces} onChange={set("furnaces")} className="input">
                      {FURNACES.map((d) => <option key={d}>{d}</option>)}
                    </select>
                  </Field>
                  <Field label="Vents">
                    <select suppressHydrationWarning value={form.vents} onChange={set("vents")} className="input">
                      {VENTS.map((d) => <option key={d}>{d}</option>)}
                    </select>
                  </Field>
                </div>
              </div>
            </div>

            {/* Step 3 — Required service */}
            <div>
              <StepLabel n={3} title="Required service" />
              <div className="grid gap-3 sm:grid-cols-2">
                {[...packages, { id: NOT_LISTED, label: "Not Listed", price: 0 }].map((p) => {
                  const on = form.packageId === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      aria-pressed={on}
                      onClick={() => setForm((f) => ({ ...f, packageId: p.id }))}
                      className={cn(
                        "flex items-center gap-3 rounded-lg border-2 p-4 text-left transition-all hover:-translate-y-0.5",
                        on ? "border-mint-400 bg-white/12" : "border-white/12 bg-white/5 hover:border-white/30"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors",
                          on ? "border-white bg-white text-teal-800" : "border-white/25 bg-white/5 text-transparent"
                        )}
                      >
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="flex-1 font-semibold text-white">{p.label}</span>
                      {p.id !== NOT_LISTED && (
                        <span className="font-display font-extrabold text-mint-400">${p.price}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4 — Additional services */}
            <div>
              <StepLabel n={4} title="Additional services" />
              <div className="grid gap-3 sm:grid-cols-2">
                {addons.map((a) => {
                  const on = selected.includes(a.id);
                  return (
                    <button
                      key={a.id}
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggleAddon(a.id)}
                      className={cn(
                        "flex items-center gap-3 rounded-lg border-2 p-4 text-left transition-all hover:-translate-y-0.5",
                        on ? "border-mint-400 bg-white/12" : "border-white/12 bg-white/5 hover:border-white/30"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition-colors",
                          on ? "border-white bg-white text-teal-800" : "border-white/25 bg-white/5 text-transparent"
                        )}
                      >
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="flex-1 font-semibold text-white">{a.label}</span>
                      <span className="font-display font-extrabold text-mint-400">+${a.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5 — Schedule */}
            <div>
              <StepLabel n={5} title="Pick a day & time" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Preferred date *">
                  <input required suppressHydrationWarning type="date" min={minDate} value={form.date} onChange={set("date")} className="input" />
                </Field>
                <Field label="Time *">
                  <select required suppressHydrationWarning value={form.time} onChange={set("time")} className="input">
                    {TIME_SLOTS.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Your message (optional)">
                    <textarea
                      rows={3}
                      suppressHydrationWarning
                      placeholder="e.g. pets at home, basement vents, parking notes…"
                      value={form.message}
                      onChange={set("message")}
                      className="input resize-y"
                    />
                  </Field>
                </div>
              </div>
            </div>

            {/* Live booking summary */}
            <div className="rounded-2xl border border-white/10 bg-navy/60 p-6 text-white backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <span className="text-slate-200">
                  {pkg ? pkg.label : "Not listed — we'll quote"} · {selectedProvince.name}
                </span>
                <span className="font-semibold">{pkg ? `$${pkg.price}` : "—"}</span>
              </div>
              <AnimatePresence initial={false}>
                {selectedAddons.map((a) => (
                  <motion.div
                    key={a.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center justify-between overflow-hidden text-sm"
                  >
                    <span className="pt-2 text-slate-300">{a.label}</span>
                    <span className="pt-2 text-mint-500">+${a.price}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="font-display text-lg font-semibold">Estimated total</span>
                <AnimatedAmount value={total} className="font-display text-2xl font-bold text-mint-400" />
              </div>
            </div>

            <Button size="lg" className="w-full !border-mint-500 !bg-white !text-teal-800 hover:!bg-mint-600" type="submit" disabled={submitting}>
              {submitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Sending…
                </>
              ) : (
                "Submit Booking"
              )}
            </Button>

            {error && (
              <div
                role="alert"
                className="flex flex-col items-center gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-5 text-center"
              >
                <p className="flex items-center gap-2 text-sm font-medium text-red-300">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  {error}
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-display font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-5 w-5" />
                  Message on WhatsApp
                </a>
              </div>
            )}

            {/* Honeypot anti-spam field — invisible to humans, off-screen and
                out of the tab order. */}
            <div
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
            >
              <label htmlFor="company-website">Company website</label>
              <input ref={honeypot} id="company-website" name="company-website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
          </form>
        )}

        {step === "done" && (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto h-16 w-16 text-teal-300" />
            <h3 className="mt-4 font-display text-2xl font-extrabold uppercase tracking-tight text-white">
              Booking Request Received
            </h3>
            <p className="mx-auto mt-2 max-w-md text-slate-300">
              Thank you for booking with {site.name}. Our team will contact you
              shortly to confirm your appointment.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={tel} size="lg" variant="secondary" className={onDarkSecondary}>
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-display font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" />
                Message on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.06);
          padding: 0.75rem 1rem;
          font-size: 1rem;
          color: #ffffff;
          outline: none;
          color-scheme: dark;
        }
        .input::placeholder {
          color: #7d8ba3;
        }
        .input:focus {
          border-color: var(--color-cyan);
          box-shadow: 0 0 0 3px rgba(3,42,91, 0.3);
        }
        /* Force readable option list (fixes white-on-white dropdown on Windows) */
        .input option {
          background-color: #032A5B;
          color: #ffffff;
        }
      `}</style>
    </Section>
  );
}

function StepLabel({ n, title }: { n: number; title: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-sm font-extrabold text-teal-800">
        {n}
      </span>
      <h3 className="font-display text-lg font-extrabold uppercase tracking-tight text-white">{title}</h3>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-slate-200">{label}</span>
      {children}
    </label>
  );
}
