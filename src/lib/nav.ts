import type { LucideIcon } from 'lucide-react';
import {
  Home,
  Server,
  Zap,
  Smartphone,
  Lock,
  Crown,
  Globe,
  Plane,
  TrendingDown,
  BarChart3,
  Bot,
  FileText,
  Rocket,
  HelpCircle,
  MessageSquare,
  Settings,
  Bell,
  Shield,
  ThumbsUp,
} from 'lucide-react';

export const SITE = {
  name: 'IPNoble',
  promo: 'IPNoble Q1 2026 Update: New Products, Enterprise-Grade Features, Broader Coverage',
  promoLink: '/blog/q1-2026-update/',
};

export type NavLink = {
  href: string;
  label: string;
  desc?: string;
  badge?: string;
  icon?: LucideIcon;
  iconBg?: string;
};

export type NavMenuLabel = 'Products' | 'Pricing' | 'Use Cases' | 'Locations' | 'Resources';

export const NAV_LABELS: NavMenuLabel[] = ['Products', 'Pricing', 'Use Cases', 'Locations', 'Resources'];

export const PRODUCTS_MENU = {
  proxies: [
    { href: '/residential-proxies/', label: 'Residential Proxies', desc: 'Global pool, precise targeting', icon: Home, iconBg: 'bg-teal-100 text-teal-600' },
    { href: '/datacenter-proxies/', label: 'Datacenter Proxies', desc: 'Top speeds, zero thread limits', icon: Server, iconBg: 'bg-emerald-100 text-emerald-600' },
    { href: '/web-unblocker/', label: 'Web Unblocker', desc: 'Automated unblocking', icon: Lock, iconBg: 'bg-orange-100 text-orange-600', badge: 'New' },
    { href: '/proxies/', label: 'Enterprise Proxies', desc: 'Fast scaling & integration', icon: Crown, iconBg: 'bg-blue-100 text-blue-600' },
    { href: '/isp-proxies/', label: 'ISP Proxies', desc: 'High-performance static IPs', icon: Zap, iconBg: 'bg-pink-100 text-pink-600' },
    { href: '/mobile-proxies/', label: 'Mobile Proxies', desc: 'Real devices, top carriers', icon: Smartphone, iconBg: 'bg-sky-100 text-sky-600' },
  ] satisfies NavLink[],
  tools: [
    { href: '/integrations/', label: 'Integrations', desc: '650+ tool connections', icon: Settings, iconBg: 'bg-brand-100 text-brand-600' },
    { href: '/docs/', label: 'API Documentation', desc: 'REST API reference', icon: FileText, iconBg: 'bg-brand-100 text-brand-600' },
    { href: '/help-center/', label: 'Help Center', desc: 'FAQs and support', icon: HelpCircle, iconBg: 'bg-brand-100 text-brand-600' },
    { href: '/quick-start-guides/', label: 'Quick-Start Guides', desc: 'Setup in 10 minutes', icon: Rocket, iconBg: 'bg-brand-100 text-brand-600' },
  ] satisfies NavLink[],
};

export const PRICING_MENU: NavLink[] = [
  { href: '/pricing/#residential', label: 'Residential Proxies', desc: 'from $1.75/GB', icon: Home, iconBg: 'bg-teal-100 text-teal-600' },
  { href: '/pricing/#mobile', label: 'Mobile Proxies', desc: 'from $10.11/day', icon: Smartphone, iconBg: 'bg-sky-100 text-sky-600' },
  { href: '/pricing/#isp', label: 'ISP Proxies', desc: 'from $1.80/proxy', icon: Zap, iconBg: 'bg-pink-100 text-pink-600' },
  { href: '/pricing/#unblocker', label: 'Web Unblocker', desc: 'from $1.00/1000 requests', icon: Lock, iconBg: 'bg-orange-100 text-orange-600', badge: 'New' },
  { href: '/pricing/#datacenter', label: 'Datacenter Proxies', desc: 'from $1.39/proxy', icon: Server, iconBg: 'bg-emerald-100 text-emerald-600' },
  { href: '/contact/', label: 'Enterprise Proxies', desc: 'custom pricing', icon: Crown, iconBg: 'bg-blue-100 text-blue-600' },
];

export const USE_CASES_MENU = {
  links: [
    { href: '/use-cases/web-scraping/', label: 'Web Scraping', icon: Globe, iconBg: 'bg-brand-100 text-brand-600' },
    { href: '/use-cases/price-monitoring/', label: 'Price Monitoring', icon: TrendingDown, iconBg: 'bg-brand-100 text-brand-600' },
    { href: '/use-cases/seo-serp-scraping/', label: 'SEO and SERP Scraping', icon: BarChart3, iconBg: 'bg-brand-100 text-brand-600' },
    { href: '/use-cases/travel-fare-aggregation/', label: 'Travel Fare Aggregation', icon: Plane, iconBg: 'bg-brand-100 text-brand-600' },
  ] satisfies NavLink[],
  featured: {
    href: '/use-cases/ai-data-collection/',
    label: 'AI Data Collection',
    icon: Bot,
  },
};

export const LOCATIONS_MENU = {
  locations: [
    { href: '/locations/united-states/', flag: '🇺🇸', label: 'United States', ips: '4,267,587 IPs' },
    { href: '/locations/united-kingdom/', flag: '🇬🇧', label: 'United Kingdom', ips: '2,023,559 IPs' },
    { href: '/locations/germany/', flag: '🇩🇪', label: 'Germany', ips: '2,016,461 IPs' },
    { href: '/locations/india/', flag: '🇮🇳', label: 'India', ips: '3,712,450 IPs' },
    { href: '/locations/', flag: '🇫🇷', label: 'France', ips: '1,987,821 IPs' },
    { href: '/locations/', flag: '🇨🇳', label: 'China', ips: '1,850,000 IPs' },
  ],
  moreHref: '/locations/',
};

export const RESOURCES_MENU = {
  learn: [
    { href: '/docs/', label: 'Documentation', icon: FileText },
    { href: '/quick-start-guides/', label: 'Quick-Start Guides', icon: Rocket },
    { href: '/help-center/', label: 'Help Center', icon: HelpCircle },
    { href: '/blog/', label: 'Blog', icon: MessageSquare },
  ],
  explore: [
    { href: '/integrations/', label: 'Integrations', icon: Settings },
    { href: '/blog/', label: "What's New", icon: Bell },
    { href: '/terms-of-service/', label: 'KYC Policy', icon: Shield },
    { href: '/about-us/', label: 'Case Studies', icon: ThumbsUp },
  ],
  featured: {
    href: '/blog/q1-2026-update/',
    category: 'Product news',
    title: 'IPNoble Q1 2026 Update: New Products, Enterprise-Grade Features, Broader Coverage',
  },
};

export const RECOGNIZED_BY = ['Google', 'G2', 'Trustpilot', 'Capterra'];

// Legacy export for any remaining imports
export type NavItem =
  | { label: string; mega: true; items: { title: string; links: NavLink[] }[] }
  | { label: string; links: NavLink[] };

export const NAV: NavItem[] = [];
