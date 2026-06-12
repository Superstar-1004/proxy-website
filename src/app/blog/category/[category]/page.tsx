import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BlogCard } from '@/components/blog/BlogComponents';
import { BLOG_CATEGORIES, getPostsByCategory, type BlogCategory } from '@/lib/blog';

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return BLOG_CATEGORIES.filter((c) => c.id !== 'all').map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = BLOG_CATEGORIES.find((c) => c.id === category);
  return {
    title: cat ? `${cat.label} — Blog` : 'Blog Category',
  };
}

export default async function BlogCategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = BLOG_CATEGORIES.find((c) => c.id === category);
  if (!cat || category === 'all') notFound();

  const posts = getPostsByCategory(category as BlogCategory);

  return (
    <main className="blog-category-page">
      <div className="container">
        <nav className="blog-breadcrumb" aria-label="Breadcrumb">
          <Link href="/blog/">Blog</Link>
          <span>/</span>
          <span>{cat.label}</span>
        </nav>
        <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '32px' }}>{cat.label}</h1>
        <div className="blog-cards-grid">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
        <div style={{ marginTop: '40px' }}>
          <Link href="/blog/" className="btn btn-outline">← All Blog Posts</Link>
        </div>
      </div>
    </main>
  );
}
