import Image from 'next/image';
import Link from 'next/link';
import { GoogleSignInButton } from '@/components/auth/GoogleSignInButton';
import { TrustedMarquee } from '@/components/marketing/TrustedMarquee';
import { Container } from '@/components/ui/container';

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
    <section className="relative -mt-28 overflow-hidden border-0 bg-gradient-to-b from-brand-600 via-brand-800 to-brand-900 pt-28 text-white">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <Container className="relative z-10 flex flex-col items-center px-4 pt-10 text-center sm:pt-14">
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
          <GoogleSignInButton mode="sign-up" callbackUrl="/dashboard/" variant="hero" className="w-auto" />
        </div>

        <p className="mt-5 text-sm text-white/50">No credit card required. Instant full access.</p>

        <div className="relative mt-10 w-[70vw] max-w-[1200px] sm:mt-12">
          <Image
            src="/images/hero-dashboard.png"
            alt=""
            width={1024}
            height={348}
            priority
            unoptimized
            className="h-auto w-full"
            aria-hidden
          />
        </div>
      </Container>

      <TrustedMarquee variant="hero" />
    </section>
  );
}
