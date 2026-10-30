export type SeoPackage = {
  slug: string;
  name: string;
  tagline: string;
  forWho: string;
  duration: string;
  summary: string;
  featured?: boolean;
  includes: string[];
  outcome: string;
};

export const seoPackages: SeoPackage[] = [
  {
    slug: "audit",
    name: "SEO and AI-Search Audit",
    tagline: "Find out what is wrong before you spend on fixing it.",
    forWho: "Sites that are not ranking, have never been audited, or are planning a redesign or migration.",
    duration: "1 to 2 weeks, one-time",
    summary: "A full review of your technical set-up, content, authority and AI-search visibility, ending in a prioritised fix list and a walkthrough call.",
    includes: [
      "Crawl of the whole site: indexing, canonicals, redirects, status codes, orphan and duplicate pages",
      "Rendering check for JavaScript-heavy pages and how Googlebot actually sees them",
      "Core Web Vitals review (LCP, INP, CLS) using real-user data where it exists",
      "Structured data and sitemap validation",
      "Keyword and search-intent gap analysis against three to five competitors",
      "Content quality review: thin, duplicate, outdated and cannibalising pages",
      "Backlink profile review and toxic-link check",
      "AI-search check: AI crawler access, llms.txt, and whether your brand appears for 20 buyer questions in ChatGPT, Perplexity, Gemini and Google AI Overviews",
      "Prioritised roadmap ranked by impact and effort, with a recorded walkthrough call",
    ],
    outcome: "A written audit and a roadmap you can hand to any developer, including ours.",
  },
  {
    slug: "foundation",
    name: "Technical Foundation",
    tagline: "Fix the site itself, in code, not in a PDF.",
    forWho: "Businesses whose audit shows technical debt, slow pages, indexing problems or missing structured data.",
    duration: "3 to 6 weeks, one-time",
    summary: "Our engineers implement the technical fixes directly in your site and set up the tracking you need to measure everything after.",
    includes: [
      "Fixes for crawl and indexing issues: redirects, canonicals, robots rules, sitemap, hreflang where needed",
      "Rendering fixes so key content is visible without waiting on scripts",
      "Speed work on LCP, INP and layout shift: images, fonts, scripts, caching and hosting set-up",
      "Schema markup: Organization, Service, Article, FAQ, Breadcrumb, LocalBusiness and Product as relevant",
      "Clean URL structure and internal-linking rules, including hub and spoke linking for key topics",
      "Title, description and heading templates for every page type",
      "AI-search set-up: AI crawler access, llms.txt, Markdown versions of key pages",
      "Search Console, GA4, conversion events and a reporting dashboard set up in your accounts",
      "Before and after measurement of every fix shipped",
    ],
    outcome: "A site that search engines and AI tools can crawl, understand and trust, with tracking in place.",
  },
  {
    slug: "growth",
    name: "Growth Retainer",
    tagline: "Steady content, authority and reporting every month.",
    forWho: "Businesses with a sound technical base that want a consistent pipeline of organic enquiries.",
    duration: "Monthly, minimum three months, no long lock-in",
    summary: "Ongoing keyword and content work, on-page optimisation, authority building and monthly reporting, with a monthly call.",
    featured: true,
    includes: [
      "Keyword and topic research refreshed every quarter, mapped to buyer intent",
      "Content calendar: new pages and posts written for people first, with sources and expert review",
      "Refreshes of existing pages that are slipping or stalled on page two",
      "On-page optimisation of titles, headings, copy, images and internal links",
      "Topic clusters and entity work so search engines understand your expertise",
      "Digital PR and link outreach through genuine, relevant channels, never link schemes",
      "Local SEO if relevant: Google Business Profile, citations, local landing pages and review guidance",
      "Competitor tracking and SERP-feature opportunities such as featured snippets and People Also Ask",
      "Monthly report on traffic, rankings, impressions, clicks, enquiries and what changed, plus a monthly call",
    ],
    outcome: "Compounding organic traffic and enquiries, reported in plain language.",
  },
  {
    slug: "ai-search",
    name: "AI Search (GEO and AEO)",
    tagline: "Be the source ChatGPT, Perplexity and Google AI Overviews cite.",
    forWho: "Brands whose buyers research with AI tools, or who want to be ready as search shifts to answers.",
    duration: "Monthly, can run alongside or on top of Growth",
    summary: "We make your content easy for AI systems to find, understand and quote, and we measure whether it works.",
    includes: [
      "Question set built from your buyers: 30 to 50 prompts tracked across ChatGPT, Perplexity, Gemini, Copilot and Google AI Overviews",
      "Baseline and monthly record of whether, where and how your brand is mentioned or cited",
      "Answer-ready rewrites: direct definitions, clear facts, comparison tables, FAQs and original data that can be quoted",
      "Entity consistency: one clear description of your brand, people and services across your site and the web",
      "Third-party presence: reviews, directories, communities and publications AI tools tend to draw from",
      "AI crawler management, llms.txt and Markdown page versions kept up to date",
      "Competitor share-of-voice in AI answers for the tracked questions",
      "Recommendations for gaps, with fixes shipped in your content and site",
    ],
    outcome: "A measured, repeatable process for earning citations. We cannot control what an AI says, and we do not claim to.",
  },
];

export const matrix: { row: string; values: boolean[] }[] = [
  { row: "Full technical and content audit", values: [true, false, false, false] },
  { row: "Technical fixes shipped in your site", values: [false, true, false, false] },
  { row: "Structured data and schema", values: [true, true, true, true] },
  { row: "Core Web Vitals improvements", values: [true, true, false, false] },
  { row: "Search Console and analytics set up", values: [false, true, true, false] },
  { row: "Monthly content creation", values: [false, false, true, true] },
  { row: "Link and authority building", values: [false, false, true, false] },
  { row: "Local SEO", values: [false, false, true, false] },
  { row: "AI citation tracking", values: [true, false, false, true] },
  { row: "llms.txt and AI crawler set-up", values: [true, true, false, true] },
  { row: "Monthly report and call", values: [false, false, true, true] },
];

export const roadmap = [
  { title: "Days 1 to 14: Audit and baseline", text: "Crawl, competitor review, AI-visibility baseline and tracking checked. You see the starting numbers before anything changes." },
  { title: "Days 15 to 45: Fix the foundations", text: "Indexing, speed, structured data, templates and tracking fixed in your site. This is where the quick technical wins land." },
  { title: "Days 46 to 75: Publish and optimise", text: "First batch of new and refreshed pages, internal links, local profiles and answer-ready content go live." },
  { title: "Days 76 to 90: Measure and plan", text: "First full performance review: what moved, what did not, and the plan for the next quarter." },
];

export const measures = [
  { title: "Organic enquiries", text: "Form fills, calls and WhatsApp clicks from search. The number that matters most." },
  { title: "Impressions and clicks", text: "Search Console data for your pages and queries, month over month." },
  { title: "Rankings by topic", text: "Position for the keyword groups tied to your services, not vanity terms." },
  { title: "Indexing and crawl health", text: "Pages indexed, errors found and fixed, and crawl coverage." },
  { title: "Core Web Vitals", text: "Real-user LCP, INP and CLS across the site." },
  { title: "AI citations", text: "Share of tracked buyer questions where your brand is mentioned or cited by AI tools." },
];

export const seoProductFaqs = [
  { q: "Can I buy just one package?", a: "Yes. The audit and the technical foundation are one-time pieces. The growth retainer and AI search are monthly. Most clients start with the audit, then choose what to continue with." },
  { q: "Why are there no prices on this page?", a: "Cost depends on site size, competition, technical debt and content volume, so a fixed number would be wrong for most sites. After the free audit conversation we give a written scope and price, with no long-term lock-in." },
  { q: "Do you guarantee rankings or traffic?", a: "No. Nobody can honestly guarantee Google rankings or AI citations. We commit to the scope, the work, and the reporting, and we follow Google's Search Essentials." },
  { q: "What do I get in the first 90 days?", a: "A baseline, a technical fix batch, your first new and refreshed content, working tracking, and a review of what moved. Technical fixes can help within weeks. Steady ranking gains usually take several months." },
  { q: "Do you do the development work too?", a: "Yes, and that is the difference. We are a software studio, so fixes such as rendering, speed and schema are implemented in your site rather than listed in a report. If you already have a developer, we can hand over exact tickets instead." },
  { q: "Will you work with my existing agency or developer?", a: "Yes. We can run the audit and the roadmap and let your team ship the fixes, or work alongside them." },
  { q: "Do you use AI to write content?", a: "We use AI as a tool for research and drafting, but every page is edited by a person, checked for facts and sources, and written to be useful to the reader. Thin, mass-produced pages hurt rankings and we do not publish them." },
  { q: "How do you build links?", a: "Through useful content, relevant publications, partnerships, directories and genuine outreach. We do not buy links, run private blog networks or use schemes that break Google's spam policies." },
  { q: "Who owns the accounts and the content?", a: "You do. Search Console, analytics, Business Profile and all content live in your accounts. If we stop working together you keep everything." },
  { q: "What do you need from me to start?", a: "Your website address, read-only access to Search Console and analytics if you have them, your main services and customers, and a list of competitors you watch. We take it from there." },
  { q: "Which industries do you work with?", a: "Travel, education, real estate, healthcare, retail and e-commerce, B2B services and startups. The method is the same, the keywords and content differ." },
  { q: "Do you work outside Bangalore?", a: "Yes. We work remotely with clients across India and worldwide, and do local SEO for Bangalore and other cities." },
];
