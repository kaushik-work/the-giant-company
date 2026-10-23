import Link from "next/link";
import Header from "@/components/Header";
import CountUp from "@/components/CountUp";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { contact, services, steps } from "@/lib/data";
import { projects } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

const stack = ["TypeScript", "React", "Next.js", "Node.js", "Java / Spring Boot", "Flutter", "Python", "PostgreSQL", "MongoDB", "Claude API", "Razorpay", "Docker", "AWS", "Vercel"];

const automations: [string, string, string][] = [
  ["📧", "Auto quote-request emails", "One click sends branded RFQs to the right destination partners, logged per trip."],
  ["🧠", "AI quote parser", "Paste or upload a supplier quote (email, PDF, DOCX) and get a structured itinerary back."],
  ["📄", "Automatic brochure building", "The itinerary builder produces a shareable, OTP-protected client itinerary with pricing."],
  ["💳", "Payment gateway", "Razorpay payments with verification, partial payments and automatic status tracking."],
  ["📣", "Campaigns & lead flow", "Bulk email campaigns, lead attribution, assignment and a daily 7 PM digest."],
  ["📊", "Reports", "Lead, growth, payment and agent-activity reports in real time."],
];

const logoProjects = projects.filter((p) => p.logo && !p.logoDark);

export default function Home() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projects by The Gaint Company",
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/projects/${p.slug}`,
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
            <p className="hero-kicker">The Gaint Company</p>
            <h1>
              Software that <em>automates</em><br />your business.
            </h1>
            <p className="lead">
              Custom software, CRMs, AI chatbots and workflow automation — built by a hands-on team
              that has shipped real products for travel, education, real estate and trade.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-red">Start a project</a>
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
        <section className="trusted" aria-label="Brands we have built for">
          <div className="container">
            <p>Trusted by businesses across travel, education, real estate &amp; trade</p>
            <ul>
              {logoProjects.map((p) => (
                <li key={p.slug}><img src={p.logo} alt={`${p.name} logo`} loading="lazy" /></li>
              ))}
              <li className="text-logo">Nap Meridian Exim</li>
            </ul>
          </div>
        </section>

        {/* STATS */}
        <section className="stats-band">
          <div className="container stat-cards glass-stats">
            <div><CountUp value={8} /><span>Products &amp; projects shipped</span></div>
            <div className="hot"><CountUp value={65} /><span>Destinations powering our AI planner</span></div>
            <div><CountUp value={5} /><span>Industries served</span></div>
            <div><CountUp value={100} suffix="%" /><span>Custom-built, no templates</span></div>
          </div>
        </section>

        {/* MOONLIGHT */}
        <section id="moonlight" className="section dark">
          <div className="container center">
            <p className="eyebrow">Featured · AI product</p>
            <h2>Meet Moonlight.<br /><em>Trripah&apos;s AI trip planner.</em></h2>
            <p className="section-sub">
              A Claude-powered travel chatbot with a personality. She adapts to Gen Z, millennials and
              older travellers, knows 65 destinations, plans the itinerary in conversation and hands a
              ready lead to the sales team — without ever quoting a price.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-red" href="/projects/moonlight-ai">Explore Moonlight</Link>
              <Link className="link-arrow" href="/projects/moonlight-ai">How it works</Link>
            </div>
            <div className="chat" aria-hidden="true">
              <div className="bubble me">I want to go to Japan for 7 days</div>
              <div className="bubble ai">Japan in October is *chef&apos;s kiss*. Are you going solo or with someone?</div>
              <div className="bubble me">With my partner — we love food</div>
              <div className="bubble ai">Perfect. Tokyo → Kyoto → Osaka is a foodie dream. Can I get your WhatsApp so the team can send the quote?</div>
            </div>
            <ul className="pillars">
              <li><strong>Persona-driven</strong><span>Tone adapts to the traveller</span></li>
              <li><strong>65 destinations</strong><span>Knowledge loaded on demand</span></li>
              <li><strong>Lead capture</strong><span>Straight into the CRM</span></li>
              <li><strong>Everywhere</strong><span>Web, CRM and mobile app</span></li>
            </ul>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section">
          <div className="container head-center">
            <p className="eyebrow">What we do</p>
            <h2>End-to-end engineering, <em>one team</em></h2>
            <p className="section-sub">Delivered as a dedicated team or a fixed-scope project.</p>
            <div className="grid grid-3">
              {services.map((s) => (
                <article className="card" key={s.title}>
                  <div className="icon">{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p>
                </article>
              ))}
            </div>
            <ul className="chips">{stack.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </section>

        {/* AUTOMATION */}
        <section id="automation" className="section alt">
          <div className="container head-center">
            <p className="eyebrow">Featured · Trripah CRM</p>
            <h2>Automation that runs a <em>travel business</em></h2>
            <p className="section-sub">What we built into the Trripah CRM so agents sell instead of copy-paste.</p>
            <div className="grid grid-3">
              {automations.map(([i, t, d]) => (
                <article className="card" key={t}><div className="icon">{i}</div><h3>{t}</h3><p>{d}</p></article>
              ))}
            </div>
            <div className="hero-cta mt"><Link className="link-arrow" href="/projects/trripah-crm">See the CRM in detail</Link></div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="section">
          <div className="container head-center">
            <p className="eyebrow">Selected work</p>
            <h2>Products and platforms we&apos;ve <em>shipped</em></h2>
            <p className="section-sub">Across travel, education, real estate and trade.</p>
            <div className="grid grid-3">
              {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
            </div>
            <div className="hero-cta mt"><Link className="link-arrow" href="/projects">View all projects</Link></div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="section alt">
          <div className="container head-center">
            <p className="eyebrow">How we work</p>
            <h2>From idea to <em>launch</em> in four steps</h2>
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.n}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p></li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section">
          <div className="container narrow head-center">
            <p className="eyebrow">FAQ</p>
            <h2>Questions, <em>answered</em></h2>
            <Faq />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section cta-band">
          <div className="container contact">
            <div>
              <h2>Let&apos;s build something <em>big</em>.</h2>
              <p className="section-sub">Tell us about your project and we&apos;ll get back to you within one business day.</p>
              <p className="contact-info">
                <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a> ·{" "}
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener">WhatsApp</a><br />
                {contact.address}<br />
                <a href={contact.website} target="_blank" rel="noopener">trripah.com</a><br />
                GSTIN: {contact.gstin}
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
