import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { PROXY_PACKAGES } from '@/lib/constants';
import { HomeHero } from '@/components/marketing/HomeHero';
import { TrustedMarquee } from '@/components/marketing/TrustedMarquee';

export default function HomePage() {
  const products = Object.values(PROXY_PACKAGES);

  return (
    <main>
      <HomeHero />
      <TrustedMarquee />

      <section className="py-16 lg:py-24">
        <Container>
          <h2 className="text-center text-3xl font-bold text-brand-900">Solutions for Every Use Case</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}/`}
                className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-brand-300 hover:shadow-md"
              >
                <div className="mb-4 flex items-center justify-between text-xs font-semibold">
                  <span className="text-brand-600">{p.priceFrom}</span>
                  <span className="text-neutral-400">{p.stat}</span>
                </div>
                <h3 className="text-lg font-bold text-brand-900 group-hover:text-brand-600">
                  {p.title.replace(' Proxies', '')}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{p.description.slice(0, 100)}…</p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-600">Learn more →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-50 py-16 lg:py-24">
        <Container>
          <h2 className="text-center text-3xl font-bold text-brand-900">How Companies Use Our Proxies</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: '/use-cases/web-scraping/', title: 'Web Scraping', desc: 'Collect public data at scale without blocks.' },
              { href: '/use-cases/seo-serp-scraping/', title: 'SEO & SERP', desc: 'Track keyword positions with block-free access.' },
              { href: '/use-cases/price-monitoring/', title: 'Price Monitoring', desc: 'Track competitor pricing in real time.' },
              { href: '/use-cases/ai-data-collection/', title: 'AI Data Collection', desc: 'Scale training data collection reliably.' },
            ].map((uc) => (
              <Link key={uc.href} href={uc.href} className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md">
                <h4 className="font-bold text-brand-900">{uc.title}</h4>
                <p className="mt-2 text-sm text-neutral-600">{uc.desc}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-r from-brand-700 to-brand-500 py-16 text-white">
        <Container className="text-center">
          <h2 className="text-3xl font-bold">Have a Large Project?</h2>
          <p className="mt-4 text-brand-100">Our proxy experts are always available to help you find the right solution.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/register/" className="rounded-lg bg-white px-6 py-3 font-semibold text-brand-800 hover:bg-brand-50">
              Register
            </Link>
            <Link href="/book-a-demo/" className="rounded-lg border border-white/40 px-6 py-3 font-semibold hover:bg-white/10">
              Book a Demo
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
