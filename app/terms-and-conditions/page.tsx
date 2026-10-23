import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms for using the website and for engaging The Gaint Company for software development services.",
  alternates: { canonical: "/terms-and-conditions" },
};

const sections: LegalSection[] = [
  {
    title: "About these terms",
    body: [
      'These terms apply to your use of this website and to software development, design and related services provided by The Gaint Company ("we", "us"). By using the website or engaging us, you agree to them. If we sign a separate written agreement for your project, that agreement prevails where it differs.',
    ],
  },
  {
    title: "Our services",
    body: [
      "We provide custom software development, CRM development, web development, workflow automation, SaaS and AI solutions, and related support. The exact scope, deliverables, timeline and price of each project are set out in a written proposal, quote or statement of work that you approve.",
    ],
  },
  {
    title: "Quotes, scope and changes",
    body: [
      [
        "Quotes are valid for 15 days from the date issued unless stated otherwise.",
        "Work outside the agreed scope is treated as a change request and quoted separately before we start it.",
        "Timelines depend on you providing content, feedback, access and approvals on time. Delays on your side can move delivery dates.",
      ],
    ],
  },
  {
    title: "Fees and payment",
    body: [
      [
        "Fees are in Indian Rupees unless agreed otherwise and exclude applicable taxes, which will be added to invoices where required.",
        "Unless the proposal says otherwise, projects are billed in milestones, with an advance before work begins.",
        "Invoices are payable within the period stated on the invoice. We may pause work on overdue invoices.",
        "Third-party costs such as hosting, domains, SMS, email and AI or payment-gateway usage fees are paid by you unless we agree otherwise.",
        "Advance and milestone payments for work already carried out are non-refundable.",
      ],
    ],
  },
  {
    title: "Your responsibilities",
    body: [
      [
        "Give us accurate information, content and timely feedback.",
        "Make sure you have the rights to any text, images, logos and data you supply to us.",
        "Keep your login credentials and accounts for third-party services secure.",
        "Use the delivered software lawfully.",
      ],
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "On receipt of full payment, you own the custom code and designs we create specifically for you under the project, except for the items below.",
      [
        "Open-source libraries and third-party components remain under their own licences.",
        "Our pre-existing tools, frameworks, templates and know-how, and anything we develop independently, remain ours; you receive a non-exclusive, perpetual licence to use them as part of your deliverables.",
        "Until full payment is received, we keep ownership of the work and you may not use it in production.",
      ],
      "We may describe the project and show non-confidential screenshots and logos in our portfolio, unless you ask us in writing not to.",
    ],
  },
  {
    title: "Confidentiality",
    body: [
      "Each party will keep the other's non-public business and technical information confidential and use it only for the project. This does not apply to information that is public, already known to the receiving party, independently developed, or required to be disclosed by law.",
    ],
  },
  {
    title: "Third-party services and AI",
    body: [
      "Our solutions may rely on third-party services such as cloud hosting, email, payment gateways, WhatsApp and AI models. Those services have their own terms and availability, and we are not responsible for their outages or changes. AI features can produce inaccurate output, so you are responsible for reviewing it before relying on it.",
    ],
  },
  {
    title: "Testing, acceptance and warranty",
    body: [
      "We test deliverables before handing them over. You have 14 days after each delivery to report defects against the agreed scope, and we will fix them at no extra charge. After that period, deliverables are treated as accepted and further fixes fall under support or change requests.",
      "Except as stated in this section, services and deliverables are provided as is, and we do not promise uninterrupted or error-free operation or specific business results such as revenue or search rankings.",
    ],
  },
  {
    title: "Support and maintenance",
    body: ["Post-launch support, monitoring and improvements are provided only if included in the proposal or agreed as a separate support plan."],
  },
  {
    title: "Limitation of liability",
    body: [
      "To the extent permitted by law, we are not liable for indirect, incidental or consequential losses, including lost profits, lost data or loss of business. Our total liability for any claim relating to a project is limited to the fees you paid us for that project in the three months before the claim arose.",
    ],
  },
  {
    title: "Termination",
    body: [
      "Either party may end a project by giving 14 days written notice. You will pay for all work completed and costs incurred up to the termination date. Either party may end the agreement immediately if the other commits a serious breach that is not fixed within 7 days of notice.",
    ],
  },
  {
    title: "Using this website",
    body: [
      [
        "Do not misuse the site, attempt to gain unauthorised access, or send malicious code.",
        "The website content, logo and design belong to us or our licensors and may not be copied without permission.",
        "Client names, logos and project descriptions belong to their owners and are shown to describe our work.",
        "We try to keep information accurate but do not guarantee it is complete or current.",
      ],
    ],
  },
  {
    title: "Governing law and disputes",
    body: [
      "These terms are governed by the laws of India. We will first try to resolve any dispute through good-faith discussion. If that fails, the courts at Bengaluru, Karnataka have exclusive jurisdiction.",
    ],
  },
  {
    title: "Changes to these terms",
    body: ["We may update these terms from time to time. Changes apply from the date posted on this page and do not affect projects already agreed in writing."],
  },
  {
    title: "Contact",
    body: [`The Gaint Company, ${contact.address}. Phone: ${contact.phone}.`],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="23 October 2026"
      intro="The ground rules for using this website and for working with us."
      sections={sections}
    />
  );
}
