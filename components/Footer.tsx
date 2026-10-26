import Link from "next/link";
import Logo from "./Logo";
import { contact } from "@/lib/data";
import { services } from "@/lib/services";
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
            <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
          </address>
          <p className="footer-legal">{contact.legalName} · GSTIN: {contact.gstin}</p>
        </div>
        <nav aria-label="Services">
          <h4>Services</h4>
          <ul>{services.map((s) => <li key={s.title}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul>
        </nav>
        <nav aria-label="Projects">
          <h4>Projects</h4>
          <ul>{projects.map((p) => <li key={p.slug}><Link href={`/projects/${p.slug}`}>{p.name}</Link></li>)}</ul>
        </nav>
        <nav aria-label="Company">
          <h4>Company</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">All services</Link></li>
            <li><Link href="/moonlight">Moonlight AI</Link></li>
            <li><Link href="/projects">All projects</Link></li>
            <li><Link href="/process">How we work</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/industries">Industries</Link></li>
            <li><Link href="/solutions">Solutions</Link></li>
            <li><Link href="/compare">Compare</Link></li>
            <li><Link href="/locations">Locations</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></li>
          </ul>
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} The Gaint Company. All rights reserved.</span>
        <span className="legal-links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
        </span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
