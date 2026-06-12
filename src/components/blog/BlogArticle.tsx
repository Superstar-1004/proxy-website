import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <article className="blog-article">
      <header className="blog-article-header">
        <nav className="blog-breadcrumb" aria-label="Breadcrumb">
          <Link href="/blog/">Blog</Link>
          <span>/</span>
          <Link href={`/blog/category/${post.category}/`}>{post.categoryLabel}</Link>
        </nav>
        <span className="blog-card-category">{post.categoryLabel}</span>
        <h1>{post.title}</h1>
        <div className="blog-card-meta">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
      </header>
      <div className="blog-article-body">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <footer className="blog-article-footer">
        <Link href="/blog/" className="btn btn-outline">← Back to Blog</Link>
        <Link href="/register/" className="btn btn-primary">Create Account</Link>
      </footer>
    </article>
  );
}
