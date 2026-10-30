export type Discipline = {
  slug: "seo" | "aeo" | "geo";
  short: string;
  name: string;
  title: string;
  h1: string;
  description: string;
  definition: string;
  goal: string;
  where: string;
  why: string[];
  work: { title: string; text: string }[];
  checklist: string[];
  measures: { title: string; text: string }[];
  mistakes: string[];
  package: string;
  faqs: { q: string; a: string }[];
};

export const disciplines: Discipline[] = [
  {
    slug: "seo",
    short: "SEO",
    name: "Search engine optimization",
    title: "SEO Services in Bangalore | Technical, Content and Local SEO",
    h1: "Search engine optimization that fixes the site, not just the report",
    description: "Technical SEO, content, local SEO and authority building from a Bangalore software studio. Clear scope, monthly reporting, no ranking promises.",
    definition: "SEO is the work of making your pages easy for search engines to crawl, understand and rank, so the right people find you when they search.",
    goal: "Rank for the searches your buyers make and earn the click.",
    where: "Google and Bing results pages, maps and local packs, image and video results.",
    why: [
      "Organic search is still the largest source of high-intent traffic for most service businesses, and it keeps working without paying for each click.",
      "Every other discipline depends on it. AI tools and answer boxes draw on pages that search systems can already find and trust.",
      "Results compound. A page that ranks keeps sending enquiries, and a clean site makes each new page easier to rank.",
    ],
    work: [
      { title: "Technical SEO", text: "Crawling, indexing, rendering, redirects, canonicals, sitemaps, hreflang, structured data and Core Web Vitals, fixed in your site's code." },
      { title: "Keyword and intent research", text: "The queries your buyers type, grouped by intent and mapped to a page each, so pages stop competing with each other." },
      { title: "Content strategy and creation", text: "Service pages, guides and comparisons written for people first, reviewed by a person and sourced properly." },
      { title: "On-page optimisation", text: "Titles, headings, copy, images and internal links tuned for each target query." },
      { title: "Authority and links", text: "Genuine outreach, partnerships, directories and digital PR. No bought links or link networks." },
      { title: "Local SEO", text: "Google Business Profile, consistent name, address and phone details, local landing pages and review guidance." },
    ],
    checklist: [
      "Every important page is indexed, returns a 200 status and has one canonical URL",
      "Titles and descriptions are unique and match the search intent of the page",
      "One clear H1 per page with a logical heading structure",
      "Key content is visible without waiting on scripts",
      "LCP under 2.5 seconds, INP under 200 ms and CLS under 0.1 on real-user data",
      "XML sitemap lists only canonical, indexable URLs",
      "Internal links connect each hub page to its supporting pages",
      "Organization, Service, Article, FAQ and Breadcrumb schema match visible content",
      "Search Console and GA4 are set up with conversions tracked",
    ],
    measures: [
      { title: "Organic enquiries", text: "Form fills, calls and WhatsApp clicks from search." },
      { title: "Impressions and clicks", text: "Search Console data by page and query." },
      { title: "Rankings by topic", text: "Position for keyword groups tied to your services." },
      { title: "Index coverage", text: "Pages indexed versus pages submitted, and errors fixed." },
    ],
    mistakes: [
      "Publishing many thin pages for every keyword and city",
      "Buying links or joining link networks",
      "Changing URLs without redirects during a redesign",
      "Targeting the same keyword on several pages",
      "Chasing rankings instead of enquiries",
    ],
    package: "growth",
    faqs: [
      { q: "How long does SEO take?", a: "Technical fixes can help within weeks. Steady ranking gains usually take several months and depend on competition and your starting point." },
      { q: "Do you guarantee page-one rankings?", a: "No. Nobody can honestly guarantee Google rankings. We commit to the scope, the work and monthly reporting." },
      { q: "Is SEO worth it for a small business?", a: "Often yes, especially where buyers search before they buy. A local or niche focus keeps competition manageable. The free audit shows whether it is worth it for you." },
      { q: "Do you fix the website too?", a: "Yes. We are a software studio, so rendering, speed, schema and internal linking are implemented in your site rather than listed in a report." },
    ],
  },
  {
    slug: "aeo",
    short: "AEO",
    name: "Answer engine optimization",
    title: "AEO Services | Answer Engine Optimization, Featured Snippets and Voice",
    h1: "Answer engine optimization: be the direct answer",
    description: "AEO shapes your content so search and voice systems can lift a short, correct answer. Featured snippets, People Also Ask, FAQ and structured answers.",
    definition: "AEO is the practice of structuring content so a search engine, assistant or voice system can pull a short, direct answer from it.",
    goal: "Be the answer shown at the top of the results or read aloud.",
    where: "Featured snippets, People Also Ask boxes, knowledge panels, voice assistants and answer boxes in search.",
    why: [
      "Many searches are questions, and a direct answer can settle them before anyone clicks. Being the source builds trust even when the click does not come.",
      "Answer-ready writing helps people too. Clear definitions, steps and tables are easier to read, scan and remember.",
      "The same structure feeds AI tools, so AEO work carries over into GEO.",
    ],
    work: [
      { title: "Question research", text: "The questions your buyers ask, drawn from Search Console, People Also Ask, sales calls and forums, grouped by topic." },
      { title: "Answer-first rewrites", text: "A direct 40 to 60 word answer under each question heading, followed by detail, examples and sources." },
      { title: "Snippet formats", text: "Definitions as short paragraphs, processes as numbered lists, comparisons as tables, so each fits the format Google tends to show." },
      { title: "FAQ and how-to sections", text: "Self-contained question and answer blocks on the pages where people expect them, with matching FAQ schema." },
      { title: "Structured data", text: "Schema that matches the visible text, so systems can read your content without guessing." },
      { title: "Voice and local answers", text: "Plain-language answers, opening hours, services and location details that assistants can read out." },
    ],
    checklist: [
      "Each question is a heading, answered in the first one or two sentences",
      "Answers stand alone and make sense when lifted out of the page",
      "Lists and tables are real HTML, not images",
      "FAQ schema matches visible questions and answers exactly",
      "Definitions use the form: term, what it is, why it matters",
      "Facts, dates and numbers are stated plainly with sources",
      "Business details are consistent across the site and Google Business Profile",
    ],
    measures: [
      { title: "Featured snippets held", text: "Tracked queries where your page is the snippet source." },
      { title: "People Also Ask presence", text: "Questions in the box that link to your pages." },
      { title: "Question-query impressions", text: "Search Console impressions for who, what, how and why queries." },
      { title: "Click-through on answered queries", text: "Whether answer visibility still earns visits." },
    ],
    mistakes: [
      "Burying the answer under a long introduction",
      "Adding FAQ schema for questions not shown on the page",
      "Writing answers that only make sense with the surrounding text",
      "Copying competitors' definitions word for word",
      "Expecting a snippet to be permanent, since they change",
    ],
    package: "growth",
    faqs: [
      { q: "What is the difference between AEO and SEO?", a: "SEO earns rankings and clicks. AEO shapes the content so a system can lift a short, direct answer from it. AEO is a part of good SEO rather than a replacement." },
      { q: "Does FAQ schema still help?", a: "Google shows FAQ rich results for a limited set of sites, so do not expect a visual boost. Clear question and answer content still helps people and answer systems." },
      { q: "Can you guarantee a featured snippet?", a: "No. Google chooses snippets automatically and they change. We improve your chances and track the result." },
      { q: "Does AEO matter for voice search?", a: "Voice assistants usually read one answer, so concise, accurate answers and correct local details matter more there." },
    ],
  },
  {
    slug: "geo",
    short: "GEO",
    name: "Generative engine optimization",
    title: "GEO Services | AI Search Optimization for ChatGPT, Perplexity and AI Overviews",
    h1: "Generative engine optimization: be cited by AI search",
    description: "GEO makes your brand easy for ChatGPT, Perplexity, Gemini and Google AI Overviews to find, understand and cite. Prompt tracking, answer-ready content and entity work.",
    definition: "GEO is the practice of making your content and brand clear, factual and trustworthy enough that AI tools mention and cite you in generated answers.",
    goal: "Appear, accurately, when buyers ask AI tools about your category.",
    where: "ChatGPT search, Perplexity, Gemini, Microsoft Copilot and Google AI Overviews and AI Mode.",
    why: [
      "More buyers start research by asking an AI tool, and these tools name a handful of sources instead of ten blue links.",
      "AI answers draw on content they can find, parse and trust, and on what others say about you across the web.",
      "Visibility is not guaranteed and varies by question and day, so it has to be measured, which most businesses have not started doing.",
    ],
    work: [
      { title: "Prompt set and baseline", text: "30 to 50 questions your buyers ask, tested across ChatGPT, Perplexity, Gemini, Copilot and Google AI Overviews, with a recorded baseline." },
      { title: "Citation and mention tracking", text: "Monthly record of whether, where and how your brand and pages are mentioned, and how that compares with competitors." },
      { title: "Answer-ready content", text: "Direct definitions, clear facts, comparison tables, original data and honest limits, the kind of passages that are easy to quote." },
      { title: "Entity clarity", text: "One consistent description of your business, people and services across your site, schema and the wider web." },
      { title: "Third-party presence", text: "Reviews, directories, communities and publications that AI tools tend to draw from, built through genuine channels." },
      { title: "AI crawler access", text: "robots.txt rules for GPTBot, ClaudeBot, PerplexityBot and others, an llms.txt file and Markdown versions of key pages." },
    ],
    checklist: [
      "AI crawlers you want are allowed in robots.txt and not blocked by a firewall",
      "Key pages render their content in HTML without needing scripts",
      "Each key page opens with a clear, quotable summary",
      "Claims carry dates, numbers and sources",
      "Business name, services, location and people are described the same way everywhere",
      "Organization, Person, Service and Article schema match visible content",
      "Comparison and pricing-logic pages exist for the decisions buyers research",
      "Reviews and mentions exist on sites outside your own",
      "llms.txt lists the pages you most want understood (optional, not used by Google)",
    ],
    measures: [
      { title: "Brand mention rate", text: "Share of tracked questions where your brand is named." },
      { title: "Citation rate", text: "Share where one of your pages is linked as a source." },
      { title: "Accuracy", text: "Whether what the AI says about you is correct." },
      { title: "Share of voice", text: "Your mentions compared with named competitors on the same questions." },
    ],
    mistakes: [
      "Promising or buying guaranteed AI rankings",
      "Blocking AI crawlers by accident through a firewall or CDN rule",
      "Hiding key content behind scripts or tabs that never render",
      "Publishing unsourced claims, which are less likely to be trusted",
      "Measuring a single prompt once instead of a set over time",
    ],
    package: "ai-search",
    faqs: [
      { q: "What is the difference between GEO and SEO?", a: "SEO earns rankings and clicks on results pages. GEO makes your content clear and trustworthy enough for AI tools to cite in generated answers. They share foundations, so strong SEO supports GEO." },
      { q: "Can you make ChatGPT recommend my business?", a: "No one can control what an AI says. We make your content easier to find and cite, fix inaccurate information, and track whether you appear for the questions that matter." },
      { q: "Do I need an llms.txt file?", a: "It is optional and Google says it does not use it for Search. It costs little to add and some AI tools may read it." },
      { q: "How do you track AI visibility?", a: "We run a fixed set of buyer questions across the main AI tools each month, record mentions, citations and accuracy, and compare against competitors. Results vary by day, so we look at trends rather than single answers." },
      { q: "How long does GEO take?", a: "Technical and content fixes can be shipped within weeks. Citations depend on authority and third-party presence, which usually build over months." },
    ],
  },
];

export const getDiscipline = (slug: string) => disciplines.find((d) => d.slug === slug);
