// Province landing pages — served at the SAME URLs as the old WordPress site
// (/ontario/, /alberta/, …) so existing Google rankings carry over.
// Copy and SEO titles/descriptions are taken from the WordPress pages + Yoast.

export type ProvinceSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  closing?: string; // paragraph shown after the bullet list
};

export type ProvincePage = {
  slug: string; // e.g. "british-columbia" → /british-columbia/
  code: string; // must match provinces in site config (pricing)
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  sideImage: string;
  sections: ProvinceSection[];
  cities: string[];
};

export const provincePages: ProvincePage[] = [
  {
    slug: "ontario",
    code: "ON",
    name: "Ontario",
    metaTitle: "Ontario Air Duct Cleaning Services | Fresh Air Quality Experts",
    metaDescription:
      "Trusted air duct cleaning in Ontario. Improve your home’s air quality, reduce allergens, and enhance HVAC efficiency with Fresh Air Quality professionals.",
    heroImage: "/images/fresh/ontario.webp",
    sideImage: "/images/fresh/tech-duct-system.webp",
    sections: [
      {
        heading: "Professional Ontario Air Duct Cleaning Services",
        paragraphs: [
          "At Fresh Air Quality, we bring professional air duct cleaning in Ontario to help you enjoy cleaner air, lower energy costs, and a healthier home environment. Our certified technicians ensure your air ducts are free from dust, allergens, and contaminants — because every Ontario family deserves to breathe fresh air.",
          "We use high-efficiency equipment to remove buildup from your ducts, improving HVAC efficiency and air quality across your home or business.",
        ],
      },
      {
        heading: "Comprehensive Cleaning for Healthier Living",
        paragraphs: [
          "Our cleaning process targets dust, debris, and allergens that can trigger allergies or asthma. We’re dedicated to creating cleaner, safer indoor spaces throughout Ontario.",
        ],
      },
    ],
    cities: ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton", "London", "Markham", "Vaughan", "Kitchener", "Windsor"],
  },
  {
    slug: "greater-toronto-area",
    code: "GTA",
    name: "Greater Toronto Area",
    metaTitle: "Air Duct Cleaning GTA | Toronto & Area | Fresh Air Quality",
    metaDescription:
      "Professional air duct cleaning across the Greater Toronto Area — Toronto, Mississauga, Brampton, Vaughan, Markham and more. Upfront pricing from $149.",
    heroImage: "/images/fresh/gta.webp",
    sideImage: "/images/fresh/tech-attic.webp",
    sections: [
      {
        heading: "Greater Toronto Area Air Duct Cleaning",
        paragraphs: [
          "Fresh Air Quality is based in Toronto, so the GTA is home for our team. We provide professional air duct cleaning for houses, townhouses, duplexes and commercial spaces across Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville and the surrounding communities.",
          "Our certified technicians use high-powered vacuums, rotary brushes and HEPA-grade filtration to remove dust, pet hair, renovation debris and allergens from every duct and vent in your home.",
        ],
      },
      {
        heading: "Why GTA Homes Need Regular Duct Cleaning",
        paragraphs: [
          "Long heating seasons, busy renovation and construction activity, and spring and fall allergy seasons all load GTA duct systems with dust and contaminants that keep recirculating through your living space.",
        ],
        bullets: [
          "Reduce dust, allergens and odours in every room",
          "Improve airflow and HVAC efficiency",
          "Lower energy bills through the long heating season",
          "Extend the life of your furnace and AC",
        ],
        closing:
          "Book online in minutes or message us on WhatsApp for a free quote — we’re local and can often schedule within days.",
      },
    ],
    cities: ["Toronto", "Mississauga", "Brampton", "Vaughan", "Markham", "Richmond Hill", "Oakville", "Etobicoke", "Scarborough", "North York"],
  },
  {
    slug: "alberta",
    code: "AB",
    name: "Alberta",
    metaTitle: "Air Duct Cleaning Alberta | Fresh Air Quality Professionals",
    metaDescription:
      "Professional Alberta air duct cleaning that boosts airflow, reduces dust, and improves HVAC performance. Serving homes and businesses across Alberta.",
    heroImage: "/images/fresh/alberta.webp",
    sideImage: "/images/fresh/duct-hose.webp",
    sections: [
      {
        heading: "Alberta Air Duct Cleaning Experts",
        paragraphs: [
          "At Fresh Air Quality, we take pride in being trusted air duct cleaning experts in Alberta, serving both residential and commercial clients with exceptional care and professionalism. Our certified technicians use advanced, high-powered equipment to remove dust, dirt, pet dander, and allergens from deep within your duct work.",
          "Over time, ducts collect contaminants that restrict airflow and circulate pollutants throughout your home or business. Our detailed cleaning process not only improves indoor air quality but also helps your HVAC system perform efficiently, lowering energy costs and extending equipment lifespan. Whether you’re in Calgary, Edmonton, Red Deer, or anywhere in between, we’re here to keep Alberta’s air cleaner — one home at a time.",
        ],
      },
      {
        heading: "Cleaner Air, Healthier Alberta Homes",
        paragraphs: [
          "Fresh, clean air is essential for a comfortable living environment — and that’s exactly what Fresh Air Quality delivers. Our Alberta air duct cleaning services are designed to eliminate harmful pollutants, bacteria, and allergens that build up over time. By purifying the air that flows through your HVAC system, we help reduce allergy symptoms, improve airflow, and create a safer, healthier home for your family.",
          "Albertans trust us because we understand the province’s diverse environments — from dry prairie climates to colder northern regions — and we tailor our cleaning approach to suit local conditions. With our expert team, state-of-the-art tools, and commitment to customer satisfaction, you can breathe easier knowing your air is truly clean.",
        ],
      },
      {
        heading: "Why Choose Fresh Air Quality Alberta",
        paragraphs: [],
        bullets: [
          "Certified technicians",
          "No hidden charges",
          "Eco-friendly cleaning methods",
          "Guaranteed satisfaction",
        ],
      },
    ],
    cities: ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "Airdrie", "St. Albert"],
  },
  {
    slug: "quebec",
    code: "QC",
    name: "Quebec",
    metaTitle: "Quebec Air Duct Cleaning Services | Fresh Air Quality Canada",
    metaDescription:
      "Expert Quebec air duct cleaning for cleaner, healthier air. Remove dust, mold, and allergens while improving energy efficiency with Fresh Air Quality.",
    heroImage: "/images/fresh/quebec.webp",
    sideImage: "/images/fresh/tech-ceiling-vent.webp",
    sections: [
      {
        heading: "Quebec Air Duct Cleaning You Can Trust",
        paragraphs: [
          "At Fresh Air Quality, we take pride in helping Quebec homeowners breathe easier. Our team of experienced technicians uses powerful vacuum systems, rotary brushes, and high-efficiency cleaning tools to remove dust, mold, pet dander, and other pollutants from your ductwork. Over time, debris buildup can reduce your HVAC system’s performance and increase your energy costs — but our Quebec air duct cleaning services restore clean airflow and help your home run efficiently again.",
          "Whether you live in Montreal, Quebec City, Laval, or Gatineau, our experts provide the same attention to detail and care in every job. We are fully licensed and insured, ensuring safe and thorough duct cleaning that meets the highest industry standards.",
          "Our process not only removes visible debris but also addresses hidden contaminants that affect your air quality. By eliminating these irritants, you’ll notice improved airflow, fresher-smelling air, and a healthier living environment for your family.",
        ],
      },
      {
        heading: "Improve Indoor Comfort and Air Quality",
        paragraphs: [
          "Quebec’s weather — with cold winters and humid summers — puts your HVAC system to the test. Dust and moisture can collect inside your ducts, creating a breeding ground for mold, bacteria, and allergens. With Fresh Air Quality’s professional duct cleaning, you can enjoy a home that feels cleaner, smells fresher, and operates more efficiently.",
          "Our services are designed to:",
        ],
        bullets: [
          "Enhance HVAC performance and reduce strain on your system",
          "Lower monthly energy bills by improving airflow",
          "Reduce allergens and odors that cause discomfort",
          "Extend the lifespan of your heating and cooling equipment",
        ],
        closing:
          "We also offer furnace cleaning, dryer vent cleaning, air conditioner maintenance, and sanitization services — all tailored to the needs of Quebec homeowners. With just one appointment, you can transform your indoor air and experience lasting comfort and cleanliness.",
      },
    ],
    cities: ["Montreal", "Quebec City", "Laval", "Gatineau", "Longueuil", "Sherbrooke"],
  },
  {
    slug: "british-columbia",
    code: "BC",
    name: "British Columbia",
    metaTitle: "Air Duct Cleaning British Columbia | Fresh Air Quality Canada",
    metaDescription:
      "Professional British Columbia air duct cleaning. Improve air quality, reduce allergens, and enhance HVAC efficiency with trusted Fresh Air Quality experts.",
    heroImage: "/images/fresh/british-columbia.webp",
    sideImage: "/images/fresh/duct-inside.webp",
    sections: [
      {
        heading: "British Columbia Air Duct Cleaning Done Right",
        paragraphs: [
          "At Fresh Air Quality, we’re proud to provide dependable air duct cleaning services across British Columbia, helping residents and businesses enjoy fresher air and improved HVAC efficiency. We proudly serve major communities including Vancouver, Surrey, Richmond, Burnaby, Coquitlam, Langley Township, Abbotsford, Chilliwack, Kelowna, and Kamloops. Over time, dust, lint, and airborne contaminants can collect inside your ducts, reducing system performance and affecting the quality of the air you breathe.",
          "Our experienced technicians use powerful vacuums, rotary brush systems, and HEPA-grade filters to remove buildup from every vent and duct in your property. Whether you’re located in Vancouver, Surrey, Richmond, Burnaby, Coquitlam, Langley Township, Abbotsford, Chilliwack, Kelowna, or Kamloops, we bring the same care and attention to every job, ensuring your ducts are spotless and your system runs like new.",
          "We’re fully licensed and insured, and we follow industry-leading standards to deliver results you can trust. Our cleaning process not only clears away debris but also helps prevent future buildup, creating a cleaner, safer, and more efficient indoor environment for homes and businesses throughout British Columbia.",
        ],
      },
      {
        heading: "Healthier Living for BC Homes and Businesses",
        paragraphs: [
          "British Columbia’s changing climate — from coastal humidity to dry interior air — can cause dust, mold, and allergens to build up inside your duct system. Over time, these contaminants circulate through your home or workplace, impacting comfort and health. That’s why regular air duct cleaning in BC is an essential part of maintaining a healthy space.",
          "Our professional cleaning services help you:",
        ],
        bullets: [
          "Reduce allergens and respiratory irritants in your indoor air",
          "Improve HVAC performance and extend system lifespan",
          "Lower energy costs with smoother airflow",
          "Enjoy cleaner, fresher air year-round",
        ],
        closing:
          "Whether you’re managing a busy household or a commercial facility, Fresh Air Quality makes it easy to maintain a cleaner, more comfortable space. One appointment with our team can transform your indoor air — helping you breathe easier and feel better every day.",
      },
    ],
    cities: ["Vancouver", "Surrey", "Richmond", "Burnaby", "Coquitlam", "Langley Township", "Abbotsford", "Chilliwack", "Kelowna", "Kamloops"],
  },
  {
    slug: "manitoba",
    code: "MB",
    name: "Manitoba",
    metaTitle: "Air Duct Cleaning Manitoba | Fresh Air Quality Services",
    metaDescription:
      "Reliable Manitoba air duct cleaning for homes and businesses. Enjoy fresher air, better HVAC performance, and energy savings with Fresh Air Quality.",
    heroImage: "/images/fresh/manitoba.webp",
    sideImage: "/images/fresh/tech-attic.webp",
    sections: [
      {
        heading: "Professional Manitoba Air Duct Cleaning Services",
        paragraphs: [
          "At Fresh Air Quality, we provide expert air duct cleaning services in Manitoba, helping homeowners and businesses enjoy cleaner air and more efficient HVAC systems. Over time, your ducts can collect dust, pollen, pet dander, and debris that restrict airflow and circulate pollutants throughout your space.",
          "Our certified technicians use powerful, industry-grade equipment to remove years of buildup from deep within your ductwork. Whether you live in a historic Winnipeg home or a modern property in Brandon, we ensure every vent and duct is thoroughly cleaned and sanitized.",
          "By choosing Fresh Air Quality, you’re not only improving your indoor air quality but also protecting your heating and cooling investment. A cleaner system runs smoother, uses less energy, and lasts longer — saving you money while keeping your air fresh and healthy year-round.",
        ],
      },
      {
        heading: "Breathe Cleaner Air Across Manitoba",
        paragraphs: [
          "Manitoba’s unique climate — from cold winters to humid summers — can make your home’s HVAC system work overtime. That’s why regular air duct cleaning in Manitoba is essential to maintaining a comfortable and safe living environment. Our professional cleaning process helps eliminate allergens, mold spores, and airborne contaminants that can impact your health and indoor comfort.",
          "At Fresh Air Quality, we proudly serve communities across Manitoba, including Winnipeg, Brandon, Steinbach, and surrounding areas. We tailor each cleaning to local conditions, ensuring your home or business receives the deep, detailed care it needs.",
          "Cleaner ducts mean better air circulation, fewer allergy triggers, and more consistent heating and cooling performance. When you trust Fresh Air Quality, you’re investing in a cleaner, healthier Manitoba home for you and your family.",
        ],
      },
    ],
    cities: ["Winnipeg", "Brandon", "Steinbach", "Portage la Prairie", "Selkirk"],
  },
  {
    slug: "saskatchewan",
    code: "SK",
    name: "Saskatchewan",
    metaTitle: "Saskatchewan Air Duct Cleaning | Fresh Air Quality Experts",
    metaDescription:
      "Comprehensive air duct cleaning in Saskatchewan. Remove dust, allergens, and buildup to enhance airflow, comfort, and system efficiency.",
    heroImage: "/images/fresh/saskatchewan.webp",
    sideImage: "/images/fresh/tech-ladder.webp",
    sections: [
      {
        heading: "Trusted Saskatchewan Air Duct Cleaning Professionals",
        paragraphs: [
          "At Fresh Air Quality, we’re proud to serve homeowners across Saskatchewan with reliable, professional air duct cleaning services that make a noticeable difference in your indoor air quality. Over time, dust, pollen, pet hair, and other debris collect inside your duct work, restricting airflow and circulating pollutants throughout your home.",
          "Our trained technicians use high-powered vacuums, rotary brushes, and HEPA filtration equipment to deep-clean every inch of your duct system — removing years of buildup and improving the performance of your heating and cooling systems. Whether you’re in Regina, Saskatoon, Prince Albert, or Moose Jaw, we deliver a thorough clean designed for Saskatchewan’s unique climate and seasonal changes.",
          "With our licensed and insured team, you can trust that your home is in good hands. We follow strict safety standards and cleaning protocols to ensure your ducts are spotless, your system runs efficiently, and your family breathes cleaner, fresher air every day.",
        ],
      },
      {
        heading: "Cleaner Air and Better HVAC Efficiency",
        paragraphs: [
          "Clean air ducts don’t just improve your home’s air quality — they also help your HVAC system operate at its best. In Saskatchewan’s cold winters and warm summers, your heating and cooling equipment works hard to keep your home comfortable. Dust and debris can strain your system, leading to higher energy bills and unnecessary wear and tear.",
          "Our professional air duct cleaning in Saskatchewan removes contaminants that affect airflow and system performance, helping you:",
        ],
        bullets: [
          "Reduce energy consumption and utility costs",
          "Eliminate dust and allergens that impact your health",
          "Extend the lifespan of your HVAC system",
          "Maintain consistent heating and cooling year-round",
        ],
        closing:
          "At Fresh Air Quality, we go beyond cleaning — we improve comfort, health, and efficiency for Saskatchewan homes and businesses. With one appointment, you’ll feel the difference of cleaner air and a system that performs like new.",
      },
    ],
    cities: ["Regina", "Saskatoon", "Prince Albert", "Moose Jaw"],
  },
  {
    slug: "maritime-provinces",
    code: "MT",
    name: "Maritime Provinces",
    metaTitle: "Air Duct Cleaning Maritime Provinces | Fresh Air Quality",
    metaDescription:
      "Expert air duct cleaning across Nova Scotia, New Brunswick, PEI and Newfoundland. Remove trapped allergens, improve airflow and protect your family’s health.",
    heroImage: "/images/fresh/maritime.webp",
    sideImage: "/images/fresh/tech-duct-system.webp",
    sections: [
      {
        heading: "Breathe Easier in Your Atlantic Canadian Home",
        paragraphs: [
          "At Fresh Air Quality, we believe every breath you take inside your home should be clean and crisp. From the foggy shores of Nova Scotia and Newfoundland to the beautiful communities of New Brunswick and PEI, our maritime climate brings unique indoor humidity and dust challenges. We are proud to expand our expert air duct cleaning services across all four provinces to help you eliminate trapped allergens, improve your home’s airflow, and protect your family’s health.",
        ],
      },
      {
        heading: "Why Air Duct Cleaning Matters in the Maritimes",
        paragraphs: [
          "Over time, your heating and ventilation systems naturally collect dust, pet dander, pollen, and even hidden mold. Our local weather keeps systems working hard year-round, which means those hidden particles are constantly recirculated through your living spaces. By thoroughly clearing out this buildup, we help lower your energy bills, extend the lifespan of your HVAC system, and instantly improve the overall air quality in your house.",
        ],
      },
    ],
    cities: ["Halifax", "Moncton", "Saint John", "Fredericton", "Charlottetown", "St. John’s"],
  },
];
