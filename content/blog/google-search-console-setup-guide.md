---
slug: google-search-console-setup-guide
title: Google Search Console Setup Guide: Add and Verify Your Website
description: How to set up Google Search Console: Domain vs URL-prefix property, DNS verification, submitting your sitemap and the first reports to check.
keyword: google search console setup
tags: SEO, Google Search Console
cluster: Search Console
service: web-development
related: search-console-performance-report-explained, url-inspection-tool-request-indexing, page-indexing-report-crawled-currently-not-indexed
pillar: true
date: 2026-10-26
updated: 2026-10-26
---
Google Search Console is a free Google service that shows how your site appears in Google Search and helps you find and fix problems. To set it up you sign in with a Google account, add your site as a property, verify that you own it, and submit your sitemap. You do not need Search Console to appear in Google, but it shows how Google sees your site.

## What Search Console does

According to Google, it helps you monitor, maintain and troubleshoot your site's presence in Search results. It shows:

- Whether Google can find and crawl your pages.
- Which pages are indexed and why others are not.
- How often your site appears (impressions), which queries show it and how many people click.
- Security issues and manual actions.
- Which sites link to you.

It is used by business owners, SEO specialists, site administrators and developers.

## Step 1: Choose a property type

| | Domain property | URL-prefix property |
|---|---|---|
| Example | `example.com` | `https://example.com/` |
| Covers | All subdomains, protocols and paths | Only URLs starting with that exact prefix |
| Verification | DNS record | Several methods |
| Best for | Most sites | When you cannot edit DNS, or want to track one section |

For a Domain property, enter the root domain without the protocol, path or `www`. For a URL-prefix property, enter the full address including `https://` and the trailing slash.

## Step 2: Verify ownership

Verification proves you own the site, because Search Console shows owner-only data. For a Domain property you add a DNS record at your domain provider. For a URL-prefix property you can use other methods. If a method fails, check you used the right property type and the right protocol.

Data collection starts when anyone adds the property, even before verification. Data usually appears within a few days.

## Step 3: Submit your sitemap

Open the Sitemaps report, enter your sitemap URL (for example `/sitemap.xml`) and submit. A sitemap helps Google discover pages, though it is not required. See our [technical SEO checklist](/blog/technical-seo-checklist-new-website).

## Step 4: Check the first reports

Google suggests, for beginners, looking at:

1. **Overview/property dashboard:** security issues, manual actions and trends.
2. **Performance report:** clicks, impressions, CTR and position. See [the Performance report explained](/blog/search-console-performance-report-explained).
3. **Page indexing:** which pages Google has found. See [Crawled, currently not indexed](/blog/page-indexing-report-crawled-currently-not-indexed).
4. **URL Inspection:** how Google sees one page. See [URL Inspection and request indexing](/blog/url-inspection-tool-request-indexing).

Google says many users only need a monthly check-up unless Search Console alerts them to a problem.

## Good habits

- Add owners and users with the right permissions.
- Keep the DNS record or verification token in place, or you may lose verification.
- Do not panic at every notice. Read what it says first.

## FAQ

### Is Google Search Console free?
Yes.

### Do I need Search Console to appear on Google?
No. It helps you monitor and troubleshoot, but your site can appear without it.

### Domain or URL-prefix property: which should I use?
A Domain property covers all versions of your site and is best for most, but it needs DNS access. Use URL-prefix if you cannot change DNS.

### How soon will I see data?
Usually within a few days of adding the property. If there is no data for several days, check that the site is in Search and the property URL is correct.
