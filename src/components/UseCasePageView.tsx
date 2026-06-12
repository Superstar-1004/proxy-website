import Link from 'next/link';
import { Container } from '@/components/ui/container';
import type { ContentPage } from '@/lib/content';
import {
  PageHero,
  CtaSection,
  SectionHeading,
  PrimaryButton,
  OutlineButton,
  SolutionCard,
} from '@/components/marketing/PageLayout';

export function UseCasePageView({ page }: { page: ContentPage }) {
  return (
    <main>
      <PageHero badge={page.badge} title={page.title} description={page.description} stats={page.stats}>
        <PrimaryButton href="/register/">Get Started</PrimaryButton>
        <OutlineButton href="/pricing/" light>
          View Pricing
        </OutlineButton>
      </PageHero>

      {page.sections.map((section) => (
        <section key={section.heading} className="py-16 lg:py-20">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionHeading title={section.heading} />
                <p className="mt-4 text-neutral-600">{section.body}</p>
                {section.bullets && (
                  <ul className="mt-6 space-y-3">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-neutral-700">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-600">
                          ✓
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-brand-100 to-brand-200 text-4xl text-brand-600">
                ▶
              </div>
            </div>
          </Container>
        </section>
      ))}

      {page.recommended && (
        <section className="border-t border-neutral-200 bg-brand-50 py-16 lg:py-20">
          <Container>
            <SectionHeading title="Recommended Proxy Types" className="text-center" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {page.recommended.map((r) => (
                <SolutionCard key={r.href} href={r.href} title={r.title} description={r.desc} price={r.price} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaSection title="Ready to Get Started?" />
      <section className="border-t border-neutral-200 py-8">
        <Container className="text-center">
          <Link href="/use-cases/" className="text-sm font-semibold text-brand-600 hover:underline">
            ← All Use Cases
          </Link>
        </Container>
      </section>
    </main>
  );
}
