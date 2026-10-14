// Single source of truth for the Fresh Air Quality brand.
// Change the name, phones, pricing, or service areas here and the whole site updates.

export const site = {
  name: "Fresh Air Quality",
  // Primary host — the live domain 301s www → non-www, so canonicals match that.
  url: "https://freshairquality.com",
  tagline: "Air Duct Cleaning Services",
  description:
    "Fresh Air Quality provides professional air duct cleaning, furnace cleaning, dryer vent and HRV cleaning for homes and businesses across Ontario, the Greater Toronto Area, Alberta, Quebec, British Columbia, Manitoba, Saskatchewan and the Maritime provinces. Certified technicians, no hidden charges — get a free quote today.",
  email: "hello@freshairquality.com",
  whatsapp: "(647) 367-0164",
  // WhatsApp number in full international digits (no +, spaces or symbols) for wa.me links.
  whatsappDigits: "16473670164",
  // Regional contact numbers — shown together in the footer (Call + WhatsApp per region).
  phones: [
    { region: "Canada-wide", phone: "(647) 367-0164", whatsappDigits: "16473670164" },
  ],
  // Default/general number — used anywhere the visitor's province isn't known.
  defaultPhone: "(647) 367-0164",

  // --- Social / marketing (leave "" to hide the icon until provided) ---
  facebookUrl: "",
  instagramUrl: "",

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

export type PriceTier = {
  packages: { id: string; label: string; price: number }[];
  addons: { id: string; label: string; price: number }[];
};

// Every extra furnace adds this much, in every area.
export const EXTRA_FURNACE_PRICE = 100;

// basic = Basic with 1 Furnace; 2 and 3 furnaces add EXTRA_FURNACE_PRICE each.
const tier = (
  basic: number,
  a: { acCoils: number; dryer: number; hrv: number; exhaustFan: number; brush: number }
): PriceTier => ({
  packages: [
    { id: "basic-1", label: "Basic with 1 Furnace", price: basic },
    { id: "basic-2", label: "Basic with 2 Furnaces", price: basic + EXTRA_FURNACE_PRICE },
    { id: "basic-3", label: "Basic with 3 Furnaces", price: basic + 2 * EXTRA_FURNACE_PRICE },
  ],
  addons: [
    { id: "furnace-extra", label: "Any Furnace Extra", price: EXTRA_FURNACE_PRICE },
    { id: "ac-coils", label: "Air Conditioning Coils", price: a.acCoils },
    { id: "dryer", label: "Dryer Vent", price: a.dryer },
    { id: "hrv", label: "HRV", price: a.hrv },
    { id: "exhaust-fan", label: "Exhaust Fan", price: a.exhaustFan },
    { id: "brush-cleaning", label: "Brush Cleaning", price: a.brush },
  ],
});

// Ontario (incl. the GTA)
const TIER_ONTARIO = tier(99, { acCoils: 70, dryer: 19, hrv: 80, exhaustFan: 19, brush: 100 });
// Every other area
const TIER_REST = tier(149, { acCoils: 70, dryer: 30, hrv: 100, exhaustFan: 29, brush: 150 });

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
};

// Areas served. Pricing per area drives the "Where We Serve" cards AND the
// booking calculator.
export const provinces: Province[] = [
  { code: "GTA", name: "Greater Toronto Area", slug: "greater-toronto-area", city: "Toronto", priceFrom: 99, pricing: TIER_ONTARIO, photo: "/images/areas/area-gta.webp", landmark: "the CN Tower and Toronto skyline" },
  { code: "ON", name: "Ontario", slug: "ontario", city: "Toronto", priceFrom: 99, pricing: TIER_ONTARIO, photo: "/images/areas/area-ontario.webp", landmark: "Niagara Falls" },
  { code: "AB", name: "Alberta", slug: "alberta", city: "Calgary", priceFrom: 149, pricing: TIER_REST, photo: "/images/areas/area-alberta.webp", landmark: "Moraine Lake in Banff National Park" },
  { code: "QC", name: "Quebec", slug: "quebec", city: "Montreal", priceFrom: 149, pricing: TIER_REST, photo: "/images/areas/area-quebec.webp", landmark: "Château Frontenac in Quebec City" },
  { code: "BC", name: "British Columbia", slug: "british-columbia", city: "Vancouver", priceFrom: 149, pricing: TIER_REST, photo: "/images/areas/area-british-columbia.webp", landmark: "the Vancouver skyline and Canada Place" },
  { code: "MB", name: "Manitoba", slug: "manitoba", city: "Winnipeg", priceFrom: 149, pricing: TIER_REST, photo: "/images/areas/area-manitoba.webp", landmark: "the Canadian Museum for Human Rights in Winnipeg" },
  { code: "SK", name: "Saskatchewan", slug: "saskatchewan", city: "Saskatoon", priceFrom: 149, pricing: TIER_REST, photo: "/images/areas/area-saskatchewan.webp", landmark: "the Saskatchewan Legislative Building in Regina" },
  { code: "MT", name: "Maritime Provinces", slug: "maritime-provinces", city: "Halifax", priceFrom: 149, pricing: TIER_REST, photo: "/images/areas/area-maritime.webp", landmark: "the Peggy’s Cove lighthouse in Nova Scotia" },
];

// Resolves the right contact number for a province, falling back to the
// general default when a province has no dedicated line.
export function phoneFor(provinceCode: string): string {
  return provinces.find((p) => p.code === provinceCode)?.phone ?? site.defaultPhone;
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
