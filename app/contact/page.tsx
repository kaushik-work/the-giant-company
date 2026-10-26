import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import { contact } from "@/lib/data";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Start a software project",
  description: "Talk to The Gaint Company in Bengaluru about custom software, CRMs, AI chatbots and automation. Call, WhatsApp or send an enquiry — we reply within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Contact The Gaint Company", description: "Call, WhatsApp or send an enquiry about your software project." },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  name: "Contact The Gaint Company",
  about: { "@id": `${SITE_URL}/#organization` },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <main>
        <section className="section cta-band contact-page">
          <div className="container contact">
            <div>
              <h1 className="page-title">Let&apos;s build something <em>big</em>.</h1>
              <p className="section-sub">Tell us about your project and we&apos;ll get back to you within one business day.</p>
              <div className="info-stack">
                <a className="info-card" href={`tel:${contact.phoneHref}`}>
                  <span className="icon-chip"><Icon name="call" /></span>
                  <small>Call us</small><strong>{contact.phone}</strong>
                </a>
                <a className="info-card" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener">
                  <span className="icon-chip"><Icon name="chat" /></span>
                  <small>WhatsApp</small><strong>Chat with us</strong>
                </a>
                <a className="info-card" href={contact.mapUrl} target="_blank" rel="noopener">
                  <span className="icon-chip"><Icon name="pin" /></span>
                  <small>Visit us</small><strong>{contact.address}</strong>
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
