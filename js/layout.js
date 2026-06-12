const SITE = {
  name: 'ProxyVault',
  promo: 'ProxyVault Q1 2026 Update: New Products, Enterprise-Grade Features, Broader Coverage',
  promoLink: '#',
};

const NAV = [
  {
    label: 'Products',
    mega: true,
    items: [
      {
        title: 'Proxies',
        links: [
          { href: 'residential-proxies.html', label: 'Residential Proxies', desc: 'Global pool, precise targeting' },
          { href: 'isp-proxies.html', label: 'ISP Proxies', desc: 'High-performance static IPs' },
          { href: 'datacenter-proxies.html', label: 'Datacenter Proxies', desc: 'Top speeds, zero thread limits' },
          { href: 'mobile-proxies.html', label: 'Mobile Proxies', desc: 'Real devices, top carriers' },
          { href: 'web-unblocker.html', label: 'Web Unblocker', desc: 'Automated unblocking', badge: 'New' },
          { href: 'proxies.html', label: 'Enterprise Proxies', desc: 'Fast scaling & integration' },
        ],
      },
      {
        title: 'Tools',
        links: [
          { href: '#', label: 'Chrome Proxy Extension' },
          { href: '#', label: 'Firefox Proxy Add-on' },
          { href: '#', label: 'Proxy Tester' },
          { href: '#', label: 'Online Proxy Checker' },
        ],
      },
    ],
  },
  {
    label: 'Pricing',
    links: [
      { href: 'pricing.html#residential', label: 'Residential', desc: 'from $1.75/GB' },
      { href: 'pricing.html#isp', label: 'ISP', desc: 'from $1.80/proxy' },
      { href: 'pricing.html#datacenter', label: 'Datacenter', desc: 'from $1.39/proxy' },
      { href: 'pricing.html#mobile', label: 'Mobile', desc: 'from $10.11/GB' },
      { href: 'pricing.html#unblocker', label: 'Web Unblocker', desc: 'from $1.00/1000 req' },
    ],
  },
  {
    label: 'Use Cases',
    links: [
      { href: 'web-scraping.html', label: 'Web Scraping' },
      { href: 'travel-fare-aggregation.html', label: 'Travel Fare Aggregation' },
      { href: 'price-monitoring.html', label: 'Price Monitoring' },
      { href: 'seo-serp-scraping.html', label: 'SEO & SERP Scraping' },
      { href: 'ai-data-collection.html', label: 'AI Data Collection' },
    ],
  },
  {
    label: 'Locations',
    links: [
      { href: 'location-united-states.html', label: 'United States', desc: '4.2M+ IPs' },
      { href: 'location-united-kingdom.html', label: 'United Kingdom', desc: '2.0M+ IPs' },
      { href: 'location-germany.html', label: 'Germany', desc: '2.0M+ IPs' },
      { href: 'location-india.html', label: 'India', desc: '3.7M+ IPs' },
      { href: 'locations.html', label: 'All Locations' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { href: 'documentation.html', label: 'Documentation' },
      { href: 'quick-start-guides.html', label: 'Quick-Start Guides' },
      { href: 'help-center.html', label: 'Help Center' },
      { href: 'blog.html', label: 'Blog' },
      { href: 'integrations.html', label: 'Integrations' },
    ],
  },
];

function logoSvg(size = 32) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect width="32" height="32" rx="8" fill="url(#logo-grad)"/>
    <path d="M8 16L14 10L20 16L14 22L8 16Z" fill="white" opacity="0.9"/>
    <path d="M16 8L22 14L16 20L10 14L16 8Z" fill="white" opacity="0.5"/>
    <defs>
      <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32">
        <stop stop-color="#27a0ab"/>
        <stop offset="1" stop-color="#006970"/>
      </linearGradient>
    </defs>
  </svg>`;
}

function renderPromoBar() {
  return `<div class="promo-bar">
    <a href="${SITE.promoLink}" class="promo-bar-inner">
      <span class="promo-badge">Product news</span>
      ${SITE.promo}
    </a>
  </div>`;
}

function renderNavItem(item) {
  if (item.mega) {
    const cols = item.items.map(col => `
      <div>
        <h4>${col.title}</h4>
        ${col.links.map(l => `
          <a href="${l.href}">
            ${l.label}${l.badge ? ` <span class="badge">${l.badge}</span>` : ''}
            ${l.desc ? `<span>${l.desc}</span>` : ''}
          </a>
        `).join('')}
      </div>
    `).join('');
    return `<div class="nav-item has-dropdown">
      <button class="nav-link" aria-expanded="false">${item.label}</button>
      <div class="dropdown mega"><div class="dropdown-grid">${cols}</div></div>
    </div>`;
  }
  const links = item.links.map(l => `
    <a href="${l.href}">${l.label}${l.desc ? `<span>${l.desc}</span>` : ''}</a>
  `).join('');
  return `<div class="nav-item has-dropdown">
    <button class="nav-link" aria-expanded="false">${item.label}</button>
    <div class="dropdown">${links}</div>
  </div>`;
}

function renderHeader(activePage) {
  let loginBtn = '';
  let registerBtn = '';

  if (activePage === 'login') {
    registerBtn = '<a href="register.html" class="btn btn-primary">Create Account</a>';
  } else if (activePage === 'register') {
    registerBtn = '<a href="login.html" class="btn btn-primary">Login</a>';
  } else {
    loginBtn = '<a href="login.html" class="btn btn-ghost">Login</a>';
    registerBtn = '<a href="register.html" class="btn btn-primary">Create Account</a>';
  }

  return `${renderPromoBar()}
  <header class="header" id="header">
    <div class="container header-inner">
      <a href="index.html" class="logo">${logoSvg()}<span>${SITE.name}</span></a>
      <nav class="nav" id="nav">${NAV.map(renderNavItem).join('')}</nav>
      <div class="header-actions">
        <button class="lang-btn" aria-label="Language">EN</button>
        ${loginBtn}
        ${registerBtn}
        <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>`;
}

function renderFooter() {
  return `<footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="logo">${logoSvg(28)}<span>${SITE.name}</span></a>
          <p>Premium quality proxies at unbeatable prices.</p>
        </div>
        <div class="footer-col">
          <h4>Products</h4>
          <a href="residential-proxies.html">Residential Proxies</a>
          <a href="isp-proxies.html">ISP Proxies</a>
          <a href="datacenter-proxies.html">Datacenter Proxies</a>
          <a href="mobile-proxies.html">Mobile Proxies</a>
          <a href="web-unblocker.html">Web Unblocker</a>
        </div>
        <div class="footer-col">
          <h4>Resources</h4>
          <a href="blog.html">Blog</a>
          <a href="documentation.html">Documentation</a>
          <a href="quick-start-guides.html">Quick-Start Guides</a>
          <a href="help-center.html">Help Center</a>
          <a href="integrations.html">Integrations</a>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Case Studies</a>
          <a href="pricing.html">Pricing</a>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">KYC Policy</a>
          <a href="#">Acceptable Use Policy</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© Copyright 2026 ${SITE.name}.com | All rights reserved</p>
        <div class="footer-social">
          <a href="#" aria-label="Twitter">𝕏</a>
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="Discord">Discord</a>
        </div>
      </div>
    </div>
  </footer>`;
}

function injectLayout() {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  const page = document.body.dataset.page || '';

  if (headerEl) headerEl.innerHTML = renderHeader(page);
  if (footerEl) footerEl.innerHTML = renderFooter();
}

document.addEventListener('DOMContentLoaded', injectLayout);
