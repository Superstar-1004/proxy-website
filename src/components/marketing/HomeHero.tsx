import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function G2Badge() {
  return (
    <div className="mb-8 inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
      <span className="rounded bg-[#ff492c] px-1.5 py-0.5 text-xs font-bold text-white">G2</span>
      <div className="flex gap-0.5 text-amber-400" aria-label="4.5 out of 5 stars">
        {[1, 2, 3, 4, 5].map((i) => (
          <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-sm font-semibold text-white/90">4.5</span>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-600 via-brand-800 to-brand-900 text-white">
      {/* Subtle grid / dot pattern */}
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* Dashboard preview — centered behind copy, IPRoyal-style */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[38%] z-0 flex items-end justify-center sm:top-[32%]">
        <div className="relative w-[min(1180px,108%)] translate-y-[6%] sm:translate-y-[4%]">
          <Image
            src="/images/hero-dashboard.png"
            alt=""
            width={1180}
            height={590}
            priority
            className="h-auto w-full opacity-[0.92]"
            aria-hidden
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-800 via-brand-900/60 to-transparent sm:h-48" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-900 to-transparent" />
        </div>
      </div>

      {/* Centered hero copy */}
      <Container className="relative z-10 flex flex-col items-center px-4 pt-10 pb-[min(42vw,420px)] text-center sm:pt-14 sm:pb-[min(38vw,480px)] lg:pb-[420px]">
        <G2Badge />

        <h1 className="max-w-4xl text-[clamp(2rem,5.5vw,3.5rem)] font-bold leading-[1.12] tracking-tight">
          Proxy Infrastructure Built for Scale and Speed
        </h1>

        <p className="mt-5 max-w-2xl text-base text-white/75 sm:text-lg">
          Own your infrastructure. Avoid vendor lock-in. Stay in control of performance and costs.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/register/"
            className="rounded-xl bg-accent-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-accent-600"
          >
            Buy Now
          </Link>
          <Link
            href="/register/"
            className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            <GoogleIcon />
            Sign up with Google
          </Link>
        </div>

        <p className="mt-5 text-sm text-white/50">No credit card required. Instant full access.</p>
      </Container>
    </section>
  );
}
