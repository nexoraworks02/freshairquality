// City pages (/[area]/[city]/) and city cost guides (/duct-cleaning-cost/[city]/).
// Each city has its OWN local content — climate, housing, neighbourhoods,
// cost factors and FAQs — so no two pages are copies of each other.
// Prices are NOT written here: they come from the area's pricing in
// config/site.ts, so a price change updates every city page automatically.

import { provincePages } from "./service-areas";
import { provinces, type Province } from "./site";

export type City = {
  slug: string; // URL, e.g. "toronto"
  name: string;
  areaSlug: string; // parent area page, e.g. "greater-toronto-area" → /greater-toronto-area/toronto/
  neighbourhoods: string[];
  intro: string;
  climate: string; // how the local climate affects duct systems
  homes: string; // local housing stock
  costFactors: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
};

export const cities: City[] = [
  /* ---------------- Greater Toronto Area ---------------- */
  {
    slug: "toronto",
    name: "Toronto",
    areaSlug: "greater-toronto-area",
    neighbourhoods: ["The Annex", "Leslieville", "Leaside", "North York", "Scarborough", "Etobicoke", "East York", "The Beaches"],
    intro:
      "Toronto is home base for Fresh Air Quality. Our technicians clean air ducts, furnaces and dryer vents in houses, semis and townhomes across the city — from century-old homes downtown to post-war bungalows in the inner suburbs.",
    climate:
      "Toronto homes run the furnace through a long, cold winter and switch straight to air conditioning for humid summers, so the same ductwork moves air almost all year. Every season adds another layer of dust, pollen and lint that keeps recirculating through your rooms.",
    homes:
      "Many central neighbourhoods are full of older semi-detached and Victorian homes whose ducts have been extended and patched through several renovations. Renovation work is one of the biggest sources of fine drywall and plaster dust we pull out of Toronto duct systems.",
    costFactors: [
      { title: "Older, renovated ductwork", text: "Century homes in areas like The Annex or Leslieville often have long, branching duct runs added over the years. More vents and longer runs mean more cleaning time — ask any company whether their price covers every vent." },
      { title: "Recent renovations", text: "If you’ve renovated, drywall dust settles deep in the return ducts. Adding Brush Cleaning helps break up that stuck-on layer." },
      { title: "Number of furnaces", text: "Most Toronto houses have one furnace, but larger homes and homes with a basement apartment sometimes have two — each extra furnace is priced separately." },
    ],
    faqs: [
      { question: "Do you clean townhouses and semi-detached homes in Toronto?", answer: "Yes. We clean detached homes, semis, townhouses and duplexes across Toronto. If you live in a condo unit, message us with your heating system type and we’ll confirm what we can clean." },
      { question: "Which Toronto neighbourhoods do you serve?", answer: "All of them — downtown, East York, North York, Scarborough, Etobicoke and the surrounding GTA. Pick your area in the booking form and choose a morning or afternoon slot." },
    ],
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    areaSlug: "greater-toronto-area",
    neighbourhoods: ["Port Credit", "Streetsville", "Meadowvale", "Erin Mills", "Clarkson", "Cooksville", "Churchill Meadows", "Malton"],
    intro:
      "Fresh Air Quality provides professional air duct cleaning across Mississauga — from the lakeside homes of Port Credit and Clarkson to the family neighbourhoods of Meadowvale, Erin Mills and Churchill Meadows.",
    climate:
      "Being right on Lake Ontario, Mississauga gets humid summers and damp shoulder seasons. Moisture plus dust inside ductwork is what leads to musty smells, so keeping the system clean matters as much as running the AC.",
    homes:
      "A large share of Mississauga homes were built between the 1970s and early 2000s, which means many original duct systems have now been running for decades. Finished basements are very common here and add extra supply and return vents to clean.",
    costFactors: [
      { title: "Finished basements", text: "A finished basement often adds several extra vents and returns. Our packages include every duct and vent in the home, so you won’t be charged per vent." },
      { title: "Age of the system", text: "Original ductwork from the 1980s and 1990s that has never been cleaned usually has the heaviest buildup — Brush Cleaning is worth considering." },
      { title: "Add-ons you actually need", text: "Many Mississauga homes have central AC, so adding the AC coil cleaning at the same visit is often worth it. Only add what your home has." },
    ],
    faqs: [
      { question: "How long does duct cleaning take in a Mississauga home?", answer: "Most homes take between 1.5 and 3 hours, depending on the size of the house, the number of vents and whether you add extras like Brush Cleaning or AC coils." },
      { question: "Do you also clean dryer vents in Mississauga?", answer: "Yes. Dryer vent cleaning is an add-on you can include when you book your duct cleaning, so everything is done in one visit." },
    ],
  },
  {
    slug: "brampton",
    name: "Brampton",
    areaSlug: "greater-toronto-area",
    neighbourhoods: ["Bramalea", "Springdale", "Heart Lake", "Castlemore", "Mount Pleasant", "Fletcher’s Meadow", "Sandringham-Wellington", "Credit Valley"],
    intro:
      "Fresh Air Quality cleans air ducts, furnaces and dryer vents for Brampton families — in established areas like Bramalea and Heart Lake and in the newer subdivisions of Springdale, Castlemore and Mount Pleasant.",
    climate:
      "Brampton’s cold winters keep the furnace running for months, and hot, humid summers bring heavy AC use. That year-round airflow steadily loads the ducts with dust, pet hair and pollen.",
    homes:
      "Brampton has grown fast, and many homes are fairly new. New homes are actually some of the dustiest we see — construction leaves drywall dust, sawdust and debris inside the ducts before you even move in. Larger households and basement suites also mean the system works harder.",
    costFactors: [
      { title: "New-build construction dust", text: "If your home is only a few years old, it may never have been cleaned since construction. A first cleaning removes the builder’s dust that’s been circulating since move-in." },
      { title: "Basement suites and second furnaces", text: "Homes with a legal basement apartment sometimes have a second furnace. Choose the 2- or 3-furnace package so every system is included." },
      { title: "Bigger households", text: "More people (and pets) means more dust and hair in the system — and often a good reason to clean more regularly." },
    ],
    faqs: [
      { question: "My Brampton home is new — does it really need duct cleaning?", answer: "Often, yes. Construction dust from drywall, flooring and framing settles inside new ductwork and then blows around the house. A cleaning after construction is one of the most noticeable improvements you can make." },
      { question: "Can you clean two furnaces in the same visit?", answer: "Yes. Choose ‘Basic with 2 Furnaces’ (or 3) when you book, and we’ll clean every system in the same appointment." },
    ],
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    areaSlug: "greater-toronto-area",
    neighbourhoods: ["Woodbridge", "Maple", "Kleinburg", "Thornhill", "Concord", "Vellore Village", "Patterson"],
    intro:
      "Fresh Air Quality provides air duct and furnace cleaning throughout Vaughan — including Woodbridge, Maple, Kleinburg, Thornhill and Concord.",
    climate:
      "Like the rest of the GTA, Vaughan gets long heating seasons and humid summers. Large homes move a lot of air, so dust and allergens that build up in the ducts are spread through many rooms.",
    homes:
      "Vaughan has many large detached homes, and bigger houses are more likely to have two furnaces or zoned systems, long duct runs and extra returns. Newer communities also carry construction dust in the ductwork.",
    costFactors: [
      { title: "Two furnaces or zoned systems", text: "Larger Vaughan homes often have more than one furnace. Each extra furnace is a fixed add-on price, so you know the total before we arrive." },
      { title: "Size of the home", text: "Big homes simply have more ductwork. Our packages cover every duct and vent rather than charging by the vent." },
      { title: "HRV systems", text: "Many newer, airtight homes include an HRV. Cleaning it at the same visit keeps fresh-air ventilation working properly." },
    ],
    faqs: [
      { question: "Do you service Kleinburg and Woodbridge?", answer: "Yes — we serve all of Vaughan, including Kleinburg, Woodbridge, Maple, Thornhill and Concord." },
      { question: "Should I clean my HRV when I clean my ducts?", answer: "It’s a good idea. An HRV brings fresh air into the home, and a dirty core or filters reduce how well it works. HRV cleaning is available as an add-on when you book." },
    ],
  },
  {
    slug: "markham",
    name: "Markham",
    areaSlug: "greater-toronto-area",
    neighbourhoods: ["Unionville", "Markham Village", "Cornell", "Berczy Village", "Cathedraltown", "Milliken", "Box Grove"],
    intro:
      "Fresh Air Quality cleans air ducts and furnaces across Markham — from heritage homes around Main Street Unionville and Markham Village to newer communities like Cornell, Cathedraltown and Box Grove.",
    climate:
      "Markham homes rely on the furnace through cold winters and the AC through warm, humid summers. Spring and fall pollen seasons also add allergens that settle inside ducts and recirculate.",
    homes:
      "Markham mixes older heritage houses with large, modern family homes. Older homes may have duct systems that have never been cleaned, while newer homes often hold construction dust and have HRVs that need attention too.",
    costFactors: [
      { title: "Heritage vs. newer homes", text: "Older homes may need Brush Cleaning to loosen years of buildup; newer homes usually need a thorough first clean to remove construction dust." },
      { title: "Allergy concerns", text: "If someone in the home has allergies, a full cleaning plus AC coil cleaning helps remove pollen and dust where it collects most." },
      { title: "Multiple furnaces", text: "Large homes with two furnaces should choose the 2-furnace package so both systems are cleaned." },
    ],
    faqs: [
      { question: "Can duct cleaning help with allergies in my Markham home?", answer: "Cleaning removes dust, pollen and pet dander that build up in the ducts and recirculate, which many families notice as fresher, less dusty air. It works best together with regular filter changes." },
      { question: "Do you work in Unionville?", answer: "Yes. We serve all of Markham, including Unionville, Markham Village, Cornell and Berczy Village." },
    ],
  },

  /* ---------------- Ontario ---------------- */
  {
    slug: "hamilton",
    name: "Hamilton",
    areaSlug: "ontario",
    neighbourhoods: ["Westdale", "Ancaster", "Dundas", "Stoney Creek", "Hamilton Mountain", "Waterdown", "Kirkendall", "Binbrook"],
    intro:
      "Fresh Air Quality provides professional duct, furnace and dryer vent cleaning across Hamilton — in the lower city, up on the Mountain, and in Ancaster, Dundas, Stoney Creek and Waterdown.",
    climate:
      "Hamilton sits between the lake and the escarpment, with cold winters and humid summers that keep both the furnace and AC busy. A city with a busy industrial waterfront and lots of road traffic also means more fine dust finding its way indoors.",
    homes:
      "The lower city has a lot of older brick homes with original ductwork, while areas like Binbrook, Waterdown and Stoney Creek have many newer builds. Both benefit from cleaning — older systems for years of buildup, newer ones for construction dust.",
    costFactors: [
      { title: "Older original ductwork", text: "Brick homes in the lower city often have decades-old ducts. Brush Cleaning helps remove stuck-on dust that suction alone can leave." },
      { title: "Dust from outdoors", text: "Homes near busy roads or the industrial waterfront tend to collect more fine dust, so regular cleaning and filter changes make a bigger difference." },
      { title: "Dryer vents", text: "Long dryer vent runs in older homes clog easily. Adding dryer vent cleaning is a small cost that reduces fire risk." },
    ],
    faqs: [
      { question: "Do you serve Hamilton Mountain and Stoney Creek?", answer: "Yes. We serve the whole Hamilton area, including the Mountain, Stoney Creek, Ancaster, Dundas and Waterdown." },
      { question: "How do I know my older Hamilton home needs duct cleaning?", answer: "Common signs are dust coming out of the vents, dust returning quickly after you clean, musty smells when the system starts, or weak airflow in some rooms." },
    ],
  },
  {
    slug: "ottawa",
    name: "Ottawa",
    areaSlug: "ontario",
    neighbourhoods: ["Kanata", "Orléans", "Barrhaven", "Nepean", "The Glebe", "Westboro", "Stittsville", "Alta Vista"],
    intro:
      "Fresh Air Quality provides air duct and furnace cleaning across Ottawa — in Kanata, Orléans, Barrhaven, Nepean and central neighbourhoods like the Glebe and Westboro.",
    climate:
      "Ottawa’s winters are long and very cold, so furnaces here work harder and longer than in most of Ontario. Hot, humid summers follow, which means the ductwork rarely gets a break from moving air.",
    homes:
      "Ottawa’s suburbs have many homes built from the 1980s onward, along with fast-growing new communities. Long heating seasons mean dust that collects in the ducts gets blown around the house for most of the year.",
    costFactors: [
      { title: "Long heating season", text: "Because the furnace runs for so many months, the blower and ducts collect more dust each year. Pairing duct cleaning with furnace cleaning is worth it." },
      { title: "Airtight newer homes with HRVs", text: "Newer, energy-efficient homes often rely on an HRV for fresh air. Add HRV cleaning so ventilation keeps working properly." },
      { title: "Home size and furnaces", text: "Most homes have a single furnace; larger homes with a second system should pick the 2-furnace package." },
    ],
    faqs: [
      { question: "When is the best time to clean ducts in Ottawa?", answer: "Late summer and early fall are popular, so your system is clean before the long heating season starts. Spring is also a good time to clear out winter dust before AC season." },
      { question: "Do you serve Kanata and Orléans?", answer: "Yes. We serve Ottawa and its suburbs, including Kanata, Orléans, Barrhaven, Nepean and Stittsville." },
    ],
  },

  /* ---------------- Alberta ---------------- */
  {
    slug: "calgary",
    name: "Calgary",
    areaSlug: "alberta",
    neighbourhoods: ["Beltline", "Bridgeland", "Inglewood", "Tuscany", "Signal Hill", "Mahogany", "Evanston", "Lake Bonavista"],
    intro:
      "Fresh Air Quality provides professional air duct and furnace cleaning across Calgary — from inner-city communities like Bridgeland and Inglewood to suburban neighbourhoods like Tuscany, Mahogany and Evanston.",
    climate:
      "Calgary’s air is dry and the heating season is long, with chinook swings that turn the furnace on and off. Dry, dusty air settles in ductwork, and in some summers wildfire smoke drifts into the city and leaves fine particles in the system.",
    homes:
      "Calgary has many newer suburban homes and plenty of new construction, so construction dust in ductwork is common. Older inner-city homes often have original duct systems that have rarely been cleaned.",
    costFactors: [
      { title: "Dry, dusty climate", text: "Dry air means more airborne dust settling in the ducts. Regular cleaning helps, especially in homes with pets." },
      { title: "After wildfire smoke seasons", text: "If smoke has been drawn into your home, cleaning the ducts and changing filters helps clear the fine particles left behind." },
      { title: "New builds", text: "Newer communities like Mahogany and Evanston often have construction dust in the system — a first cleaning makes a real difference." },
    ],
    faqs: [
      { question: "Should I clean my ducts after a smoky summer in Calgary?", answer: "It can help. Fine smoke particles settle in filters and ductwork. A duct cleaning plus a fresh filter clears out what’s been drawn in." },
      { question: "Do you serve all Calgary communities?", answer: "Yes — inner-city and suburban communities across Calgary. Choose Alberta in the booking form to see your prices." },
    ],
  },
  {
    slug: "edmonton",
    name: "Edmonton",
    areaSlug: "alberta",
    neighbourhoods: ["Old Strathcona", "Glenora", "Windermere", "Summerside", "Terwillegar", "Westmount", "Mill Woods", "The Hamptons"],
    intro:
      "Fresh Air Quality cleans air ducts, furnaces and dryer vents for homes across Edmonton — including Old Strathcona, Westmount, Mill Woods, Terwillegar, Windermere and Summerside.",
    climate:
      "Edmonton has some of the longest, coldest winters of any major Canadian city, so the furnace runs for much of the year. Every hour of runtime pushes dust through the ducts and into your living space.",
    homes:
      "Mature neighbourhoods like Glenora and Westmount have older homes with original ductwork, while the southwest and southeast are full of newer suburban homes — many with HRVs and construction dust in the system.",
    costFactors: [
      { title: "Heavy furnace use", text: "With so many months of heating, furnace and duct cleaning go hand in hand. A clean blower and ducts help the system run efficiently." },
      { title: "Older homes in mature neighbourhoods", text: "Original ductwork that has never been cleaned often has heavy buildup — consider adding Brush Cleaning." },
      { title: "HRV in newer homes", text: "Many newer Edmonton homes have an HRV. Add HRV cleaning so your fresh-air supply stays clean through winter." },
    ],
    faqs: [
      { question: "How often should Edmonton homes clean their ducts?", answer: "Because furnaces run so long here, many homeowners clean every 2 to 3 years, or sooner with pets, allergies or after renovations." },
      { question: "Can you clean my furnace at the same time?", answer: "Yes. Every package includes furnace cleaning, and you can add extra furnaces if your home has more than one." },
    ],
  },

  /* ---------------- Quebec ---------------- */
  {
    slug: "montreal",
    name: "Montreal",
    areaSlug: "quebec",
    neighbourhoods: ["Plateau-Mont-Royal", "Rosemont", "Verdun", "Notre-Dame-de-Grâce", "Outremont", "Saint-Laurent", "Ahuntsic", "Villeray"],
    intro:
      "Fresh Air Quality provides air duct, furnace, dryer vent and HRV cleaning across Montreal — from the Plateau and Rosemont to NDG, Saint-Laurent and Ahuntsic.",
    climate:
      "Montreal has cold, snowy winters and hot, humid summers. Humidity plus dust inside ductwork is a common cause of musty smells, so a clean system makes a noticeable difference in summer as well as winter.",
    homes:
      "Montreal is famous for its plexes, and many older plexes are heated with electric baseboards rather than ducted systems. If your home has forced-air heating, central air, a ducted heat pump or an HRV, those systems benefit from regular cleaning — and almost every home has a dryer vent worth clearing.",
    costFactors: [
      { title: "What system you have", text: "Not every Montreal home has ductwork. Tell us your heating and cooling system when you book so we quote only what you need — for some homes that’s just the dryer vent or HRV." },
      { title: "Ducted heat pumps and central AC", text: "Homes with a ducted heat pump or central AC run air through the ducts year-round. Adding AC coil cleaning keeps cooling efficient." },
      { title: "Dryer vents in older buildings", text: "Long or awkward dryer vent runs in older buildings clog easily. Dryer vent cleaning is a low-cost add-on that reduces fire risk." },
    ],
    faqs: [
      { question: "My Montreal plex has baseboard heating — do I need duct cleaning?", answer: "If your home has no ductwork, you don’t need duct cleaning. You may still benefit from dryer vent or HRV cleaning. Message us and we’ll tell you honestly what’s worth doing." },
      { question: "Do you serve all Montreal boroughs?", answer: "Yes. We serve Montreal and the surrounding area. Choose Quebec in the booking form to see your prices." },
    ],
  },
  {
    slug: "quebec-city",
    name: "Quebec City",
    areaSlug: "quebec",
    neighbourhoods: ["Sainte-Foy", "Limoilou", "Charlesbourg", "Beauport", "Montcalm", "Sillery", "Saint-Roch", "Lebourgneuf"],
    intro:
      "Fresh Air Quality provides air duct, furnace and HRV cleaning in Quebec City — including Sainte-Foy, Sillery, Limoilou, Charlesbourg, Beauport and Montcalm.",
    climate:
      "Quebec City has long, snowy winters, so homes stay closed up and heated for months. When windows stay shut, the air inside keeps recirculating — and whatever is in the ducts recirculates with it.",
    homes:
      "Newer homes in the region are built airtight and often rely on an HRV for fresh air. A dirty HRV core or clogged filters can quietly reduce ventilation all winter. Older homes in neighbourhoods like Limoilou and Montcalm may have mixed heating systems.",
    costFactors: [
      { title: "HRV maintenance", text: "If your home has an HRV, cleaning it is one of the most valuable add-ons for winter air quality." },
      { title: "Type of heating", text: "Homes with forced-air systems or ducted heat pumps benefit most from duct cleaning. Tell us your system and we’ll recommend only what applies." },
      { title: "Closed-up winter months", text: "Months of recirculated air mean more dust settles in the system. Cleaning before winter keeps the air fresher until spring." },
    ],
    faqs: [
      { question: "Why is HRV cleaning important in Quebec City?", answer: "Airtight homes depend on the HRV to bring in fresh air and remove stale, humid air. When the core and filters are dirty, that exchange slows down — cleaning restores it." },
      { question: "Do you serve Sainte-Foy and Charlesbourg?", answer: "Yes. We serve Quebec City and the surrounding communities. Choose Quebec in the booking form to see your prices." },
    ],
  },
  {
    slug: "laval",
    name: "Laval",
    areaSlug: "quebec",
    neighbourhoods: ["Chomedey", "Sainte-Dorothée", "Vimont", "Fabreville", "Duvernay", "Sainte-Rose", "Laval-des-Rapides", "Auteuil"],
    intro:
      "Fresh Air Quality cleans air ducts, furnaces, dryer vents and HRVs for homes across Laval — in Chomedey, Sainte-Dorothée, Vimont, Fabreville, Duvernay and Sainte-Rose.",
    climate:
      "Laval shares Montreal’s cold winters and humid summers. Homes switch between heating and cooling across the year, and humid months make clean ductwork important for avoiding musty smells.",
    homes:
      "Laval is largely suburban, with many detached and semi-detached family homes — more of them have forced-air heating, central air or ducted heat pumps than older city plexes, so duct cleaning is often a good fit.",
    costFactors: [
      { title: "Forced-air and heat pump systems", text: "Suburban homes with ducted systems move air year-round, so dust builds up steadily. A full cleaning covers every duct and vent." },
      { title: "Central air", text: "If you run central AC in summer, adding AC coil cleaning helps the system cool efficiently." },
      { title: "Family size and pets", text: "Busy family homes with pets collect more hair and dust in the system — a good reason to clean regularly." },
    ],
    faqs: [
      { question: "Do you clean heat pump ductwork in Laval?", answer: "Yes. If your heat pump is ducted, we clean the ductwork and vents the same way as a furnace system." },
      { question: "Which parts of Laval do you serve?", answer: "All of Laval, including Chomedey, Sainte-Dorothée, Vimont, Fabreville, Duvernay and Sainte-Rose." },
    ],
  },

  /* ---------------- British Columbia ---------------- */
  {
    slug: "vancouver",
    name: "Vancouver",
    areaSlug: "british-columbia",
    neighbourhoods: ["Kitsilano", "Mount Pleasant", "Kerrisdale", "Dunbar", "Hastings-Sunrise", "Killarney", "Marpole", "Grandview-Woodland"],
    intro:
      "Fresh Air Quality provides air duct, furnace, dryer vent and HRV cleaning across Vancouver — in Kitsilano, Mount Pleasant, Kerrisdale, Dunbar, Hastings-Sunrise and beyond.",
    climate:
      "Vancouver’s mild, rainy climate keeps indoor humidity high for much of the year. Moisture and dust inside ducts can lead to musty odours, and in some summers wildfire smoke drifts in and leaves fine particles in the system.",
    homes:
      "Vancouver has a mix of older character homes, houses with basement suites, and newer builds with heat pumps and HRVs. Homes with suites can have more than one furnace or separate ventilation to clean.",
    costFactors: [
      { title: "Humidity and musty smells", text: "Damp air plus dust is what causes musty ductwork. A thorough cleaning, and keeping the HRV clean, helps keep the air fresh." },
      { title: "Basement suites", text: "Homes with a suite sometimes have a second furnace. Choose the 2- or 3-furnace package so every system is included." },
      { title: "After smoky summers", text: "Fine smoke particles settle in filters and ducts. Cleaning and a fresh filter help clear them out." },
    ],
    faqs: [
      { question: "Do you clean HRVs in Vancouver homes?", answer: "Yes. HRV cleaning is available as an add-on when you book your duct cleaning, so everything is done in one visit." },
      { question: "Can you clean a home with a basement suite?", answer: "Yes. If the suite has its own furnace, choose the package with the right number of furnaces and we’ll clean both systems." },
    ],
  },
  {
    slug: "surrey",
    name: "Surrey",
    areaSlug: "british-columbia",
    neighbourhoods: ["Fleetwood", "Guildford", "Newton", "Cloverdale", "South Surrey", "Whalley", "Panorama Ridge"],
    intro:
      "Fresh Air Quality cleans air ducts, furnaces and dryer vents across Surrey — including Fleetwood, Guildford, Newton, Cloverdale, Panorama Ridge and South Surrey.",
    climate:
      "Surrey’s damp, mild weather keeps humidity up indoors, and dust plus moisture in ductwork can lead to stale, musty air. Some summers also bring wildfire smoke into the Fraser Valley.",
    homes:
      "Surrey is one of the fastest-growing cities in the country, with many new homes and large family houses — often with basement suites and more than one furnace. New construction also leaves dust in the ducts.",
    costFactors: [
      { title: "Multiple furnaces", text: "Large homes with suites often have two or even three furnaces. Our packages price each extra furnace clearly, so there are no surprises." },
      { title: "New construction dust", text: "Newer homes often still have builder’s dust in the system. A first cleaning removes it." },
      { title: "Busy households", text: "Larger families and multi-generational homes create more dust and lint — dryer vent cleaning is a smart add-on." },
    ],
    faqs: [
      { question: "My Surrey home has three furnaces — can you clean them all?", answer: "Yes. Choose ‘Basic with 3 Furnaces’ when you book, and we’ll clean every system in one appointment." },
      { question: "Do you serve South Surrey and Cloverdale?", answer: "Yes — all of Surrey, including South Surrey, Cloverdale, Fleetwood, Guildford and Newton." },
    ],
  },

  /* ---------------- Manitoba ---------------- */
  {
    slug: "winnipeg",
    name: "Winnipeg",
    areaSlug: "manitoba",
    neighbourhoods: ["Osborne Village", "Wolseley", "River Heights", "St. Vital", "Transcona", "Charleswood", "St. James", "Bridgwater"],
    intro:
      "Fresh Air Quality provides air duct, furnace and dryer vent cleaning across Winnipeg — in Wolseley, River Heights, Osborne Village, St. Vital, Transcona, Charleswood and newer areas like Bridgwater.",
    climate:
      "Winnipeg winters are among the coldest of any major city in Canada, so furnaces run hard for months with windows shut. Summers turn warm and humid, bringing AC use and pollen.",
    homes:
      "Character neighbourhoods like Wolseley and River Heights are full of older homes whose ductwork may never have been cleaned, while newer suburbs have airtight homes with HRVs and construction dust.",
    costFactors: [
      { title: "Older character homes", text: "Decades of buildup in older ducts often needs Brush Cleaning to fully remove." },
      { title: "Long, hard winters", text: "Heavy furnace use means more dust moving through the system. Cleaning before winter keeps the air fresher until spring." },
      { title: "HRVs in newer homes", text: "Add HRV cleaning if your home has one — it keeps fresh-air ventilation working through the closed-up months." },
    ],
    faqs: [
      { question: "When should I book duct cleaning in Winnipeg?", answer: "Late summer and fall are popular so the system is clean before winter, but cleaning any time of year helps." },
      { question: "Do you serve all Winnipeg neighbourhoods?", answer: "Yes. Choose Manitoba in the booking form to see your prices and pick a morning or afternoon slot." },
    ],
  },

  /* ---------------- Saskatchewan ---------------- */
  {
    slug: "saskatoon",
    name: "Saskatoon",
    areaSlug: "saskatchewan",
    neighbourhoods: ["Nutana", "City Park", "Willowgrove", "Stonebridge", "Evergreen", "Lakewood", "Brighton", "Rosewood"],
    intro:
      "Fresh Air Quality provides air duct and furnace cleaning across Saskatoon — from Nutana and City Park to newer neighbourhoods like Stonebridge, Evergreen, Brighton and Rosewood.",
    climate:
      "Saskatoon has long, very cold winters and dry air, so the furnace runs for months and dry dust settles easily inside ducts. Warm summers bring pollen and AC use.",
    homes:
      "Mature neighbourhoods along the river have older homes with original ductwork, while the city’s many newer suburbs have airtight homes, HRVs and construction dust in the system.",
    costFactors: [
      { title: "Dry air and dust", text: "Dry prairie air carries a lot of fine dust. Cleaning removes what has settled in the ducts and returns." },
      { title: "New suburbs", text: "Newer homes in areas like Brighton and Rosewood often hold construction dust — a first cleaning helps." },
      { title: "Furnace runtime", text: "Long heating seasons mean a dusty furnace blower works harder. Every package includes furnace cleaning." },
    ],
    faqs: [
      { question: "Does dry air make ducts dustier in Saskatoon?", answer: "Dry air keeps fine dust airborne, and much of it ends up in your filters and ducts. Regular filter changes and periodic duct cleaning help keep it under control." },
      { question: "Do you serve all of Saskatoon?", answer: "Yes. Choose Saskatchewan in the booking form to see your prices." },
    ],
  },
  {
    slug: "regina",
    name: "Regina",
    areaSlug: "saskatchewan",
    neighbourhoods: ["Cathedral", "Lakeview", "The Crescents", "Harbour Landing", "Whitmore Park", "Hillsdale", "Glencairn", "Normanview"],
    intro:
      "Fresh Air Quality cleans air ducts, furnaces and dryer vents for homes across Regina — including Cathedral, Lakeview, the Crescents, Harbour Landing and Whitmore Park.",
    climate:
      "Regina is windy and dry, with cold winters and warm summers. Wind-blown prairie dust finds its way indoors, and long heating seasons keep it circulating through the ducts.",
    homes:
      "Older neighbourhoods like Cathedral and the Crescents have character homes with original ductwork, while Harbour Landing and other newer areas have modern, airtight homes that often include HRVs.",
    costFactors: [
      { title: "Wind-blown dust", text: "Dusty, windy days mean more dust gets inside and settles in the system — regular cleaning keeps it from recirculating." },
      { title: "Older homes", text: "Original ducts in older homes often need Brush Cleaning to remove stuck-on buildup." },
      { title: "HRVs in newer homes", text: "If your home has an HRV, add HRV cleaning to keep ventilation working properly." },
    ],
    faqs: [
      { question: "Do you serve Harbour Landing?", answer: "Yes — we serve all of Regina, including Harbour Landing, Cathedral, Lakeview and Whitmore Park." },
      { question: "What’s included in a basic duct cleaning?", answer: "Every duct and vent in the home plus one furnace, cleaned with high-powered vacuums, rotary brushes and HEPA-grade filtration." },
    ],
  },

  /* ---------------- Maritimes ---------------- */
  {
    slug: "halifax",
    name: "Halifax",
    areaSlug: "maritime-provinces",
    neighbourhoods: ["South End", "North End", "Clayton Park", "Bedford", "Dartmouth", "Fairview", "Spryfield", "Cole Harbour"],
    intro:
      "Fresh Air Quality provides air duct, HRV and dryer vent cleaning across Halifax — including the South End, North End, Clayton Park, Bedford, Dartmouth and Cole Harbour.",
    climate:
      "Halifax’s coastal climate is damp and foggy for much of the year. High humidity combined with dust inside ductwork can lead to musty smells, so clean ventilation matters here.",
    homes:
      "Halifax homes use a wide mix of heating — forced-air furnaces, heat pumps and other systems. Many newer homes rely on an HRV for fresh air, and older homes on the peninsula may have long-neglected ductwork.",
    costFactors: [
      { title: "Your heating system", text: "Homes with forced-air or ducted heat pumps benefit most from duct cleaning. Tell us your system and we’ll suggest only what applies." },
      { title: "Humidity and HRVs", text: "In a damp climate, a clean HRV helps move stale, humid air out. HRV cleaning is a valuable add-on." },
      { title: "Dryer vents", text: "Damp lint clogs dryer vents faster. Dryer vent cleaning is a low-cost add-on that reduces fire risk." },
    ],
    faqs: [
      { question: "Do you clean heat pump ducts in Halifax?", answer: "Yes. If your heat pump is ducted, we clean the ductwork and vents just like a furnace system." },
      { question: "Do you serve Dartmouth and Bedford?", answer: "Yes — Halifax, Dartmouth, Bedford and the surrounding communities. Choose Maritime Provinces in the booking form to see your prices." },
    ],
  },
];

/* ---------------- Helpers ---------------- */

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}

// The area page a city belongs to (name, URL) and its province (prices).
export function cityArea(city: City): { name: string; slug: string; province: Province } {
  const page = provincePages.find((p) => p.slug === city.areaSlug)!;
  const province = provinces.find((p) => p.code === page.code)!;
  return { name: page.name, slug: page.slug, province };
}

export const cityUrl = (c: City) => `/${c.areaSlug}/${c.slug}/`;
export const costUrl = (c: City) => `/duct-cleaning-cost/${c.slug}/`;

export function citiesIn(areaSlug: string) {
  return cities.filter((c) => c.areaSlug === areaSlug);
}
