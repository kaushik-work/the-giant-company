import { seoPackages, seoProductFaqs } from "./seo-packages";
import { contact } from "./data";
import { projects } from "./projects";
import { allServices, services } from "./services";
import { cities, cityServiceSlugs, comparisons, industries, industryHubs, industryPairs, problems } from "./seo";
import { faqs, site, SITE_URL } from "./site";
import { getAllPosts, type Post } from "./blog";

const projectPath = (slug: string) => (slug === "moonlight-ai" ? "/moonlight" : `/projects/${slug}`);

export function postToMarkdown(p: Post) {
  const faq = p.faqs.length ? `\n\n## FAQ\n\n${p.faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}` : "";
  return `# ${p.title}\n\n> ${p.description}\n\n- URL: ${SITE_URL}/blog/${p.slug}\n- Published: ${p.date}\n- Updated: ${p.updated}\n- Author: The Gaint Company team\n- Topics: ${p.tags.join(", ")}\n\n${p.body}${faq}\n`;
}

const about = `The Gaint Company is a software and website development company based in Rajajinagar, Bangalore (Bengaluru), India. It builds custom software, CRMs, SaaS products, websites, workflow automation, AI chatbots, WhatsApp chatbots, and SEO and AI search (GEO/AEO) optimization, and works with clients across India and worldwide, mostly remotely. It does not publish fixed prices; scope and cost are agreed in writing before a build starts. It does not guarantee search rankings.`;

export async function buildLlmsTxt() {
  const posts = await getAllPosts();
  const clusters = [...new Set(posts.map((p) => p.cluster))];
  const updated = posts.reduce((m, p) => (p.updated > m ? p.updated : m), "2026-10-26");
  return `# ${site.name}

> ${about}

Last updated: ${updated}. Full text of the key content is at ${SITE_URL}/llms-full.txt. Blog posts are also available as Markdown at ${SITE_URL}/blog/<slug>.md.

## Company
- [Home](${SITE_URL}/): what we do and who we build for
- [Contact](${SITE_URL}/contact): four-step enquiry form; phone and WhatsApp ${contact.phone}
- [Process](${SITE_URL}/process): how a project runs, from discovery to launch
- [FAQ](${SITE_URL}/faq): common questions about working with us
- Address: ${contact.address}

## Services
${allServices.map((s) => `- [${s.title}](${SITE_URL}/services/${s.slug}): ${s.text}`).join("\n")}

## Projects (real work we have shipped)
${projects.map((p) => `- [${p.name}](${SITE_URL}${projectPath(p.slug)}) (${p.industry}): ${p.summary}`).join("\n")}

## Problems we solve
${problems.map((p) => `- [${p.title}](${SITE_URL}/solutions/${p.slug}): ${p.problem}`).join("\n")}

## Comparisons
${comparisons.map((c) => `- [${c.title}](${SITE_URL}/compare/${c.slug}): ${c.intro}`).join("\n")}

## Industries
${industries.filter((i) => industryHubs.includes(i.slug)).map((i) => `- [${i.name}](${SITE_URL}/industries/${i.slug}): software for ${i.who}`).join("\n")}

## SEO, AEO and GEO
- [SEO packages](${SITE_URL}/seo): audit, technical foundation, growth retainer and AI search packages with scope, deliverables and FAQs
- [SEO and AI Search Optimization](${SITE_URL}/services/seo-services): technical SEO, content, local SEO and visibility in ChatGPT, Perplexity and Google AI Overviews
- [TheSuper30 alternatives](${SITE_URL}/blog/thesuper30-alternatives.md): ten SEO and AI-search agencies in India compared
- [SEO vs GEO vs AEO](${SITE_URL}/blog/seo-vs-geo-vs-aeo.md): what each means and how they differ

## Where we work
- [Locations](${SITE_URL}/locations): Custom software development and web development pages for ${cities.map((c) => c.name).join(", ")}, at ${SITE_URL}/services/<service>/<city> for ${cityServiceSlugs.join(" and ")}.

## Guides and articles
${clusters.map((c) => `### ${c}\n${posts.filter((p) => p.cluster === c).map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}.md): ${p.description}`).join("\n")}`).join("\n\n")}

## Optional
- [Sitemap](${SITE_URL}/sitemap.xml)
- [Blog index](${SITE_URL}/blog)
- [Full text for LLMs](${SITE_URL}/llms-full.txt)
`;
}

export async function buildLlmsFull() {
  const posts = await getAllPosts();
  const parts: string[] = [];
  parts.push(`# ${site.name}: full content\n\n> ${about}\n\nSource: ${SITE_URL}. This file concatenates the main content of the site for language models. Canonical pages are on the website.`);
  parts.push(`## Contact\n- Phone / WhatsApp: ${contact.phone}\n- Address: ${contact.address}\n- Contact page: ${SITE_URL}/contact`);
  parts.push(`## Services\n\n${allServices.map((s) => `### ${s.title}\nURL: ${SITE_URL}/services/${s.slug}\n${s.intro}\n\n${(s.body ?? []).join("\n\n")}\n\n${s.points.map((x) => `- **${x.title}.** ${x.text}`).join("\n")}\n\nTechnology: ${s.stack.join(", ")}${(s.faqs ?? []).length ? `\n\nFAQ:\n${(s.faqs ?? []).map((f) => `- ${f.q} ${f.a}`).join("\n")}` : ""}`).join("\n\n")}`);
  parts.push(`## SEO packages\n\nURL: ${SITE_URL}/seo\n\n${seoPackages.map((p) => `### ${p.name}\n${p.tagline} ${p.summary}\nBest for: ${p.forWho}\nDuration: ${p.duration}\nIncludes:\n${p.includes.map((x) => `- ${x}`).join("\n")}\nYou get: ${p.outcome}`).join("\n\n")}\n\nFAQ:\n${seoProductFaqs.map((f) => `- ${f.q} ${f.a}`).join("\n")}`);
  parts.push(`## Projects\n\n${projects.map((p) => `### ${p.name}\nURL: ${SITE_URL}${projectPath(p.slug)}${p.url ? `\nLive site: ${p.url}` : ""}\nIndustry: ${p.industry}\n${p.overview}\n\nWhat we built:\n${p.built.map((b) => `- ${b}`).join("\n")}\n\nTechnology: ${p.stack.join(", ")}`).join("\n\n")}`);
  parts.push(`## Problems we solve\n\n${problems.map((p) => `### ${p.title}\nURL: ${SITE_URL}/solutions/${p.slug}\nProblem: ${p.problem}\nCost: ${p.cost}\nHow we fix it:\n${p.steps.map((s) => `- **${s.title}.** ${s.text}`).join("\n")}`).join("\n\n")}`);
  parts.push(`## Comparisons\n\n${comparisons.map((c) => `### ${c.title}\nURL: ${SITE_URL}/compare/${c.slug}\n${c.intro}\n\n| Factor | ${c.a} | ${c.b} |\n|---|---|---|\n${c.rows.map((r) => `| ${r[0]} | ${r[1]} | ${r[2]} |`).join("\n")}\n\nChoose ${c.a.toLowerCase()} if: ${c.chooseA.join("; ")}.\nChoose ${c.b.toLowerCase()} if: ${c.chooseB.join("; ")}.\nOur take: ${c.verdict}`).join("\n\n")}`);
  parts.push(`## Industries\n\n${industries.filter((i) => industryHubs.includes(i.slug)).map((i) => `### ${i.name}\nURL: ${SITE_URL}/industries/${i.slug}\nFor ${i.who}. Common problems: ${i.pains.join("; ")}.\nPages: ${industryPairs.filter((p) => p.industry === i.slug).map((p) => `${SITE_URL}/industries/${p.industry}/${p.service}`).join(", ")}`).join("\n\n")}`);
  parts.push(`## FAQ\n\n${faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}`);
  parts.push(`## Articles\n\n${posts.map((p) => postToMarkdown(p).replace(/^# /, "### ")).join("\n---\n\n")}`);
  return parts.join("\n\n---\n\n") + "\n";
}
