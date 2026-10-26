"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import BlogCard, { fmtDate, type PostCard } from "./BlogCard";

export type Category = { name: string; count: number; accent: string };

export default function BlogIndex({ posts, categories }: { posts: PostCard[]; categories: Category[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("");

  const filtering = !!q.trim() || !!cat;
  const featured = posts.find((p) => p.slug === "ai-chatbot-for-website-guide") ?? posts[0];
  const guides = posts.filter((p) => p.pillar && p.slug !== featured.slug).slice(0, 3);

  const shown = useMemo(() => {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    return posts.filter((p) => {
      if (cat && p.cluster !== cat) return false;
      if (!terms.length) return true;
      const hay = `${p.title} ${p.description} ${p.keyword} ${p.tags.join(" ")} ${p.cluster}`.toLowerCase();
      return terms.every((t) => hay.includes(t));
    });
  }, [posts, q, cat]);

  return (
    <>
      {!filtering && (
        <>
          <Link href={`/blog/${featured.slug}`} className="bl-hero" style={{ "--bl-accent": featured.accent } as React.CSSProperties}>
            <img src={`/blog-cover/${featured.slug}`} alt="" width={1200} height={630} />
            <div className="bl-hero-body">
              <span className="bl-pill on-dark">Featured guide · {featured.cluster}</span>
              <h2>{featured.title}</h2>
              <p>{featured.description}</p>
              <div className="bl-hero-meta">
                <span>The Gaint Company team</span>
                <span>{fmtDate(featured.date)}</span>
                {featured.tags.slice(0, 3).map((t) => <span key={t} className="bl-chip">{t}</span>)}
                <span className="bl-chip">{featured.minutes} min read</span>
              </div>
            </div>
          </Link>

          <div className="bl-sec-head">
            <h2>Featured guides</h2>
          </div>
          <div className="bl-grid three">
            {guides.map((p) => <BlogCard key={p.slug} p={p} />)}
          </div>
        </>
      )}

      <div className="bl-sec-head">
        <h2>{filtering ? "Results" : "All posts"}</h2>
      </div>

      <div className="bl-tools">
        <div className="bl-tabs" role="tablist" aria-label="Categories">
          <button role="tab" aria-selected={!cat} className={!cat ? "on" : ""} onClick={() => setCat("")}>All <i>{posts.length}</i></button>
          {categories.map((c) => (
            <button role="tab" aria-selected={cat === c.name} key={c.name} className={cat === c.name ? "on" : ""} onClick={() => setCat(cat === c.name ? "" : c.name)}>
              {c.name} <i>{c.count}</i>
            </button>
          ))}
        </div>
        <label className="bl-search-wrap">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
          <input className="bl-search" type="search" placeholder="Search posts" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search posts" />
        </label>
      </div>
      <p className="bl-count">Showing {shown.length} of {posts.length} posts</p>

      {shown.length === 0 ? (
        <p className="adm-empty">No posts match. Try a different word.</p>
      ) : (
        <div className="bl-grid">
          {shown.map((p) => <BlogCard key={p.slug} p={p} />)}
        </div>
      )}
    </>
  );
}
