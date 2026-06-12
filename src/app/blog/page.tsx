import { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  BlogFeatured,
  BlogNewsletter,
  BlogCategorySection,
  BlogFilters,
} from '@/components/blog/BlogComponents';
import { getFeaturedPost, getCategorySections } from '@/lib/blog';
import { CtaSection } from '@/components/marketing/PageLayout';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Stay updated with ProxyVault blog — proxy news, tutorials, and industry insights.',
};

export default function BlogPage() {
  const featured = getFeaturedPost();
  const sections = getCategorySections();

  return (
    <main>
      <section className="border-b border-neutral-200 bg-brand-50 py-12">
        <Container>
          <nav className="mb-4 text-sm text-neutral-500" aria-label="Breadcrumb">
            <Link href="/blog/" className="hover:text-brand-600">Blog</Link>
          </nav>
          <h1 className="text-3xl font-bold text-brand-900 lg:text-4xl">Stay Updated with ProxyVault Blog</h1>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <Suspense fallback={<div className="h-12" />}>
            <BlogFilters />
          </Suspense>
          <BlogFeatured
            slug={featured.slug}
            title={featured.title}
            excerpt={featured.excerpt}
            categoryLabel={featured.categoryLabel}
          />
        </Container>
      </section>

      <BlogNewsletter />

      {sections.map((section) => (
        <BlogCategorySection
          key={section.category}
          label={section.label}
          category={section.category}
          posts={section.posts}
        />
      ))}

      <CtaSection title="Have a Large Project?" description="Our proxy experts are always available to help you find the right solution." />
    </main>
  );
}
