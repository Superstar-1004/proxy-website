'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';
import { BLOG_CATEGORIES, type BlogCategory } from '@/lib/blog';

export function BlogFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = (searchParams.get('category') as BlogCategory) || 'all';

  const setCategory = (cat: BlogCategory) => {
    if (cat === 'all') router.push('/blog/');
    else router.push(`/blog/category/${cat}/`);
  };

  return (
    <div className="flex flex-wrap gap-2 border-b border-neutral-200 pb-6">
      {BLOG_CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => setCategory(cat.id)}
          className={cn(
            'rounded-full border px-4 py-2 text-sm font-semibold transition-colors',
            active === cat.id
              ? 'border-brand-500 bg-brand-500 text-white'
              : 'border-neutral-200 text-neutral-600 hover:border-brand-300 hover:text-brand-700',
          )}
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
    <article className="mt-8 grid gap-8 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm lg:grid-cols-2">
      <div className="flex flex-col justify-center p-8 lg:p-12">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">{categoryLabel}</span>
        <h2 className="mt-3 text-2xl font-bold text-brand-900 lg:text-3xl">{title}</h2>
        <p className="mt-4 text-neutral-600">{excerpt}</p>
        <Link href={`/blog/${slug}/`} className="mt-6 inline-flex w-fit rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600">
          Learn More
        </Link>
      </div>
      <div className="min-h-[240px] bg-gradient-to-br from-brand-100 via-brand-200 to-brand-400" aria-hidden="true" />
    </article>
  );
}

export function BlogNewsletter() {
  return (
    <section className="border-y border-neutral-200 bg-brand-50 py-12">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-xl font-bold text-brand-900">Data News in Your Inbox</h3>
            <p className="mt-2 text-sm text-neutral-600">No spam — just proxy news, trending topics, and useful links.</p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              required
              className="flex-1 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
            <button type="submit" className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600">
              Subscribe
            </button>
          </form>
        </div>
      </Container>
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
    <Link href={`/blog/${slug}/`} className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:border-brand-300 hover:shadow-md">
      <div className="h-40 bg-gradient-to-br from-brand-50 to-brand-200" aria-hidden="true" />
      <div className="p-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">{categoryLabel}</span>
        <h3 className="mt-2 font-bold text-brand-900 group-hover:text-brand-600">{title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-neutral-600">{excerpt}</p>
        <div className="mt-4 flex gap-3 text-xs text-neutral-400">
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
    <section className="py-12">
      <Container>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-brand-900">{label}</h2>
          <Link href={`/blog/category/${category}/`} className="text-sm font-semibold text-brand-600 hover:underline">
            View all
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
