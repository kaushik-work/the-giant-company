"use client";

import { useState } from "react";
import { contact } from "@/lib/data";

type Errors = Partial<Record<"name" | "phone" | "message", string>>;

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [doneId, setDoneId] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setLoading(true);
    setFormError("");
    setErrors({});
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        form.reset();
        setDoneId(json.id);
      } else if (json.errors) {
        setErrors(json.errors);
      } else {
        setFormError(json.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setFormError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (doneId) {
    return (
      <div className="success" role="status">
        <div className="success-icon">✓</div>
        <h3>Message received!</h3>
        <p>Thanks for reaching out. We&apos;ll call you on the number you shared within one business day.</p>
        <p className="ref">Reference: {doneId.slice(0, 8).toUpperCase()}</p>
        <div className="hero-cta">
          <a className="btn" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener">Chat on WhatsApp</a>
          <button className="btn btn-ghost" onClick={() => setDoneId(null)}>Send another</button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <label>Name
        <input name="name" className={errors.name ? "invalid" : ""} autoComplete="name" />
        {errors.name && <small className="err-text">{errors.name}</small>}
      </label>
      <label>Phone number
        <input name="phone" type="tel" className={errors.phone ? "invalid" : ""} autoComplete="tel" placeholder="+91 …" />
        {errors.phone && <small className="err-text">{errors.phone}</small>}
      </label>
      <label>Project details
        <textarea name="message" rows={5} className={errors.message ? "invalid" : ""} />
        {errors.message && <small className="err-text">{errors.message}</small>}
      </label>
      <button className="btn" type="submit" disabled={loading}>{loading ? "Sending…" : "Send message"}</button>
      <p className="form-status err" role="alert">{formError}</p>
    </form>
  );
}
