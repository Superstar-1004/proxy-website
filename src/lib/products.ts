export interface Product {
  slug: string;
  title: string;
  description: string;
  price: string;
  stat: string;
  badge?: string;
}

export const PRODUCTS: Record<string, Product> = {
  'residential-proxies': {
    slug: 'residential-proxies',
    title: 'Residential Proxies',
    description: 'Get access to over 32M rotating residential proxies with global coverage and highly customizable settings.',
    price: 'from $1.75/GB',
    stat: '32M+ IPs in 195+ countries',
  },
  'isp-proxies': {
    slug: 'isp-proxies',
    title: 'ISP Proxies',
    description: '500K+ static ISP IPs with datacenter speed and residential anonymity.',
    price: 'from $1.80/proxy',
    stat: '500K+ unique IPs',
  },
  'datacenter-proxies': {
    slug: 'datacenter-proxies',
    title: 'Datacenter Proxies',
    description: 'High-speed datacenter IPs in 60+ locations with zero thread limits.',
    price: 'from $1.39/proxy',
    stat: '60+ locations',
  },
  'mobile-proxies': {
    slug: 'mobile-proxies',
    title: 'Mobile Proxies',
    description: '4.5M+ real mobile IPs from top carriers worldwide.',
    price: 'from $10.11/day',
    stat: '4.5M+ IPs',
  },
  'web-unblocker': {
    slug: 'web-unblocker',
    title: 'Web Unblocker',
    description: 'AI-powered automated unblocking for web scraping.',
    price: 'from $1.00/1000 requests',
    stat: 'AI',
    badge: 'New',
  },
};
