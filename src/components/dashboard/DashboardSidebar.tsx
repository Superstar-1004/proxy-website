'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import {
  LayoutDashboard,
  ShoppingCart,
  CreditCard,
  BarChart3,
  Receipt,
  Key,
  User,
  LogOut,
} from 'lucide-react';
import { DASHBOARD_NAV } from '@/lib/constants';
import { Logo } from '@/components/layout/Logo';
import { cn } from '@/lib/utils';

const icons = {
  LayoutDashboard,
  ShoppingCart,
  CreditCard,
  BarChart3,
  Receipt,
  Key,
  User,
};

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-64 flex-col border-r border-neutral-200 bg-white">
      <div className="flex items-center gap-2 border-b border-neutral-200 px-6 py-4">
        <Logo size={28} />
        <span className="font-bold text-brand-800">ProxyVault</span>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {DASHBOARD_NAV.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons];
          const active = pathname === item.href || (item.href !== '/dashboard/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                active ? 'bg-brand-50 text-brand-700' : 'text-neutral-600 hover:bg-neutral-50 hover:text-brand-700',
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-neutral-200 p-4">
        <button
          type="button"
          onClick={() => signOut({ callbackUrl: '/' })}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-600 hover:bg-red-50 hover:text-red-600"
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
