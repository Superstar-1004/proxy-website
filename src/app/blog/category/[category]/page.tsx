import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { BlogCard } from '@/components/blog/BlogComponents';
import { BLOG_CATEGORIES, getPostsByCategory, type BlogCategory } from '@/lib/blog';

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return BLOG_CATEGORIES.filter((c) => c.id !== 'all').map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = BLOG_CATEGORIES.find((c) => c.id === category);
  return { title: cat ? `${cat.label} — Blog` : 'Blog Category' };
}

export default async function BlogCategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = BLOG_CATEGORIES.find((c) => c.id === category);
  if (!cat || category === 'all') notFound();

  const posts = getPostsByCategory(category as BlogCategory);

  return (
    <main className="py-12">
      <Container>
        <nav className="mb-4 flex items-center gap-2 text-sm text-neutral-500" aria-label="Breadcrumb">
          <Link href="/blog/" className="hover:text-brand-600">Blog</Link>
          <span>/</span>
          <span>{cat.label}</span>
        </nav>
        <h1 className="mb-8 text-3xl font-bold text-brand-900">{cat.label}</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
        <div className="mt-10">
          <Link href="/blog/" className="rounded-lg border border-brand-300 px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50">
            ← All Blog Posts
          </Link>
        </div>
      </Container>
    </main>
  );
}
