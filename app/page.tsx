import Header from "@/components/Header";
import CountUp from "@/components/CountUp";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { contact, services, steps, stats } from "@/lib/data";
import { projects } from "@/lib/projects";

const stack = [
  "TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL",
  "MongoDB", "Redis", "Docker", "AWS", "Terraform",
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero">
          <div className="container hero-inner">
            <p className="eyebrow">Software development studio · Bengaluru</p>
            <h1>We build software<br />that <em>automates</em> your business.</h1>
            <p className="lead">
              Custom software, CRMs, web platforms and workflow automation — built in
              Bengaluru for businesses across India.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn">Start a project</a>
              <a href="#work" className="btn btn-ghost">See our work</a>
            </div>
            <ul className="stats">
              {stats.map((s) => (
                <li key={s.label}><CountUp value={s.value} /><span>{s.label}</span></li>
              ))}
              <li><strong>End-to-end</strong><span>Development &amp; support</span></li>
            </ul>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <h2>What we do</h2>
            <p className="section-sub">End-to-end engineering, delivered as a dedicated team or a fixed-scope project.</p>
            <div className="grid grid-3">
              {services.map((s) => (
                <article className="card" key={s.title}>
                  <div className="icon">{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section tech">
          <div className="container">
            <h2>Our stack</h2>
            <ul className="chips">{stack.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </section>

        <section id="moonlight" className="section moon">
          <div className="container moon-grid">
            <div>
              <p className="eyebrow">Featured · AI product</p>
              <h2>Meet Moonlight — Trripah&apos;s AI trip planner 🌙</h2>
              <p className="section-sub">
                A Claude-powered travel chatbot with a personality. She adapts to Gen Z, millennials and
                older travellers, knows 65 destinations, plans the itinerary in conversation and hands a
                ready lead to the sales team — without ever quoting a price.
              </p>
              <ul className="checklist">
                <li>Persona-driven chat that changes tone to match the traveller</li>
                <li>Destination knowledge injected on demand, including visa info for Indians</li>
                <li>Inline lead capture straight into the CRM with the full itinerary</li>
                <li>Live on the website, the CRM and the Trripah mobile app</li>
              </ul>
              <div className="hero-cta mt"><Link className="btn" href="/projects/moonlight-ai">Explore Moonlight</Link></div>
            </div>
            <div className="chat" aria-hidden="true">
              <div className="bubble me">I want to go to Japan for 7 days</div>
              <div className="bubble ai">Japan in October is *chef&apos;s kiss*. Are you going solo or with someone?</div>
              <div className="bubble me">With my partner — we love food</div>
              <div className="bubble ai">Perfect. Tokyo → Kyoto → Osaka is a foodie dream. Can I get your WhatsApp so the team can send the quote?</div>
            </div>
          </div>
        </section>

        <section id="automation" className="section alt">
          <div className="container">
            <p className="eyebrow">Featured · Trripah CRM</p>
            <h2>Automation that runs a travel business</h2>
            <p className="section-sub">What we built into the Trripah CRM so agents sell instead of copy-paste.</p>
            <div className="grid grid-3">
              {[
                ["📧", "Auto quote-request emails", "One click sends branded RFQs to the right destination partners, logged per trip."],
                ["🧠", "AI quote parser", "Paste or upload a DMC quote (email, PDF, DOCX) and get a structured itinerary back."],
                ["📄", "Automatic brochure building", "The itinerary builder produces a shareable, OTP-protected client itinerary with pricing."],
                ["💳", "Payment gateway", "Razorpay payments with verification, partial payments and automatic status tracking."],
                ["📣", "Campaigns & lead flow", "Bulk email campaigns, lead attribution, assignment and a daily 7 PM digest."],
                ["📊", "Reports", "Lead, growth, payment and agent-activity reports in real time."],
              ].map(([i, t, d]) => (
                <article className="card" key={t}><div className="icon">{i}</div><h3>{t}</h3><p>{d}</p></article>
              ))}
            </div>
            <div className="hero-cta mt"><Link className="btn" href="/projects/trripah-crm">See the CRM in detail</Link></div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="container">
            <h2>Selected work</h2>
            <p className="section-sub">Products and platforms we&apos;ve shipped across travel, education, real estate and trade.</p>
            <div className="grid grid-3">
              {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
            </div>
            <div className="hero-cta mt"><Link className="btn btn-ghost" href="/projects">View all projects</Link></div>
          </div>
        </section>

        <section id="process" className="section alt">
          <div className="container">
            <h2>How we work</h2>
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.n}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact">
            <div>
              <h2>Let&apos;s build something big.</h2>
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

      <footer className="site-footer">
        <div className="container">
          <span>© {new Date().getFullYear()} The Gaint Company. All rights reserved.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
