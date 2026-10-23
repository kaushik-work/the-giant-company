import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How The Gaint Company collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

const sections: LegalSection[] = [
  {
    title: "Who we are",
    body: [
      `This website is operated by The Gaint Company ("we", "us", "our"), a software development studio located at ${contact.address}.`,
      "This policy explains what personal information we collect through this website, how we use it, and the choices you have.",
    ],
  },
  {
    title: "Information we collect",
    body: [
      "We only collect information you choose to give us, plus basic technical data needed to run the website.",
      [
        "Enquiry details: your name, phone number and the project details you type into our contact form.",
        "Messages you send us on WhatsApp, by phone or by email, including your number and the content of the conversation.",
        "Technical data: standard server logs such as IP address, browser type, pages requested and timestamps, created by our hosting provider.",
      ],
      "We do not ask for payment card details, passwords or sensitive personal data through this website.",
    ],
  },
  {
    title: "How we use your information",
    body: [
      [
        "To respond to your enquiry and prepare proposals or quotes.",
        "To contact you about the project you asked about, by phone or WhatsApp.",
        "To maintain the security and performance of the website and prevent abuse.",
        "To meet legal, tax and accounting obligations when we work together.",
      ],
      "We do not use your details for unrelated marketing and we do not sell your personal information.",
    ],
  },
  {
    title: "Cookies and tracking",
    body: [
      "This website does not use advertising cookies or third-party tracking cookies. If we add analytics in future, we will update this policy and, where required, ask for your consent.",
    ],
  },
  {
    title: "Who we share information with",
    body: [
      "We share information only with service providers that help us run the website and communicate with you, such as our hosting and infrastructure provider and WhatsApp when you choose to message us there. These providers may process data only to provide their service.",
      "We may disclose information if required by law, court order or a government authority, or to protect our rights and safety.",
    ],
  },
  {
    title: "How long we keep your information",
    body: [
      "Enquiry details are kept for as long as needed to respond to you and for a reasonable period afterwards in case you come back to us. If we work together, project and billing records are kept for as long as the law requires. You can ask us to delete your enquiry at any time.",
    ],
  },
  {
    title: "Security",
    body: [
      "We use reasonable technical and organisational measures to protect your information, including encrypted connections (HTTPS) and restricted access. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "Under applicable Indian law, including the Digital Personal Data Protection Act, 2023, you may request to:",
      [
        "access the personal information we hold about you;",
        "correct inaccurate or incomplete information;",
        "have your information erased, subject to legal retention requirements;",
        "withdraw consent you have given us for processing.",
      ],
      `To exercise these rights, call or message us on ${contact.phone}. We will respond within a reasonable time.`,
    ],
  },
  {
    title: "Children",
    body: ["This website is intended for businesses and adults. We do not knowingly collect personal information from anyone under 18."],
  },
  {
    title: "Links to other websites",
    body: ["Our website and project pages may link to websites we do not control, such as client sites. We are not responsible for their privacy practices; please read their policies."],
  },
  {
    title: "Changes to this policy",
    body: ["We may update this policy from time to time. The latest version will always be on this page, with the date at the top."],
  },
  {
    title: "Contact and grievances",
    body: [`For any privacy question or complaint, contact The Gaint Company at ${contact.address}, or call ${contact.phone}.`],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="23 October 2026"
      intro="Your privacy matters. Here is exactly what we collect and why."
      sections={sections}
    />
  );
}
