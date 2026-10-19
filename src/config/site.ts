// Single source of truth for the Fresh Air Quality brand.
// Change the name, phones, pricing, or service areas here and the whole site updates.

export const site = {
  name: "Fresh Air Quality",
  // Primary host (non-www). www.freshairquality.ca redirects here on Vercel.
  url: "https://freshairquality.ca",
  tagline: "Air Duct Cleaning Services",
  description:
    "Fresh Air Quality provides professional air duct cleaning, furnace cleaning, dryer vent and HRV cleaning for homes and businesses across Ontario (including Toronto and the GTA), Alberta, Quebec, British Columbia, Manitoba, Saskatchewan and the Maritime provinces. Certified technicians, no hidden charges — get a free quote today.",
  email: "info@freshairquality.ca",
  whatsapp: "(647) 367-0164",
  // WhatsApp number in full international digits (no +, spaces or symbols) for wa.me links.
  whatsappDigits: "16473670164",
  // Regional contact numbers — shown together in the footer (Call + WhatsApp per region).
  phones: [
    { region: "Ontario & Canada-wide", code: "ON", phone: "(647) 367-0164", whatsappDigits: "16473670164" },
    { region: "Quebec", code: "QC", phone: "(438) 231-3071", whatsappDigits: "14382313071" },
  ],
  // Default/general number — used anywhere the visitor's province isn't known.
  defaultPhone: "(647) 367-0164",

  // --- Social / marketing (leave "" to hide the icon until provided) ---
  facebookUrl: "https://www.facebook.com/profile.php?id=61587226493480",
  instagramUrl: "https://www.instagram.com/fresh_air_quality/",

  // --- Meta Ads tracking ---
  // Set NEXT_PUBLIC_META_PIXEL_ID in your environment. While empty, the Pixel
  // simply doesn't load (no errors). Never use a fake id.
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",

  // --- Google Analytics 4 ---
  // While empty, GA simply doesn't load (no errors). Never use a fake id.
  gaMeasurementId: "",

  // --- Google Search Console ---
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",

  // --- Booking email delivery (Web3Forms — free, no backend) ---
  // SETUP (one time, ~30 seconds):
  //   1. Go to https://web3forms.com
  //   2. In "Create Access Key", enter the inbox that should receive bookings.
  //   3. Put the key in .env.local as NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.
  // Until a valid key is set, the booking form shows an error on submit
  // (it never silently "succeeds").
  web3formsAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",

  // --- Business location (Google Maps — key-free embed) ---
  address: "47 Colborne Street, Toronto, ON",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=47+Colborne+Street,+Toronto,+ON&t=m&z=15&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=47+Colborne+Street,+Toronto,+ON",
} as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  benefit: string;
  icon: string; // lucide icon name
};

export const services: Service[] = [
  {
    slug: "air-duct-cleaning",
    name: "Air Duct Cleaning",
    short: "Every duct and vent deep-cleaned with high-powered vacuums and rotary brushes.",
    benefit: "Cleaner air in every room",
    icon: "Wind",
  },
  {
    slug: "furnace-cleaning",
    name: "Furnace Cleaning",
    short: "Keep your heating system clean, safe and efficient all winter.",
    benefit: "Lower energy bills",
    icon: "Thermometer",
  },
  {
    slug: "dryer-vent-cleaning",
    name: "Dryer Vent Cleaning",
    short: "Prevent fire hazards and help your dryer run efficiently.",
    benefit: "Safer, faster drying",
    icon: "Flame",
  },
  {
    slug: "ac-cleaning",
    name: "AC Coil Cleaning",
    short: "Improve cooling performance and indoor air quality.",
    benefit: "Cooler, fresher air",
    icon: "Snowflake",
  },
  {
    slug: "filter-change",
    name: "Filter Change",
    short: "Replace clogged filters to ensure fresh, clean air circulation.",
    benefit: "Cleaner system breathing",
    icon: "Filter",
  },
  {
    slug: "brush-cleaning",
    name: "Brush Cleaning",
    short: "Rotary brushes scrub stuck-on dust and debris off duct walls — add-on from $100.",
    benefit: "Deepest possible clean",
    icon: "Brush",
  },
];

/* ---------------- Pricing (copied from the WordPress booking forms) ---------------- */

// One price line. `unit` marks items priced per piece (e.g. "furnace", "fan");
// the booking form then asks "how many" (0 … maxQty).
export type PriceItem = { id: string; label: string; price: number; unit?: string; maxQty?: number };

export type PriceTier = {
  base: PriceItem; // Basic Duct Cleaning — the starting ("from") price
  addons: PriceItem[];
};

// What the Basic Duct Cleaning includes. A furnace INSPECTION is free;
// furnace CLEANING is always an add-on (per furnace), never part of a package.
export const BASIC_INCLUDES = [
  "Every supply & return duct and vent cleaned",
  "Free furnace inspection",
  "High-powered vacuum & rotary brushes",
  "HEPA-grade filtration",
  "No hidden charges",
];

const tier = (p: {
  duct: number;
  furnace: number;
  ac: number;
  dryer: number;
  hrv: number;
  heatPump: number;
  centralVacuum: number;
  exhaustFan: number;
  brush: number;
}): PriceTier => ({
  base: { id: "basic", label: "Basic Duct Cleaning", price: p.duct },
  addons: [
    { id: "furnace", label: "Furnace Cleaning", price: p.furnace, unit: "furnace", maxQty: 3 },
    { id: "ac", label: "AC Cleaning", price: p.ac },
    { id: "dryer", label: "Dryer Vent", price: p.dryer },
    { id: "hrv", label: "HRV", price: p.hrv },
    { id: "heat-pump", label: "Heat Pump Cleaning", price: p.heatPump },
    { id: "central-vacuum", label: "Central Vacuum", price: p.centralVacuum },
    { id: "exhaust-fan", label: "Exhaust Fan", price: p.exhaustFan, unit: "fan", maxQty: 6 },
    { id: "brush-cleaning", label: "Brush Cleaning", price: p.brush },
  ],
});

// Ontario (includes Toronto and the GTA)
const TIER_ONTARIO = tier({ duct: 129, furnace: 69, ac: 69, dryer: 19, hrv: 69, heatPump: 69, centralVacuum: 49, exhaustFan: 19, brush: 100 });
// Every other area
const TIER_REST = tier({ duct: 179, furnace: 79, ac: 79, dryer: 49, hrv: 99, heatPump: 79, centralVacuum: 79, exhaustFan: 29, brush: 150 });

// Price of one add-on in a tier (throws on a typo'd id so pages never show "$undefined").
export function addonPrice(t: PriceTier, id: string): number {
  const a = t.addons.find((x) => x.id === id);
  if (!a) throw new Error(`Unknown add-on: ${id}`);
  return a.price;
}

export type Province = {
  code: string;
  name: string;
  slug: string; // URL — matches the old WordPress page, e.g. /ontario/
  city: string;
  priceFrom: number;
  pricing: PriceTier;
  photo: string; // landmark photo (cards, dropdown, province page hero)
  landmark: string; // what the photo shows (alt text)
  // Province-specific contact number. Falls back to site.defaultPhone when unset.
  phone?: string;
  // WhatsApp digits for that number (wa.me links). Falls back to site.whatsappDigits.
  whatsappDigits?: string;
  // Local office address shown on that province's pages. Falls back to site.address.
  address?: string;
};

// Areas served. Pricing per area drives the "Where We Serve" cards AND the
// booking calculator.
export const provinces: Province[] = [
  { code: "ON", address: "47 Colborne Street, Toronto, ON", name: "Ontario", slug: "ontario", city: "Toronto", priceFrom: TIER_ONTARIO.base.price, pricing: TIER_ONTARIO, photo: "/images/areas/area-ontario.webp", landmark: "Niagara Falls" },
  { code: "AB", address: "205 5th Avenue SW, Calgary, AB", name: "Alberta", slug: "alberta", city: "Calgary", priceFrom: TIER_REST.base.price, pricing: TIER_REST, photo: "/images/areas/area-alberta.webp", landmark: "Moraine Lake in Banff National Park" },
  { code: "QC", address: "1000 Rue de la Gauchetière O., Montréal, QC", name: "Quebec", slug: "quebec", city: "Montreal", priceFrom: TIER_REST.base.price, pricing: TIER_REST, phone: "(438) 231-3071", whatsappDigits: "14382313071", photo: "/images/areas/area-quebec.webp", landmark: "Château Frontenac in Quebec City" },
  { code: "BC", address: "1285 West Pender Street, Vancouver, BC", name: "British Columbia", slug: "british-columbia", city: "Vancouver", priceFrom: TIER_REST.base.price, pricing: TIER_REST, photo: "/images/areas/area-british-columbia.webp", landmark: "the Vancouver skyline and Canada Place" },
  { code: "MB", address: "171 Bannatyne Avenue, Winnipeg, MB", name: "Manitoba", slug: "manitoba", city: "Winnipeg", priceFrom: TIER_REST.base.price, pricing: TIER_REST, photo: "/images/areas/area-manitoba.webp", landmark: "the Canadian Museum for Human Rights in Winnipeg" },
  { code: "SK", address: "410 22nd St E, Saskatoon, SK", name: "Saskatchewan", slug: "saskatchewan", city: "Saskatoon", priceFrom: TIER_REST.base.price, pricing: TIER_REST, photo: "/images/areas/area-saskatchewan.webp", landmark: "the Saskatchewan Legislative Building in Regina" },
  { code: "MT", name: "Maritime Provinces", slug: "maritime-provinces", city: "Halifax", priceFrom: TIER_REST.base.price, pricing: TIER_REST, photo: "/images/areas/area-maritime.webp", landmark: "the Peggy’s Cove lighthouse in Nova Scotia" },
];

// Resolves the right contact number for a province, falling back to the
// general default when a province has no dedicated line.
export function phoneFor(provinceCode: string): string {
  return provinces.find((p) => p.code === provinceCode)?.phone ?? site.defaultPhone;
}

// Office address for a province, else the main (Toronto) address.
export function addressFor(provinceCode: string): string {
  return provinces.find((p) => p.code === provinceCode)?.address ?? site.address;
}

// The one contact line to show for a province: its own number if it has one,
// otherwise the main Ontario line.
export function contactLineFor(provinceCode?: string) {
  const p = provinces.find((x) => x.code === provinceCode);
  if (p?.phone) return { region: p.name, phone: p.phone, whatsappDigits: p.whatsappDigits ?? site.whatsappDigits };
  return { region: "Ontario & Canada-wide", phone: site.defaultPhone, whatsappDigits: site.whatsappDigits };
}

// WhatsApp digits for a province's line (Quebec has its own), else the main line.
export function whatsappFor(provinceCode: string): string {
  return provinces.find((p) => p.code === provinceCode)?.whatsappDigits ?? site.whatsappDigits;
}

// Province code from a URL path ("/quebec/montreal/" → "QC"), or undefined.
export function provinceCodeFromPath(pathname: string): string | undefined {
  const slug = pathname.split("/").filter(Boolean)[0];
  return provinces.find((p) => p.slug === slug)?.code;
}

// tel: link in international format, e.g. "(647) 367-0164" → "tel:+16473670164".
export function telHref(phone: string): string {
  return `tel:+1${phone.replace(/\D/g, "").slice(-10)}`;
}

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/duct-cleaning-cost/" },
  { label: "Reviews", href: "/#videos" },
  { label: "Service Areas", href: "/service-areas/" },
  { label: "Contact", href: "/#contact" },
];
