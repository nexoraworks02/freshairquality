// Blog articles (/blog/[slug]/). Paragraphs support inline links written as
// [label](/path/) — rendered by components/RichText. Prices are pulled from
// config/site.ts so articles never go out of date when prices change.

import { provinces, EXTRA_FURNACE_PRICE } from "./site";

export type BlogSection = { heading: string; paragraphs: string[]; bullets?: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  date: string; // ISO date, shown as "Published"
  readMins: number;
  intro: string;
  sections: BlogSection[];
  faqs?: { question: string; answer: string }[];
};

// "$99" etc. for a package / add-on in a given area code.
const price = (code: string, id: string) => {
  const t = provinces.find((p) => p.code === code)!.pricing;
  const item = [...t.packages, ...t.addons].find((x) => x.id === id)!;
  return `$${item.price}`;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-duct-cleaning-cost",
    title: "How Much Does Air Duct Cleaning Cost in Canada?",
    metaTitle: "How Much Does Air Duct Cleaning Cost in Canada? | Fresh Air Quality",
    description:
      "A clear guide to air duct cleaning prices in Canada — what’s included, what changes the price, and our upfront prices for every province we serve.",
    date: "2026-10-15",
    readMins: 6,
    intro:
      "Duct cleaning prices vary a lot between companies, and the cheapest advertised price isn’t always what you end up paying. This guide explains what actually drives the cost, what should be included, and exactly what we charge — with no hidden fees.",
    sections: [
      {
        heading: "Our prices at a glance",
        paragraphs: [
          `At Fresh Air Quality, the Basic package — every duct and vent in your home plus one furnace — is ${price("ON", "basic-1")} in Ontario (including Toronto and the GTA), and ${price("AB", "basic-1")} in Alberta, Quebec, British Columbia, Manitoba, Saskatchewan and the Maritimes. Each extra furnace adds $${EXTRA_FURNACE_PRICE}.`,
          "You can see the full price list for your area, including add-ons, in our [duct cleaning cost guide](/duct-cleaning-cost/), or pick your city: [Toronto](/duct-cleaning-cost/toronto/), [Ottawa](/duct-cleaning-cost/ottawa/), [Calgary](/duct-cleaning-cost/calgary/), [Montreal](/duct-cleaning-cost/montreal/), [Vancouver](/duct-cleaning-cost/vancouver/) or [Winnipeg](/duct-cleaning-cost/winnipeg/).",
        ],
      },
      {
        heading: "What should be included in the price?",
        paragraphs: [
          "When you compare quotes, check exactly what the price covers. A low headline price sometimes covers only a handful of vents, with every extra vent charged on top. Our Basic package includes:",
        ],
        bullets: [
          "Every supply and return duct and vent in the home — not a vent count",
          "Cleaning of one furnace",
          "High-powered vacuum and rotary brushes",
          "HEPA-grade filtration equipment",
          "No hidden charges",
        ],
      },
      {
        heading: "What changes the cost?",
        paragraphs: [
          "A few things genuinely affect the price of a duct cleaning:",
        ],
        bullets: [
          `Number of furnaces — larger homes or homes with a basement suite may have two or three. Each extra furnace is $${EXTRA_FURNACE_PRICE}.`,
          "Add-ons — AC coils, dryer vent, HRV, exhaust fans and Brush Cleaning are optional, and you only pay for what your home has.",
          "Heavy buildup — older ductwork that has never been cleaned, or homes after renovations, often benefit from [Brush Cleaning](/services/brush-cleaning/).",
          "Your area — prices differ between Ontario and our other service areas.",
        ],
      },
      {
        heading: "Add-on prices",
        paragraphs: [
          `In Ontario: AC coils ${price("ON", "ac-coils")}, dryer vent ${price("ON", "dryer")}, HRV ${price("ON", "hrv")}, exhaust fan ${price("ON", "exhaust-fan")} and Brush Cleaning ${price("ON", "brush-cleaning")}.`,
          `In all other areas: AC coils ${price("AB", "ac-coils")}, dryer vent ${price("AB", "dryer")}, HRV ${price("AB", "hrv")}, exhaust fan ${price("AB", "exhaust-fan")} and Brush Cleaning ${price("AB", "brush-cleaning")}.`,
          "Filter changes are quoted on request, because filter sizes and types vary.",
        ],
      },
      {
        heading: "Is it worth paying for?",
        paragraphs: [
          "If your vents are blowing dust, the dust comes back quickly after cleaning, you’ve recently renovated, or you’ve just moved into a new build, a professional cleaning makes a visible difference. Read [signs you need your air ducts cleaned](/blog/signs-you-need-air-duct-cleaning/) to check your home, or [book online](/#quote) in about two minutes.",
        ],
      },
    ],
    faqs: [
      { question: "How much does air duct cleaning cost in Ontario?", answer: `Our Basic package with 1 furnace is ${price("ON", "basic-1")} in Ontario, with each extra furnace $${EXTRA_FURNACE_PRICE}.` },
      { question: "Are there any hidden charges?", answer: "No. The package covers every duct and vent in your home. You only pay extra for add-ons you choose, and you see the total in the booking form before you confirm." },
    ],
  },
  {
    slug: "how-often-should-you-clean-air-ducts",
    title: "How Often Should You Clean Your Air Ducts?",
    metaTitle: "How Often Should You Clean Your Air Ducts? | Fresh Air Quality",
    description:
      "How often Canadian homes should have their air ducts cleaned — and the situations (pets, allergies, renovations, new builds) when you should clean sooner.",
    date: "2026-10-15",
    readMins: 5,
    intro:
      "There’s no single schedule that suits every home, but there are clear guidelines — and a few situations where waiting is a bad idea.",
    sections: [
      {
        heading: "The general rule",
        paragraphs: [
          "Industry guidance commonly suggests cleaning a typical home’s ducts every 3 to 5 years. Many Canadian homes benefit from cleaning more often — every 2 to 3 years — because furnaces run for so much of the year and windows stay closed through winter.",
        ],
      },
      {
        heading: "Clean sooner if…",
        paragraphs: ["Some homes collect dust much faster than average. Consider cleaning sooner if:"],
        bullets: [
          "You have pets that shed",
          "Someone in the home has allergies or asthma",
          "You’ve renovated — drywall and sawdust settle deep in the ducts",
          "You’ve moved into a new build that has never been cleaned",
          "You’ve just bought a home and don’t know when the ducts were last cleaned",
          "Dust is visibly blowing out of the vents",
        ],
      },
      {
        heading: "Don’t forget the rest of the system",
        paragraphs: [
          "Your furnace filter should be checked every 1 to 3 months. Your dryer vent should be cleaned roughly once a year in a busy household — see our guide to [dryer vent fire safety](/blog/dryer-vent-cleaning-fire-safety/). If you have an HRV, its core and filters need regular cleaning too.",
        ],
      },
      {
        heading: "Climate makes a difference",
        paragraphs: [
          "Long winters in places like [Edmonton](/alberta/edmonton/), [Winnipeg](/manitoba/winnipeg/) and [Ottawa](/ontario/ottawa/) mean the furnace runs for months. Humid coastal cities like [Vancouver](/british-columbia/vancouver/) and [Halifax](/maritime-provinces/halifax/) deal more with moisture and musty smells. Either way, a system that runs more needs cleaning more often.",
          "Ready to book? See [our prices](/duct-cleaning-cost/) or [book online](/#quote).",
        ],
      },
    ],
  },
  {
    slug: "signs-you-need-air-duct-cleaning",
    title: "7 Signs You Need Your Air Ducts Cleaned",
    metaTitle: "7 Signs You Need Your Air Ducts Cleaned | Fresh Air Quality",
    description:
      "Dusty vents, musty smells, weak airflow and more — seven clear signs your home’s air ducts are due for a professional cleaning.",
    date: "2026-10-15",
    readMins: 5,
    intro:
      "Your ducts are hidden in walls and ceilings, so it’s easy to forget them. These are the signs that tell you they need attention.",
    sections: [
      {
        heading: "1. Dust blowing out of the vents",
        paragraphs: ["If you see a puff of dust when the furnace or AC starts, or dark marks around the vent covers, dust has built up inside the ducts."],
      },
      {
        heading: "2. Dust comes back right after you clean",
        paragraphs: ["If furniture is dusty again a day or two after cleaning, the system may be recirculating dust from the ductwork."],
      },
      {
        heading: "3. Musty or stale smells",
        paragraphs: ["A musty smell when the system turns on can mean dust and moisture inside the ducts — common in humid areas and basements."],
      },
      {
        heading: "4. Weak airflow in some rooms",
        paragraphs: ["Buildup and debris can restrict airflow, leaving some rooms colder in winter or warmer in summer than others."],
      },
      {
        heading: "5. You’ve renovated",
        paragraphs: ["Renovation dust gets pulled into the return vents and settles in the ducts. A cleaning after renovations removes it — [Brush Cleaning](/services/brush-cleaning/) helps with stuck-on dust."],
      },
      {
        heading: "6. You moved into a new build",
        paragraphs: ["New homes often contain construction dust and debris. Many families in growing areas like [Brampton](/ontario/brampton/), [Surrey](/british-columbia/surrey/) and [Calgary](/alberta/calgary/) are surprised how much comes out on the first cleaning."],
      },
      {
        heading: "7. You can’t remember the last cleaning",
        paragraphs: [
          "If you don’t know when the ducts were last cleaned — or you’ve just bought the home — it’s probably time. See [how often you should clean your ducts](/blog/how-often-should-you-clean-air-ducts/).",
          "Noticed any of these? [Check our prices](/duct-cleaning-cost/) and [book online](/#quote).",
        ],
      },
    ],
  },
  {
    slug: "dryer-vent-cleaning-fire-safety",
    title: "Dryer Vent Cleaning and Fire Safety: What Every Homeowner Should Know",
    metaTitle: "Dryer Vent Cleaning & Fire Safety | Fresh Air Quality",
    description:
      "Why lint buildup in dryer vents is a fire risk, the warning signs of a clogged vent, and how often to have your dryer vent cleaned.",
    date: "2026-10-15",
    readMins: 5,
    intro:
      "The lint trap catches a lot, but not everything. Lint that gets past it builds up inside the vent pipe — and lint burns easily.",
    sections: [
      {
        heading: "Why clogged dryer vents are dangerous",
        paragraphs: [
          "Fire safety organizations consistently list failure to clean the dryer as a leading cause of dryer fires. When lint narrows the vent, hot air can’t escape, the dryer runs hotter and longer, and the lint inside the pipe can ignite.",
        ],
      },
      {
        heading: "Warning signs of a clogged vent",
        paragraphs: ["Watch for these signs:"],
        bullets: [
          "Clothes take more than one cycle to dry",
          "The dryer or laundry room gets unusually hot",
          "A burning smell when the dryer runs",
          "The outside vent flap barely opens when the dryer is on",
          "Lint around the outside vent or behind the dryer",
        ],
      },
      {
        heading: "How often should you clean it?",
        paragraphs: [
          "For most households, once a year is a good rule. Large families, long vent runs, or vents that exit through the roof may need cleaning more often. Clean the lint trap after every load.",
        ],
      },
      {
        heading: "How we clean dryer vents",
        paragraphs: [
          "We disconnect the dryer, run a rotary brush through the full length of the vent, vacuum out the loosened lint, and check that the outside flap opens and closes properly. See the full details on our [dryer vent cleaning](/services/dryer-vent-cleaning/) page.",
          `Dryer vent cleaning is an add-on to any duct cleaning — ${price("ON", "dryer")} in Ontario, ${price("AB", "dryer")} in other areas. [Book online](/#quote) to add it to your visit.`,
        ],
      },
    ],
  },
  {
    slug: "benefits-of-clean-air-ducts",
    title: "The Real Benefits of Clean Air Ducts",
    metaTitle: "Benefits of Clean Air Ducts | Fresh Air Quality",
    description:
      "What air duct cleaning actually does for your home — less dust, fresher air, better airflow and a furnace that doesn’t have to work as hard.",
    date: "2026-10-15",
    readMins: 4,
    intro:
      "Duct cleaning isn’t magic, and we won’t pretend it is. But in a home with dirty ducts, the difference is real and easy to notice.",
    sections: [
      {
        heading: "Less dust around the house",
        paragraphs: ["When the ducts are full of dust, every time the system runs it blows some of it back into your rooms. Removing that buildup means less dust settling on furniture and floors."],
      },
      {
        heading: "Fresher-smelling air",
        paragraphs: ["Dust, pet dander and moisture in ductwork can cause stale or musty smells. A clean system smells noticeably fresher, especially when the heat or AC first turns on."],
      },
      {
        heading: "Better airflow",
        paragraphs: ["Debris and buildup can restrict airflow. Clearing it helps air reach every room more evenly, so rooms at the end of long duct runs heat and cool better."],
      },
      {
        heading: "Less strain on your furnace and AC",
        paragraphs: ["A dusty blower and clogged system make your equipment work harder. Our packages include [furnace cleaning](/services/furnace-cleaning/), and you can add [AC coil cleaning](/services/ac-cleaning/) to keep cooling efficient."],
      },
      {
        heading: "Peace of mind after renovations or moving",
        paragraphs: [
          "After a renovation, or when you move into a new home, you don’t know what’s in the ducts. A professional cleaning gives you a clean starting point.",
          "Learn more about [air duct cleaning](/services/air-duct-cleaning/), check [our prices](/duct-cleaning-cost/), or [book online](/#quote).",
        ],
      },
    ],
  },
  {
    slug: "what-to-expect-professional-duct-cleaning",
    title: "What to Expect From a Professional Duct Cleaning",
    metaTitle: "What to Expect From a Professional Duct Cleaning | Fresh Air Quality",
    description:
      "Step by step: how a professional air duct cleaning works, how long it takes, how to prepare your home, and what you should get for your money.",
    date: "2026-10-15",
    readMins: 5,
    intro:
      "If you’ve never had your ducts cleaned, it helps to know what happens during the visit — and what a proper job looks like.",
    sections: [
      {
        heading: "Before we arrive",
        paragraphs: [
          "When you [book online](/#quote), you choose your package, any add-ons and a morning or afternoon slot. It helps to clear a path to the furnace and make sure vents aren’t blocked by furniture.",
        ],
      },
      {
        heading: "Step 1: Inspection",
        paragraphs: ["Our technician looks over your duct system, vents and furnace to check for blockages and plan the cleaning."],
      },
      {
        heading: "Step 2: Vacuum hookup",
        paragraphs: ["A high-powered vacuum is connected to the system to create negative pressure, so loosened dust is pulled out of the ducts — not into your home."],
      },
      {
        heading: "Step 3: Agitation and cleaning",
        paragraphs: ["Rotary brushes and air tools loosen dust from the duct walls while the vacuum captures it. HEPA-grade filtration traps the fine particles. If you added [Brush Cleaning](/services/brush-cleaning/), extra brushing removes stuck-on buildup."],
      },
      {
        heading: "Step 4: Furnace and add-ons",
        paragraphs: ["The furnace is cleaned, along with any add-ons you chose — AC coils, dryer vent, HRV or exhaust fans."],
      },
      {
        heading: "Step 5: Final check",
        paragraphs: ["We check the vents for clear, even airflow before we leave."],
      },
      {
        heading: "How long does it take?",
        paragraphs: [
          "Most homes take 1.5 to 3 hours, depending on the size of the home, the number of vents and the add-ons. It’s safe for kids and pets to stay home.",
          "See [our prices](/duct-cleaning-cost/) or read [how often you should clean your ducts](/blog/how-often-should-you-clean-air-ducts/).",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
