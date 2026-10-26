import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { allServices, services } from "@/lib/services";
import { SITE_URL } from "@/lib/site";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { cities, comparisons, hasCityPage, industryHubs, industryPairs, problems } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const [posts, tags] = await Promise.all([getAllPosts(), getAllTags()]);
  const blogPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: new Date(p.updated), changeFrequency: "monthly" as const, priority: p.pillar ? 0.8 : 0.6 })),
    ...tags.map((t) => ({ url: `${SITE_URL}/blog/tag/${t.slug}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.4 })),
  ];
  const seoPages: MetadataRoute.Sitemap = [
    ...["/industries", "/solutions", "/compare", "/locations"].map((p) => ({ url: `${SITE_URL}${p}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...services.filter((sv) => hasCityPage(sv.slug)).flatMap((sv) => cities.map((c) => ({ url: `${SITE_URL}/services/${sv.slug}/${c.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: c.slug === "bengaluru" ? 0.8 : 0.6 }))),
    ...industryHubs.map((slug) => ({ url: `${SITE_URL}/industries/${slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...industryPairs.map((pr) => ({ url: `${SITE_URL}/industries/${pr.industry}/${pr.service}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...problems.map((p) => ({ url: `${SITE_URL}/solutions/${p.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...comparisons.map((c) => ({ url: `${SITE_URL}/compare/${c.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
  return [
    ...seoPages,
    ...blogPages,
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/projects`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...allServices.map((sv) => ({ url: `${SITE_URL}/services/${sv.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
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
