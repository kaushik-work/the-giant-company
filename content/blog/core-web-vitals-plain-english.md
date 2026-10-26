---
slug: core-web-vitals-plain-english
title: Core Web Vitals in Plain English (and Why Your Site Is Slow)
description: Core Web Vitals explained simply: LCP, INP and CLS, the thresholds Google uses, how to check them and the usual causes of a slow site.
keyword: core web vitals
tags: Website, SEO, Performance
cluster: Website development
service: web-development
related: technical-seo-checklist-new-website, nextjs-vs-wordpress-business-websites, how-google-search-works-crawling-indexing-serving
date: 2026-10-26
updated: 2026-10-26
---
Core Web Vitals are three measurements of how a page feels to a real visitor: how fast the main content appears (LCP), how quickly the page responds to taps and clicks (INP), and how stable the layout is while loading (CLS). Google's Search Console reports them as Good, Needs improvement or Poor using fixed thresholds.

## The three metrics and thresholds

| Metric | What it measures | Good | Needs improvement | Poor |
|---|---|---|---|---|
| **LCP** (Largest Contentful Paint) | Time for the largest visible element to appear | 2.5 s or less | up to 4 s | over 4 s |
| **INP** (Interaction to Next Paint) | How quickly the page responds to taps, clicks and key presses | 200 ms or less | up to 500 ms | over 500 ms |
| **CLS** (Cumulative Layout Shift) | How much the layout jumps around | 0.1 or less | up to 0.25 | over 0.25 |

These thresholds are the ones shown in Google's Search Console documentation.

## Field data vs lab data

The Search Console report uses **field data**: measurements from real users, collected through Chrome's user experience report, at the 75th percentile. A tool like PageSpeed Insights also runs **lab tests** in a controlled setting, so its numbers can differ. Treat the field data as the truth for real visitors and the lab data as a way to find causes.

A page group is rated by its worst metric, so one Poor score makes the group Poor. The report only shows indexed URLs and may show a sample.

## Why your site might be slow

- **Huge images** that are not resized or compressed.
- **Too many scripts**, such as chat widgets, trackers and plugins.
- **Slow hosting** or no caching.
- **Fonts and layout shifts** that cause content to jump.
- **Heavy JavaScript** that blocks the page from responding.
- **Unoptimised themes and plugins,** common on WordPress.

## How to fix the usual causes

1. **Resize and compress images,** and use modern formats.
2. **Set image and ad dimensions** so the layout does not jump.
3. **Remove scripts you do not need.**
4. **Load non-critical code later.**
5. **Use a fast host** and caching or a CDN.
6. **Test on a mid-range phone,** not just your laptop.

## How to check

Open the Core Web Vitals report in [Google Search Console](/blog/google-search-console-setup-guide) for real-user data, and use PageSpeed Insights for page-level causes. A new site may show "no data" until enough visitors have been measured.

## Does it affect rankings?

Google describes page experience as one of many signals, and relevant, helpful content matters most. But a slow site loses visitors regardless of ranking. See our [technical SEO checklist](/blog/technical-seo-checklist-new-website) and [web development service](/services/web-development).

## FAQ

### What are Core Web Vitals?
Three measurements of page experience: LCP for loading, INP for responsiveness and CLS for visual stability.

### What is a good LCP?
2.5 seconds or less, measured on real users at the 75th percentile.

### Why is my PageSpeed score different from Search Console?
Search Console shows field data from real users, while PageSpeed Insights also shows lab tests, so numbers can differ.

### Did INP replace FID?
Yes. INP replaced First Input Delay as a Core Web Vital.
