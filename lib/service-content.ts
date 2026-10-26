import type { Service } from "./services";

// Long-form content for the six core services. Merged into the service objects in services.ts.
export const coreContent: Record<string, Partial<Service>> = {
  "custom-software-development": {
    body: [
      "Most businesses start on spreadsheets, email and off-the-shelf tools. That works until the process grows teeth: approvals, hand-offs, role-based access, reports nobody can build, data that lives in five places. Custom software replaces that patchwork with one system shaped around how your team actually works.",
      "We build web platforms, internal tools, customer portals and integrations for businesses in travel, education, real estate and trade. Our own products, such as the Trripah CRM and CampusGo, are built the same way we build for clients: a short discovery, a written scope, then short sprints that each end in a working demo.",
      "We are based in Rajajinagar, Bangalore, and work with clients across India and worldwide. Calls, demos and reviews happen on video, and we are glad to meet in person if you are in Bangalore.",
    ],
    deliverables: ["Written scope, timeline and cost before the build starts", "Working software in staging after every sprint", "Role-based access, audit trail and data backups", "Integrations with your payments, email, WhatsApp or accounting tools", "Documentation and a hand-over so you are never locked in", "Support after launch"],
    costFactors: ["The number of user roles and the permissions each one needs", "How many integrations are involved (payments, WhatsApp, email, accounting, third-party APIs)", "How much existing data has to be cleaned and migrated", "Reporting and dashboard requirements", "Whether you need web only or web plus a mobile app", "How fast you need the first usable version"],
    industries: ["travel-tourism", "education", "real-estate", "export-import", "logistics", "healthcare"],
    faqs: [
      { q: "What is custom software development?", a: "It is building software designed around your own process instead of adapting your process to a ready-made tool. Typical examples are internal platforms, customer portals, booking and tracking systems and integrations between your existing tools." },
      { q: "When should we build custom software instead of buying?", a: "Buy when the need is common to all businesses, such as accounting. Build when the process is how you earn, when tools force costly workarounds, or when per-user pricing keeps climbing. See our comparison of build vs buy." },
      { q: "How long does a custom software project take?", a: "It depends on scope, which we agree in writing before building. We favour a usable first release in weeks, then add features based on how people actually use it." },
      { q: "Who owns the code?", a: "You do. The code, the data and the accounts are in your name, with documentation so another team could take over." },
      { q: "Do you work with companies outside Bangalore?", a: "Yes. We work remotely with clients across India and worldwide, with a demo at the end of each sprint and a shared progress board." },
    ],
  },
  "crm-development": {
    body: [
      "A CRM should remove work, not add it. The CRMs that get abandoned are the ones that ask your team to type everything twice. The ones that stick capture leads automatically, tell each person what to do next, and take care of the repetitive steps between an enquiry and a payment.",
      "We build CRMs around your sales cycle. That can mean web enquiries, WhatsApp and chatbot leads landing in one pipeline with their source, branded quotes and itineraries built from the requirement, automatic emails to partners with every reply logged, and payment tracking. Our Trripah CRM does exactly this for a travel business, including an AI parser that reads supplier quotes from email, PDF or DOCX.",
      "Not every business needs a custom CRM. If a ready-made tool fits your process, we will say so. We build when your workflow has steps no tool supports, when per-user pricing is becoming painful, or when automation tied to your operations is the main goal.",
    ],
    deliverables: ["Lead capture from your website, WhatsApp and chatbot, with source tracking", "Pipeline stages, owners, reminders and status history", "Quote, proposal or itinerary builder", "Email and WhatsApp automation logged against each record", "Payment links and payment status tracking", "Dashboards for leads, conversion and revenue by source", "Data import from your spreadsheets or existing CRM"],
    costFactors: ["Number of pipelines and user roles", "Quote or document generation complexity", "Which channels connect (website, WhatsApp, email, calls, payment gateway)", "AI features such as document parsing or lead summaries", "Data migration from spreadsheets or another CRM", "Reports and integrations with accounting or ERP tools"],
    industries: ["real-estate", "healthcare", "travel-tourism", "education", "export-import"],
    process: [
      { title: "Map the sales process", text: "We walk through how an enquiry becomes a payment today, including the unwritten steps and the ones that get forgotten." },
      { title: "Design the pipeline", text: "Stages, owners, reminders and the data each stage needs, agreed with the people who will use it." },
      { title: "Build the core first", text: "Lead capture, pipeline and follow-up reminders go live first so the team starts using it early." },
      { title: "Automate the repetitive steps", text: "Quotes, partner emails, WhatsApp messages and payments are connected once the basics are working." },
      { title: "Train, measure, improve", text: "We watch real usage, fix friction and add reports based on the questions you actually ask." },
    ],
  },
  "web-development": {
    body: [
      "A business website has to do three jobs: be found, load fast and turn visitors into enquiries. Most sites manage the first poorly, the second badly and the third by accident.",
      "We build with Next.js and treat search and speed as part of the build, not an add-on: clean URLs, unique titles and descriptions, structured data, a sitemap, fast pages on a mid-range phone and enquiry paths where visitors decide, such as forms, WhatsApp and call buttons. Sites such as Keerthi Builders (plots and projects with an admin panel) and FIDO Exim (catalogue, request-for-quotation tray and a private lead dashboard) are built this way.",
      "If a simple template site is all you need, we will tell you that. When the site needs to behave like a product, with quote flows, listings or dashboards, custom is worth it.",
    ],
    deliverables: ["Responsive design tested on real phones", "Technical SEO set-up: URLs, titles, structured data, sitemap, Search Console", "Enquiry forms, WhatsApp and call buttons wired to your inbox or CRM", "Admin panel or CMS so you can update content", "Fast hosting, analytics and monitoring", "Launch plan including redirects for an existing site"],
    costFactors: ["Number and type of pages (brochure pages vs catalogues or listings)", "Custom features such as quote builders, calculators or dashboards", "Who writes content and prepares images", "Integrations with CRM, payments, WhatsApp or email", "Migration from an existing site while keeping rankings", "Admin panel requirements"],
    industries: ["real-estate", "retail-ecommerce", "travel-tourism", "education", "healthcare"],
    faqs: [
      { q: "What does a website development company in Bangalore actually deliver?", a: "Design, development, technical SEO set-up, enquiry capture, testing, launch and support. We also connect the site to your CRM or WhatsApp so enquiries do not get lost." },
      { q: "How much does a website cost?", a: "It depends mainly on scope: pages, custom features, content and integrations. We do not publish a single price because it would mislead. Tell us what you need and we will send a written scope and cost. Our guide explains what drives the price." },
      { q: "Will my website rank on Google?", a: "We build the technical foundations and the search structure properly, but Google does not guarantee any ranking. Rankings depend on competition, content and links over time." },
      { q: "Do you build on WordPress?", a: "We build with Next.js. If WordPress or a no-code builder suits your needs better, we will say so. See our comparison of Next.js and WordPress." },
      { q: "Can you redesign my existing website without losing traffic?", a: "Yes. We map every old URL to the new one, set up permanent redirects, keep content that already ranks and monitor Search Console after launch." },
    ],
  },
  "workflow-automation": {
    body: [
      "If your team copies data between emails, spreadsheets and chats, you have a workflow waiting to be automated. The cost is rarely the minutes. It is the errors, the late replies and the reliance on one person remembering a step.",
      "We map the process first, then automate the hand-offs: requests that send themselves, documents read automatically into structured records, status that moves through clear stages with a history, and reports that run on a schedule. In the Trripah CRM, quote-request emails go to the right partners in one click, replies are logged, and AI turns supplier quotes into a structured itinerary for a person to review.",
      "Sometimes a no-code tool is the right answer, and we will say so. We build custom automation when the workflow is core to your business, the volume makes per-task pricing expensive, or you need audit trails and tight control.",
    ],
    deliverables: ["A written map of the current process and the exceptions", "Automated emails, reminders and notifications", "Document and email parsing into structured records", "Status tracking with history and ownership", "Scheduled jobs for reports, clean-ups and syncs", "Monitoring and alerts when a step fails"],
    costFactors: ["Number of steps and how many exceptions the process has", "Number of systems that must be connected", "Document types to parse and how messy they are", "Volume of runs per day", "Whether a person must review or approve steps", "Audit trail and access control requirements"],
    industries: ["travel-tourism", "export-import", "real-estate", "healthcare", "retail-ecommerce"],
    faqs: [
      { q: "What is workflow automation?", a: "It is using software to perform the repetitive steps of a business process, such as sending an email, updating a record or reminding someone, so people spend their time on work that needs judgment." },
      { q: "Should we use Zapier or n8n, or build custom automation?", a: "Use a no-code tool for simple connections at modest volume. Build custom when the workflow is central to your operations, volume makes per-task pricing costly or you need monitoring and audit trails. We explain how to choose in our guide." },
      { q: "Can automation read documents like PDFs and emails?", a: "Yes. We have built parsing for email text, PDF and DOCX files. The output is shown to a person for review before it is used." },
      { q: "What should we automate first?", a: "A frequent, rule-based, error-prone task with a clear cost in time or mistakes." },
      { q: "How do we know it is working?", a: "We add monitoring and alerts, and track time saved and errors avoided against the manual process." },
    ],
  },
  "saas-product-development": {
    body: [
      "A SaaS product serves many customers from one codebase, which changes everything: each customer's data must be isolated, permissions must be enforced on the server, billing and onboarding must be repeatable, and the first release must be small enough to ship.",
      "CampusGo, our own placement platform, is built this way: a multi-tenant system with students, recruiters, jobs, applications, interviews and analytics, with each college's data isolated at the API layer, role-based access, token rotation, rate limiting and deny-by-default guards. We bring the same approach to your product.",
      "We start with the smallest version that proves the idea, ship it in weeks, and grow it in phases based on real usage rather than guesses.",
    ],
    deliverables: ["A scoped MVP with the one workflow that creates value", "Multi-tenant architecture with isolated customer data", "Authentication, roles and permissions enforced on the server", "Admin console for your team and a clean experience for end users", "Subscription and billing integration where needed", "Monitoring, backups and a roadmap for the next phases"],
    costFactors: ["Number of user types and permissions", "Multi-tenancy and data isolation requirements", "Billing model (subscriptions, usage, per seat)", "Web only, or web plus mobile apps", "Integrations your customers will expect", "Compliance, audit and reporting needs"],
    industries: ["education", "startups-it", "travel-tourism", "healthcare"],
    faqs: [
      { q: "What is SaaS product development?", a: "Building software that many customers use under their own accounts, from one shared platform, usually sold by subscription. It needs multi-tenant design, strong access control and repeatable onboarding." },
      { q: "How long does it take to build a SaaS MVP?", a: "It depends on scope. We aim for a usable first release in weeks by building only the core workflow, then grow it in phases." },
      { q: "How do you keep customers' data separate?", a: "Data is isolated by tenant and enforced at the API layer on the server, not just in the interface, with role-based access and deny-by-default rules." },
      { q: "Can you take over a prototype we already built?", a: "Often yes. We audit the code, security and data model first, then recommend whether to extend it or rebuild the weak parts." },
      { q: "Do you build the mobile app too?", a: "Yes. We build web and mobile experiences, including Flutter apps, on the same backend." },
    ],
  },
  "ai-intelligent-automation": {
    body: [
      "An AI chatbot only creates value if it is connected to what happens next. A chat window that answers questions but does not capture the lead, hand it to your team or log it in your CRM is a demo, not a system.",
      "We build chatbots and AI assistants with four things done carefully: a written persona and rules, your own knowledge loaded on demand so answers stay accurate, guardrails such as never quoting prices, and a clean hand-off. Moonlight, the AI trip planner inside Trripah, runs on Claude with 65 destinations loaded only when they come up in the chat, and saves a structured lead when the itinerary is final.",
      "We also build AI that works behind the scenes: parsing supplier quotes, emails and PDFs into structured data, summarising conversations for your sales team, and routing requests. For WhatsApp, see our dedicated WhatsApp chatbot page.",
    ],
    deliverables: ["Persona, conversation design and rules written with your team", "Your knowledge base loaded per topic for accurate, low-cost answers", "Guardrails: no invented prices, rate limits, safe handling of off-topic requests", "Lead capture and hand-off into your CRM or inbox", "Document parsing for emails, PDFs and DOCX where needed", "Review of real conversations and improvements after launch"],
    costFactors: ["Volume of conversations (model usage is billed per conversation)", "How much knowledge the bot needs and how often it changes", "Channels: website, WhatsApp, in-app", "Integrations: CRM, calendar, payments", "Languages you need to support", "Human review and escalation workflow"],
    industries: ["real-estate", "education", "travel-tourism", "healthcare", "retail-ecommerce"],
    process: [
      { title: "Choose one job", text: "Qualify leads, answer support questions or plan a trip. One clear outcome shapes the whole conversation." },
      { title: "Write the persona and rules", text: "Tone, what the bot must never say, when it hands off, and what it asks for." },
      { title: "Load your knowledge", text: "Content is organised per topic and loaded only when needed, which keeps answers accurate and costs down." },
      { title: "Connect the hand-off", text: "Every lead lands in your CRM or inbox with a summary and an owner." },
      { title: "Read real conversations", text: "After launch we review transcripts, fix gaps and tighten the rules." },
    ],
  },
};
