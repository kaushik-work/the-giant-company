---
slug: search-console-performance-report-explained
title: Search Console Performance Report Explained: Impressions, Clicks, CTR and Position
description: How Google counts impressions, clicks, average position and CTR in Search Console, with the rules and edge cases that confuse people, and how to use the report.
keyword: search console performance report
tags: SEO, Google Search Console, Analytics
cluster: Search Console
service: web-development
related: google-search-console-setup-guide, page-indexing-report-crawled-currently-not-indexed, technical-seo-checklist-new-website
date: 2026-10-26
updated: 2026-10-26
---
The Search Console Performance report shows how your site performs in Google Search using four metrics: impressions (how often your site appeared), clicks (how often people clicked through), CTR (clicks divided by impressions) and average position (where you appeared, with 1 at the top). Understanding exactly how Google counts them stops you misreading the data.

## The four metrics

| Metric | Meaning |
|---|---|
| **Impressions** | A link to your site was shown, or could have been seen, in a results page |
| **Clicks** | A user clicked through from Google to your site |
| **CTR** | Clicks ÷ impressions. 10 clicks on 200 impressions is 5% |
| **Average position** | Your topmost position, averaged across queries. 1 is the top |

## How impressions are counted

- A link counts as an impression when it appears in the current results page, even if the user has to scroll, as long as they do not need to click "more results".
- Items in carousels or expandable sections count only once scrolled into view or expanded.
- Scrolling away and back, or paging back and forth within one search, does not add extra impressions.
- An impression exists even if the user never looks at it, as long as it was on the page they saw.

## How position works

- Position is calculated for Google Search results only, not Discover or News.
- If a query shows several of your links, your **topmost** position is the one used.
- The reported average is taken across queries. For example, queries where your topmost positions were 3, 5 and 9 average to about 5.7.
- A result the user never saw, such as page three when they only viewed page one, records no impression and no position.
- Personalisation, location and device change results, so what you see when you search yourself may differ from the report.

## How clicks are counted

- A click that leaves Google to your site counts.
- Refining a query inside Google does not.
- Clicking back and clicking the same result again counts once.

## What it does not show

Data is credited to Google's chosen **canonical** URL, and desktop and mobile versions are combined unless you filter. Newest data may be preliminary, and it appears as a dotted line.

## Dimensions and filters

You can break results down by Queries, Pages, Countries, Devices, Search appearance and Dates, and filter by search type (Web, Image, Video, News). The default range is three months, and weekly and monthly views smooth daily noise. Chart and table totals can differ because of how each is aggregated.

## How to use it

1. **Find queries that bring visitors** and use them to improve content.
2. **Look for pages with many impressions and a low CTR.** Better titles and descriptions may help.
3. **Spot pages that dropped** after a change.
4. **Track trends, not days.** Use weekly or monthly views.

New to Search Console? Start with our [setup guide](/blog/google-search-console-setup-guide).

## FAQ

### What is a good CTR?
It depends on the query and position. Compare your own pages over time rather than chasing a universal number.

### Why does my position look strange?
Position averages across queries and counts your topmost link, and it varies by location, device and personalisation.

### Why do chart and table numbers differ?
They are aggregated differently, for example by property versus by page.

### Does an impression mean someone saw my link?
Not necessarily. It means your link was in the results page they were shown, under Google's counting rules.
