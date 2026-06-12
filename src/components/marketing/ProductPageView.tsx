import { Container } from '@/components/ui/container';
import type { Product } from '@/lib/products';
import { PageHero, SectionHeading, PrimaryButton, OutlineButton } from '@/components/marketing/PageLayout';

export function ProductPageView({ product }: { product: Product }) {
  const features = [
    { icon: '🌍', title: 'Global Coverage', desc: '195+ countries with city and state-level targeting.' },
    { icon: '♾️', title: 'Non-Expiring Traffic', desc: 'Use your bandwidth on your schedule — no monthly resets.' },
    { icon: '📊', title: 'Real-Time Analytics', desc: 'Monitor usage and success rates from your dashboard.' },
  ];

  return (
    <main>
      <PageHero badge={product.badge} title={product.title} description={product.description}>
        <PrimaryButton href="/register/">Buy Now</PrimaryButton>
        <OutlineButton href="/pricing/" light>
          See Pricing
        </OutlineButton>
      </PageHero>

      <section className="py-8">
        <Container>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-brand-100 px-4 py-2 text-sm font-medium text-brand-800">
              {product.stat}
            </span>
            <span className="rounded-full bg-brand-100 px-4 py-2 text-sm font-medium text-brand-800">
              {product.price}
            </span>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading title={`Why Choose ${product.title}?`} className="text-center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="text-3xl">{f.icon}</div>
                <h4 className="mt-4 font-bold text-brand-900">{f.title}</h4>
                <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <PrimaryButton href="/register/">Get Started</PrimaryButton>
          </div>
        </Container>
      </section>
    </main>
  );
}
