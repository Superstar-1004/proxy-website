export interface ContentPage {
  slug: string;
  title: string;
  description: string;
  badge?: string;
  heroType?: 'dark' | 'light';
  stats?: { label: string; value: string }[];
  sections: { heading: string; body: string; bullets?: string[] }[];
  recommended?: { href: string; title: string; price: string; desc: string }[];
}

export const USE_CASES: Record<string, ContentPage> = {
  'web-scraping': {
    slug: 'web-scraping',
    title: 'Web Scraping Proxies',
    description: 'Scale web scraping with IPNoble proxies. Millions of IPs, smart rotation, and 99.4% success rates.',
    badge: 'Use Case',
    stats: [{ value: '32M+', label: 'IPs' }, { value: '99.4%', label: 'success rate' }, { value: '650+', label: 'integrations' }],
    sections: [{
      heading: 'Scrape Without Getting Blocked',
      body: 'Websites rate-limit datacenter IPs fast. Residential and ISP proxies route requests through real user connections, keeping scrapers running reliably.',
      bullets: ['Per-request or sticky session rotation', 'HTTP, HTTPS, and SOCKS5', 'REST API for programmatic management'],
    }],
    recommended: [
      { href: '/residential-proxies/', title: 'Residential', price: 'from $1.75/GB', desc: 'Best for large-scale scraping with maximum anonymity.' },
      { href: '/datacenter-proxies/', title: 'Datacenter', price: 'from $1.39/proxy', desc: 'Fastest option for speed-critical scraping.' },
      { href: '/web-unblocker/', title: 'Web Unblocker', price: 'from $1.00/1000 req', desc: 'AI-powered unblocking for tough targets.' },
    ],
  },
  'travel-fare-aggregation': {
    slug: 'travel-fare-aggregation',
    title: 'Travel Fare Aggregation',
    description: 'Access airline, hotel, and booking sites without CAPTCHAs or blocks.',
    badge: 'Use Case',
    stats: [{ value: '195+', label: 'countries' }, { value: 'City-level', label: 'targeting' }],
    sections: [{ heading: 'Accurate Fares From Every Market', body: 'Travel sites show different prices by location. IPNoble lets you query fares as a local user in any country.', bullets: ['Scrape airlines, hotels, and car rentals', 'Bypass geo-pricing restrictions', 'Sticky sessions for booking flows'] }],
    recommended: [
      { href: '/residential-proxies/', title: 'Residential', price: 'from $1.75/GB', desc: 'Geo-targeted IPs in each market.' },
      { href: '/isp-proxies/', title: 'ISP', price: 'from $1.80/proxy', desc: 'Static IPs for fare monitoring.' },
    ],
  },
  'price-monitoring': {
    slug: 'price-monitoring',
    title: 'Price Monitoring',
    description: 'Track competitor pricing and retail trends in real time without blocks.',
    badge: 'Use Case',
    sections: [{ heading: 'Stay Ahead of Market Pricing', body: 'Automated price monitoring at scale for MAP enforcement and dynamic repricing.', bullets: ['Monitor major retailers and marketplaces', 'Track stock and promotional pricing', 'Schedule checks across thousands of SKUs'] }],
    recommended: [
      { href: '/residential-proxies/', title: 'Residential', price: 'from $1.75/GB', desc: 'Geo-accurate local pricing.' },
      { href: '/datacenter-proxies/', title: 'Datacenter', price: 'from $1.39/proxy', desc: 'High-speed catalog monitoring.' },
    ],
  },
  'seo-serp-scraping': {
    slug: 'seo-serp-scraping',
    title: 'SEO & SERP Scraping',
    description: 'Track keyword positions with block-free proxy access to SERP data.',
    badge: 'Use Case',
    sections: [{ heading: 'Accurate Rank Tracking Everywhere', body: 'Collect unbiased SERP data from any city or country including featured snippets and local packs.', bullets: ['Google, Bing, and regional search engines', 'City and state-level geo-targeting', 'Compatible with major rank trackers'] }],
    recommended: [
      { href: '/residential-proxies/', title: 'Residential', price: 'from $1.75/GB', desc: 'Most accurate SERP results.' },
      { href: '/mobile-proxies/', title: 'Mobile', price: 'from $10.11/day', desc: 'Mobile SERP layouts.' },
    ],
  },
  'ai-data-collection': {
    slug: 'ai-data-collection',
    title: 'AI Data Collection',
    description: 'Scale AI training data collection with proxies that bypass bans and rate limits.',
    badge: 'Use Case',
    sections: [{ heading: 'Build Better Training Datasets', body: 'LLMs need diverse web data. IPNoble helps teams collect text and structured content at scale.', bullets: ['Multilingual content from global sources', 'Web Unblocker for CAPTCHAs and JS rendering', 'Programmatic ordering via REST API'] }],
    recommended: [
      { href: '/web-unblocker/', title: 'Web Unblocker', price: 'from $1.00/1000 req', desc: 'Automated unblocking.' },
      { href: '/residential-proxies/', title: 'Residential', price: 'from $1.75/GB', desc: 'Large-scale crawling.' },
    ],
  },
};

export const LOCATIONS: Record<string, ContentPage & { flag: string; ipCount: string; cities?: { name: string; ips: string }[] }> = {
  'united-states': {
    slug: 'united-states', flag: '🇺🇸', ipCount: '4.2M+',
    title: 'US Proxy Servers', description: 'Access 4.2M+ US IPs with city and state-level targeting.',
    badge: '🇺🇸 United States',
    stats: [{ value: '4.2M+', label: 'IPs' }, { value: '50', label: 'states' }],
    sections: [{ heading: 'Top US Proxy Coverage', body: 'Target any US market with city and state-level precision across all 50 states.' }],
    cities: [
      { name: 'New York', ips: '892,450 IPs' }, { name: 'Los Angeles', ips: '654,320 IPs' },
      { name: 'Chicago', ips: '421,890 IPs' }, { name: 'Houston', ips: '312,540 IPs' },
    ],
  },
  'united-kingdom': {
    slug: 'united-kingdom', flag: '🇬🇧', ipCount: '2.0M+',
    title: 'UK Proxy Servers', description: 'Access 2.0M+ UK IPs across England, Scotland, Wales, and Northern Ireland.',
    badge: '🇬🇧 United Kingdom',
    sections: [{ heading: 'UK Coverage', body: 'City-level targeting across all UK regions.' }],
    cities: [{ name: 'London', ips: '512,340 IPs' }, { name: 'Manchester', ips: '187,650 IPs' }],
  },
  germany: {
    slug: 'germany', flag: '🇩🇪', ipCount: '2.0M+',
    title: 'Germany Proxy Servers', description: 'Access 2.0M+ German IPs across all 16 Bundesländer.',
    badge: '🇩🇪 Germany',
    sections: [{ heading: 'German Coverage', body: 'Target the largest EU economy with localized proxy IPs.' }],
    cities: [{ name: 'Berlin', ips: '342,180 IPs' }, { name: 'Munich', ips: '198,450 IPs' }],
  },
  india: {
    slug: 'india', flag: '🇮🇳', ipCount: '3.7M+',
    title: 'India Proxy Servers', description: 'Access 3.7M+ Indian IPs across all major metros.',
    badge: '🇮🇳 India',
    sections: [{ heading: 'India Coverage', body: 'One of the largest proxy pools for the Indian market.' }],
    cities: [{ name: 'Mumbai', ips: '612,450 IPs' }, { name: 'Delhi', ips: '534,280 IPs' }],
  },
};

export const RESOURCE_PAGES: Record<string, { title: string; description: string; items: { title: string; desc: string }[] }> = {
  documentation: {
    title: 'Documentation',
    description: 'Full developer and team documentation for quick setup and scaling.',
    items: [
      { title: 'Getting Started', desc: 'Account setup and first proxy connection.' },
      { title: 'Residential Proxies', desc: 'Configuration, rotation, and geo-targeting.' },
      { title: 'API Reference', desc: 'REST API endpoints for orders and users.' },
      { title: 'Sub-Users & Teams', desc: 'Workspace controls and permissions.' },
    ],
  },
  'quick-start-guides': {
    title: 'Quick-Start Guides',
    description: 'Step-by-step tutorials to configure proxies in under 10 minutes.',
    items: [
      { title: 'Residential Proxies Setup', desc: 'cURL, Python, Node.js, and PHP examples.' },
      { title: 'Scrapy Integration', desc: 'Add IPNoble middleware to Scrapy.' },
      { title: 'Puppeteer & Playwright', desc: 'Browser automation with proxies.' },
    ],
  },
  'help-center': {
    title: 'Help Center',
    description: 'FAQs, troubleshooting, and 24/7 customer support.',
    items: [
      { title: 'Getting Started', desc: 'Account creation and first purchase.' },
      { title: 'Billing & Payments', desc: 'Invoices, refunds, and top-ups.' },
      { title: 'Technical Support', desc: 'Connection errors and configuration.' },
    ],
  },
  integrations: {
    title: 'Integrations',
    description: 'Connect IPNoble to 650+ tools and platforms.',
    items: [
      { title: 'Python', desc: 'Requests, Scrapy, httpx, and aiohttp.' },
      { title: 'Node.js', desc: 'Puppeteer, Playwright, and axios.' },
      { title: 'Browsers', desc: 'Chrome and Firefox extensions.' },
    ],
  },
};
