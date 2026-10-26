---
slug: url-inspection-tool-request-indexing
title: URL Inspection Tool: How to Check a Page and Request Indexing
description: What Search Console's URL Inspection tool shows, how to test a live URL, when Request indexing works, and its limits.
keyword: url inspection tool
tags: SEO, Google Search Console, Indexing
cluster: Search Console
service: web-development
related: page-indexing-report-crawled-currently-not-indexed, google-search-console-setup-guide, robots-txt-vs-noindex-vs-sitemaps
date: 2026-10-26
updated: 2026-10-26
---
The URL Inspection tool in Google Search Console shows how Google currently sees a specific page, whether it is indexed, and can test the live page. "Request indexing" asks Google to crawl a URL, but it does not guarantee that the page will be indexed, and the tool has daily limits.

## What it tells you

For a URL in your property, the tool shows Google's indexed version:

- **Overall status:** "URL is on Google", "on Google, but has issues" or "not on Google". Being on Google means eligible to appear, not guaranteed to.
- **Discovery:** how Google found it, including referring sitemaps and pages.
- **Last crawl** time and whether it was crawled as desktop or mobile.
- **Crawl and indexing settings:** whether crawling is allowed by robots.txt, whether indexing is allowed (noindex), and the user-declared and Google-selected canonical.
- **Enhancements:** detected structured data and any errors or warnings.
- **View crawled page:** the HTML, HTTP headers and resources.

## Test live URL

This fetches and renders the page in real time. It shows whether the URL is available to Google and gives a screenshot. It is useful for checking a fix. It does **not** confirm that the page will be indexed, and it does not check manual actions, sitemap membership, duplicate status or canonical selection.

## Request indexing

After a quick check for immediate errors, Request indexing asks Google to crawl the page. Things to know:

- It is unavailable if the live test shows the page is not indexable.
- It does not guarantee inclusion, and indexing can take a day or longer.
- For many pages, Google recommends a sitemap with accurate `lastmod` dates instead.
- There is a daily limit per property, so save it for important pages.

## When to use it

1. **After launching or updating an important page.**
2. **When a page is not showing in search** and you want to see why.
3. **To confirm a fix,** such as removing noindex.
4. **To check how Google renders a page** with scripts and styles.

## Limits and gotchas

- The indexed result is not live and may be out of date, and the canonical may lag by a few hours.
- The page must belong to your property and be reachable without login.
- Redirects are followed silently.
- Not every rich result type is supported.
- For a definitive check, search for the URL on Google.

## A sensible routine

Do not request indexing for every page. Keep a clean sitemap, link pages internally, and use URL Inspection for the pages that matter. If many pages are stuck, read about the [Page Indexing report](/blog/page-indexing-report-crawled-currently-not-indexed). New to this? Start with the [Search Console setup guide](/blog/google-search-console-setup-guide).

## FAQ

### Does Request indexing guarantee my page appears on Google?
No. It asks Google to crawl the page, but inclusion is not guaranteed.

### How long does indexing take after requesting?
Usually about a day, but it can take longer.

### What is the difference between indexed and live results?
The indexed result is Google's stored version, which may be old. The live test fetches the page now.

### Why is Request indexing greyed out?
The live test may show the page is not indexable, for example due to noindex, a block or an error.
