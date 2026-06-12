export type ProxyType = 'residential' | 'datacenter' | 'isp' | 'mobile';

export const SITE = {
  name: 'ProxyVault',
  tagline: 'Premium Quality Proxies, Unbeatable Prices',
  promo: 'ProxyVault Q1 2026 Update: New Products, Enterprise-Grade Features, Broader Coverage',
  email: 'support@proxyvault.com',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
};

export const NAV = {
  products: [
    { href: '/residential-proxies', label: 'Residential Proxies', desc: 'Global pool, precise targeting' },
    { href: '/datacenter-proxies', label: 'Datacenter Proxies', desc: 'Top speeds, zero thread limits' },
    { href: '/isp-proxies', label: 'ISP Proxies', desc: 'High-performance static IPs' },
    { href: '/mobile-proxies', label: 'Mobile Proxies', desc: 'Real devices, top carriers' },
  ],
  resources: [
    { href: '/docs', label: 'API Documentation' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ],
};

export const DASHBOARD_NAV = [
  { href: '/dashboard/', label: 'Overview', icon: 'LayoutDashboard' },
  { href: '/dashboard/proxies/', label: 'Buy Proxies', icon: 'ShoppingCart' },
  { href: '/dashboard/subscription/', label: 'Subscription', icon: 'CreditCard' },
  { href: '/dashboard/usage/', label: 'Usage', icon: 'BarChart3' },
  { href: '/dashboard/billing/', label: 'Billing', icon: 'Receipt' },
  { href: '/dashboard/api-keys/', label: 'API Keys', icon: 'Key' },
  { href: '/dashboard/profile/', label: 'Profile', icon: 'User' },
] as const;

export const PROXY_PACKAGES = {
  residential: {
    title: 'Residential Proxies',
    slug: 'residential-proxies',
    description: '32M+ real residential IPs across 195+ countries. Ideal for web scraping, SEO, and geo-targeted research.',
    priceFrom: '$1.75/GB',
    stat: '32M+ IPs',
    features: ['195+ countries', 'City & state targeting', 'Non-expiring traffic', 'HTTP & SOCKS5'],
    tiers: [
      { name: '1 GB', price: 7.0, unit: 'GB', popular: false },
      { name: '10 GB', price: 5.25, unit: 'GB', popular: true },
      { name: '50 GB', price: 4.9, unit: 'GB', popular: false },
      { name: '100 GB', price: 4.25, unit: 'GB', popular: false },
    ],
  },
  datacenter: {
    title: 'Datacenter Proxies',
    slug: 'datacenter-proxies',
    description: 'High-speed datacenter IPs in 60+ locations. Best for speed-critical scraping and monitoring.',
    priceFrom: '$1.39/proxy',
    stat: '60+ locations',
    features: ['Unlimited bandwidth', 'Zero thread limits', '60+ locations', 'HTTP & SOCKS5'],
    tiers: [
      { name: '10 Proxies', price: 15.9, unit: 'month', popular: false },
      { name: '50 Proxies', price: 74.5, unit: 'month', popular: true },
      { name: '100 Proxies', price: 139, unit: 'month', popular: false },
    ],
  },
  isp: {
    title: 'ISP Proxies',
    slug: 'isp-proxies',
    description: '500K+ static ISP IPs. Datacenter speed with residential anonymity for long sessions.',
    priceFrom: '$1.80/proxy',
    stat: '500K+ IPs',
    features: ['Dedicated IPs', '31+ countries', 'SOCKS5 support', 'Unlimited sessions'],
    tiers: [
      { name: '24 Hours', price: 1.8, unit: 'proxy', popular: false },
      { name: '60 Days', price: 2.55, unit: 'proxy', popular: true },
      { name: '90 Days', price: 2.4, unit: 'proxy', popular: false },
    ],
  },
  mobile: {
    title: 'Mobile Proxies',
    slug: 'mobile-proxies',
    description: '4.5M+ real mobile IPs from top carriers. Perfect for social platforms and app QA.',
    priceFrom: '$10.11/day',
    stat: '4.5M+ IPs',
    features: ['Real mobile devices', '4G/5G networks', '40+ countries', 'Auto-rotate'],
    tiers: [
      { name: 'Daily', price: 10.11, unit: 'day', popular: false },
      { name: 'Monthly', price: 117, unit: 'month', popular: true },
    ],
  },
} as const;

export const SUBSCRIPTION_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    price: 29,
    period: 'month',
    description: 'For individuals and small projects',
    features: ['5 GB residential traffic', '2 API keys', 'Email support', 'Basic analytics'],
    cta: 'Start Free Trial',
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 99,
    period: 'month',
    description: 'For growing teams and businesses',
    features: ['50 GB residential traffic', '10 API keys', 'Priority support', 'Advanced analytics', 'Team access'],
    popular: true,
    cta: 'Get Started',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 299,
    period: 'month',
    description: 'For large-scale operations',
    features: ['500 GB traffic', 'Unlimited API keys', 'Dedicated manager', 'SLA guarantee', 'Custom integrations'],
    cta: 'Contact Sales',
  },
] as const;
