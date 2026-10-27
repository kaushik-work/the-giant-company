"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Icon from "./Icon";
import { contact } from "@/lib/data";

const links = [
  { href: "/services", label: "Services", icon: "code" },
  { href: "/projects", label: "Projects", icon: "rocket" },
  { href: "/process", label: "Process", icon: "workflow" },
  { href: "/blog", label: "Blog", icon: "doc" },
  { href: "/faq", label: "FAQ", icon: "chat" },
];

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  // Lock page scroll while the drawer is open; Escape closes it.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", onKey); };
  }, [open]);

  const active = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
    <header className="site-header">
      <div className="container nav">
        <a href="/" className="logo" aria-label="The Gaint Company home"><Logo height={40} /></a>
        <nav className="nav-links" aria-label="Main">
          {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          <a href="/contact" className="btn btn-small nav-cta">Let&apos;s talk</a>
        </nav>
        <button className="menu-toggle" aria-label="Open menu" aria-expanded={open} aria-controls="side-nav" onClick={() => setOpen(true)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
      </div>
    </header>

      {open && (
        <div className="sn-overlay" onClick={() => setOpen(false)}>
          <aside id="side-nav" className="sn-drawer" role="dialog" aria-modal="true" aria-label="Menu" onClick={(e) => e.stopPropagation()}>
            <div className="sn-top">
              <Logo height={30} />
              <button className="sn-close" aria-label="Close menu" onClick={() => setOpen(false)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
            </div>
            <nav className="sn-links" aria-label="Mobile">
              {links.map((l) => (
                <a key={l.href} href={l.href} className={active(l.href) ? "on" : undefined} aria-current={active(l.href) ? "page" : undefined}>
                  <Icon name={l.icon} size={20} />
                  <span>{l.label}</span>
                </a>
              ))}
            </nav>
            <div className="sn-foot">
              <a href="/contact" className="sn-cta">Start a project</a>
              <div className="sn-row">
                <a href={`tel:${contact.phoneHref}`}>Call us</a>
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer">Chat</a>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
