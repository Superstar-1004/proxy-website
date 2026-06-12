'use client';

import { cn } from '@/lib/utils';

const LOGOS = [
  'TechRadar',
  'CNBC',
  'PCMag',
  'Tech Advisor',
  'G2',
  'Forbes',
  'Wired',
  'Trustpilot',
];

type TrustedMarqueeProps = {
  variant?: 'hero' | 'light';
  className?: string;
};

export function TrustedMarquee({ variant = 'hero', className }: TrustedMarqueeProps) {
  const items = [...LOGOS, ...LOGOS];
  const isHero = variant === 'hero';

  return (
    <section
      className={cn(
        'overflow-hidden py-10 lg:py-12',
        isHero ? 'relative z-10 text-white' : 'border-b border-neutral-200 bg-white py-6',
        className,
      )}
    >
      <p
        className={cn(
          'mb-8 text-center font-semibold',
          isHero ? 'text-base text-brand-300' : 'text-xs uppercase tracking-widest text-neutral-400',
        )}
      >
        As seen on
      </p>
      <div className={cn('relative', isHero && 'opacity-50')}>
        <div
          className={cn(
            'pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r to-transparent sm:w-28',
            isHero ? 'from-brand-900' : 'from-white',
          )}
        />
        <div
          className={cn(
            'pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l to-transparent sm:w-28',
            isHero ? 'from-brand-900' : 'from-white',
          )}
        />
        <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className={cn(
                'shrink-0 whitespace-nowrap px-[7vw] text-3xl font-bold tracking-tight select-none md:text-4xl lg:text-5xl',
                isHero ? 'text-white' : 'text-neutral-400',
              )}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
