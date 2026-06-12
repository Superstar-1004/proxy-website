export const SITE = {
  name: 'ProxyVault',
  promo: 'ProxyVault Q1 2026 Update: New Products, Enterprise-Grade Features, Broader Coverage',
  promoLink: '/blog/q1-2026-update/',
};

export type NavLink = { href: string; label: string; desc?: string; badge?: string };

export type NavItem =
  | { label: string; mega: true; items: { title: string; links: NavLink[] }[] }
  | { label: string; links: NavLink[] };

export const NAV: NavItem[] = [
  {
    label: 'Products',
    mega: true,
    items: [
      {
        title: 'Proxies',
        links: [
          { href: '/residential-proxies/', label: 'Residential Proxies', desc: 'Global pool, precise targeting' },
          { href: '/isp-proxies/', label: 'ISP Proxies', desc: 'High-performance static IPs' },
          { href: '/datacenter-proxies/', label: 'Datacenter Proxies', desc: 'Top speeds, zero thread limits' },
          { href: '/mobile-proxies/', label: 'Mobile Proxies', desc: 'Real devices, top carriers' },
          { href: '/web-unblocker/', label: 'Web Unblocker', desc: 'Automated unblocking', badge: 'New' },
          { href: '/proxies/', label: 'Enterprise Proxies', desc: 'Fast scaling & integration' },
        ],
      },
      {
        title: 'Tools',
        links: [
          { href: '#', label: 'Chrome Proxy Extension' },
          { href: '#', label: 'Firefox Proxy Add-on' },
          { href: '#', label: 'Proxy Tester' },
          { href: '#', label: 'Online Proxy Checker' },
        ],
      },
    ],
  },
  {
    label: 'Pricing',
    links: [
      { href: '/pricing/#residential', label: 'Residential', desc: 'from $1.75/GB' },
      { href: '/pricing/#isp', label: 'ISP', desc: 'from $1.80/proxy' },
      { href: '/pricing/#datacenter', label: 'Datacenter', desc: 'from $1.39/proxy' },
      { href: '/pricing/#mobile', label: 'Mobile', desc: 'from $10.11/GB' },
      { href: '/pricing/#unblocker', label: 'Web Unblocker', desc: 'from $1.00/1000 req' },
    ],
  },
  {
    label: 'Use Cases',
    links: [
      { href: '/use-cases/web-scraping/', label: 'Web Scraping' },
      { href: '/use-cases/travel-fare-aggregation/', label: 'Travel Fare Aggregation' },
      { href: '/use-cases/price-monitoring/', label: 'Price Monitoring' },
      { href: '/use-cases/seo-serp-scraping/', label: 'SEO & SERP Scraping' },
      { href: '/use-cases/ai-data-collection/', label: 'AI Data Collection' },
    ],
  },
  {
    label: 'Locations',
    links: [
      { href: '/locations/united-states/', label: 'United States', desc: '4.2M+ IPs' },
      { href: '/locations/united-kingdom/', label: 'United Kingdom', desc: '2.0M+ IPs' },
      { href: '/locations/germany/', label: 'Germany', desc: '2.0M+ IPs' },
      { href: '/locations/india/', label: 'India', desc: '3.7M+ IPs' },
      { href: '/locations/', label: 'All Locations' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { href: '/documentation/', label: 'Documentation' },
      { href: '/quick-start-guides/', label: 'Quick-Start Guides' },
      { href: '/help-center/', label: 'Help Center' },
      { href: '/blog/', label: 'Blog' },
      { href: '/integrations/', label: 'Integrations' },
    ],
  },
];
