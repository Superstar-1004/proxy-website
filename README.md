# ProxyVault — Next.js Website

Premium proxy marketing site built with **Next.js 15** (App Router), matching [IPRoyal](https://iproyal.com/blog/) style routing and blog layout.

## URLs (clean paths, no `.html`)

| Route | Example |
|-------|---------|
| Home | `/` |
| Blog index | `/blog/` |
| Blog article | `/blog/q1-2026-update/` |
| Blog category | `/blog/category/ai/` |
| Use cases | `/use-cases/web-scraping/` |
| Locations | `/locations/united-states/` |
| Resources | `/documentation/`, `/help-center/` |
| Products | `/residential-proxies/` |

Old static `.html` URLs redirect automatically to clean paths.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy (Vercel)

1. Push to GitHub
2. Import project in Vercel — framework preset: **Next.js**
3. Deploy — no extra config needed (`trailingSlash: true` is set)

## Project structure

```
src/
  app/              # Next.js App Router pages
    blog/           # IPRoyal-style blog with categories
    use-cases/      # Dynamic use case pages
    locations/      # Dynamic location pages
  components/       # Header, Footer, Blog UI
  lib/              # Blog posts, nav, content data
css/styles.css      # Shared styles (IPRoyal teal theme)
```

Legacy static HTML files in the repo root are superseded by Next.js — use `npm run dev` instead of opening `.html` files directly.
