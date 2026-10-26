---
slug: website-migration-without-losing-rankings
title: Website Migration Without Losing Rankings
description: How to move to a new website or domain while keeping search visibility: URL mapping, 301 redirects, sitemaps, Change of Address and monitoring in Search Console.
keyword: website migration seo
tags: SEO, Website, Technical SEO
cluster: Website development
service: web-development
related: technical-seo-checklist-new-website, google-search-console-setup-guide, page-indexing-report-crawled-currently-not-indexed
date: 2026-10-26
updated: 2026-10-26
---
To migrate a website without losing search visibility, map every old URL to its new equivalent, redirect them with 301 redirects, keep content and titles as similar as you can, submit a new sitemap and watch Search Console closely afterwards. If you change domains, also use Search Console's Change of Address tool. Some fluctuation is normal, and no process guarantees identical rankings.

## Before you start

1. **Crawl and list your current URLs,** and note which get traffic and links.
2. **Save a baseline** from Search Console: clicks, impressions and top pages.
3. **Decide what stays.** Do not remove pages that bring traffic without a replacement.
4. **Keep your URL structure** if you can. Fewer changes mean less risk.

## URL mapping and redirects

- Build a table: old URL to new URL, one to one where possible.
- Use **301 redirects** for permanent moves.
- Avoid redirect chains and loops. Google's Page Indexing report flags redirect errors.
- Do not redirect everything to the homepage. Send each page to its closest equivalent.
- Return a real 404 for pages that are truly gone, rather than a "not found" message on a 200 page, which Google treats as a soft 404.

## Content and technical checks

- Keep titles, headings and main content similar unless you are deliberately improving them.
- Carry across canonical tags, structured data and alt text.
- Make sure the new site is not blocked by robots.txt or `noindex` left over from staging. This is a common launch mistake.
- Test speed and mobile.

## Launch day

1. Switch over and confirm redirects work.
2. Submit the new sitemap in [Search Console](/blog/google-search-console-setup-guide).
3. Use the [URL Inspection tool](/blog/url-inspection-tool-request-indexing) on key pages.
4. If you moved to a new domain, use the **Change of Address** tool in Search Console settings.
5. Update links in your profiles, ads and email signatures.

## After launch

- Watch the **Page Indexing** and **Performance** reports daily for the first weeks.
- Fix new errors quickly.
- Expect temporary movement while Google reprocesses the site. Google recrawls pages automatically based on how often they change, so you do not need to request a recrawl for everything.
- Keep the old redirects in place for a long time.

## FAQ

### Will I lose rankings when I migrate?
You may see temporary movement. Careful mapping, redirects and monitoring reduce the risk, but nobody can guarantee identical rankings.

### Should I use 301 or 302 redirects?
Use 301 for permanent moves.

### How do I tell Google I changed domains?
Set up redirects, add both properties in Search Console and use the Change of Address tool.

### How long does Google take to process a migration?
It varies with site size and how often Google crawls you. Monitor for several weeks.
