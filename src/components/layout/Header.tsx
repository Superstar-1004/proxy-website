'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV } from '@/lib/nav';
import { Logo } from './Logo';

type AuthMode = 'default' | 'login' | 'register';

function authMode(pathname: string): AuthMode {
  if (pathname.startsWith('/login')) return 'login';
  if (pathname.startsWith('/register')) return 'register';
  return 'default';
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const mode = authMode(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          <Logo />
          <span>ProxyVault</span>
        </Link>

        <nav className={`nav${mobileOpen ? ' open' : ''}`} id="nav">
          {NAV.map((item) => (
            <div
              key={item.label}
              className={`nav-item has-dropdown${openDropdown === item.label ? ' open' : ''}`}
            >
              <button
                type="button"
                className="nav-link"
                aria-expanded={openDropdown === item.label}
                onClick={() => toggleDropdown(item.label)}
              >
                {item.label}
              </button>
              {'mega' in item && item.mega ? (
                <div className="dropdown mega">
                  <div className="dropdown-grid">
                    {item.items.map((col) => (
                      <div key={col.title}>
                        <h4>{col.title}</h4>
                        {col.links.map((link) => (
                          <Link key={link.href + link.label} href={link.href}>
                            {link.label}
                            {link.badge && <span className="badge">{link.badge}</span>}
                            {link.desc && <span>{link.desc}</span>}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="dropdown">
                  {'links' in item &&
                    item.links.map((link) => (
                      <Link key={link.href + link.label} href={link.href}>
                        {link.label}
                        {link.desc && <span>{link.desc}</span>}
                      </Link>
                    ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="header-actions">
          <button type="button" className="lang-btn" aria-label="Language">EN</button>
          {mode === 'default' && (
            <Link href="/login/" className="btn btn-ghost">Login</Link>
          )}
          {mode === 'login' && (
            <Link href="/register/" className="btn btn-primary">Create Account</Link>
          )}
          {mode === 'register' && (
            <Link href="/login/" className="btn btn-primary">Login</Link>
          )}
          {mode === 'default' && (
            <Link href="/register/" className="btn btn-primary">Create Account</Link>
          )}
          <button
            type="button"
            className={`mobile-toggle${mobileOpen ? ' active' : ''}`}
            id="mobile-toggle"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
