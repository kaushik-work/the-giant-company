import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { SITE_URL } from "@/lib/site";
import { cities, comparisons, industries, problems } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const seoPages: MetadataRoute.Sitemap = [
    ...["/industries", "/solutions", "/compare", "/locations"].map((p) => ({ url: `${SITE_URL}${p}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...services.flatMap((sv) => cities.map((c) => ({ url: `${SITE_URL}/services/${sv.slug}/${c.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: c.slug === "bengaluru" ? 0.8 : 0.6 }))),
    ...industries.map((i) => ({ url: `${SITE_URL}/industries/${i.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...industries.flatMap((i) => services.map((sv) => ({ url: `${SITE_URL}/industries/${i.slug}/${sv.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 }))),
    ...problems.map((p) => ({ url: `${SITE_URL}/solutions/${p.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...comparisons.map((c) => ({ url: `${SITE_URL}/compare/${c.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
  return [
    ...seoPages,
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/projects`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((sv) => ({ url: `${SITE_URL}/services/${sv.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${SITE_URL}/process`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms-and-conditions`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/moonlight`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...projects.filter((p) => p.slug !== "moonlight-ai").map((p) => ({
      url: `${SITE_URL}/projects/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.featured ? 0.9 : 0.7,
    })),
  ];
}
