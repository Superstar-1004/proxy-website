import Link from 'next/link';
import { RESOURCE_PAGES } from '@/lib/content';

export function ResourcePageView({ slug }: { slug: keyof typeof RESOURCE_PAGES }) {
  const page = RESOURCE_PAGES[slug];
  if (!page) return null;

  return (
    <main>
      <section className="page-hero-light">
        <div className="container page-hero-content">
          <span className="page-badge">Resources</span>
          <h1>{page.title}</h1>
          <p className="page-desc">{page.description}</p>
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <div className="use-cases-grid">
            {page.items.map((item) => (
              <div key={item.title} className="use-case-card" style={{ cursor: 'default' }}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link href="/register/" className="btn btn-primary">Create Account</Link>
            {slug !== 'documentation' && (
              <Link href="/documentation/" className="btn btn-outline" style={{ marginLeft: 12 }}>Documentation</Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
