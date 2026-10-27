import type { Metadata } from "next";
import Skin from "@/components/Skin";
import Header from "@/components/Header";
import ContactFlow from "@/components/ContactFlow";
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
      <Skin />
      <main>
        <section className="section contact-page">
          <div className="container">
            <div className="ct-shell">
              <aside className="ct-info">
                <div>
                  <h1>Let&apos;s build something <em>big</em>.</h1>
                  <p>Tell us what you need in four quick steps. A real person calls you back within one business day.</p>
                </div>
                <ul className="ct-list">
                  <li>
                    <span className="icon-chip"><Icon name="chat" /></span>
                    <div><h2>Chat to us</h2><p>Quick questions? Message us on WhatsApp.</p><a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener">Chat with us</a></div>
                  </li>
                  <li>
                    <span className="icon-chip"><Icon name="pin" /></span>
                    <div><h2>Office</h2><p>Come and say hello.</p><a href={contact.mapUrl} target="_blank" rel="noopener">{contact.address}</a></div>
                  </li>
                  <li>
                    <span className="icon-chip"><Icon name="call" /></span>
                    <div><h2>Phone</h2><p>Talk to us directly.</p><a href={`tel:${contact.phoneHref}`}>{contact.phone}</a></div>
                  </li>
                </ul>
              </aside>
              <div className="ct-flow">
                <ContactFlow />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
