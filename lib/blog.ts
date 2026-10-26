import { promises as fs } from "fs";
import path from "path";

const DIR = path.join(process.cwd(), "content", "blog");

export type Faq = { q: string; a: string };
export type Post = {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  tags: string[];
  cluster: string;
  service?: string;
  related: string[];
  pillar: boolean;
  date: string;
  updated: string;
  body: string;
  faqs: Faq[];
  words: number;
  minutes: number;
};

export const tagSlug = (t: string) => t.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function parse(raw: string, file: string): Post {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error(`Bad frontmatter in ${file}`);
  const meta: Record<string, string> = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  let body = m[2].trim();
  const faqs: Faq[] = [];
  const fi = body.search(/^## (FAQ|Frequently asked questions)\s*$/im);
  if (fi >= 0) {
    const faqText = body.slice(fi).replace(/^## .*\n/, "");
    body = body.slice(0, fi).trim();
    for (const chunk of faqText.split(/^### /m).slice(1)) {
      const [q, ...rest] = chunk.split("\n");
      const a = rest.join(" ").replace(/\s+/g, " ").trim();
      if (q && a) faqs.push({ q: q.trim(), a });
    }
  }
  const words = (body + " " + faqs.map((f) => f.q + " " + f.a).join(" ")).split(/\s+/).filter(Boolean).length;
  const need = (k: string) => {
    if (!meta[k]) throw new Error(`Missing "${k}" in ${file}`);
    return meta[k];
  };
  return {
    slug: need("slug"),
    title: need("title"),
    description: need("description"),
    keyword: need("keyword"),
    tags: need("tags").split(",").map((t) => t.trim()).filter(Boolean),
    cluster: meta.cluster ?? "",
    service: meta.service || undefined,
    related: (meta.related ?? "").split(",").map((t) => t.trim()).filter(Boolean),
    pillar: meta.pillar === "true",
    date: need("date"),
    updated: meta.updated ?? meta.date,
    body,
    faqs,
    words,
    minutes: Math.max(1, Math.round(words / 220)),
  };
}

let cache: Post[] | null = null;

export async function getAllPosts(): Promise<Post[]> {
  if (cache && process.env.NODE_ENV === "production") return cache;
  const files = (await fs.readdir(DIR)).filter((f) => f.endsWith(".md"));
  const posts = await Promise.all(files.map(async (f) => parse(await fs.readFile(path.join(DIR, f), "utf8"), f)));
  posts.sort((a, b) => Number(b.pillar) - Number(a.pillar) || b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
  cache = posts;
  return posts;
}

export async function getPost(slug: string) {
  return (await getAllPosts()).find((p) => p.slug === slug);
}

export async function getAllTags() {
  const counts = new Map<string, { label: string; count: number }>();
  for (const p of await getAllPosts()) {
    for (const t of p.tags) {
      const k = tagSlug(t);
      const cur = counts.get(k);
      counts.set(k, { label: cur?.label ?? t, count: (cur?.count ?? 0) + 1 });
    }
  }
  return [...counts.entries()].map(([slug, v]) => ({ slug, ...v })).sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}

// ---- minimal markdown -> HTML (our own content only) ----
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function inline(s: string) {
  return esc(s)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>")
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, t, u) => `<a href="${u}"${/^https?:/.test(u) ? ' rel="noopener" target="_blank"' : ""}>${t}</a>`);
}

export const headingId = (t: string) => tagSlug(t);

export function renderMarkdown(md: string) {
  const blocks = md.split(/\n{2,}/);
  const out: string[] = [];
  const toc: { id: string; text: string }[] = [];
  for (const raw of blocks) {
    const b = raw.trim();
    if (!b) continue;
    if (b.startsWith("```")) {
      const code = b.split("\n").filter((l) => !l.startsWith("```")).join("\n");
      out.push(`<pre><code>${esc(code)}</code></pre>`);
    } else if (b.startsWith("## ")) {
      const text = b.slice(3).trim();
      const id = headingId(text);
      toc.push({ id, text });
      out.push(`<h2 id="${id}">${inline(text)}</h2>`);
    } else if (b.startsWith("### ")) {
      out.push(`<h3>${inline(b.slice(4).trim())}</h3>`);
    } else if (b.startsWith("> ")) {
      out.push(`<blockquote>${inline(b.split("\n").map((l) => l.replace(/^> ?/, "")).join(" "))}</blockquote>`);
    } else if (/^\|/.test(b)) {
      const rows = b.split("\n").filter((r) => !/^\|\s*:?-+/.test(r)).map((r) => r.replace(/^\||\|$/g, "").split("|").map((c) => c.trim()));
      const [head, ...body] = rows;
      out.push(`<div class="prose-table"><table><thead><tr>${head.map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>${body.map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
    } else if (/^- /.test(b)) {
      out.push(`<ul>${b.split("\n").map((l) => `<li>${inline(l.replace(/^- /, ""))}</li>`).join("")}</ul>`);
    } else if (/^\d+\. /.test(b)) {
      out.push(`<ol>${b.split("\n").map((l) => `<li>${inline(l.replace(/^\d+\. /, ""))}</li>`).join("")}</ol>`);
    } else {
      out.push(`<p>${inline(b.replace(/\n/g, " "))}</p>`);
    }
  }
  return { html: out.join("\n"), toc };
}
