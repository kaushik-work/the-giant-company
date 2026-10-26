---
slug: robots-txt-vs-noindex-vs-sitemaps
title: robots.txt vs noindex vs Sitemaps: What Each One Does
description: robots.txt controls crawling, noindex controls indexing and sitemaps help discovery. Learn the differences and the mistakes that keep pages out of Google.
keyword: robots txt vs noindex
tags: SEO, Technical SEO, Indexing
cluster: Search Console
service: web-development
related: page-indexing-report-crawled-currently-not-indexed, technical-seo-checklist-new-website, how-google-search-works-crawling-indexing-serving
date: 2026-10-26
updated: 2026-10-26
---
robots.txt tells crawlers which URLs not to crawl, `noindex` tells Google not to include a page in search results, and a sitemap tells Google which pages you want it to find. They do different jobs, and mixing them up is a common reason pages stay out of Google or appear when they should not.

## The three tools

| Tool | What it controls | Does it keep a page out of results? |
|---|---|---|
| **robots.txt** | Whether crawlers fetch a URL | No. Google says not to use it to keep pages out of results |
| **noindex** (meta tag or header) | Whether a crawled page may be indexed | Yes, if Google can crawl the page and see the tag |
| **Sitemap** | Which URLs you suggest Google crawl | No. It only helps discovery |

## robots.txt

A text file at the root of your site that lists URLs or directories crawlers should not fetch. It is used to save crawl resources on unimportant files. Small sites often do not need one. Search Console has a robots.txt report showing whether Google can process it.

**The trap:** if you block a page in robots.txt, Google cannot see a `noindex` tag on it, and the URL can still appear in results if it is linked elsewhere. To keep a page out of results, allow crawling and use `noindex`.

## noindex

Add `<meta name="robots" content="noindex">` to the page, or the equivalent HTTP header. Google must be able to crawl the page to see it. Remove it when you want the page indexed. The Page Indexing report shows these as "Excluded by 'noindex'".

**A frequent launch mistake:** a staging site's noindex is carried to the live site, and nothing gets indexed.

## Sitemaps

An XML file listing your important URLs and, optionally, when each was last modified. Most hosting platforms generate one. Sitemaps help Google find pages, especially on new or large sites, but they are not required and do not guarantee indexing. Keep `lastmod` honest, and submit the sitemap in Search Console.

## Canonical tags (a related tool)

A canonical tells Google which version of duplicate or near-duplicate pages you prefer. Google may choose a different one, since it treats your canonical as a hint. Use it for variants like tracking-parameter URLs.

## Quick decision guide

- **Do not want it crawled (and do not care if it shows)?** robots.txt.
- **Do not want it in search?** Allow crawl and add noindex.
- **Want Google to find it?** Link to it internally and list it in your sitemap.
- **Duplicate versions?** Pick a canonical and redirect where possible.

Test with the [URL Inspection tool](/blog/url-inspection-tool-request-indexing), and read the [technical SEO checklist](/blog/technical-seo-checklist-new-website).

## FAQ

### Does robots.txt remove a page from Google?
No. It blocks crawling, not indexing. Use noindex to keep a page out of results.

### Can I use both robots.txt and noindex on a page?
If robots.txt blocks the page, Google cannot see the noindex. Allow crawling if you want noindex to work.

### Do I need a sitemap?
Not required, but it helps discovery, especially for new or large sites.

### What is a canonical tag?
A hint that tells Google which of several similar URLs you prefer to show.
