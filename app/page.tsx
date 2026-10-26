import Link from "next/link";
import Header from "@/components/Header";
import ProjectBento from "@/components/ProjectBento";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import Icon from "@/components/Icon";
import TrustedStrip from "@/components/TrustedStrip";
import ServicesBento from "@/components/ServicesBento";
import { contact, steps } from "@/lib/data";
import { projects } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

const stack = ["TypeScript", "React", "Next.js", "Node.js", "Java / Spring Boot", "Flutter", "Python", "PostgreSQL", "MongoDB", "Claude API", "Razorpay", "Docker", "AWS", "Vercel"];

const automations: { icon: string; title: string; text: string; span: number; visual?: "mail" | "pay" | "chart" }[] = [
  { icon: "mail", title: "Auto quote-request emails", text: "One click sends branded RFQs to the right destination partners, logged per trip.", span: 4, visual: "mail" },
  { icon: "brain", title: "AI quote parser", text: "Paste or upload a supplier quote (email, PDF, DOCX) and get a structured itinerary back.", span: 2 },
  { icon: "doc", title: "Automatic brochure building", text: "The itinerary builder produces a shareable, OTP-protected client itinerary with pricing.", span: 2 },
  { icon: "card", title: "Payment gateway", text: "Razorpay payments with verification, partial payments and automatic status tracking.", span: 4, visual: "pay" },
  { icon: "megaphone", title: "Campaigns & lead flow", text: "Bulk email campaigns, lead attribution, assignment and a daily 7 PM digest.", span: 3 },
  { icon: "chart", title: "Reports", text: "Lead, growth, payment and agent-activity reports in real time.", span: 3, visual: "chart" },
];



export default function Home() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projects by The Gaint Company",
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}${p.slug === "moonlight-ai" ? "/moonlight" : `/projects/${p.slug}`}`,
      name: p.name,
    })),
  };
  return (
    <>
      <JsonLd data={itemList} />
      <Header />
      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-center">
            <h1>
              Software that <em>automates</em><br />your business.
            </h1>
            <p className="lead">
              Custom software, CRMs, AI chatbots and workflow automation — built by a hands-on team
              that has shipped real products for travel, education, real estate and trade.
            </p>
            <div className="hero-cta">
              <a href="/contact" className="btn btn-red">Start a project</a>
              <Link href="/projects" className="link-arrow">See our work</Link>
            </div>
          </div>
          <div className="container">
            <div className="hero-tile" aria-hidden="true">
              <div className="float-card fc-chat">
                <small>🌙 Moonlight AI</small>
                <div className="bubble me">7 days in Japan, we love food</div>
                <div className="bubble ai">Tokyo → Kyoto → Osaka is a foodie dream. Can I get your WhatsApp for the quote?</div>
              </div>
              <div className="float-card fc-flow">
                <small>Quote automation</small>
                <ul>
                  <li><b>✓</b> RFQ emailed to 3 partners</li>
                  <li><b>✓</b> Quote parsed by AI</li>
                  <li><b>✓</b> Itinerary shared with client</li>
                  <li><b>✓</b> Payment received</li>
                </ul>
              </div>
              <div className="float-card fc-stat">
                <small>Destinations in Moonlight</small>
                <strong>65</strong>
              </div>
            </div>
          </div>
        </section>

        {/* TRUSTED */}
        <TrustedStrip />

        {/* SERVICES */}
        <section id="services" className="section">
          <div className="container head-center">
            <h2>End-to-end engineering, <em>one team</em></h2>
            <p className="section-sub">Delivered as a dedicated team or a fixed-scope project.</p>
            <ServicesBento />
            <ul className="chips">{stack.map((t) => <li key={t}>{t}</li>)}</ul>
            <div className="hero-cta mt"><Link className="link-arrow" href="/services">All services</Link></div>
          </div>
        </section>

        {/* AUTOMATION */}
        <section id="automation" className="section alt">
          <div className="container head-center">
            <h2>Automation that runs a <em>travel business</em></h2>
            <p className="section-sub">What we built into the Trripah CRM so agents sell instead of copy-paste.</p>
            <div className="bento">
              {automations.map((a) => (
                <article className="tile" style={{ "--span": a.span } as React.CSSProperties} key={a.title}>
                  <div className="icon-chip"><Icon name={a.icon} /></div>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                  {a.visual === "mail" && (
                    <ul className="mini-flow" aria-hidden="true">
                      <li>Bali · 3 DMC partners</li><li>RFQ sent</li><li>Quote received</li>
                    </ul>
                  )}
                  {a.visual === "pay" && (
                    <div className="mini-pay" aria-hidden="true"><span>Razorpay</span><b>₹ 48,500</b><em>Paid ✓</em></div>
                  )}
                  {a.visual === "chart" && (
                    <div className="mini-bars" aria-hidden="true">{[40, 62, 48, 80, 66, 94].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
                  )}
                </article>
              ))}
            </div>
            <div className="hero-cta mt"><Link className="link-arrow" href="/projects/trripah-crm">See the CRM in detail</Link></div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="section">
          <div className="container head-center">
            <h2>Products and platforms we&apos;ve <em>shipped</em></h2>
            <p className="section-sub">Across travel, education, real estate and trade.</p>
            <ProjectBento projects={projects} />
            <div className="hero-cta mt"><Link className="link-arrow" href="/projects">View all projects</Link></div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="section alt">
          <div className="container head-center">
            <h2>From idea to <em>launch</em> in four steps</h2>
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.n}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p></li>
              ))}
            </ol>
            <div className="hero-cta mt"><Link className="link-arrow" href="/process">How we work in detail</Link></div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section">
          <div className="container narrow head-center">
            <h2>Questions, <em>answered</em></h2>
            <Faq limit={4} schema={false} />
            <div className="hero-cta mt"><Link className="link-arrow" href="/faq">See all questions</Link></div>
          </div>
        </section>

        {/* CONTACT INFO */}
        <section id="contact" className="section">
          <div className="container head-center">
            <h2>Let&apos;s build something <em>big</em>.</h2>
            <p className="section-sub">Tell us about your project and we&apos;ll get back to you within one business day.</p>
            <div className="info-grid">
              <a className="info-card" href={`tel:${contact.phoneHref}`}>
                <span className="icon-chip"><Icon name="call" /></span>
                <small>Call us</small><strong>{contact.phone}</strong>
              </a>
              <a className="info-card" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener">
                <span className="icon-chip"><Icon name="chat" /></span>
                <small>WhatsApp</small><strong>Message us</strong>
              </a>
              <a className="info-card" href={contact.mapUrl} target="_blank" rel="noopener">
                <span className="icon-chip"><Icon name="pin" /></span>
                <small>Visit us</small><strong>Rajajinagar, Bengaluru</strong>
              </a>
            </div>
            <div className="hero-cta mt">
              <Link className="btn btn-red" href="/contact">Send an enquiry</Link>
              <Link className="link-arrow" href="/contact">Open contact page</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
