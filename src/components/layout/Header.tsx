'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { NAV_LABELS, type NavMenuLabel } from '@/lib/nav';
import { MegaMenuContent } from './NavMegaMenus';
import { BrandName } from './BrandName';
import { Logo } from './Logo';
import { cn } from '@/lib/utils';

type AuthMode = 'default' | 'login' | 'register';

function authMode(pathname: string): AuthMode {
  if (pathname.startsWith('/login')) return 'login';
  if (pathname.startsWith('/register')) return 'register';
  return 'default';
}

function isHomePage(pathname: string) {
  return pathname === '/' || pathname === '';
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<NavMenuLabel | null>(null);
  const mode = authMode(pathname);
  const home = isHomePage(pathname);

  // IPRoyal: header turns white when a dropdown is open
  const lightHeader = !home || !!activeMenu || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-200',
        lightHeader
          ? cn('border-0 bg-white text-neutral-800 shadow-sm', activeMenu && 'shadow-md')
          : cn(
              'relative overflow-hidden border-0 text-white shadow-none',
              home ? 'bg-transparent' : 'bg-gradient-to-b from-brand-600 via-brand-800 to-brand-800',
            ),
      )}
      onMouseLeave={() => setActiveMenu(null)}
    >
      {!lightHeader && !home && (
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      )}

      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-0 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={cn(
            'flex shrink-0 items-center gap-2.5 py-3.5 font-bold',
            lightHeader ? 'text-brand-800' : 'text-white',
          )}
        >
          <Logo size={42} />
          <BrandName className="text-xl tracking-tight sm:text-2xl" />
        </Link>

        <nav className="hidden flex-1 items-stretch justify-center lg:flex">
          {NAV_LABELS.map((label) => {
            const isActive = activeMenu === label;
            return (
              <button
                key={label}
                type="button"
                className={cn(
                  'relative inline-flex items-center gap-1 px-4 py-4 text-sm font-medium transition-colors',
                  isActive
                    ? 'text-brand-600'
                    : lightHeader
                      ? 'text-neutral-600 hover:text-brand-700'
                      : 'text-white/90 hover:text-white',
                )}
                onMouseEnter={() => setActiveMenu(label)}
                aria-expanded={isActive}
              >
                {label}
                <ChevronDown
                  className={cn(
                    'h-3.5 w-3.5 transition-transform duration-200',
                    isActive ? 'rotate-180 text-brand-500' : 'opacity-50',
                  )}
                />
                {isActive && (
                  <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-brand-500" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 py-3.5 sm:gap-3">
          <button
            type="button"
            className={cn(
              'hidden items-center gap-1 text-sm font-medium sm:inline-flex',
              lightHeader ? 'text-neutral-600' : 'text-white/80',
            )}
            aria-label="Language"
          >
            🌐 EN
            <ChevronDown className="h-3 w-3 opacity-50" />
          </button>

          {mode === 'default' && (
            <>
              <Link
                href="/book-a-demo/"
                className={cn(
                  'hidden rounded-lg border px-4 py-2 text-sm font-semibold transition sm:inline-block',
                  lightHeader
                    ? 'border-brand-400 text-brand-600 hover:bg-brand-50'
                    : 'border-white/30 text-white hover:bg-white/10',
                )}
              >
                Book a Demo
              </Link>
              <Link
                href="/register/"
                className="rounded-lg bg-accent-500 px-4 py-2 text-sm font-semibold text-white hover:bg-accent-600"
              >
                Create Account
              </Link>
              <Link
                href="/login/"
                className={cn(
                  'hidden text-sm font-medium sm:inline-block',
                  lightHeader ? 'text-neutral-700 hover:text-brand-700' : 'text-white/90 hover:text-white',
                )}
              >
                Login
              </Link>
            </>
          )}
          {mode === 'login' && (
            <Link href="/register/" className="rounded-lg bg-accent-500 px-4 py-2 text-sm font-semibold text-white hover:bg-accent-600">
              Create Account
            </Link>
          )}
          {mode === 'register' && (
            <Link href="/login/" className="rounded-lg bg-accent-500 px-4 py-2 text-sm font-semibold text-white hover:bg-accent-600">
              Login
            </Link>
          )}

          <button
            type="button"
            className={cn('rounded-lg p-2 lg:hidden', lightHeader ? 'hover:bg-neutral-100' : 'hover:bg-white/10')}
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className={cn('mb-1 block h-0.5 w-5', lightHeader ? 'bg-neutral-700' : 'bg-white')} />
            <span className={cn('mb-1 block h-0.5 w-5', lightHeader ? 'bg-neutral-700' : 'bg-white')} />
            <span className={cn('block h-0.5 w-5', lightHeader ? 'bg-neutral-700' : 'bg-white')} />
          </button>
        </div>
      </div>

      {/* Full-width mega menu — only mount when open to avoid collapsed border seam */}
      {activeMenu && (
        <div className="relative z-10 hidden max-h-[520px] overflow-hidden border-t border-neutral-200 bg-white text-neutral-800 shadow-lg transition-all duration-200 lg:block">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10">
            <MegaMenuContent menu={activeMenu} />
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="border-t border-neutral-200 bg-white px-4 py-4 text-neutral-800 lg:hidden">
          {NAV_LABELS.map((label) => (
            <div key={label} className="border-b border-neutral-100 py-3 last:border-0">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-500">{label}</p>
              <button
                type="button"
                className="text-sm text-brand-600"
                onClick={() => {
                  setMobileOpen(false);
                  setActiveMenu(label);
                }}
              >
                View {label} →
              </button>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
