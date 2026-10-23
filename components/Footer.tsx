import Link from "next/link";
import Logo from "./Logo";
import { contact, services } from "@/lib/data";
import { projects } from "@/lib/projects";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo height={52} />
          <p className="footer-about">Custom software, CRMs and AI automation for growing businesses. Built in Bengaluru.</p>
          <address>
            {contact.address}<br />
            <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a> · <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener">WhatsApp</a><br />
            GSTIN: {contact.gstin}
          </address>
        </div>
        <nav aria-label="Services">
          <h4>Services</h4>
          <ul>{services.map((s) => <li key={s.title}><Link href="/#services">{s.title}</Link></li>)}</ul>
        </nav>
        <nav aria-label="Projects">
          <h4>Projects</h4>
          <ul>{projects.map((p) => <li key={p.slug}><Link href={`/projects/${p.slug}`}>{p.name}</Link></li>)}</ul>
        </nav>
        <nav aria-label="Company">
          <h4>Company</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#moonlight">Moonlight AI</Link></li>
            <li><Link href="/projects">All projects</Link></li>
            <li><Link href="/#process">How we work</Link></li>
            <li><Link href="/#faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} The Gaint Company. All rights reserved.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
