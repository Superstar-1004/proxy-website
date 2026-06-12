import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { USE_CASES } from '@/lib/content';
import { PageHero, ContentCard } from '@/components/marketing/PageLayout';

export default function UseCasesIndexPage() {
  const cases = Object.values(USE_CASES);

  return (
    <main>
      <PageHero
        badge="Applications"
        title="Use Cases"
        description="Explore how teams use IPNoble proxies across industries and workflows."
        variant="light"
      />
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((c) => (
              <ContentCard
                key={c.slug}
                href={`/use-cases/${c.slug}/`}
                title={c.title}
                description={c.description}
                footer="Learn more →"
              />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
