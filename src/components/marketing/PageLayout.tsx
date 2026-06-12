import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type PageHeroProps = {
  badge?: string;
  title: string;
  description?: string;
  variant?: 'dark' | 'light';
  children?: React.ReactNode;
  stats?: { value: string; label: string }[];
};

export function PageHero({ badge, title, description, variant = 'dark', children, stats }: PageHeroProps) {
  return (
    <section
      className={cn(
        'py-16 lg:py-20',
        variant === 'dark'
          ? 'bg-gradient-to-br from-brand-900 via-brand-800 to-brand-600 text-white'
          : 'border-b border-neutral-200 bg-brand-50 text-brand-900',
      )}
    >
      <Container>
        {badge && (
          <Badge className={cn('mb-4', variant === 'dark' ? 'bg-white/10 text-white' : '')}>{badge}</Badge>
        )}
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">{title}</h1>
        {description && (
          <p className={cn('mt-4 max-w-2xl text-lg', variant === 'dark' ? 'text-brand-100' : 'text-neutral-600')}>
            {description}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        {stats && stats.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {stats.map((s) => (
              <span
                key={s.label}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium',
                  variant === 'dark' ? 'bg-white/10 text-white' : 'bg-white text-brand-800 shadow-sm',
                )}
              >
                <strong>{s.value}</strong> {s.label}
              </span>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

export function CtaSection({ title, description }: { title: string; description?: string }) {
  return (
    <section className="bg-gradient-to-r from-brand-700 to-brand-500 py-16 text-white">
      <Container className="text-center">
        <h2 className="text-3xl font-bold">{title}</h2>
        {description && <p className="mt-4 text-brand-100">{description}</p>}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/register/" className="rounded-lg bg-white px-6 py-3 font-semibold text-brand-800 hover:bg-brand-50">
            Create Account
          </Link>
          <Link href="/pricing/" className="rounded-lg border border-white/40 px-6 py-3 font-semibold hover:bg-white/10">
            View Pricing
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function SectionHeading({ title, className }: { title: string; className?: string }) {
  return <h2 className={cn('text-2xl font-bold text-brand-900 lg:text-3xl', className)}>{title}</h2>;
}

export function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="rounded-lg bg-brand-500 px-6 py-3 font-semibold text-white hover:bg-brand-600">
      {children}
    </Link>
  );
}

export function OutlineButton({ href, children, light }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        'rounded-lg border px-6 py-3 font-semibold',
        light
          ? 'border-white/30 text-white hover:bg-white/10'
          : 'border-brand-300 text-brand-700 hover:bg-brand-50',
      )}
    >
      {children}
    </Link>
  );
}

export function ContentCard({
  href,
  title,
  description,
  footer,
}: {
  href?: string;
  title: string;
  description: string;
  footer?: string;
}) {
  const className =
    'group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-brand-300 hover:shadow-md';
  const inner = (
    <>
      <h3 className="text-lg font-bold text-brand-900 group-hover:text-brand-600">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{description}</p>
      {footer && <span className="mt-4 inline-block text-sm font-semibold text-brand-600">{footer}</span>}
    </>
  );
  return href ? (
    <Link href={href} className={className}>
      {inner}
    </Link>
  ) : (
    <div className={className}>{inner}</div>
  );
}

export function SolutionCard({
  href,
  title,
  description,
  price,
}: {
  href: string;
  title: string;
  description: string;
  price?: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-brand-300 hover:shadow-md"
    >
      {price && <span className="text-xs font-semibold text-brand-600">{price}</span>}
      <h3 className="mt-2 text-lg font-bold text-brand-900 group-hover:text-brand-600">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{description}</p>
      <span className="mt-4 inline-block text-sm font-semibold text-brand-600">Learn more →</span>
    </Link>
  );
}

export function LocationCard({
  href,
  flag,
  name,
  ips,
}: {
  href: string;
  flag: string;
  name: string;
  ips: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:border-brand-300 hover:shadow-md"
    >
      <span className="text-2xl">{flag}</span>
      <div>
        <strong className="block text-brand-900">{name}</strong>
        <span className="text-sm text-neutral-500">{ips}</span>
      </div>
    </Link>
  );
}
