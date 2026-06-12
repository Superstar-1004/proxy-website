import { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BlogFeatured,
  BlogNewsletter,
  BlogCategorySection,
  BlogFilters,
} from '@/components/blog/BlogComponents';
import { getFeaturedPost, getCategorySections } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Stay updated with ProxyVault blog — proxy news, tutorials, and industry insights.',
};

export default function BlogPage() {
  const featured = getFeaturedPost();
  const sections = getCategorySections();

  return (
    <main>
      <section className="blog-page-header">
        <div className="container">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb">
            <Link href="/blog/">Blog</Link>
          </nav>
          <h1>Stay Updated with ProxyVault Blog</h1>
        </div>
      </section>

      <section className="section section-light" style={{ paddingTop: 0 }}>
        <div className="container">
          <Suspense fallback={<div className="blog-filters" />}>
            <BlogFilters />
          </Suspense>

          <BlogFeatured
            slug={featured.slug}
            title={featured.title}
            excerpt={featured.excerpt}
            categoryLabel={featured.categoryLabel}
          />
        </div>
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

      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Have a Large Project?</h2>
          <p>Our proxy experts are always available to help you find the right solution for any need.</p>
          <div className="cta-buttons">
            <Link href="/register/" className="btn btn-primary btn-lg">Register</Link>
            <Link href="#" className="btn btn-outline btn-lg">Book a Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
