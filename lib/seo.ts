import { services, type Service } from "./services";
import { getProject } from "./projects";
import allow from "./seo-allow.json";

// ---------- Industries (also the sector vocabulary used by cities) ----------
export type Industry = {
  slug: string;
  name: string;      // "Travel & tourism"
  who: string;       // "travel agencies and tour operators"
  pains: string[];   // three real operational pains
  proof: string[];   // project slugs we have actually shipped in this sector (may be empty)
};

export const industries: Industry[] = [
  { slug: "travel-tourism", name: "Travel & tourism", who: "travel agencies and tour operators",
    pains: ["Quotes assembled by hand from partner emails", "Enquiries scattered across WhatsApp, email and calls", "Itineraries rebuilt from scratch for every client"],
    proof: ["trripah-crm", "trripah-travel", "moonlight-ai", "flightklub"] },
  { slug: "education", name: "Education", who: "colleges, training institutes and placement teams",
    pains: ["Placement data kept in spreadsheets", "Students, staff and recruiters on separate systems", "No clear view of drives, eligibility and outcomes"],
    proof: ["campusgo"] },
  { slug: "real-estate", name: "Real estate", who: "developers, plot sellers and property consultants",
    pains: ["Site enquiries that never reach the right salesperson", "Project and plot details scattered across brochures", "Little visibility on which source brings real buyers"],
    proof: ["keerthi-builders"] },
  { slug: "export-import", name: "Export & import", who: "exporters, importers and trade consultants",
    pains: ["Paperwork chased across email, PDFs and chats", "Order and shipment status tracked manually", "Repeat data entry between documents"],
    proof: ["fido-exim", "nap-meridian-exim"] },
  { slug: "manufacturing", name: "Manufacturing", who: "manufacturers and industrial suppliers",
    pains: ["Dealer and distributor orders taken over phone and chat", "Production and dispatch status unclear to sales", "Quotations prepared manually for every RFQ"],
    proof: [] },
  { slug: "healthcare", name: "Healthcare", who: "clinics, diagnostic centres and healthcare providers",
    pains: ["Appointment requests lost between calls and messages", "Patient follow-ups depend on someone remembering", "Reports and records scattered across tools"],
    proof: [] },
  { slug: "retail-ecommerce", name: "Retail & e-commerce", who: "retailers, D2C brands and online sellers",
    pains: ["Orders and enquiries arriving on too many channels", "Catalogue updates done by hand on every platform", "No single view of repeat customers"],
    proof: [] },
  { slug: "logistics", name: "Logistics & shipping", who: "freight forwarders, transporters and shipping agents",
    pains: ["Shipment status requested by phone", "Rate quotes built manually from multiple carriers", "Documents emailed back and forth"],
    proof: ["nap-meridian-exim"] },
  { slug: "finance-services", name: "Finance & professional services", who: "consultants, advisory firms and financial service providers",
    pains: ["Client onboarding done over long email threads", "Document collection chased manually", "Case status tracked in personal spreadsheets"],
    proof: [] },
  { slug: "startups-it", name: "Startups & IT", who: "founders and product teams",
    pains: ["Needing a first version shipped without a full hiring plan", "Internal tools built in a rush and hard to extend", "No engineering bandwidth for integrations and automation"],
    proof: ["campusgo", "moonlight-ai"] },
];
export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);

// ---------- Service x industry use cases: what this service looks like in that sector ----------
const uc: Record<string, Record<string, string>> = {
  "custom-software-development": {
    "travel-tourism": "Booking, supplier and itinerary tools that replace the spreadsheet your operations team lives in.",
    "education": "Placement, attendance and recruiter portals with role-based access for students, staff and companies.",
    "real-estate": "Inventory, plot-availability and site-visit tools that give sales one live source of truth.",
    "export-import": "Order, shipment and document-tracking platforms that cut repeat data entry.",
    "manufacturing": "Dealer ordering, dispatch tracking and production-status dashboards tailored to your plant.",
    "healthcare": "Appointment, patient-record and follow-up systems with careful access control.",
    "retail-ecommerce": "Order, inventory and customer tools that sit across your sales channels.",
    "logistics": "Shipment tracking, rate management and partner portals built around how you move cargo.",
    "finance-services": "Client onboarding, case tracking and document portals for advisory work.",
    "startups-it": "A first version of your product built to be extended, not thrown away.",
  },
  "crm-development": {
    "travel-tourism": "A CRM that turns an enquiry into a quote, an itinerary and a payment, with partner emails sent for you.",
    "education": "Admissions and counselling pipelines so no student enquiry goes cold.",
    "real-estate": "Lead capture from site forms, calls and WhatsApp, assigned to the right salesperson with follow-up reminders.",
    "export-import": "Buyer enquiries, quotations and order stages tracked in one pipeline.",
    "manufacturing": "Dealer and RFQ pipelines with quotations generated from your price lists.",
    "healthcare": "Patient enquiry and follow-up tracking, so appointments are confirmed and nobody is forgotten.",
    "retail-ecommerce": "Repeat-customer and bulk-order tracking across channels.",
    "logistics": "Rate requests, quotations and shipment follow-ups in one pipeline.",
    "finance-services": "Client pipelines with reminders for documents, renewals and reviews.",
    "startups-it": "A lightweight CRM for your first sales team, ready to grow with you.",
  },
  "web-development": {
    "travel-tourism": "Fast destination and package sites with enquiry and WhatsApp flows built in.",
    "education": "Admissions and programme sites that rank locally and capture enquiries.",
    "real-estate": "Project, location and plot-size pages tuned for local search, with an admin panel to manage listings.",
    "export-import": "Credible company and product sites that bring in international buyer enquiries.",
    "manufacturing": "Catalogue and capability sites that make RFQs easy to send.",
    "healthcare": "Clear service and doctor pages with simple appointment requests.",
    "retail-ecommerce": "Fast storefronts and catalogues with clean URLs for search.",
    "logistics": "Service and route pages with instant quote-request forms.",
    "finance-services": "Trust-building service sites with structured data and enquiry forms.",
    "startups-it": "Marketing sites and landing pages that load fast and can be changed without a developer.",
  },
  "workflow-automation": {
    "travel-tourism": "Automatic quote-request emails to partners, with replies logged against the right trip.",
    "education": "Automated eligibility checks, notifications and reminders for placement drives.",
    "real-estate": "Lead routing, site-visit reminders and follow-up sequences that run on their own.",
    "export-import": "Document generation, status updates and reminders that send themselves.",
    "manufacturing": "Order confirmations, dispatch notices and reorder reminders without manual chasing.",
    "healthcare": "Appointment reminders and follow-up messages sent on schedule.",
    "retail-ecommerce": "Order status updates, restock alerts and report generation on a schedule.",
    "logistics": "Shipment status notifications and document hand-offs between your team and partners.",
    "finance-services": "Document request reminders and status updates so cases keep moving.",
    "startups-it": "Internal automations that remove busywork before you hire for it.",
  },
  "saas-product-development": {
    "travel-tourism": "A multi-tenant platform your agency partners can each use under their own account.",
    "education": "A multi-tenant product that serves many colleges securely, the way CampusGo does.",
    "real-estate": "A listings or lead-management product that many developers can use.",
    "export-import": "A trade-workflow product offered to many exporters under one platform.",
    "manufacturing": "A dealer or supplier portal offered as a product to your network.",
    "healthcare": "A practice-management product designed around data isolation and access control.",
    "retail-ecommerce": "A merchant tool that serves many sellers from one codebase.",
    "logistics": "A booking and tracking product offered to multiple partners.",
    "finance-services": "A client-portal product with tenant isolation and audit trails.",
    "startups-it": "From MVP to multi-tenant SaaS, with a usable first release in weeks.",
  },
  "ai-intelligent-automation": {
    "travel-tourism": "Conversational trip planners that talk like a well-travelled friend and hand a ready lead to your sales team.",
    "education": "Assistants that answer student and recruiter questions and route the rest.",
    "real-estate": "A chatbot that qualifies buyers and books site visits.",
    "export-import": "Document parsing that turns supplier emails and PDFs into structured records.",
    "manufacturing": "Parsers that turn RFQ emails and drawings requests into structured quotations to review.",
    "healthcare": "A front-desk assistant for appointment questions, with clear hand-off to staff.",
    "retail-ecommerce": "Customer-support assistants that answer order and product questions.",
    "logistics": "Assistants that answer shipment queries and parse rate emails.",
    "finance-services": "Assistants that collect client information and chase missing documents.",
    "startups-it": "AI features wired into your product, with guardrails so they behave.",
  },
};
export const useCase = (service: Service, industry: Industry) => uc[service.slug]?.[industry.slug] ?? service.text;

// ---------- Cities ----------
export type City = { slug: string; name: string; region: string; blurb: string; sectors: [string, string, string]; nearby: string[] };

export const cities: City[] = [
  { slug: "bengaluru", name: "Bengaluru", region: "Karnataka", blurb: "Bengaluru is our home. We work from Rajajinagar and can meet in person for workshops and demos.", sectors: ["startups-it", "education", "real-estate"], nearby: ["hyderabad", "chennai", "kochi"] },
  { slug: "mumbai", name: "Mumbai", region: "Maharashtra", blurb: "Mumbai businesses run on speed: trade, finance, media and logistics all depend on quick hand-offs.", sectors: ["finance-services", "logistics", "retail-ecommerce"], nearby: ["pune", "ahmedabad", "surat"] },
  { slug: "delhi-ncr", name: "Delhi NCR", region: "Delhi, Gurugram, Noida", blurb: "Delhi NCR mixes large service companies, manufacturers and fast-growing startups across several cities.", sectors: ["manufacturing", "startups-it", "travel-tourism"], nearby: ["chandigarh", "jaipur", "indore"] },
  { slug: "hyderabad", name: "Hyderabad", region: "Telangana", blurb: "Hyderabad combines a large IT workforce with healthcare, pharma and education businesses.", sectors: ["healthcare", "startups-it", "education"], nearby: ["bengaluru", "chennai", "pune"] },
  { slug: "chennai", name: "Chennai", region: "Tamil Nadu", blurb: "Chennai is a manufacturing and export hub, with a busy port and a long list of trade businesses.", sectors: ["manufacturing", "export-import", "logistics"], nearby: ["bengaluru", "coimbatore", "hyderabad"] },
  { slug: "pune", name: "Pune", region: "Maharashtra", blurb: "Pune has a strong base of manufacturers, IT companies and educational institutions.", sectors: ["manufacturing", "education", "startups-it"], nearby: ["mumbai", "ahmedabad", "indore"] },
  { slug: "kolkata", name: "Kolkata", region: "West Bengal", blurb: "Kolkata has long-established trading, education and logistics businesses that still run on manual processes.", sectors: ["export-import", "education", "logistics"], nearby: ["lucknow", "delhi-ncr", "chandigarh"] },
  { slug: "ahmedabad", name: "Ahmedabad", region: "Gujarat", blurb: "Ahmedabad is built on trade and manufacturing, with many family-run businesses ready to digitise.", sectors: ["manufacturing", "export-import", "retail-ecommerce"], nearby: ["surat", "mumbai", "indore"] },
  { slug: "jaipur", name: "Jaipur", region: "Rajasthan", blurb: "Jaipur's economy leans on tourism, handicrafts and exports, with plenty of agencies selling to travellers and buyers abroad.", sectors: ["travel-tourism", "export-import", "retail-ecommerce"], nearby: ["delhi-ncr", "indore", "ahmedabad"] },
  { slug: "kochi", name: "Kochi", region: "Kerala", blurb: "Kochi combines a major port with tourism and a growing services sector.", sectors: ["logistics", "travel-tourism", "healthcare"], nearby: ["bengaluru", "chennai", "coimbatore"] },
  { slug: "coimbatore", name: "Coimbatore", region: "Tamil Nadu", blurb: "Coimbatore is an engineering and textile city, full of manufacturers selling to dealers and exporters.", sectors: ["manufacturing", "export-import", "education"], nearby: ["chennai", "kochi", "bengaluru"] },
  { slug: "surat", name: "Surat", region: "Gujarat", blurb: "Surat is known for textiles and diamonds, with trading businesses that handle large volumes of orders.", sectors: ["export-import", "manufacturing", "retail-ecommerce"], nearby: ["ahmedabad", "mumbai", "pune"] },
  { slug: "indore", name: "Indore", region: "Madhya Pradesh", blurb: "Indore is a fast-growing trading, education and services centre in central India.", sectors: ["retail-ecommerce", "education", "startups-it"], nearby: ["ahmedabad", "pune", "jaipur"] },
  { slug: "chandigarh", name: "Chandigarh", region: "Chandigarh, Mohali, Panchkula", blurb: "The Chandigarh tri-city area has a mix of IT firms, healthcare providers and manufacturers.", sectors: ["healthcare", "startups-it", "manufacturing"], nearby: ["delhi-ncr", "jaipur", "lucknow"] },
  { slug: "lucknow", name: "Lucknow", region: "Uttar Pradesh", blurb: "Lucknow is a state capital with growing education, healthcare and retail businesses that still run on manual processes.", sectors: ["education", "healthcare", "retail-ecommerce"], nearby: ["delhi-ncr", "indore", "kolkata"] },
];
export const getCity = (slug: string) => cities.find((c) => c.slug === slug);

// ---------- Service x city FAQ ----------
export function cityFaqs(s: Service, c: City) {
  const sec = getIndustry(c.sectors[0])!;
  return [
    { q: `Do you work with businesses in ${c.name}?`,
      a: `Yes. We are based in Bengaluru and work with clients across India and abroad over video calls, WhatsApp and shared project boards. ${c.name} clients get the same team, weekly demos and written scope as anyone else.` },
    { q: `What would ${s.title.toLowerCase()} look like for a ${sec.name.toLowerCase()} business in ${c.name}?`,
      a: useCase(s, sec) },
    { q: `How do we get started?`,
      a: `Send an enquiry or message us on WhatsApp. We schedule a call, learn how your process works today, then share a written proposal with scope, timeline and cost before any build begins.` },
    { q: `Can you take over or extend software we already have?`,
      a: `Often yes. We review the existing code and data first, then tell you honestly whether to extend it or rebuild the parts that hold you back.` },
  ];
}
export function industryFaqs(s: Service, i: Industry) {
  return [
    { q: `Have you built ${s.title.toLowerCase()} for ${i.name.toLowerCase()} businesses?`,
      a: i.proof.length ? `Yes. Our related work includes ${i.proof.map((p) => getProject(p)?.name ?? p).join(", ")}. Each one is described on our projects page.` : `We have not shipped a ${i.name.toLowerCase()} product ourselves, but the same patterns apply and we have built them for travel, education, real estate and trade. We will say plainly what carries over and what we would need to learn from your team.` },
    { q: `What problems do you usually solve for ${i.who}?`,
      a: `Typically: ${i.pains.map((p) => p.toLowerCase()).join("; ")}.` },
    { q: `How long does a first version take?`,
      a: `It depends on scope, which we agree in writing before building. We favour a usable first release in weeks, then phased additions based on real use.` },
    { q: `Do you work remotely?`,
      a: `Yes. We work with clients across India and worldwide, with regular demos and a shared progress board.` },
  ];
}

// ---------- Problem pages ----------
export type Problem = { slug: string; title: string; h1: string; service: string; problem: string; cost: string; steps: { title: string; text: string }[]; proof: string[]; faqs: { q: string; a: string }[] };

export const problems: Problem[] = [
  { slug: "automate-quote-request-emails", title: "Automate quote-request emails", h1: "Stop sending quote requests by hand", service: "workflow-automation",
    problem: "Every enquiry means writing the same email to several suppliers, then tracking who replied and who didn't.",
    cost: "Hours a week of copy-paste, plus the quotes that go out late because someone forgot to chase.",
    steps: [
      { title: "One-click requests", text: "Branded request emails go to the right partners for the destination or product, from a single record." },
      { title: "Replies logged", text: "Every send and reply is attached to the right trip or order." },
      { title: "AI reads the quotes", text: "Supplier replies in email, PDF or DOCX are parsed into a structured quote you can review." },
      { title: "Shareable output", text: "Turn the reviewed quote into a client-ready itinerary or proposal." },
    ], proof: ["trripah-crm"],
    faqs: [{ q: "Does it work with our existing email?", a: "We connect to Gmail or your mail provider through their official APIs, so your team keeps working in the inbox they know." }, { q: "Can AI make mistakes reading quotes?", a: "Yes, which is why parsed quotes are shown for review before anything goes to a client." }] },
  { slug: "whatsapp-lead-capture", title: "WhatsApp lead capture", h1: "Capture every WhatsApp enquiry as a lead", service: "crm-development",
    problem: "Enquiries arrive on WhatsApp, then live in someone's phone where they can't be assigned, tracked or reported on.",
    cost: "Leads that go cold because nobody owns the follow-up, and no idea which channel actually brings customers.",
    steps: [
      { title: "One inbox of leads", text: "WhatsApp, website, chatbot and campaign enquiries land in the same pipeline with their source." },
      { title: "Assignment", text: "Each lead is assigned to a person with a due follow-up." },
      { title: "Reminders", text: "The system reminds the owner until the lead is moved on." },
      { title: "Reports", text: "See leads, conversion and source by week without asking anyone." },
    ], proof: ["trripah-crm", "moonlight-ai"],
    faqs: [{ q: "Do you use the official WhatsApp Business API?", a: "Where automation is needed we use the official API. For simple click-to-chat links, no API is required." }, { q: "Can the chatbot hand leads to the CRM?", a: "Yes. Moonlight, our trip-planning chatbot, captures name and contact details and saves a ready lead." }] },
  { slug: "ai-chatbot-for-lead-generation", title: "AI chatbot for lead generation", h1: "A chatbot that qualifies leads, not just answers questions", service: "ai-intelligent-automation",
    problem: "Visitors leave your site with questions unanswered, and your team gets enquiries with no context.",
    cost: "Missed enquiries out of hours and sales calls that start from zero.",
    steps: [
      { title: "A defined personality", text: "Tone and rules written for your brand, including what the bot must never say, such as prices." },
      { title: "Your knowledge, on demand", text: "Product or destination information loaded per topic so answers stay accurate." },
      { title: "Lead capture", text: "The bot recognises when the visitor is ready and asks for contact details naturally." },
      { title: "Hand-off", text: "A structured summary goes to your CRM so the first call starts with context." },
    ], proof: ["moonlight-ai"],
    faqs: [{ q: "Which AI model do you use?", a: "Moonlight runs on Claude. We choose the model per use case." }, { q: "Will it quote prices?", a: "Only if you want it to. In Moonlight, pricing is deliberately left to people." }] },
  { slug: "replace-excel-with-custom-software", title: "Replace Excel with custom software", h1: "When your business has outgrown Excel", service: "custom-software-development",
    problem: "The spreadsheet that started as a quick tracker is now the system of record, shared over email, and only one person understands it.",
    cost: "Version confusion, lost rows, no access control and reports that take a day to assemble.",
    steps: [
      { title: "Map the sheet", text: "We study how the data is really used, including the unwritten rules." },
      { title: "Model it properly", text: "Turn tabs into related records with roles and permissions." },
      { title: "Migrate safely", text: "Import your existing data and run both side by side for a short period." },
      { title: "Live reports", text: "Dashboards replace the monthly assembly job." },
    ], proof: ["campusgo", "nap-meridian-exim"],
    faqs: [{ q: "Will we lose our data?", a: "No. We import your existing sheets and verify the numbers match before you switch." }, { q: "Is custom software overkill for a small team?", a: "Sometimes. If a ready-made tool fits, we will say so." }] },
  { slug: "document-processing-automation", title: "Document processing automation", h1: "Turn PDFs and emails into structured data", service: "ai-intelligent-automation",
    problem: "Information arrives as email bodies, PDFs and Word files, and someone retypes it into your system.",
    cost: "Slow turnaround and typing errors on numbers that matter.",
    steps: [
      { title: "Collect", text: "Documents are picked up from an inbox or upload." },
      { title: "Extract", text: "AI reads the document and pulls out the fields you care about." },
      { title: "Review", text: "A person confirms or corrects anything uncertain." },
      { title: "Use", text: "Clean data flows into your records, quotes or reports." },
    ], proof: ["trripah-crm"],
    faqs: [{ q: "What file types can you handle?", a: "Email text, PDF and DOCX are covered in our existing work. Others can be added." }, { q: "How accurate is it?", a: "Accuracy depends on the documents, so extractions are reviewed before they are used." }] },
  { slug: "online-payment-collection-for-services", title: "Online payment collection", h1: "Collect payments inside your own workflow", service: "crm-development",
    problem: "Payment links are sent over chat, and finance reconciles them by hand.",
    cost: "Delayed collections and unclear payment status for each customer.",
    steps: [
      { title: "Link from the record", text: "Generate a payment link from the quote or order itself." },
      { title: "Status tracked", text: "Paid, pending and failed states update automatically." },
      { title: "Notify the team", text: "Sales and finance see confirmations without asking." },
      { title: "Report", text: "Collection summaries by period and customer." },
    ], proof: ["trripah-crm"],
    faqs: [{ q: "Which payment gateway do you use?", a: "Our CRM work uses Razorpay. Others can be integrated." }, { q: "Do you store card details?", a: "No. Card data stays with the payment gateway." }] },
  { slug: "student-placement-management-system", title: "Placement management system", h1: "Run campus placements without spreadsheets", service: "saas-product-development",
    problem: "Placement teams manage students, companies and drives across sheets, email and chat groups.",
    cost: "Missed deadlines, eligibility mistakes and no outcome reporting.",
    steps: [
      { title: "Role-based access", text: "Students, staff and recruiters each see only what they should." },
      { title: "Drive management", text: "Create drives with eligibility rules and notify the right students." },
      { title: "Multi-college ready", text: "Tenant isolation so many colleges can use the same platform securely." },
      { title: "Outcome reports", text: "Placement numbers by department and year." },
    ], proof: ["campusgo"],
    faqs: [{ q: "Is this a ready product?", a: "CampusGo is our own multi-tenant placement platform, and we can build similar systems for other needs." }] },
  { slug: "real-estate-lead-generation-website", title: "Real estate lead-generation website", h1: "A website that brings in plot and property enquiries", service: "web-development",
    problem: "Your site looks fine, but nobody finds it and enquiries don't reach the right person.",
    cost: "Ad spend with little tracking, and organic search going to competitors.",
    steps: [
      { title: "Search-ready pages", text: "Project, location and plot-size pages with clean URLs and structured data." },
      { title: "Enquiry paths", text: "Forms, WhatsApp and call buttons placed where visitors decide." },
      { title: "Admin panel", text: "Update projects and availability yourself." },
      { title: "Lead routing", text: "Enquiries reach the right salesperson with their source." },
    ], proof: ["keerthi-builders"],
    faqs: [{ q: "Will it rank on Google?", a: "We build the technical foundations and local-search structure. Rankings depend on competition and content over time." }] },
];
export const getProblem = (slug: string) => problems.find((p) => p.slug === slug);

// ---------- Comparison pages ----------
export type Comparison = { slug: string; title: string; h1: string; intro: string; a: string; b: string; rows: [string, string, string][]; chooseA: string[]; chooseB: string[]; verdict: string; service: string; faqs: { q: string; a: string }[] };

export const comparisons: Comparison[] = [
  { slug: "custom-crm-vs-off-the-shelf-crm", title: "Custom CRM vs off-the-shelf CRM", h1: "Custom CRM vs off-the-shelf CRM: which should you pick?", service: "crm-development",
    intro: "Ready-made CRMs such as Zoho or HubSpot are a sensible default. A custom CRM makes sense when your sales process doesn't fit their shape.",
    a: "Off-the-shelf CRM", b: "Custom CRM",
    rows: [["Time to start", "Days", "Weeks to months, depending on scope"], ["Fit to your process", "You adapt to the tool", "Built around your process"], ["Automation", "Within the tool's features", "Anything you can describe, such as partner quote emails"], ["Running cost", "Per-user subscription that grows with the team", "Build cost up front, then hosting and maintenance"], ["Ownership", "Vendor controls roadmap and pricing", "You own the code and data"]],
    chooseA: ["Your sales process is fairly standard", "You need to start this week", "Your team is small"],
    chooseB: ["Your workflow has steps no tool supports", "Per-user pricing is becoming painful", "You want automation tied closely to your operations"],
    verdict: "Start with a ready-made CRM if it fits. Move to custom when you are bending your process around the tool or paying for workarounds.",
    faqs: [{ q: "Can you integrate with an existing CRM instead?", a: "Yes. Sometimes the right answer is to keep your CRM and automate the gaps around it." }] },
  { slug: "build-vs-buy-software", title: "Build vs buy software", h1: "Build vs buy: how to decide for your business", service: "custom-software-development",
    intro: "The question is rarely 'can we build it' but 'is this a part of the business that makes us different'.",
    a: "Buy", b: "Build",
    rows: [["Speed", "Fast to adopt", "Slower, but shaped to you"], ["Differentiation", "Same tool your competitors use", "Can encode how you win"], ["Integration", "Limited to what is offered", "Connect anything with an API"], ["Long-term cost", "Subscription, often per user", "Maintenance plus new features"], ["Risk", "Vendor changes or shuts down", "Delivery and maintenance rest with you and your team"]],
    chooseA: ["The function is common to all businesses, such as accounting", "You need it running immediately"],
    chooseB: ["The process is core to how you earn", "Off-the-shelf tools force costly workarounds"],
    verdict: "Buy commodities, build differentiators. If you are unsure, start by buying and note where it hurts.",
    faqs: [{ q: "Can we start with a small build?", a: "Yes. An MVP covering the most painful workflow is usually the best way to test the idea." }] },
  { slug: "custom-website-vs-wordpress", title: "Custom website vs WordPress", h1: "Custom Next.js website vs WordPress", service: "web-development",
    intro: "WordPress is a mature choice for content sites. A custom build suits sites that are closer to an application, or where speed and structure are central.",
    a: "WordPress", b: "Custom (Next.js)",
    rows: [["Setup speed", "Quick with themes and plugins", "Slower, but tailored"], ["Performance", "Depends heavily on theme and plugins", "Fast by default with careful builds"], ["Flexibility", "Large plugin ecosystem", "Anything you can code"], ["Maintenance", "Regular plugin and security updates", "Fewer moving parts, developer needed for changes"], ["Editing", "Familiar editor", "Admin panel built for your content"]],
    chooseA: ["It is mostly blog and brochure content", "Non-technical staff update content daily"],
    chooseB: ["You need custom flows such as quotes, listings or dashboards", "Speed and structured data are priorities"],
    verdict: "Pick WordPress for content-first sites with a strong editor need. Pick custom when the site has to do work for your business.",
    faqs: [{ q: "Is a custom site better for SEO?", a: "It can be, because we control structure, speed and structured data. WordPress can also rank well when set up carefully." }] },
  { slug: "in-house-developers-vs-software-studio", title: "In-house developers vs software studio", h1: "Hire developers or work with a software studio?", service: "custom-software-development",
    intro: "Both models work. The right one depends on how continuous your software needs are and how much management you want to take on.",
    a: "In-house team", b: "Software studio",
    rows: [["Start time", "Hiring takes months", "Weeks"], ["Skills", "Whoever you hire", "A mix of design, backend, frontend and DevOps"], ["Cost shape", "Fixed salaries, including quiet periods", "Pay for the project or an agreed team"], ["Knowledge", "Stays with your employees", "Needs documentation and a proper hand-over"], ["Management", "You manage the team", "Studio manages delivery, you give direction"]],
    chooseA: ["Software is your core, continuous activity", "You can attract and manage engineers"],
    chooseB: ["You need a first version or a defined project", "You do not yet need a full-time team"],
    verdict: "Many companies start with a studio to ship version one, then hire in-house once the product is proven.",
    faqs: [{ q: "Can you hand over to our team later?", a: "Yes. We document the system and can work alongside your engineers during the hand-over." }] },
  { slug: "ai-chatbot-vs-rule-based-bot", title: "AI chatbot vs rule-based bot", h1: "AI chatbot vs rule-based bot", service: "ai-intelligent-automation",
    intro: "Rule-based bots follow fixed paths. AI chatbots handle open conversation, but need guardrails.",
    a: "Rule-based bot", b: "AI chatbot",
    rows: [["Conversation", "Fixed menus and keywords", "Natural, open-ended"], ["Predictability", "Fully predictable", "Needs guardrails and testing"], ["Setup", "Quick for simple flows", "More design effort for persona and rules"], ["Handling surprises", "Falls back to menus", "Can adapt, and hand off when unsure"], ["Cost to run", "Very low", "Model usage cost per conversation"]],
    chooseA: ["You have a few simple, repeated questions", "You need strictly scripted answers"],
    chooseB: ["Visitors ask varied questions before buying", "You want leads qualified through conversation"],
    verdict: "Use rules for simple FAQs. Use AI when conversation quality affects whether a lead converts, and add rules around it.",
    faqs: [{ q: "Can we combine both?", a: "Yes. A common design is rules for sensitive parts, such as pricing, and AI for the open conversation." }] },
];
export const getComparison = (slug: string) => comparisons.find((c) => c.slug === slug);

export const needFor: Record<string, string> = {
  "custom-software-development": "Custom software",
  "crm-development": "CRM",
  "web-development": "Website",
  "workflow-automation": "Automation",
  "saas-product-development": "Custom software",
  "ai-intelligent-automation": "AI chatbot",
  "whatsapp-chatbot-development": "AI chatbot",
  "ai-agent-development": "AI chatbot",
  "mobile-app-development": "Custom software",
  "mvp-development": "Custom software",
  "nextjs-development": "Website",
  "web-application-development": "Custom software",
  "website-redesign": "Website",
  "website-maintenance": "Website",
  "travel-software-development": "CRM",
  "education-software-development": "Custom software",
};
export const contactHref = (serviceSlug: string, from: string) =>
  `/contact?need=${encodeURIComponent(needFor[serviceSlug] ?? "")}&from=${encodeURIComponent(from)}`;
export { services };

// ---------- What we publish pages for (kept to combinations with real search demand) ----------
export const cityServiceSlugs: string[] = allow.cityServices;
export const industryPairs: { service: string; industry: string }[] = allow.industryPairs;
export const hasCityPage = (serviceSlug: string) => cityServiceSlugs.includes(serviceSlug);
export const hasIndustryPage = (industrySlug: string, serviceSlug: string) => industryPairs.some((p) => p.industry === industrySlug && p.service === serviceSlug);
export const industryHubs = [...new Set(industryPairs.map((p) => p.industry))];
export const hasIndustryHub = (industrySlug: string) => industryHubs.includes(industrySlug);
