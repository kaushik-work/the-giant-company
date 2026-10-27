import Link from "next/link";
import Header from "@/components/Header";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import Icon from "@/components/Icon";
import TrustedStrip from "@/components/TrustedStrip";
import HeroChat from "@/components/home/HeroChat";
import Reveal from "@/components/home/Reveal";
import { contact, steps } from "@/lib/data";
import { projects } from "@/lib/projects";
import { allServices, services } from "@/lib/services";
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
      <Reveal />
      <main id="top" className="hx hx-light">
        {/* HERO */}
        <section className="hx-hero">
          <div className="container hx-hero-grid">
            <div className="hx-hero-copy">
              <div className="hx-stickers" aria-hidden="true">
                <span className="hx-sticker lime">Built in Bangalore</span>
                <span className="hx-sticker pink">CRM · AI · WhatsApp</span>
                <span className="hx-sticker sun">First version in weeks</span>
              </div>
              <h1>
                Software that <mark>automates</mark> your business.
              </h1>
              <p className="hx-lead">
                Custom software, CRMs, AI chatbots and workflow automation, built by a hands-on team
                that has shipped real products for travel, education, real estate and trade.
              </p>
              <div className="hx-cta">
                <Link href="/contact" className="hx-btn red">Start a project</Link>
                <Link href="/projects" className="hx-btn ghost">See our work ↗</Link>
              </div>
            </div>
            <div className="hx-hero-demo">
              <svg className="hx-scribble" viewBox="0 0 120 80" aria-hidden="true"><path d="M6 62 C 30 70, 60 66, 84 38 M84 38 L70 40 M84 38 L86 52" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span className="hx-try" aria-hidden="true">try it</span>
              <HeroChat />
            </div>
          </div>
        </section>

        {/* TICKER */}
        <div className="hx-ticker" aria-hidden="true">
          <div className="hx-ticker-track">
            {[0, 1].map((k) => (
              <ul key={k}>
                {["Custom software", "CRM", "WhatsApp bots", "AI agents", "Next.js", "Flutter apps", "Automation", "SaaS", "Lead capture"].map((w) => <li key={`${k}-${w}`}>{w}<b>✦</b></li>)}
              </ul>
            ))}
          </div>
        </div>

        {/* RECEIPTS */}
        <section className="hx-sec" id="proof">
          <div className="container">
            <h2 className="hx-h2" data-reveal>Receipts, not <mark>promises</mark>.</h2>
            <p className="hx-sub" data-reveal>Real things we shipped, and what each one does.</p>
            <div className="hx-receipts">
              {[
                { c: "lime", t: "Moonlight", d: "An AI trip planner with 65 destinations, loaded only when the chat needs them.", href: "/moonlight" },
                { c: "pink", t: "Trripah CRM", d: "One click sends branded quote requests to the right partners. AI reads their replies.", href: "/projects/trripah-crm" },
                { c: "sun", t: "CampusGo", d: "A multi-tenant placement platform: students, recruiters, jobs and interviews.", href: "/projects/campusgo" },
                { c: "sky", t: "FIDO Exim", d: "A request-for-quote tray and a private lead dashboard with CSV export.", href: "/projects/fido-exim" },
              ].map((r) => (
                <Link key={r.t} href={r.href} className={`hx-receipt ${r.c}`} data-reveal>
                  <h3>{r.t}</h3>
                  <p>{r.d}</p>
                  <span>See how ↗</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="hx-sec">
          <div className="container">
            <h2 className="hx-h2" data-reveal>End-to-end engineering, <mark>one team</mark></h2>
            <p className="hx-sub" data-reveal>Delivered as a dedicated team or a fixed-scope project.</p>
            <div className="hx-services">
              {services.map((sv) => (
                <Link key={sv.slug} href={`/services/${sv.slug}`} className="hx-service" data-reveal>
                  <span className="hx-ico"><Icon name={sv.icon} size={26} /></span>
                  <h3>{sv.title}</h3>
                  <p>{sv.text}</p>
                  <span className="hx-more">Learn more ↗</span>
                </Link>
              ))}
            </div>
            <ul className="hx-pills" aria-label="More specialities">
              {allServices.filter((x) => !services.includes(x)).map((x) => <li key={x.slug}><Link href={`/services/${x.slug}`}>{x.title}</Link></li>)}
            </ul>
            <ul className="hx-pills stack" aria-label="Technology">{stack.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </section>

        {/* TRUSTED */}
        <TrustedStrip />

        {/* AUTOMATION */}
        <section id="automation" className="hx-sec hx-dark">
          <div className="container head-center">
            <h2 className="hx-h2" data-reveal>Automation that runs a <mark>travel business</mark></h2>
            <p className="hx-sub">What we built into the Trripah CRM so agents sell instead of copy-paste.</p>
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
            <div className="hx-cta c"><Link className="hx-btn red" href="/projects/trripah-crm">See the CRM in detail ↗</Link></div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="hx-sec">
          <div className="container">
            <h2 className="hx-h2" data-reveal>Products and platforms we&apos;ve <mark>shipped</mark></h2>
            <p className="hx-sub" data-reveal>Across travel, education, real estate and trade.</p>
          </div>
          <div className="hx-work" tabIndex={0} aria-label="Our projects, scroll sideways">
            {projects.map((p) => (
              <Link key={p.slug} href={p.slug === "moonlight-ai" ? "/moonlight" : `/projects/${p.slug}`} className="hx-work-card">
                <span className={`hx-work-logo${p.logoDark || !p.logo ? " dark" : ""}`}>
                  {p.logo ? <img src={p.logo} alt={`${p.name} logo`} loading="lazy" /> : <Icon name={p.icon ?? "code"} size={28} />}
                </span>
                <small>{p.industry}</small>
                <h3>{p.name}</h3>
                <p>{p.tagline}</p>
              </Link>
            ))}
          </div>
          <div className="container"><div className="hx-cta c"><Link className="hx-btn ghost" href="/projects">View all projects ↗</Link></div></div>
        </section>

        {/* PROCESS */}
        <section id="process" className="hx-sec">
          <div className="container">
            <h2 className="hx-h2" data-reveal>From idea to <mark>launch</mark> in four steps</h2>
            <ol className="hx-steps">
              {steps.map((st) => (
                <li key={st.n} data-reveal><span>{st.n}</span><h3>{st.title}</h3><p>{st.text}</p></li>
              ))}
            </ol>
            <div className="hx-cta c"><Link className="hx-btn ghost" href="/process">How we work in detail ↗</Link></div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="hx-sec">
          <div className="container narrow">
            <h2 className="hx-h2 c" data-reveal>Questions, <mark>answered</mark></h2>
            <Faq limit={4} schema={false} />
            <div className="hx-cta c"><Link className="hx-btn ghost" href="/faq">See all questions ↗</Link></div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="hx-final">
          <div className="container">
            <h2 data-reveal>Let&apos;s build something <mark>big</mark>.</h2>
            <p>Tell us about your project and we&apos;ll get back to you within one business day.</p>
            <div className="hx-cta c">
              <Link className="hx-btn red" href="/contact">Send an enquiry</Link>
              <a className="hx-btn light" href={`tel:${contact.phoneHref}`}>Call {contact.phone}</a>
              <a className="hx-btn light" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener">Message us</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
