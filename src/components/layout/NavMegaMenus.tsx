import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import {
  PRODUCTS_MENU,
  PRICING_MENU,
  USE_CASES_MENU,
  LOCATIONS_MENU,
  RESOURCES_MENU,
  RECOGNIZED_BY,
  type NavLink,
  type NavMenuLabel,
} from '@/lib/nav';
import { cn } from '@/lib/utils';

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-500">{children}</p>
  );
}

function IconLink({ link, horizontal = false }: { link: NavLink; horizontal?: boolean }) {
  const Icon = link.icon;
  return (
    <Link
      href={link.href}
      className={cn(
        'group flex rounded-xl transition-colors hover:bg-brand-50/80',
        horizontal ? 'items-start gap-3 px-2 py-3' : 'flex-col gap-2 px-2 py-3',
      )}
    >
      {Icon && (
        <span
          className={cn(
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-full',
            link.iconBg ?? 'bg-brand-100 text-brand-600',
          )}
        >
          <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
        </span>
      )}
      <span className={horizontal ? 'min-w-0 flex-1' : ''}>
        <span className="flex items-center gap-2 text-sm font-semibold text-neutral-900 group-hover:text-brand-700">
          {link.label}
          {link.badge && (
            <span className="rounded bg-emerald-500 px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
              {link.badge}
            </span>
          )}
        </span>
        {link.desc && <span className="mt-0.5 block text-xs text-neutral-500">{link.desc}</span>}
      </span>
    </Link>
  );
}

function SimpleIconLink({ href, label, icon: Icon }: { href: string; label: string; icon: NavLink['icon'] }) {
  if (!Icon) return null;
  return (
    <Link href={href} className="group flex items-center gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-brand-50">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand-200 text-brand-600">
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </span>
      <span className="text-sm font-medium text-neutral-800 group-hover:text-brand-700">{label}</span>
    </Link>
  );
}

export function ProductsMegaMenu() {
  return (
    <div>
      <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
        <div>
          <SectionLabel>Proxies</SectionLabel>
          <div className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
            {PRODUCTS_MENU.proxies.map((link) => (
              <IconLink key={link.href + link.label} link={link} horizontal />
            ))}
          </div>
        </div>
        <div>
          <SectionLabel>Tools</SectionLabel>
          <div className="space-y-1">
            {PRODUCTS_MENU.tools.map((link) => (
              <IconLink key={link.href + link.label} link={link} horizontal />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-3 border-t border-neutral-100 pt-6">
        <span className="text-xs text-neutral-400">Recognized by</span>
        <div className="flex items-center gap-6">
          {RECOGNIZED_BY.map((name) => (
            <span key={name} className="text-sm font-bold text-neutral-300">{name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PricingMegaMenu() {
  return (
    <div>
      <SectionLabel>Pricing</SectionLabel>
      <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
        {PRICING_MENU.map((link) => (
          <IconLink key={link.href + link.label} link={link} horizontal />
        ))}
      </div>
    </div>
  );
}

export function UseCasesMegaMenu() {
  const FeaturedIcon = USE_CASES_MENU.featured.icon;
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
      <div>
        <SectionLabel>Use Cases</SectionLabel>
        <div className="grid gap-x-6 sm:grid-cols-2">
          {USE_CASES_MENU.links.map((link) => (
            <IconLink key={link.href + link.label} link={link} horizontal />
          ))}
        </div>
      </div>
      <Link
        href={USE_CASES_MENU.featured.href}
        className="group flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 via-brand-100/80 to-brand-200/40 p-8 text-center transition hover:shadow-md"
      >
        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-brand-500/10">
          <FeaturedIcon className="h-12 w-12 text-brand-500" strokeWidth={1.25} />
        </div>
        <span className="flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2">
          {USE_CASES_MENU.featured.label}
          <ChevronRight className="h-4 w-4" />
        </span>
      </Link>
    </div>
  );
}

export function LocationsMegaMenu() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_260px]">
      <div>
        <SectionLabel>Most Popular Locations</SectionLabel>
        <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS_MENU.locations.map((loc) => (
            <Link
              key={loc.label + loc.href}
              href={loc.href}
              className="group flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-brand-50"
            >
              <span className="text-2xl leading-none">{loc.flag}</span>
              <span>
                <span className="block text-sm font-semibold text-neutral-900 group-hover:text-brand-700">{loc.label}</span>
                <span className="text-xs text-neutral-500">{loc.ips}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
      <Link
        href={LOCATIONS_MENU.moreHref}
        className="group relative flex min-h-[180px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100/60 p-6 text-center"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden>
          <svg viewBox="0 0 200 100" className="h-full w-full" fill="currentColor">
            <ellipse cx="100" cy="50" rx="90" ry="45" className="text-brand-600" />
          </svg>
        </div>
        <GlobeWatermark />
        <span className="relative flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2">
          More Locations
          <ChevronRight className="h-4 w-4" />
        </span>
      </Link>
    </div>
  );
}

function GlobeWatermark() {
  return (
    <svg className="mb-3 h-16 w-16 text-brand-300" viewBox="0 0 64 64" fill="none" aria-hidden>
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="32" cy="32" rx="12" ry="28" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 32h56M32 4v56" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ResourcesMegaMenu() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div>
        <SectionLabel>Learn</SectionLabel>
        <div className="space-y-0.5">
          {RESOURCES_MENU.learn.map((item) => (
            <SimpleIconLink key={item.href + item.label} {...item} />
          ))}
        </div>
      </div>
      <div>
        <SectionLabel>Explore</SectionLabel>
        <div className="space-y-0.5">
          {RESOURCES_MENU.explore.map((item) => (
            <SimpleIconLink key={item.href + item.label} {...item} />
          ))}
        </div>
      </div>
      <div className="border-l border-neutral-100 pl-8">
        <SectionLabel>Featured Article</SectionLabel>
        <Link
          href={RESOURCES_MENU.featured.href}
          className="group block overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 transition hover:shadow-md"
        >
          <div className="flex h-28 items-center justify-center bg-gradient-to-br from-brand-700 to-brand-500">
            <span className="text-3xl font-bold text-white/90">Q1</span>
          </div>
          <div className="p-4">
            <p className="line-clamp-3 text-sm font-semibold leading-snug text-neutral-900 group-hover:text-brand-700">
              {RESOURCES_MENU.featured.title}
            </p>
            <p className="mt-2 text-xs text-neutral-500">{RESOURCES_MENU.featured.category}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export function MegaMenuContent({ menu }: { menu: NavMenuLabel }) {
  switch (menu) {
    case 'Products':
      return <ProductsMegaMenu />;
    case 'Pricing':
      return <PricingMegaMenu />;
    case 'Use Cases':
      return <UseCasesMegaMenu />;
    case 'Locations':
      return <LocationsMegaMenu />;
    case 'Resources':
      return <ResourcesMegaMenu />;
    default:
      return null;
  }
}
