// Shared copy for the cost hub and city cost guides. Every number comes from
// config/site.ts so these pages always match the booking form.

import { BASIC_INCLUDES, addonPrice, type Province } from "./site";

export const COST_YEAR = 2026;

export const INCLUDED = BASIC_INCLUDES;

export const COMPARE_TIPS = [
  "Ask whether the price covers every vent, or only a set number with extra vents charged on top.",
  "Check whether furnace cleaning is included, an add-on, or just an inspection.",
  "Ask which equipment is used — a powerful vacuum plus brushes, not just a shop-vac.",
  "Get the total in writing before the visit, including any add-ons.",
];

// Price FAQs for a place (city or area), written from live prices.
export function costFaqs(place: string, p: Province) {
  const t = p.pricing;
  return [
    {
      question: `How much does air duct cleaning cost in ${place}?`,
      answer: `Our Basic Duct Cleaning — every duct and vent in your home plus a free furnace inspection — starts at $${t.base.price} in ${place}.`,
    },
    {
      question: `How much is furnace cleaning in ${place}?`,
      answer: `Furnace cleaning is an add-on at $${addonPrice(t, "furnace")} per furnace. Choose how many furnaces you have in the booking form and the total updates automatically.`,
    },
    {
      question: `How much is Brush Cleaning in ${place}?`,
      answer: `Brush Cleaning is a $${addonPrice(t, "brush-cleaning")} add-on in ${place}. It uses rotary brushes to loosen stuck-on dust — recommended for older ducts and homes after renovations.`,
    },
    {
      question: "Are there any hidden charges?",
      answer: "No. Basic Duct Cleaning covers every duct and vent. You only pay for the add-ons you choose, and you see your estimated total in the booking form before you confirm.",
    },
  ];
}
