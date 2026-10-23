"use client";

import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav">
        <a href="/" className="logo" aria-label="The Gaint Company home"><Logo height={40} /></a>
        <nav className={`nav-links${open ? " open" : ""}`} aria-label="Main" onClick={() => setOpen(false)}>
          <a href="/services">Services</a>
          <a href="/projects">Projects</a>
          <a href="/process">Process</a>
          <a href="/faq">FAQ</a>
          <a href="/contact" className="btn btn-small nav-cta">Let&apos;s talk</a>
        </nav>
        <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
    </header>
  );
}
