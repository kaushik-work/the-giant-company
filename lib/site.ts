import { contact } from "./data";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://thegaintcompany.com").replace(/\/$/, "");

export const site = {
  name: "The Gaint Company",
  tagline: "Custom software, CRMs and AI automation, built in Bengaluru",
  description:
    "The Gaint Company is a Bangalore (Bengaluru) software and website development company building custom software, CRMs, SaaS products, workflow automation, AI chatbots and WhatsApp chatbots for growing businesses across India and worldwide.",
  locale: "en_IN",
  url: SITE_URL,
  keywords: [
    "website development company in bangalore",
    "software development company bangalore",
    "custom software development",
    "crm software for small business",
    "workflow automation tools",
    "ai chatbot for website",
    "whatsapp chatbot for business",
    "lead generation chatbot",
    "saas product development",
    "next.js development company",
  ],

};

export const faqs = [
  {
    q: "What does The Gaint Company build?",
    a: "We build custom software, CRMs, SaaS products, business websites, workflow automation and AI chatbots. Our own products include CampusGo (placement management) and Moonlight (an AI trip planner).",
  },
  {
    q: "Where are you based and who do you work with?",
    a: `We are based in Rajajinagar, Bengaluru and work with businesses across India in travel, education, real estate, export-import and more.`,
  },
  {
    q: "Can you automate our quotes, emails and payments?",
    a: "Yes. In the Trripah CRM we automated quote-request emails to partners, AI parsing of supplier quotes, shareable client itineraries and Razorpay payment collection. We can build similar workflows for your business.",
  },
  {
    q: "Do you build AI chatbots?",
    a: "Yes. Moonlight, Trripah's AI trip planner, is built on Claude with a custom persona, destination knowledge and automatic lead capture into a CRM. We build chatbots for sales, support and planning use cases.",
  },
  {
    q: "How long does a project take?",
    a: "A business website typically takes 2 to 4 weeks. CRMs, SaaS products and AI systems are built in iterative sprints with demos, usually starting with a usable first version in 6 to 10 weeks.",
  },
  {
    q: "How do we get started?",
    a: `Call or WhatsApp us on ${contact.phone}, or send the enquiry form. We reply within one business day.`,
  },
];
