import Link from 'next/link';

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

export function ProductPageView({ product }: { product: Product }) {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-content">
          {product.badge && <span className="page-badge">{product.badge}</span>}
          <h1>{product.title}</h1>
          <p className="page-desc">{product.description}</p>
          <div className="hero-cta">
            <Link href="/register/" className="btn btn-white btn-lg">Buy Now</Link>
            <Link href="/pricing/" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', background: 'rgba(255,255,255,0.08)' }}>See Pricing</Link>
          </div>
          <div className="stats-row">
            <span className="stat-pill"><strong>{product.stat.split(' ')[0]}</strong> {product.stat.split(' ').slice(1).join(' ')}</span>
            <span className="stat-pill"><strong>{product.price}</strong></span>
          </div>
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Why Choose {product.title}?</h2>
          <div className="features-grid">
            <div className="feature-card"><div className="feature-icon">🌍</div><h4>Global Coverage</h4><p>195+ countries with city and state-level targeting.</p></div>
            <div className="feature-card"><div className="feature-icon">♾️</div><h4>Non-Expiring Traffic</h4><p>Use your bandwidth on your schedule — no monthly resets.</p></div>
            <div className="feature-card"><div className="feature-icon">📊</div><h4>Real-Time Analytics</h4><p>Monitor usage and success rates from your dashboard.</p></div>
          </div>
          <div className="section-cta"><Link href="/register/" className="btn btn-primary btn-lg">Get Started</Link></div>
        </div>
      </section>
    </main>
  );
}
