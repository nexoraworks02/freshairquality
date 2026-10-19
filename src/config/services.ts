export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  headline: string;
  short: string;
  priceNote: string;
  priceValue?: string;
  intro: string;
  whyItMatters: string;
  whatIsIncluded: string[];
  process: ServiceProcessStep[];
  faqs: ServiceFAQ[];
  metaTitle: string;
  metaDescription: string;
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "air-duct-cleaning": {
    slug: "air-duct-cleaning",
    name: "Air Duct Cleaning",
    headline: "Professional Air Duct Cleaning",
    short: "Remove dust, allergens & debris from your entire duct system.",
    priceNote: "Basic Duct Cleaning from $129 in Ontario · $179 in all other areas (free furnace inspection included)",
    priceValue: "$129",
    intro: "Eliminate years of dust, lint, and built-up allergens from your home's air duct system to restore fresh airflow.",
    whyItMatters: "Over time, your home's ductwork accumulates dust, pet dander, mold spores, and construction debris. When your furnace or AC runs, these particles circulate throughout your living spaces. Clean ducts promote a healthier indoor environment, reduce allergy triggers, and help your HVAC system run more efficiently.",
    whatIsIncluded: [
      "Every air duct and vent cleaned",
      "High-powered vacuums and rotary brushes",
      "HEPA-grade filtration equipment",
      "Free furnace inspection with every duct cleaning",
      "Eco-friendly methods, safe for kids and pets"
    ],
    process: [
      {
        title: "Inspection",
        description: "Our technicians conduct a thorough visual inspection of your duct system, vents, and HVAC units to check for major blockages or leaks."
      },
      {
        title: "Negative Pressure Hookup",
        description: "We hook up our powerful vacuum system to create strong negative air pressure, drawing loose dirt and dust out."
      },
      {
        title: "Deep Agitation",
        description: "Using specialized tools like air whips and brushes, we dislodge dust clinging to duct walls and pull it into our containment system."
      },
      {
        title: "HEPA Filtration & Final Check",
        description: "Dust is captured with HEPA-grade filtration, then we check every vent for clean, even airflow before we leave."
      }
    ],
    faqs: [
      {
        question: "How often should I have my air ducts cleaned?",
        answer: "Most homes benefit from a professional duct cleaning every 2 to 3 years, or sooner if you have pets, allergies, or have recently completed home renovations."
      },
      {
        question: "Does air duct cleaning make a mess in the house?",
        answer: "No. We use a sealed vacuum hookup that draws all dust directly into our collection system, keeping your home clean."
      },
      {
        question: "Is the process safe for pets and children?",
        answer: "Yes. We use eco-friendly cleaning methods and professional equipment, so your family and pets can stay home during the cleaning."
      },
      {
        question: "How long does the service take?",
        answer: "An average residential duct cleaning takes between 1.5 to 3 hours, depending on the size of the home and number of vents."
      }
    ],
    metaTitle: "Air Duct Cleaning Canada | Fresh Air Quality",
    metaDescription: "Professional air duct cleaning across Ontario, Alberta, Quebec, BC, Manitoba, Saskatchewan & the Maritimes. Remove dust, buildup, and debris from your duct system. Book today."
  },
  "furnace-cleaning": {
    slug: "furnace-cleaning",
    name: "Furnace Cleaning",
    headline: "Professional Furnace Cleaning",
    short: "Keep your heating system clean, safe and efficient all winter.",
    priceNote: "Furnace cleaning add-on from $69 per furnace in Ontario · $79 in all other areas",
    priceValue: "$69",
    intro: "Keep your heating system running safely and efficiently all winter with a deep clean of the furnace components.",
    whyItMatters: "A dirty furnace works harder to heat your home, driving up utility bills and accelerating wear on internal components. Dust buildup on the heat exchanger or blower motor can also create safety hazards or lead to premature system failure. Professional cleaning maximizes efficiency and extends your heating system's life.",
    whatIsIncluded: [
      "Heat exchanger inspection",
      "Burner assembly cleaning and safety check",
      "Blower motor inspection and dust removal",
      "Cleaning of internal furnace cabinet",
      "Pilot light / igniter testing"
    ],
    process: [
      {
        title: "Safety Shutoff",
        description: "We power down the furnace and turn off gas lines to ensure a completely safe working environment."
      },
      {
        title: "Component Inspection",
        description: "We remove panel covers to inspect the heat exchanger, blower wheel, igniter, and burner assemblies for wear."
      },
      {
        title: "Vacuum & Agitate",
        description: "Using targeted brushes and vacuum attachments, we remove dust, soot, and carbon deposits from all internal parts."
      },
      {
        title: "Test Run",
        description: "We restore power and gas, executing a full test cycle to verify correct ignition, flame color, and clean airflow."
      }
    ],
    faqs: [
      {
        question: "Why should I clean my furnace?",
        answer: "Furnace cleaning improves heating efficiency, lowers utility bills, reduces dust blowing through your home, and prevents unexpected system breakdowns."
      },
      {
        question: "Is furnace cleaning the same as a furnace tune-up?",
        answer: "Cleaning focuses on removing dust and debris from components like the blower and burners. A tune-up includes mechanical diagnostics, but cleaning is a vital part of regular maintenance."
      },
      {
        question: "Can I add this to my duct cleaning package?",
        answer: "Yes! Furnace cleaning is an add-on priced per furnace — from $69 in Ontario and $79 in other areas — done in the same visit as your duct cleaning. Every duct cleaning also includes a free furnace inspection."
      },
      {
        question: "How often does my furnace need cleaning?",
        answer: "We recommend cleaning your furnace annually, preferably in the autumn before the winter heating season begins."
      }
    ],
    metaTitle: "Furnace Cleaning Canada | Fresh Air Quality",
    metaDescription: "Professional furnace cleaning across Canada. Keep your heating system safe, clean, and running efficiently. Schedule your furnace service today."
  },
  "ac-cleaning": {
    slug: "ac-cleaning",
    name: "AC Cleaning",
    headline: "Professional Air Conditioner Cleaning",
    short: "Improve cooling performance and indoor air quality.",
    priceNote: "AC cleaning add-on from $69 in Ontario · $79 in all other areas",
    priceValue: "$69",
    intro: "Boost cooling efficiency, lower your energy bills, and enjoy fresher air with our professional AC unit deep clean.",
    whyItMatters: "Dust and dirt act as thermal insulators on AC evaporator coils, forcing your system to run longer and work harder to cool the home. Clogged condensation drains can overflow, causing water damage. Cleaning ensures optimal heat transfer, improves humidity removal, and keeps your indoor air smelling fresh.",
    whatIsIncluded: [
      "Evaporator coil inspection and cleaning",
      "Condensation drain line flush to prevent leaks",
      "Blower fan cleaning (for indoor air handlers)",
      "Thermostat calibration check",
      "Outdoor condenser coil debris clearing"
    ],
    process: [
      {
        title: "Coil Access",
        description: "We locate the indoor evaporator coil (typically above the furnace) and remove the access panel carefully."
      },
      {
        title: "Drain Flush",
        description: "We inspect the condensation pan and flush the drain line with high pressure to clear any algae, mold, or blockages."
      },
      {
        title: "Coil Deep Clean",
        description: "We apply a self-rinsing coil cleaner or brush away dust buildup, restoring efficient heat exchange."
      },
      {
        title: "Condenser Check",
        description: "We inspect and clear leaves, dirt, and debris from the outdoor condenser unit to ensure proper heat dissipation."
      }
    ],
    faqs: [
      {
        question: "Why is AC coil cleaning important?",
        answer: "Coils must be clean to transfer heat. Dirty coils reduce cooling capacity, increase energy usage, and can cause the AC compressor to fail."
      },
      {
        question: "Will this help lower my summer electric bills?",
        answer: "Yes! A clean AC system runs shorter cycles and consumes significantly less electricity to cool your home."
      },
      {
        question: "How do I know if my AC needs cleaning?",
        answer: "If you notice weak airflow, higher electric bills, or a musty odor when the AC turns on, it likely needs a professional clean."
      },
      {
        question: "How often should the AC coils be cleaned?",
        answer: "Coils should be inspected annually and cleaned at least every 1 to 2 years, depending on local air quality and usage. You can add it during booking or confirm with the technician."
      }
    ],
    metaTitle: "AC Cleaning Canada | Fresh Air Quality",
    metaDescription: "Professional AC cleaning across Canada. Improve cooling efficiency, lower bills, and prevent water leaks with evaporator coil cleaning. Book today."
  },
  "dryer-vent-cleaning": {
    slug: "dryer-vent-cleaning",
    name: "Dryer Vent Cleaning",
    headline: "Dryer Vent Cleaning",
    short: "Prevent fire hazards and help your dryer run efficiently.",
    priceNote: "Dryer Vent add-on from $19",
    priceValue: "$19",
    intro: "Prevent house fires, shorten drying times, and extend the lifespan of your dryer with our low-cost vent clearing.",
    whyItMatters: "Clogged dryer vents are one of the leading causes of residential house fires in North America. When lint blocks the exhaust pipe, heat and moisture build up, creating a fire hazard and forcing the dryer to run longer. Cleaning your dryer vent saves energy, protects your home, and stops your clothes from taking multiple cycles to dry.",
    whatIsIncluded: [
      "Full dryer vent line cleaning from machine to exterior wall",
      "Removal of lint plugs and bird/rodent nest blockages",
      "Backdraft damper inspection and clearing",
      "Dryer lint trap housing vacuuming",
      "Airflow velocity test before and after cleaning"
    ],
    process: [
      {
        title: "Disconnect Dryer",
        description: "We pull the dryer away from the wall and disconnect the transition hose to inspect the back of the machine."
      },
      {
        title: "Rotary Brush Run",
        description: "We run a flexible rotating brush system through the entire length of the vent pipe, breaking loose packed lint."
      },
      {
        title: "High-Power Vacuuming",
        description: "Simultaneously, we vacuum out the loosened lint, ensuring it is completely extracted and doesn't enter your home."
      },
      {
        title: "Termination Hood Check",
        description: "We clean the outdoor exhaust vent cover to ensure the flap opens and closes properly, preventing pest entry."
      }
    ],
    faqs: [
      {
        question: "How do I know my dryer vent is clogged?",
        answer: "Warning signs include clothes taking longer than one cycle to dry, the dryer getting unusually hot, or a musty smell on your laundry."
      },
      {
        question: "Is dryer vent cleaning really only $19?",
        answer: "Yes! When booked alongside our duct cleaning services, we offer dryer vent clearing as an add-on from $19 in Ontario ($49 in other areas). It can also be quoted/confirmed by your technician."
      },
      {
        question: "How does it prevent fires?",
        answer: "Lint is highly flammable. Overheating inside a blocked vent line can ignite the lint, spreading a fire quickly through the walls."
      },
      {
        question: "Can birds nest inside my dryer vent?",
        answer: "Yes. If your exhaust flap is damaged or missing, birds and rodents often nest inside, creating complete blockages. We clear these safely."
      }
    ],
    metaTitle: "Dryer Vent Cleaning Canada | Fresh Air Quality",
    metaDescription: "Dryer vent cleaning across Canada from $19 as an add-on. Prevent fire hazards, decrease laundry drying times, and improve dryer longevity. Book with duct cleaning today."
  },
  "filter-change": {
    slug: "filter-change",
    name: "Filter Change",
    headline: "Professional Filter Change",
    short: "Replace clogged filters to ensure fresh, clean air circulation.",
    priceNote: "Filter change quoted on request",
    priceValue: undefined,
    intro: "Ensure optimal indoor air quality and protect your HVAC system with a high-performance replacement filter.",
    whyItMatters: "The furnace filter is the primary line of defense protecting your heating and cooling equipment from dust buildup, while also trapping airborne particles. A clogged filter restricts airflow, causing the system to overheat or freeze, and allows dust to bypass the filter and settle inside your ductwork. Regularly replacing it is crucial for air hygiene.",
    whatIsIncluded: [
      "Clogged filter removal and disposal",
      "System plenum and filter rack vacuuming",
      "High-efficiency MERV filter installation",
      "Custom fit and alignment check",
      "Recommended replacement schedule advice"
    ],
    process: [
      {
        title: "Filter Locate",
        description: "We locate the filter compartment, which is typically found in the return air plenum next to the furnace."
      },
      {
        title: "Vacuum Compartment",
        description: "Before sliding in the new filter, we vacuum out any dust or hair that has gathered in the slot."
      },
      {
        title: "Install New Filter",
        description: "We install a high-quality replacement filter, ensuring it is oriented in the correct airflow direction."
      },
      {
        title: "Verify Fit",
        description: "We check that there are no gaps around the edges where unfiltered air could slip through."
      }
    ],
    faqs: [
      {
        question: "How often should I change my furnace filter?",
        answer: "Standard 1-inch filters should be changed every 1 to 3 months. Thicker media filters (4-5 inches) can last 6 to 12 months."
      },
      {
        question: "What is a MERV rating?",
        answer: "MERV (Minimum Efficiency Reporting Value) measures a filter's ability to capture particles. Higher ratings capture smaller particles but restrict airflow more. We help select the ideal rating for your system."
      },
      {
        question: "Does the technician provide the new filter?",
        answer: "Yes, our filter service includes a standard high-quality replacement filter provided by the technician during the visit."
      },
      {
        question: "What happens if I don't change my filter?",
        answer: "A clogged filter restricts airflow, forcing your furnace to overheat and shut down (limit switch trip), and can damage your AC evaporator coil in summer. It can be added during booking or confirmed by the technician."
      }
    ],
    metaTitle: "Furnace Filter Replacement Canada | Fresh Air Quality",
    metaDescription: "Professional furnace and HVAC filter replacement across Canada. Keep your air clean and protect your furnace from airflow restriction. Book today."
  },
  "brush-cleaning": {
    slug: "brush-cleaning",
    name: "Brush Cleaning",
    headline: "Professional Duct Brush Cleaning",
    short: "Rotary brushes scrub stuck-on dust and debris off duct walls.",
    priceNote: "Brush Cleaning add-on from $100",
    priceValue: "$100",
    intro: "Go beyond suction alone: our rotary brushes physically scrub the inside of your ducts to loosen caked-on dust, lint and debris that vacuuming can leave behind.",
    whyItMatters: "Over the years, dust, pet dander and construction debris can stick to the inside walls of your ductwork, especially in older homes or after renovations. Strong suction removes loose dust, but stuck-on buildup needs mechanical agitation. Brush cleaning breaks it free so it can be captured, giving you the most thorough duct clean and cleaner air in every room.",
    whatIsIncluded: [
      "Rotary brush agitation of duct walls",
      "Loosened dust captured with high-powered vacuum",
      "HEPA-grade filtration",
      "Recommended for older homes and after renovations",
      "Add it to any cleaning package when you book"
    ],
    process: [
      {
        title: "Inspection",
        description: "We check your duct system to find areas with heavy, stuck-on buildup that need brushing."
      },
      {
        title: "Vacuum Hookup",
        description: "Our high-powered vacuum is connected first, so everything the brushes loosen is pulled straight out."
      },
      {
        title: "Rotary Brushing",
        description: "Spinning brushes are fed through the ducts to scrub the walls and break debris free."
      },
      {
        title: "Final Check",
        description: "We verify the ducts are clean and airflow is clear at the vents before we leave."
      }
    ],
    faqs: [
      {
        question: "How much does brush cleaning cost?",
        answer: "Brush Cleaning is a $100 add-on in Ontario, and $150 in all other areas. You can add it to your package in the booking form."
      },
      {
        question: "Do I need brush cleaning?",
        answer: "It's recommended if your ducts have never been cleaned, if your home is older, or after renovations, when dust and debris tend to stick to duct walls."
      },
      {
        question: "Is brush cleaning safe for my ducts?",
        answer: "Yes. Our technicians use rotary brushes suited to residential ductwork and work carefully throughout your system."
      },
      {
        question: "Can I add it to any package?",
        answer: "Yes. Choose any package in the booking form and tick Brush Cleaning under Additional services."
      }
    ],
    metaTitle: "Duct Brush Cleaning Canada | From $100 | Fresh Air Quality",
    metaDescription: "Rotary brush duct cleaning across Canada from $100 as an add-on. Scrub stuck-on dust and debris off duct walls for the deepest clean. Book online today."
  }
};
