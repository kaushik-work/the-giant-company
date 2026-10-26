"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type PostCard = { slug: string; title: string; description: string; keyword: string; tags: string[]; cluster: string; minutes: number; pillar: boolean };
export type TagInfo = { slug: string; label: string; count: number };

export default function BlogIndex({ posts, tags }: { posts: PostCard[]; tags: TagInfo[] }) {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("");

  const shown = useMemo(() => {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    return posts.filter((p) => {
      if (tag && !p.tags.some((t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-") === tag)) return false;
      if (!terms.length) return true;
      const hay = `${p.title} ${p.description} ${p.keyword} ${p.tags.join(" ")} ${p.cluster}`.toLowerCase();
      return terms.every((t) => hay.includes(t));
    });
  }, [posts, q, tag]);

  return (
    <>
      <div className="bl-tools">
        <input className="bl-search" type="search" placeholder="Search posts: chatbot, WhatsApp, CRM, AI coding…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search posts" />
        <div className="bl-tags" role="group" aria-label="Filter by topic">
          <button className={!tag ? "on" : ""} onClick={() => setTag("")}>All</button>
          {tags.slice(0, 14).map((t) => (
            <button key={t.slug} className={tag === t.slug ? "on" : ""} onClick={() => setTag(tag === t.slug ? "" : t.slug)}>{t.label}</button>
          ))}
        </div>
      </div>
      <p className="bl-count">{shown.length} {shown.length === 1 ? "post" : "posts"}</p>
      {shown.length === 0 ? (
        <p className="adm-empty">No posts match. Try a different word.</p>
      ) : (
        <div className="bl-grid">
          {shown.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="bl-card">
              <span className="bl-meta">{p.pillar ? "Guide" : p.cluster} · {p.minutes} min read</span>
              <h2>{p.title}</h2>
              <p>{p.description}</p>
              <span className="pj-link">Read <i>→</i></span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
