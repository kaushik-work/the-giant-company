import Header from "@/components/Header";
import CountUp from "@/components/CountUp";
import ContactForm from "@/components/ContactForm";
import { contact, services, projects, steps, stats } from "@/lib/data";

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

        <section id="work" className="section">
          <div className="container">
            <h2>Selected work</h2>
            <p className="section-sub">Real products we&apos;ve shipped across real estate, education, trade and travel.</p>
            <div className="grid grid-3">
              {projects.map((p) => (
                <article className="project" key={p.name}>
                  <div className={`thumb ${"logo" in p ? "thumb-logo" : p.cls}`}>
                    {"logo" in p ? <img src={p.logo} alt={`${p.name} logo`} loading="lazy" /> : p.name}
                  </div>
                  <h3>{p.name}</h3><p>{p.text}</p><span className="tag">{p.industry}</span>
                </article>
              ))}
            </div>
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
