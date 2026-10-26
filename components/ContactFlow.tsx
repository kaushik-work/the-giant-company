"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import { contact } from "@/lib/data";

const needs = [
  { id: "Custom software", icon: "code", text: "A product or internal tool built for us." },
  { id: "CRM", icon: "crm", text: "Leads, quotes and customers in one place." },
  { id: "Website", icon: "globe", text: "A fast site that brings in enquiries." },
  { id: "AI chatbot", icon: "bot", text: "A bot that talks to customers for us." },
  { id: "Automation", icon: "workflow", text: "Cut the copy-paste and manual follow-ups." },
  { id: "Something else", icon: "rocket", text: "Not sure yet. Let's figure it out." },
];
const industries = ["Travel", "Education", "Real estate", "Export & trade", "Retail", "Healthcare", "Startup", "Other"];
const budgets = ["Under ₹1 lakh", "₹1–5 lakh", "₹5–15 lakh", "₹15 lakh+", "Not sure yet"];
const timelines = ["As soon as possible", "In 1–3 months", "In 3–6 months", "Just exploring"];

type Errors = Partial<Record<"name" | "phone" | "email" | "company", string>>;

export default function ContactFlow() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<string[]>([]);
  const [industry, setIndustry] = useState("");
  const [timeline, setTimeline] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState("");
  const [fallback, setFallback] = useState(false);
  const [loading, setLoading] = useState(false);
  const [doneId, setDoneId] = useState<string | null>(null);

  const [source, setSource] = useState("");

  // Landing-page links can preselect a need (?need=CRM) and tell us which page the lead came from (?from=/path).
  useEffect(() => {
    const q = new URLSearchParams(location.search);
    const need = q.get("need");
    if (need && needs.some((n) => n.id === need)) setPicked([need]);
    setSource(q.get("from") ?? "");
  }, []);

  const toggle = (id: string) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  const canNext = step === 0 ? picked.length > 0 : step === 1 ? !!industry && !!timeline && company.trim().length >= 2 : step === 2 ? !!budget : true;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Errors = {};
    if (name.trim().length < 2) errs.name = "Enter your name";
    if (!/^\+?[0-9\s-]{10,15}$/.test(phone.trim())) errs.phone = "Enter a valid phone number";
    const em = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)) errs.email = "Enter a valid work email";
    else if (/@(gmail|googlemail)\.com$/.test(em)) errs.email = "Please use your work email, not Gmail";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const message = [
      `Looking for: ${picked.join(", ")}`,
      `Industry: ${industry}`,
      `Budget: ${budget}`,
      `Timeline: ${timeline}`,
      details.trim() && `Details: ${details.trim()}`,
      source && `Source: ${source}`,
    ].filter(Boolean).join("\n");

    setLoading(true);
    setFormError("");
    setFallback(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, company, message }),
      });
      const json = await res.json();
      if (res.ok && json.ok) setDoneId(json.id);
      else if (json.errors) setErrors(json.errors);
      else {
        setFormError(json.error ?? "Something went wrong. Please try again.");
        if (json.fallback) setFallback(true);
      }
    } catch {
      setFormError("Network error. Please try again.");
      setFallback(true);
    } finally {
      setLoading(false);
    }
  }

  if (doneId) {
    return (
      <div className="cf cf-done" role="status">
        <div className="success-icon">✓</div>
        <h2>Thanks, {name.trim().split(" ")[0]}. We&apos;ve got it.</h2>
        <p>We&apos;ll call you on {phone.trim()} within one business day, and write to {email.trim()} if we need anything first.</p>
        <p className="ref">Reference: {doneId.slice(0, 8).toUpperCase()}</p>
        <div className="cf-actions center">
          <a className="cf-btn" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener">Chat on WhatsApp</a>
        </div>
      </div>
    );
  }

  return (
    <form className="cf" onSubmit={submit} noValidate>
      <div className="cf-body" key={step}>
        {step === 0 && (
          <>
            <h2>What can we help you build?</h2>
            <p className="cf-hint">Pick everything that applies.</p>
            <div className="cf-options">
              {needs.map((n) => (
                <button type="button" key={n.id} className={`cf-option${picked.includes(n.id) ? " on" : ""}`} aria-pressed={picked.includes(n.id)} onClick={() => toggle(n.id)}>
                  <span className="cf-check" aria-hidden="true">✓</span>
                  <span className="cf-ico"><Icon name={n.icon} size={22} /></span>
                  <strong>{n.id}</strong>
                  <small>{n.text}</small>
                </button>
              ))}
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <h2>Tell us about your business</h2>
            <p className="cf-hint">So we can come to the call prepared.</p>
            <label>Company name
              <input value={company} onChange={(e) => setCompany(e.target.value)} className={errors.company ? "invalid" : ""} autoComplete="organization" placeholder="Your company" />
              {errors.company && <small className="err-text">{errors.company}</small>}
            </label>
            <p className="cf-label">What kind of business is it?</p>
            <div className="cf-chips">
              {industries.map((i) => (
                <button type="button" key={i} className={`cf-chip${industry === i ? " on" : ""}`} aria-pressed={industry === i} onClick={() => setIndustry(i)}>{i}</button>
              ))}
            </div>
            <p className="cf-label">When do you want to start?</p>
            <div className="cf-chips">
              {timelines.map((t) => (
                <button type="button" key={t} className={`cf-chip${timeline === t ? " on" : ""}`} aria-pressed={timeline === t} onClick={() => setTimeline(t)}>{t}</button>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2>What budget do you have in mind?</h2>
            <p className="cf-hint">A rough range is fine. It helps us suggest the right approach.</p>
            <div className="cf-chips big">
              {budgets.map((b) => (
                <button type="button" key={b} className={`cf-chip${budget === b ? " on" : ""}`} aria-pressed={budget === b} onClick={() => setBudget(b)}>{b}</button>
              ))}
            </div>
            <label>Anything else? <span className="cf-opt">Optional</span>
              <textarea value={details} onChange={(e) => setDetails(e.target.value)} rows={4} placeholder="What problem are you trying to solve?" />
            </label>
          </>
        )}

        {step === 3 && (
          <>
            <h2>How do we reach you?</h2>
            <p className="cf-hint">We&apos;ll call you within one business day.</p>
            <label>Your name
              <input value={name} onChange={(e) => setName(e.target.value)} className={errors.name ? "invalid" : ""} autoComplete="name" placeholder="Full name" />
              {errors.name && <small className="err-text">{errors.name}</small>}
            </label>
            <label>Phone number
              <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" className={errors.phone ? "invalid" : ""} autoComplete="tel" placeholder="+91 …" />
              {errors.phone && <small className="err-text">{errors.phone}</small>}
            </label>
            <label>Work email
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className={errors.email ? "invalid" : ""} autoComplete="email" placeholder="you@company.com" />
              {errors.email && <small className="err-text">{errors.email}</small>}
            </label>
            {formError && <p className="form-status err" role="alert">{formError}</p>}
            {fallback && (
              <div className="cf-fallback">
                <span>Your details are still here. Send them to us on WhatsApp instead and we will pick it up straight away.</span>
                <a className="cf-btn" target="_blank" rel="noopener" href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(`Hi, I'm ${name} from ${company}.\n${picked.join(", ")} · ${industry} · ${budget} · ${timeline}\nPhone: ${phone}\nEmail: ${email}${details.trim() ? `\n${details.trim()}` : ""}`)}`}>Send on WhatsApp</a>
              </div>
            )}
          </>
        )}
      </div>

      <div className="cf-foot">
        <div className="cf-actions">
          {step > 0 ? <button type="button" className="cf-back" onClick={() => setStep(step - 1)}>← Back</button> : <span />}
          {step < 3 ? (
            <button type="button" className="cf-btn" disabled={!canNext} onClick={() => setStep(step + 1)}>Continue</button>
          ) : (
            <button type="submit" className="cf-btn" disabled={loading}>{loading ? "Sending…" : "Send enquiry"}</button>
          )}
        </div>
        <div className="cf-dots" aria-label={`Step ${step + 1} of 4`}>
          {[0, 1, 2, 3].map((i) => <span key={i} className={i === step ? "on" : i < step ? "past" : ""} />)}
        </div>
      </div>
    </form>
  );
}
