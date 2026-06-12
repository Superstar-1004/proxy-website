'use client';

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

export function TrustedMarquee() {
  const items = [...LOGOS, ...LOGOS];

  return (
    <section className="overflow-hidden border-b border-neutral-200 bg-white py-6">
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-neutral-400">
        As seen on
      </p>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="mx-10 shrink-0 text-lg font-bold tracking-tight text-neutral-300 select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
