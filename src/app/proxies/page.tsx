import Link from 'next/link';
import { PRODUCTS } from '@/lib/products';

export default function ProxiesOverviewPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-content">
          <h1>Proxy Services</h1>
          <p className="page-desc">34M+ ethical proxy network — seamless integration with 650+ tools</p>
          <Link href="/register/" className="btn btn-white btn-lg">Sign up with Google</Link>
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Types of Proxies</h2>
          <div className="solutions-grid">
            {Object.values(PRODUCTS).map((p) => (
              <Link key={p.slug} href={`/${p.slug}/`} className="solution-card">
                <div className="solution-header"><span className="solution-price">{p.price}</span></div>
                <h3>{p.title.replace(' Proxies', '').replace('Web Unblocker', 'Web Unblocker')}</h3>
                <p>{p.description}</p>
                <span className="solution-link">Buy Now →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
