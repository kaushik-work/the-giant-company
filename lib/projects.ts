export type Project = {
  slug: string;
  name: string;
  industry: string;
  tagline: string;
  summary: string;
  overview: string;
  logo?: string;
  logoDark?: boolean;
  url?: string;
  emoji?: string;
  cls: string;
  featured?: boolean;
  built: string[];
  features: { title: string; text: string }[];
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "moonlight-ai",
    name: "Moonlight — AI Trip Planner",
    industry: "Travel · AI",
    tagline: "A travel-planning chatbot with a personality, built on Claude.",
    summary: "Trripah's AI trip planner: chats like a well-travelled friend, plans the itinerary, and hands a ready lead to the sales team.",
    overview:
      "Moonlight is the AI brain behind Trripah's trip-planning chat. She is written as a 28-year-old who has travelled the world and adapts her tone to the traveller — casual and punchy for Gen Z, structured for millennials, warm and clear for older travellers. Her job is to talk a visitor through destination, dates, group and style until the itinerary is final, then capture contact details so the ground team can send a quote. She never quotes prices — pricing stays with people.",
    emoji: "🌙",
    cls: "t1",
    featured: true,
    built: [
      "Spring Boot (Java 21) backend that wraps Claude Haiku 4.5 with a custom persona and conversation rules",
      "Knowledge base of 65 destinations — one JSON file each, loaded only when that destination comes up in the chat",
      "Lead-capture flow that detects when the itinerary is final and asks for name, WhatsApp and email",
      "Structured itinerary JSON returned to the frontend and saved to MongoDB as a lead",
      "Embedded in the Trripah website, the CRM and the Trripah mobile app",
    ],
    features: [
      { title: "Adapts to the traveller", text: "Detects the user's style and changes vocabulary, pacing and level of detail — from slang to formal and comfort-focused." },
      { title: "Destination-aware answers", text: "Highlights, must-try food, visa info for Indian travellers, best season, hidden gems and hotel zones are injected per destination, keeping prompts small and answers accurate." },
      { title: "Lead capture, not a dead-end chat", text: "When the plan is final the chat triggers an inline contact form; the lead lands in the CRM with the full itinerary attached." },
      { title: "Never quotes a price", text: "A hard guardrail: pricing is handled by the ground team, so customers never see made-up numbers." },
      { title: "Production safeguards", text: "Per-IP rate limiting, API protection filter, session service, CORS whitelist and health checks for the DigitalOcean deploy." },
      { title: "Doubles as a quote parser", text: "The same service parses DMC quote emails, PDFs and DOCX files into structured itinerary data for the CRM (see Trripah CRM)." },
    ],
    stack: ["Java 21", "Spring Boot 3", "Claude API", "MongoDB", "Docker", "DigitalOcean"],
  },
  {
    slug: "trripah-crm",
    name: "Trripah CRM Suite",
    industry: "Travel Technology",
    tagline: "A CRM that automates the whole quote-to-payment cycle for a travel company.",
    summary: "Automated RFQ emails, an AI quote parser, instant client itineraries and Razorpay payments — in one back office.",
    overview:
      "A full back-office for Trripah Enterprises, built around how a travel agency really works: a lead comes in, the team requests rates from destination partners (DMCs), builds an itinerary and quote, shares it with the client and collects payment. We automated each hand-off so agents spend time selling, not copy-pasting.",
    logo: "/logos/trripah-crm.png",
    cls: "t1",
    featured: true,
    built: [
      "Trip-request dashboard with status pipeline, customer records and agent activity tracking",
      "One-click RFQ emails to destination partners, with replies parsed by AI into itineraries",
      "Itinerary builder that outputs a branded, shareable client itinerary",
      "Razorpay payment collection with verification and automatic payment status",
      "Lead hub for Moonlight AI leads, web enquiries and group-tour leads, plus campaigns and reports",
    ],
    features: [
      { title: "Auto email — quote requests to DMCs", text: "Pick a destination and the CRM looks up the DMC contacts, builds the request email from the trip details and sends it from the supply mailbox (Gmail OAuth2, with Resend as fallback). Every send is logged against the agent and the trip." },
      { title: "AI parser for quotes", text: "Paste a DMC's email or upload their PDF/DOCX. The parser (Claude, via the Moonlight service) extracts cities and nights, hotels, activities, transfers, flights, inclusions and costs into the itinerary builder's own format — minutes of typing become one click and a review." },
      { title: "Automatic brochure / itinerary building", text: "Route, stay, day-wise plan, flights, transfers, inclusions and pricing (land cost + margin + TCS) feed a polished client itinerary page that is shareable by link. Clients unlock it with phone OTP, and a notification email goes out automatically when it is shared." },
      { title: "Payment gateway integration", text: "Razorpay orders and signature verification, partial and full payments, a payment history on every booking, automatic payment-status recalculation, confirmation emails, manual payment entry for offline money, and a payments report." },
      { title: "Lead automation", text: "Moonlight AI chats, website enquiries and group-tour leads flow in automatically with source attribution and WhatsApp-click tracking, then get assigned to agents. Maintenance scripts backfill attribution and mark stale leads lost." },
      { title: "Email campaigns", text: "Bulk campaign sender with templates, contact import, batched sending, a dedicated sender mailbox and delivery stats, plus a reminder cron." },
      { title: "Reports & daily digest", text: "Lead, growth, payment and agent-activity reports, and a scheduled 7 PM IST daily activity email to management." },
      { title: "Group trips published to the website", text: "Group-trip packages edited in the CRM refresh the public site instantly through a cache-revalidation hook." },
    ],
    stack: ["Next.js", "TypeScript", "MongoDB Atlas", "Razorpay", "Firebase OTP", "Gmail OAuth2", "Resend", "Tailwind CSS", "Vercel"],
  },
  {
    slug: "trripah-travel",
    name: "Trripah Travel",
    industry: "Travel & Tourism",
    tagline: "A booking and lead-generation platform for a travel brand.",
    summary: "Destinations, packages, group trips, visas, flight deals and an AI planner — built to rank on Google and convert.",
    overview:
      "The public face of Trripah: a content-rich travel site that turns browsers into enquiries. It combines SEO-driven destination content with tools — Moonlight AI planner, quick quotes, a flight-deal finder and online payments — all connected to the CRM.",
    logo: "/logos/trripah-travel.png",
    logoDark: true,
    url: "https://trripah.com",
    cls: "t3",
    built: [
      "Destination, package, honeymoon, safari, combo-tour and group-trip pages driven by CRM data",
      "Moonlight AI chat and per-destination AI trip planner pages",
      "Quick-quote and enquiry flows that push straight into the CRM",
      "Client itinerary pages with phone-OTP access, and payment pages with Razorpay",
      "Visa guides, visa-free destination lists, Flight Finder deal board, blog and reviews",
    ],
    features: [
      { title: "SEO built in", text: "Dynamic sitemaps, structured content for hundreds of destination pages, an llms.txt for AI search, and local landing pages such as travel agency in Bangalore." },
      { title: "Connected to the CRM", text: "Leads, group trips and flight deals are shared with the CRM so edits there go live on the site." },
      { title: "Pay online", text: "Quote-specific payment links with Razorpay and a payment-success screen." },
      { title: "Secure client itinerary", text: "Customers open their personalised itinerary with a one-time phone code — no passwords or access codes to forward." },
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Razorpay", "Firebase OTP", "MongoDB"],
  },
  {
    slug: "trripah-mobile-app",
    name: "Trripah Mobile App",
    industry: "Travel · Mobile",
    tagline: "India's travel companion app, in Flutter.",
    summary: "Group trips, Moonlight AI concierge, flight fares and trips in one app.",
    overview:
      "A Flutter app for Android and iOS with a five-tab shell — Home, Moonlight, Flights, Trips and Profile. It runs on live data: group trips and leads against the Trripah CRM, the Moonlight chat on its own backend, and real nightly-scraped fares from Flight Klub for the Flight Finder.",
    emoji: "📱",
    cls: "t2",
    built: [
      "Flutter app with go_router navigation and a polished animated UI",
      "Group trips and lead capture wired to the CRM",
      "Moonlight AI concierge chat",
      "Flight Finder showing real fares scraped nightly",
    ],
    features: [
      { title: "Live data, not mock-ups", text: "Everything on the main tabs reads from real services." },
      { title: "One brand, many channels", text: "Same AI, same CRM and same content as the website." },
    ],
    stack: ["Flutter", "Dart", "Riverpod", "go_router"],
  },
  {
    slug: "fido-exim",
    name: "FIDO Exim",
    industry: "Export & Import",
    tagline: "A B2B export website with a built-in RFQ engine and private CRM.",
    summary: "Product catalogue, enquiry tray, certifications and a private lead dashboard for a merchant exporter.",
    overview:
      "FIDO Exports and Imports LLP is an India-based merchant exporter connecting Indian suppliers with global buyers. We built a trust-first B2B site where buyers browse products across agriculture and industrial categories, add items to an enquiry tray and send one consolidated request for quotation.",
    logo: "/logos/fido-exim.jpg",
    cls: "t3",
    built: [
      "Catalogue of agri-food (rice, spices, fruits, onions, banana leaf) and industrial products (polymer goods, electrical panels)",
      "Enquiry tray and RFQ panel that bundle multiple products into one request",
      "Certifications page (APEDA, FSSAI, DGFT, MSME, ICEGATE, ECGC, Spices Board), About, Gallery, Blog and FAQs",
      "Private CRM dashboard at a secret link: leads with status, search, detail view and CSV export",
      "Cookie-less website analytics: page views, sources, devices, product interest and taps on call/WhatsApp",
    ],
    features: [
      { title: "Request-for-quotation flow", text: "Buyers add products, specify quantity and destination, and send a single RFQ — with an instant WhatsApp option." },
      { title: "Lead pipeline built in", text: "New → contacted → quoted → won/lost tracking, with no external CRM subscription." },
      { title: "Privacy-friendly analytics", text: "No cookies, no IP storage; honours Do Not Track and ignores bots." },
      { title: "Built for search", text: "Metadata, sitemap, robots and structured content for every product and blog post." },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"],
  },
  {
    slug: "campusgo",
    name: "CampusGo",
    industry: "Education · SaaS Product",
    tagline: "A multi-tenant placement-management platform for colleges.",
    summary: "Students, recruiters, jobs, applications, interviews, alumni and analytics for placement cells.",
    overview:
      "CampusGo is a placement intelligence and career-success platform. Placement officers manage students, companies, jobs, applications and interview rounds from a desktop web app, while students get a mobile-first, installable app to build profiles, upload resumes and track applications. It is our own SaaS product, built to onboard many colleges onto one system.",
    logo: "/logos/campusgo.png",
    url: "https://campusgoindia.com",
    cls: "t2",
    built: [
      "Monorepo with Next.js web app and NestJS REST API",
      "Multi-tenant architecture: every record scoped by college, enforced in the API layer",
      "Role-based access for Platform Admin, College Admin, Placement Officer and Student",
      "Student lifecycle, companies and jobs, an applicant-tracking pipeline, notifications and alumni modules",
      "Analytics and reporting dashboards for placement outcomes",
    ],
    features: [
      { title: "Two experiences, one platform", text: "Mobile-first PWA for students; sidebar-and-table desktop console for staff." },
      { title: "Deny-by-default security", text: "Rotating refresh tokens, RBAC guards, validation, throttling and tenant isolation." },
      { title: "Applicant tracking", text: "Jobs, applications and interview rounds in a single pipeline." },
      { title: "Documented in phases", text: "Five phase documents cover foundation, student lifecycle, ATS, communications and analytics." },
    ],
    stack: ["Next.js 15", "NestJS", "Supabase Postgres", "Prisma", "Turborepo", "Cloudflare R2", "Resend"],
  },
  {
    slug: "keerthi-builders",
    name: "Keerthi Builders",
    industry: "Real Estate",
    tagline: "A corporate website and lead-generation platform for a plot developer.",
    summary: "Project, location and plot-size pages tuned for local search, with an admin panel.",
    overview:
      "Keerthi Builders develops plotted layouts around Bengaluru. The site presents each project with location and plot-size pages, BMRDA approval information, a blog and clear enquiry paths so visitors become site-visit leads.",
    logo: "/logos/keerthi-builders.png",
    cls: "t1",
    built: [
      "React + Vite single-page site with animated, mobile-first pages",
      "Project, location, plot-size and BMRDA information pages",
      "Blog and details pages for SEO, with an auto-generated sitemap at build time",
      "Admin area and contact flows for lead capture",
      "Deployable to Vercel or an Nginx server",
    ],
    features: [
      { title: "Local SEO focus", text: "Dedicated location and plot-size landing pages, helmet-managed metadata and a generated sitemap." },
      { title: "Lead generation", text: "Contact and enquiry flows placed throughout the journey." },
    ],
    stack: ["React 19", "Vite", "React Router", "Bootstrap", "Framer Motion"],
  },
  {
    slug: "nap-meridian-exim",
    name: "Nap Meridian",
    industry: "Export & Import",
    tagline: "A business website and digital workflow system for an exporter.",
    summary: "Corporate web presence and digital workflows for an export-import business.",
    overview:
      "A business website paired with a digital workflow system that moves the company's export-import operations off manual processes.",
    emoji: "🚢",
    cls: "t3",
    built: ["Corporate website", "Digital workflow system for day-to-day export-import operations"],
    features: [{ title: "Workflow digitisation", text: "Replaces manual tracking with a shared digital process." }],
    stack: ["Web", "Workflow automation"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
