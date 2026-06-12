import Link from 'next/link';
import { USE_CASES } from '@/lib/content';
import { UseCasePageView } from '@/components/UseCasePageView';

export default function UseCasesIndexPage() {
  const cases = Object.values(USE_CASES);
  return (
    <main>
      <section className="page-hero-light">
        <div className="container page-hero-content">
          <span className="page-badge">Applications</span>
          <h1>Use Cases</h1>
          <p className="page-desc">Explore how teams use ProxyVault proxies across industries and workflows.</p>
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <div className="use-cases-grid">
            {cases.map((c) => (
              <Link key={c.slug} href={`/use-cases/${c.slug}/`} className="use-case-card">
                <h4>{c.title}</h4>
                <p>{c.description}</p>
                <span className="learn-more">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
