# ProxyVault — IPRoyal-style Marketing Website

A static, IPRoyal-inspired proxy service landing page. No build tools or Node.js required.

## Quick Start

1. Open `index.html` in your browser, or
2. Serve locally (recommended for best experience):

```powershell
# Python (if installed)
cd proxy-website
python -m http.server 8080
# Visit http://localhost:8080
```

## Customize

| What | Where |
|------|-------|
| Brand name | Search/replace `ProxyVault` in `index.html` |
| Colors | CSS variables in `css/styles.css` (`:root`) |
| Pricing & copy | `index.html` sections |
| API endpoint | `js/main.js` → `codeExamples` |

## Sections Included

- Sticky header with dropdown navigation
- Hero with CTAs
- Product solution cards (Residential, ISP, Datacenter, Mobile, Web Unblocker)
- Feature tabs (Value, Scalability, Security)
- API / Integrations with code examples
- Platform features grid
- Use cases
- Enterprise highlights
- Testimonial carousel
- Compliance & locations
- Footer

## Next Steps (Full Product)

To build a complete IPRoyal-like platform, you would also need:

- **Backend**: User auth, billing (Stripe), proxy allocation API
- **Dashboard**: Account management, usage analytics, team roles
- **Proxy infrastructure**: Actual IP pools and rotation logic
- **Additional pages**: Pricing, docs, blog, legal pages

This project covers the **marketing homepage** only.
