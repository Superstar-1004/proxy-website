import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    const htmlPages = [
      'blog', 'pricing', 'login', 'register', 'proxies',
      'residential-proxies', 'isp-proxies', 'datacenter-proxies',
      'mobile-proxies', 'web-unblocker', 'use-cases', 'locations',
      'documentation', 'quick-start-guides', 'help-center', 'integrations',
    ];

    const legacyRedirects = [
      { source: '/request-a-demo/', destination: '/book-a-demo/', permanent: true },
      { source: '/request-a-demo', destination: '/book-a-demo/', permanent: true },
      { source: '/about.html', destination: '/about-us/', permanent: true },
      { source: '/terms.html', destination: '/terms-of-service/', permanent: true },
      { source: '/privacy.html', destination: '/privacy-policy/', permanent: true },
      { source: '/documentation/', destination: '/docs/', permanent: true },
      { source: '/documentation', destination: '/docs/', permanent: true },
      { source: '/location-united-states.html', destination: '/locations/united-states/', permanent: true },
      { source: '/location-united-kingdom.html', destination: '/locations/united-kingdom/', permanent: true },
      { source: '/location-germany.html', destination: '/locations/germany/', permanent: true },
      { source: '/location-india.html', destination: '/locations/india/', permanent: true },
      { source: '/web-scraping.html', destination: '/use-cases/web-scraping/', permanent: true },
      { source: '/travel-fare-aggregation.html', destination: '/use-cases/travel-fare-aggregation/', permanent: true },
      { source: '/price-monitoring.html', destination: '/use-cases/price-monitoring/', permanent: true },
      { source: '/seo-serp-scraping.html', destination: '/use-cases/seo-serp-scraping/', permanent: true },
      { source: '/ai-data-collection.html', destination: '/use-cases/ai-data-collection/', permanent: true },
    ];

    return [
      { source: '/index.html', destination: '/', permanent: true },
      ...htmlPages.map((page) => ({
        source: `/${page}.html`,
        destination: page === 'blog' ? '/blog/' : `/${page}/`,
        permanent: true,
      })),
      ...legacyRedirects,
    ];
  },
};

export default nextConfig;
