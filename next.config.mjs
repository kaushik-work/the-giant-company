import { readFileSync } from "node:fs";

const allow = JSON.parse(readFileSync(new URL("./lib/seo-allow.json", import.meta.url), "utf8"));

/** @type {import("next").NextConfig} */
const nextConfig = {
  async redirects() {
    const r = [{ source: "/projects/moonlight-ai", destination: "/moonlight", permanent: true }];
    // Pages we no longer publish (no search demand) go to the closest strong page.
    for (const s of allow.allServices) {
      if (!allow.cityServices.includes(s)) r.push({ source: `/services/${s}/:city`, destination: `/services/${s}`, permanent: true });
    }
    for (const s of allow.cityServices) r.push({ source: `/services/${s}/visakhapatnam`, destination: `/services/${s}`, permanent: true });
    const hubs = new Set(allow.industryPairs.map((p) => p.industry));
    for (const i of allow.allIndustries) {
      for (const s of allow.allServices) {
        if (!allow.industryPairs.some((p) => p.industry === i && p.service === s)) {
          r.push({ source: `/industries/${i}/${s}`, destination: hubs.has(i) ? `/industries/${i}` : `/services/${s}`, permanent: true });
        }
      }
      if (!hubs.has(i)) r.push({ source: `/industries/${i}`, destination: "/industries", permanent: true });
    }
    return r;
  },
  async rewrites() {
    // Markdown copy of every blog post at /blog/<slug>.md, for AI tools.
    return [{ source: "/blog/:slug.md", destination: "/md/blog/:slug" }];
  },
};
export default nextConfig;
