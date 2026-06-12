import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { RESOURCE_PAGES } from '@/lib/content';
import { PageHero, PrimaryButton, OutlineButton, ContentCard } from '@/components/marketing/PageLayout';

const DOC_LINKS: Record<string, { href: string; label: string }[]> = {
  documentation: [
    { href: '/docs/', label: 'API Documentation' },
    { href: '/quick-start-guides/', label: 'Quick-Start Guides' },
    { href: '/integrations/', label: 'Integrations' },
    { href: '/help-center/', label: 'Help Center' },
  ],
  'quick-start-guides': [
    { href: '/docs/', label: 'API Reference' },
    { href: '/register/', label: 'Create Account' },
  ],
  'help-center': [
    { href: '/contact/', label: 'Contact Support' },
    { href: '/docs/', label: 'API Documentation' },
  ],
  integrations: [
    { href: '/docs/', label: 'API Documentation' },
    { href: '/register/', label: 'Get API Keys' },
  ],
};

export function ResourcePageView({ slug }: { slug: keyof typeof RESOURCE_PAGES }) {
  const page = RESOURCE_PAGES[slug];
  if (!page) return null;

  const links = DOC_LINKS[slug] ?? [];

  return (
    <main>
      <PageHero badge="Resources" title={page.title} description={page.description} variant="light" />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {page.items.map((item) => (
              <ContentCard key={item.title} title={item.title} description={item.desc} />
            ))}
          </div>

          {links.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-3">
              {links.map((link) => (
                <OutlineButton key={link.href} href={link.href}>
                  {link.label}
                </OutlineButton>
              ))}
            </div>
          )}

          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryButton href="/register/">Create Account</PrimaryButton>
            {slug !== 'documentation' && (
              <OutlineButton href="/docs/">API Documentation</OutlineButton>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
}
