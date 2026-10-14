// Shared copy for the cost hub and city cost guides. Every number comes from
// config/site.ts so these pages always match the booking form.

import { EXTRA_FURNACE_PRICE, type Province } from "./site";

const item = (p: Province, id: string) =>
  [...p.pricing.packages, ...p.pricing.addons].find((x) => x.id === id)!.price;

export const COST_YEAR = 2026;

export const INCLUDED = [
  "Every supply and return duct and vent in the home — not a vent count",
  "Cleaning of one furnace (Basic with 1 Furnace)",
  "High-powered vacuum and rotary brushes",
  "HEPA-grade filtration equipment",
  "A final airflow check at the vents",
];

export const COMPARE_TIPS = [
  "Ask whether the price covers every vent, or only a set number with extra vents charged on top.",
  "Check whether furnace cleaning is included or extra.",
  "Ask which equipment is used — a powerful vacuum plus brushes, not just a shop-vac.",
  "Get the total in writing before the visit, including any add-ons.",
];

// Price FAQs for a place (city or area), written from live prices.
export function costFaqs(place: string, p: Province) {
  return [
    {
      question: `How much does air duct cleaning cost in ${place}?`,
      answer: `Our Basic package — every duct and vent in your home plus one furnace — is $${item(p, "basic-1")} in ${place}. With 2 furnaces it’s $${item(p, "basic-2")}, and with 3 furnaces $${item(p, "basic-3")}.`,
    },
    {
      question: "How much is each extra furnace?",
      answer: `Each extra furnace is $${EXTRA_FURNACE_PRICE}. Choose the package with the right number of furnaces when you book.`,
    },
    {
      question: `How much is Brush Cleaning in ${place}?`,
      answer: `Brush Cleaning is a $${item(p, "brush-cleaning")} add-on in ${place}. It uses rotary brushes to loosen stuck-on dust — recommended for older ducts and homes after renovations.`,
    },
    {
      question: "Are there any hidden charges?",
      answer: "No. The package covers every duct and vent. You only pay for the add-ons you choose, and you see your estimated total in the booking form before you confirm.",
    },
  ];
}
