---
slug: page-indexing-report-crawled-currently-not-indexed
title: Page Indexing Report: What "Crawled, Currently Not Indexed" Means and What to Do
description: How to read Search Console's Page Indexing report, including Crawled/Discovered currently not indexed, duplicates, soft 404s and noindex, and which issues need action.
keyword: crawled currently not indexed
tags: SEO, Google Search Console, Indexing
cluster: Search Console
service: web-development
related: google-search-console-setup-guide, url-inspection-tool-request-indexing, robots-txt-vs-noindex-vs-sitemaps
date: 2026-10-26
updated: 2026-10-26
---
"Crawled, currently not indexed" means Google has fetched the page but has not added it to its index yet. It may be indexed later, and Google says you do not need to resubmit it. If many important pages sit in this state, the usual causes are weak or duplicated content, or pages Google finds low in value. Improve the pages rather than repeatedly requesting indexing.

## What the Page Indexing report shows

The report lists URLs Google knows about and whether each is indexed, with reasons for pages that are not. "Not indexed" is not always a problem. Each reason has a **source**, and generally only issues with the source "Website" are yours to fix. Google notes that sites under about 500 pages often do not need the report, and a `site:` search may be enough.

## Common reasons and what to do

| Status | Meaning | Action |
|---|---|---|
| **Crawled, currently not indexed** | Google crawled the page but has not indexed it | May be indexed later. Improve content quality and internal links. No need to resubmit |
| **Discovered, currently not indexed** | Google knows the URL but has not crawled it yet, often to avoid overloading the site | Usually wait. Check server health and internal links |
| **Duplicate without user-selected canonical** | Google chose another page as canonical | Fine if intended. If not, declare a canonical, or make pages substantially different |
| **Duplicate, Google chose different canonical** | Google disagrees with your declared canonical | Inspect both and make pages clearly distinct or fix signals |
| **Soft 404** | The page says "not found" but returns 200 | Return a real 404, or add useful content |
| **Excluded by 'noindex'** | A noindex directive is present | Remove it if you want the page indexed |
| **Blocked by robots.txt** | Google cannot crawl it | Unblock it. Use noindex, not robots.txt, to keep pages out |
| **Server error (5xx), 401, 403** | Google cannot fetch the page | Fix availability, firewalls or logins |
| **404 Not found** | Page does not exist | Fine if removed. Fix only pages you link to or list in a sitemap |
| **Redirect error** | Chains, loops or bad targets | Fix redirects |

## Are you creating many thin pages?

If you publish many near-identical pages, such as city or product variations, expect many to land in "Crawled, currently not indexed". Google clusters duplicates and indexes one. Give each page real, distinct content and useful internal links, and measure which families get indexed before adding more. We use this approach for our own [service-by-city and industry pages](/services).

## Validating fixes

After fixing all instances of an issue, use **Validate fix**. Validation can take up to about two weeks, only known URLs are rechecked, and an issue stays in the table for 90 days after the last instance disappears.

## Timing

New sites and pages can take around a week to be crawled and indexed, and indexing is never instant or guaranteed. Request a recrawl only for important changes Google has not noticed for a week or more.

Next, learn the [URL Inspection tool](/blog/url-inspection-tool-request-indexing) and [robots.txt vs noindex vs sitemaps](/blog/robots-txt-vs-noindex-vs-sitemaps).

## FAQ

### What does "Crawled - currently not indexed" mean?
Google fetched the page but has not indexed it. It may be indexed later and you do not need to resubmit.

### How do I get a page indexed?
Make sure it is crawlable, not noindexed, useful and linked internally, add it to your sitemap, and use URL Inspection for important pages. Indexing is not guaranteed.

### Is "not indexed" always a problem?
No. Some reasons, such as redirects and alternate pages with a proper canonical, are expected.

### How long does validation take?
Typically up to about two weeks, sometimes longer.
