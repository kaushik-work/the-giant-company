export type Service = {
  slug: string;
  icon: string;
  title: string;
  text: string;
  intro: string;
  points: { title: string; text: string }[];
  stack: string[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    icon: "code",
    title: "Custom Software Development",
    text: "Tailor-made software built around how your business actually operates.",
    intro: "When off-the-shelf tools force you to bend your process, we build software that fits it. From internal platforms to customer-facing portals, we design for the way your team really works and build it to last.",
    points: [
      { title: "Business platforms", text: "Operations, placement, booking and tracking systems with role-based access and clear dashboards." },
      { title: "Integrations", text: "Payments, email, WhatsApp, document parsing and third-party APIs connected into one flow." },
      { title: "Reporting", text: "Live reports and exports so owners see leads, revenue and activity without asking." },
      { title: "Built to evolve", text: "Clean architecture and documentation so features can be added without rewrites." },
    ],
    stack: ["TypeScript", "Next.js", "Node.js", "NestJS", "PostgreSQL", "MongoDB"],
    related: ["campusgo", "trripah-crm", "nap-meridian-exim"],
  },
  {
    slug: "crm-development",
    icon: "crm",
    title: "CRM Development",
    text: "Sales, quotation and lead-management CRMs that your team will actually use.",
    intro: "A CRM should remove work, not add it. We build CRMs shaped around your sales cycle, with automation for the repetitive steps between an enquiry and a payment.",
    points: [
      { title: "Lead capture & pipeline", text: "Web enquiries, chatbot leads and campaigns land in one place with source attribution and assignment." },
      { title: "Quotes & itineraries", text: "Builders that turn requirements into a branded, shareable quote or itinerary for the client." },
      { title: "Email automation", text: "Automatic emails to partners and customers, with sends logged against the right record." },
      { title: "Payments & reports", text: "Razorpay collection, payment status tracking and management reports." },
    ],
    stack: ["Next.js", "MongoDB", "Razorpay", "Gmail OAuth2", "Resend", "Firebase OTP"],
    related: ["trripah-crm", "fido-exim"],
  },
  {
    slug: "web-development",
    icon: "globe",
    title: "Web Development",
    text: "Fast, SEO-friendly business websites and lead-generation platforms.",
    intro: "Websites that load fast, rank well and turn visitors into enquiries. We build with modern frameworks and bake in the technical SEO most agencies bolt on later.",
    points: [
      { title: "SEO from day one", text: "Metadata, sitemaps, structured data and clean URLs for every page." },
      { title: "Built to convert", text: "Enquiry forms, WhatsApp and call buttons, and quotation flows placed where visitors decide." },
      { title: "Fast & mobile-first", text: "Optimised images, small bundles and layouts designed for phones first." },
      { title: "Easy to grow", text: "Blogs, catalogues and landing pages driven by data, not copy-pasted HTML." },
    ],
    stack: ["Next.js", "React", "Vite", "Tailwind CSS", "Vercel"],
    related: ["keerthi-builders", "trripah-travel", "fido-exim"],
  },
  {
    slug: "workflow-automation",
    icon: "workflow",
    title: "Workflow Automation",
    text: "Replace spreadsheets and manual hand-offs with automated digital workflows.",
    intro: "If your team copies data between inboxes, spreadsheets and chats, that is a workflow waiting to be automated. We map the process and automate the hand-offs.",
    points: [
      { title: "Automated emails & reminders", text: "Requests, follow-ups and daily digests that send themselves at the right moment." },
      { title: "Document processing", text: "Pull data out of emails, PDFs and DOCX files straight into structured records." },
      { title: "Status tracking", text: "Every request moves through clear stages, with a history of who did what." },
      { title: "Scheduled jobs", text: "Reports, clean-ups and syncs that run on a schedule without anyone remembering." },
    ],
    stack: ["Node.js", "Cron jobs", "Gmail API", "PDF/DOCX parsing", "MongoDB"],
    related: ["trripah-crm", "nap-meridian-exim"],
  },
  {
    slug: "saas-product-development",
    icon: "rocket",
    title: "SaaS Product Development",
    text: "From MVP to multi-tenant SaaS, designed to scale with your users.",
    intro: "We help founders take a product from idea to a platform that serves many customers securely. CampusGo, our own multi-tenant product, is built this way.",
    points: [
      { title: "Multi-tenant architecture", text: "Each customer's data isolated by design and enforced at the API layer." },
      { title: "Roles & security", text: "Role-based access, token rotation, rate limiting and deny-by-default guards." },
      { title: "Web and mobile experiences", text: "Installable mobile-first apps for end users and desktop consoles for staff." },
      { title: "MVP first", text: "A usable first release in weeks, then phased growth based on real usage." },
    ],
    stack: ["Next.js", "NestJS", "Prisma", "Supabase Postgres", "Turborepo", "Cloudflare R2"],
    related: ["campusgo"],
  },
  {
    slug: "ai-intelligent-automation",
    icon: "bot",
    title: "AI & Intelligent Automation",
    text: "Chatbots, document processing and AI assistants wired into your operations.",
    intro: "AI is most valuable when it is connected to your real workflow. We build chatbots that capture leads and parsers that read supplier documents, with guardrails so they behave.",
    points: [
      { title: "Conversational assistants", text: "Persona-driven chatbots on Claude that plan, answer and capture leads." },
      { title: "Document parsing", text: "Turn quotes, emails and PDFs into structured data your system can use." },
      { title: "Guardrails", text: "Rules like never quoting prices, per-IP rate limits and session handling." },
      { title: "Your data, injected on demand", text: "Knowledge loaded per topic so answers stay accurate and prompts stay small." },
    ],
    stack: ["Claude API", "Spring Boot", "Java", "Node.js", "MongoDB", "Docker"],
    related: ["moonlight-ai", "trripah-crm"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
