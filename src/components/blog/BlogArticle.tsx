import Link from 'next/link';
import { Container } from '@/components/ui/container';
import type { BlogPost } from '@/lib/blog';

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <article>
      <header className="border-b border-neutral-200 bg-brand-50 py-12">
        <Container className="max-w-3xl">
          <nav className="mb-4 flex items-center gap-2 text-sm text-neutral-500" aria-label="Breadcrumb">
            <Link href="/blog/" className="hover:text-brand-600">Blog</Link>
            <span>/</span>
            <Link href={`/blog/category/${post.category}/`} className="hover:text-brand-600">{post.categoryLabel}</Link>
          </nav>
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">{post.categoryLabel}</span>
          <h1 className="mt-3 text-3xl font-bold text-brand-900 lg:text-4xl">{post.title}</h1>
          <div className="mt-4 flex gap-4 text-sm text-neutral-500">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </Container>
      </header>
      <Container className="max-w-3xl py-12">
        <div className="prose prose-neutral max-w-none space-y-4 text-neutral-700">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <footer className="mt-12 flex flex-wrap gap-4 border-t border-neutral-200 pt-8">
          <Link href="/blog/" className="rounded-lg border border-brand-300 px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50">
            ← Back to Blog
          </Link>
          <Link href="/register/" className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600">
            Create Account
          </Link>
        </footer>
      </Container>
    </article>
  );
}
