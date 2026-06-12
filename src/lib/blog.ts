export type BlogCategory =
  | 'all'
  | 'ai'
  | 'product-news'
  | 'expert-corner'
  | 'proxy-fundamentals'
  | 'python'
  | 'software-comparisons'
  | 'tutorials'
  | 'websites';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategory, 'all'>;
  categoryLabel: string;
  date: string;
  readTime: string;
  featured?: boolean;
  content: string[];
}

export const BLOG_CATEGORIES: { id: BlogCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI' },
  { id: 'product-news', label: 'Product news' },
  { id: 'expert-corner', label: 'Expert corner' },
  { id: 'proxy-fundamentals', label: 'Proxy fundamentals' },
  { id: 'python', label: 'Python' },
  { id: 'software-comparisons', label: 'Software comparisons' },
  { id: 'tutorials', label: 'Tutorials' },
  { id: 'websites', label: 'Websites' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'q1-2026-update',
    title: 'IPNoble Q1 2026 Update: New Products, Enterprise-Grade Features, Broader Coverage',
    excerpt: "Learn what's new in IPNoble in Q1: Rotating Mobile Proxies, Organizations, multi-device access, and more to scale operations efficiently.",
    category: 'product-news',
    categoryLabel: 'Product news',
    date: 'March 26, 2026',
    readTime: '4 min read',
    featured: true,
    content: [
      'IPNoble kicks off 2026 with a major platform update designed to help teams scale proxy operations with less friction. This release introduces Rotating Mobile Proxies, Organizations for team management, and multi-device dashboard access.',
      'Enterprise customers now get SLA-backed uptime guarantees, dedicated account managers, and invoice billing with NET-30 terms. Our Web Unblocker has been upgraded with improved JavaScript rendering and faster CAPTCHA bypass rates.',
      'Coverage expanded across 15 new countries, bringing our total residential pool to 34M+ IPs. Datacenter locations grew to 65+, and ISP proxy availability now spans 35 countries.',
      'All existing customers receive these updates automatically. New users can sign up without a credit card and start testing immediately.',
    ],
  },
  {
    slug: 'web-scraping-ai-training',
    title: 'Web Scraping for AI Training: Sources, Methods, and Use Cases',
    excerpt: 'Explore the top sources, extraction methods, and proxy infrastructure needed to scrape web data for AI training.',
    category: 'ai',
    categoryLabel: 'AI',
    date: 'May 28, 2026',
    readTime: '8 min read',
    content: [
      'Training modern AI models requires vast amounts of diverse, high-quality web data. But collecting that data at scale means navigating anti-bot systems, rate limits, and geo-restrictions that block naive crawlers.',
      'Residential proxies route requests through real household IPs, making traffic appear organic. Web Unblocker adds AI-powered CAPTCHA solving and JavaScript rendering for the toughest targets.',
      'Best practices include respecting robots.txt where applicable, implementing request pacing, rotating IPs intelligently, and validating data quality before feeding it into training pipelines.',
    ],
  },
  {
    slug: 'nlp-sentiment-analysis',
    title: 'NLP for Sentiment Analysis: Techniques, Models & Use Cases',
    excerpt: 'Discover how NLP sentiment analysis and machine learning models convert raw text into actionable business insights.',
    category: 'ai',
    categoryLabel: 'AI',
    date: 'June 4, 2026',
    readTime: '6 min read',
    content: [
      'Sentiment analysis transforms unstructured text from reviews, social media, and forums into quantifiable business intelligence. Proxies enable collection of localized sentiment data across markets.',
      'Modern NLP pipelines combine transformer models with clean, geographically diverse training data. IPNoble residential proxies help gather this data without triggering platform blocks.',
    ],
  },
  {
    slug: 'web-scraping-with-claude',
    title: 'Web Scraping With Claude: A 2026 Guide',
    excerpt: "Learn how to build resilient web scrapers in 2026 using Claude's AI extraction and premium proxies.",
    category: 'ai',
    categoryLabel: 'AI',
    date: 'May 21, 2026',
    readTime: '7 min read',
    content: [
      'Combining LLM-powered extraction with reliable proxy infrastructure creates scrapers that adapt to layout changes and bypass common anti-bot measures.',
      'Claude can parse unstructured HTML into structured JSON, while IPNoble handles IP rotation, geo-targeting, and session management in the background.',
    ],
  },
  {
    slug: 'anti-scraping-detection',
    title: 'Anti-Scraping: How Websites Detect and Block Bots',
    excerpt: 'Learn how websites use anti-scraping techniques to detect and block automated data collection bots.',
    category: 'proxy-fundamentals',
    categoryLabel: 'Proxy fundamentals',
    date: 'June 1, 2026',
    readTime: '11 min read',
    content: [
      'Websites employ multiple layers of bot detection: IP reputation scoring, browser fingerprinting, behavioral analysis, CAPTCHAs, and rate limiting.',
      'Understanding these mechanisms helps you choose the right proxy type. Residential and ISP proxies pass IP reputation checks. Web Unblocker handles fingerprinting and CAPTCHAs automatically.',
    ],
  },
  {
    slug: 'proxy-port-guide',
    title: 'What Is a Proxy Port? Meaning and Common Ports',
    excerpt: 'Learn what proxy ports are, how they differ from proxy addresses, and how to configure them for your use case.',
    category: 'proxy-fundamentals',
    categoryLabel: 'Proxy fundamentals',
    date: 'May 25, 2026',
    readTime: '10 min read',
    content: [
      'A proxy port is the network port your application connects to on the proxy server. Common ports include 8080 for HTTP, 1080 for SOCKS5, and custom ports assigned by your provider.',
      'IPNoble supports HTTP, HTTPS, and SOCKS5 on configurable ports through the dashboard and API.',
    ],
  },
  {
    slug: 'reverse-proxy-vs-load-balancer',
    title: "Reverse Proxy vs Load Balancer: What's the Difference?",
    excerpt: 'Discover the key differences between reverse proxies and load balancers to see which tool you need.',
    category: 'proxy-fundamentals',
    categoryLabel: 'Proxy fundamentals',
    date: 'May 11, 2026',
    readTime: '8 min read',
    content: [
      'Reverse proxies sit in front of servers and handle client requests, often providing caching, SSL termination, and security. Load balancers distribute traffic across multiple backend servers.',
      'Forward proxies like IPNoble route your outbound requests through intermediary IPs — a different use case entirely.',
    ],
  },
  {
    slug: 'beautifulsoup-search-by-class',
    title: "How to Use BeautifulSoup to Search by Class in Python (Beginner's Guide)",
    excerpt: 'Learn how to find elements by class in Python with BeautifulSoup using CSS selectors and regex.',
    category: 'python',
    categoryLabel: 'Python',
    date: 'March 10, 2026',
    readTime: '6 min read',
    content: [
      'BeautifulSoup makes HTML parsing straightforward. Combine it with IPNoble proxies for reliable scraping of dynamic e-commerce and listing sites.',
      'Use soup.select(".class-name") for CSS selectors, or soup.find with class_ parameter for single elements.',
    ],
  },
  {
    slug: 'scrape-login-required-site',
    title: 'How to Scrape a Website That Requires a Login: Python Tutorial',
    excerpt: 'Learn how to scrape login-protected sites with Python Requests in our step-by-step tutorial.',
    category: 'python',
    categoryLabel: 'Python',
    date: 'March 3, 2026',
    readTime: '12 min read',
    content: [
      'Session-based scraping requires maintaining cookies across requests. Use requests.Session() with IPNoble proxies configured via the proxies parameter.',
      'Always respect terms of service and only scrape data you have permission to access.',
    ],
  },
  {
    slug: 'httpx-client-guide',
    title: 'Mastering HTTPX Client for Python: A Comprehensive Guide',
    excerpt: 'Learn what HTTPX is, its benefits compared to Requests, and how to use it for sync and async tasks.',
    category: 'python',
    categoryLabel: 'Python',
    date: 'February 23, 2026',
    readTime: '13 min read',
    content: [
      'HTTPX supports both synchronous and asynchronous requests, HTTP/2, and proxy configuration — ideal for high-concurrency scraping with IPNoble.',
    ],
  },
  {
    slug: 'residential-vs-isp-vs-datacenter',
    title: 'Residential vs ISP vs Datacenter: Which to Choose?',
    excerpt: 'A practical guide to picking the right proxy type for your use case, budget, and target sites.',
    category: 'tutorials',
    categoryLabel: 'Tutorials',
    date: 'April 15, 2026',
    readTime: '9 min read',
    content: [
      'Residential proxies offer maximum anonymity via real household IPs — best for tough targets. ISP proxies combine datacenter speed with residential legitimacy. Datacenter proxies are fastest and cheapest for open targets.',
      'Choose based on your target sites, session requirements, and budget. Most scraping projects start with residential and add datacenter for speed-critical tasks.',
    ],
  },
  {
    slug: 'scraping-best-practices-2026',
    title: 'Web Scraping Best Practices in 2026',
    excerpt: 'Rotation strategies, request pacing, error handling, and compliance tips for production scrapers.',
    category: 'tutorials',
    categoryLabel: 'Tutorials',
    date: 'April 2, 2026',
    readTime: '10 min read',
    content: [
      'Production scrapers need retry logic, exponential backoff, proxy rotation, user-agent rotation, and monitoring. Non-expiring traffic from IPNoble lets you scale without waste.',
    ],
  },
  {
    slug: 'python-requests-proxy-setup',
    title: 'How to Set Up Proxies with Python Requests',
    excerpt: 'Step-by-step tutorial for configuring IPNoble residential proxies in Python.',
    category: 'tutorials',
    categoryLabel: 'Tutorials',
    date: 'March 18, 2026',
    readTime: '7 min read',
    content: [
      'import requests\n\nproxies = {\n  "http": "http://user:pass@gate.ipnoble.com:12321",\n  "https": "http://user:pass@gate.ipnoble.com:12321",\n}\n\nresponse = requests.get("https://httpbin.org/ip", proxies=proxies)',
    ],
  },
  {
    slug: '2025-recap',
    title: '2025 Recap: Key Achievements and Innovations',
    excerpt: "IPNoble's 2025 in review: new features, optimized performance, and expanded locations.",
    category: 'product-news',
    categoryLabel: 'Product news',
    date: 'December 29, 2025',
    readTime: '4 min read',
    content: [
      '2025 brought Web Unblocker, expanded mobile proxy coverage, dashboard redesign, and 2FA for all accounts. We grew to serve 10,000+ clients worldwide.',
    ],
  },
  {
    slug: 'adspower-vs-multilogin',
    title: 'AdsPower vs Multilogin: Which Antidetect Browser Is Right for You?',
    excerpt: 'Compare AdsPower vs Multilogin to choose the ideal anti-detect browser for managing multiple accounts.',
    category: 'software-comparisons',
    categoryLabel: 'Software comparisons',
    date: 'June 9, 2026',
    readTime: '7 min read',
    content: [
      'Both tools pair well with IPNoble proxies for multi-account management. AdsPower offers competitive pricing; Multilogin targets enterprise teams with advanced fingerprint control.',
    ],
  },
  {
    slug: 'fix-youtube-error-400',
    title: 'How to Fix YouTube Error 400: A Step-by-Step Guide',
    excerpt: 'Learn how to troubleshoot and fix YouTube Error 400 with our expert step-by-step guide.',
    category: 'websites',
    categoryLabel: 'Websites',
    date: 'March 12, 2026',
    readTime: '15 min read',
    content: [
      'YouTube Error 400 often relates to cookie issues, outdated apps, or network restrictions. Mobile proxies can help access region-locked content legitimately for testing purposes.',
    ],
  },
  {
    slug: 'ai-data-collection-explained',
    title: 'AI Data Collection Explained: Process, Examples, and Ethics',
    excerpt: 'Discover essential methods and best practices for effective data collection for AI.',
    category: 'expert-corner',
    categoryLabel: 'Expert corner',
    date: 'January 13, 2026',
    readTime: '6 min read',
    content: [
      'Ethical AI data collection requires transparency, consent where applicable, and compliance with platform terms. Proxies enable geographic diversity in training datasets.',
    ],
  },
  {
    slug: 'fraud-detection-real-time-data',
    title: 'How Modern Fraud Solutions Use Real-Time Data to Detect Fraud Quicker',
    excerpt: 'Detect and stop fraud in real time using live signals, IP intelligence, and adaptive risk scoring.',
    category: 'expert-corner',
    categoryLabel: 'Expert corner',
    date: 'January 26, 2026',
    readTime: '7 min read',
    content: [
      'IP intelligence and proxy detection are core components of modern fraud prevention. Understanding proxy types helps fraud teams distinguish legitimate users from bad actors.',
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  if (category === 'all') return BLOG_POSTS;
  return BLOG_POSTS.filter((p) => p.category === category);
}

export function getFeaturedPost(): BlogPost {
  return BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];
}

export function getCategorySections() {
  const sectionCategories: Exclude<BlogCategory, 'all'>[] = [
    'ai', 'expert-corner', 'product-news', 'proxy-fundamentals',
    'python', 'software-comparisons', 'tutorials', 'websites',
  ];
  return sectionCategories.map((cat) => ({
    category: cat,
    label: BLOG_CATEGORIES.find((c) => c.id === cat)?.label ?? cat,
    posts: BLOG_POSTS.filter((p) => p.category === cat).slice(0, 3),
  })).filter((s) => s.posts.length > 0);
}
