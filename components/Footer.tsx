import Link from "next/link";
import Logo from "./Logo";
import { contact, services } from "@/lib/data";
import { projects } from "@/lib/projects";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo size={13} />
          <p className="footer-about">Custom software, CRMs and AI automation for growing businesses. Built in Bengaluru.</p>
          <address>
            {contact.address}<br />
            <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a><br />
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
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} The Gaint Company. All rights reserved.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
