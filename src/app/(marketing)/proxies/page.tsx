import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { PRODUCTS } from '@/lib/products';
import { PageHero, SectionHeading, SolutionCard } from '@/components/marketing/PageLayout';

export const metadata: Metadata = { title: 'Enterprise Proxies' };

export default function ProxiesOverviewPage() {
  return (
    <main>
      <PageHero
        title="Proxy Services"
        description="34M+ ethical proxy network — seamless integration with 650+ tools"
      >
        <Link href="/register/" className="rounded-lg bg-white px-6 py-3 font-semibold text-brand-800 hover:bg-brand-50">
          Get Started
        </Link>
      </PageHero>

      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading title="Types of Proxies" className="text-center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.values(PRODUCTS).map((p) => (
              <SolutionCard
                key={p.slug}
                href={`/${p.slug}/`}
                title={p.title}
                description={p.description}
                price={p.price}
              />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
