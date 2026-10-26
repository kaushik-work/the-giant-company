"use client";

import { useMemo, useState } from "react";
import type { Lead, Status } from "@/lib/leads";

export type LeadRow = Omit<Lead, "status"> & {
  status: Status;
  parsed: { needs: string[]; industry?: string; budget?: string; timeline?: string; details?: string; source?: string; raw: string };
};

const statuses: Status[] = ["new", "contacted", "won", "lost"];
const label = (s: string) => s[0].toUpperCase() + s.slice(1);

export default function LeadsBoard({ initial }: { initial: LeadRow[] }) {
  const [leads, setLeads] = useState(initial);
  const [filter, setFilter] = useState<"all" | Status>("all");
  const [q, setQ] = useState("");

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: leads.length };
    for (const s of statuses) c[s] = leads.filter((l) => l.status === s).length;
    return c;
  }, [leads]);

  const shown = leads.filter((l) => (filter === "all" || l.status === filter) && (!q || `${l.name} ${l.company} ${l.email} ${l.phone}`.toLowerCase().includes(q.toLowerCase())));

  async function setStatus(id: string, status: Status) {
    const prev = leads;
    setLeads((ls) => ls.map((l) => (l.id === id ? { ...l, status } : l)));
    const res = await fetch("/api/admin/leads", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, status }) });
    if (!res.ok) setLeads(prev);
  }

  async function remove(id: string) {
    if (!confirm("Delete this lead permanently?")) return;
    const res = await fetch("/api/admin/leads", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    if (res.ok) setLeads((ls) => ls.filter((l) => l.id !== id));
  }

  return (
    <main className="adm">
      <div className="adm-top">
        <div>
          <h1>Leads</h1>
          <p>{counts.all} enquiries from the website</p>
        </div>
      </div>

      <div className="adm-stats">
        {statuses.map((s) => (
          <div key={s} className={`adm-stat ${s}`}><strong>{counts[s]}</strong><span>{label(s)}</span></div>
        ))}
      </div>

      <div className="adm-bar">
        <div className="adm-tabs">
          {(["all", ...statuses] as const).map((s) => (
            <button key={s} className={filter === s ? "on" : ""} onClick={() => setFilter(s)}>{label(s)} <i>{counts[s]}</i></button>
          ))}
        </div>
        <input className="adm-search" placeholder="Search name, company, email, phone" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>

      {shown.length === 0 ? (
        <p className="adm-empty">{leads.length === 0 ? "No enquiries yet. New ones from the contact page will appear here." : "No leads match."}</p>
      ) : (
        <ul className="adm-list">
          {shown.map((l) => (
            <li key={l.id} className="adm-lead">
              <div className="adm-main">
                <div className="adm-who">
                  <h2>{l.name}</h2>
                  {l.company && <span>{l.company}</span>}
                </div>
                <div className="adm-contact">
                  <a href={`tel:${l.phone.replace(/\s/g, "")}`}>{l.phone}</a>
                  {l.email && <a href={`mailto:${l.email}`}>{l.email}</a>}
                  <a href={`https://wa.me/${l.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener">WhatsApp</a>
                </div>
                {l.parsed.needs.length > 0 && (
                  <div className="adm-tags">{l.parsed.needs.map((n) => <span key={n}>{n}</span>)}</div>
                )}
                <dl className="adm-facts">
                  {l.parsed.industry && <div><dt>Industry</dt><dd>{l.parsed.industry}</dd></div>}
                  {l.parsed.budget && <div><dt>Budget</dt><dd>{l.parsed.budget}</dd></div>}
                  {l.parsed.timeline && <div><dt>Start</dt><dd>{l.parsed.timeline}</dd></div>}
                  {l.parsed.source && <div><dt>Came from</dt><dd>{l.parsed.source}</dd></div>}
                </dl>
                {(l.parsed.details || l.parsed.raw) && <p className="adm-note">{l.parsed.details || l.parsed.raw}</p>}
              </div>
              <div className="adm-side">
                <time dateTime={l.createdAt}>{new Date(l.createdAt).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "numeric", minute: "2-digit" })}</time>
                <select className={`adm-status ${l.status}`} value={l.status} onChange={(e) => setStatus(l.id, e.target.value as Status)} aria-label="Status">
                  {statuses.map((s) => <option key={s} value={s}>{label(s)}</option>)}
                </select>
                <button className="adm-del" onClick={() => remove(l.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
