'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { BLOG_CATEGORIES, type BlogCategory } from '@/lib/blog';

export function BlogFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = (searchParams.get('category') as BlogCategory) || 'all';

  const setCategory = (cat: BlogCategory) => {
    if (cat === 'all') {
      router.push('/blog/');
    } else {
      router.push(`/blog/category/${cat}/`);
    }
  };

  return (
    <div className="blog-filters">
      {BLOG_CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          type="button"
          className={`blog-filter-btn${active === cat.id ? ' active' : ''}`}
          onClick={() => setCategory(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

export function BlogFeatured({ slug, title, excerpt, categoryLabel }: {
  slug: string;
  title: string;
  excerpt: string;
  categoryLabel: string;
}) {
  return (
    <article className="blog-featured">
      <div className="blog-featured-content">
        <span className="blog-card-category">{categoryLabel}</span>
        <h2>{title}</h2>
        <p>{excerpt}</p>
        <Link href={`/blog/${slug}/`} className="btn btn-primary">
          Learn More
        </Link>
      </div>
      <div className="blog-featured-visual" aria-hidden="true">
        <div className="blog-featured-graphic" />
      </div>
    </article>
  );
}

export function BlogNewsletter() {
  return (
    <section className="blog-newsletter">
      <div className="container blog-newsletter-inner">
        <div>
          <h3>Data News in Your Inbox</h3>
          <p>No spam whatsoever, just pure data gathering news, trending topics and useful links. Unsubscribe anytime.</p>
        </div>
        <form className="blog-newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Your email address" aria-label="Email address" required />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
        <p className="blog-newsletter-note">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}

export function BlogCard({ slug, title, excerpt, categoryLabel, date, readTime }: {
  slug: string;
  title: string;
  excerpt: string;
  categoryLabel: string;
  date: string;
  readTime: string;
}) {
  return (
    <Link href={`/blog/${slug}/`} className="blog-card">
      <div className="blog-card-image" aria-hidden="true" />
      <div className="blog-card-body">
        <span className="blog-card-category">{categoryLabel}</span>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <div className="blog-card-meta">
          <span>{date}</span>
          <span>{readTime}</span>
        </div>
      </div>
    </Link>
  );
}

export function BlogCategorySection({ label, category, posts }: {
  label: string;
  category: string;
  posts: { slug: string; title: string; excerpt: string; categoryLabel: string; date: string; readTime: string }[];
}) {
  return (
    <section className="blog-category-section">
      <div className="container">
        <div className="blog-category-header">
          <h2>{label}</h2>
          <Link href={`/blog/category/${category}/`} className="blog-view-all">
            View all
          </Link>
        </div>
        <div className="blog-cards-grid">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
