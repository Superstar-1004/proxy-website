# IPNoble — Production SaaS Platform

Premium proxy infrastructure platform built with Next.js 15, PostgreSQL, Prisma, NextAuth, and Stripe.

## Tech Stack

- **Framework:** Next.js 15 (App Router, Server Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Database:** PostgreSQL + Prisma ORM
- **Auth:** NextAuth.js (Credentials + Google OAuth)
- **Payments:** Stripe (subscriptions + one-time proxy purchases)
- **Deployment:** Vercel

## Project Structure

```
src/
├── app/
│   ├── (marketing)/          # Public marketing pages
│   │   ├── page.tsx          # Homepage
│   │   ├── pricing/
│   │   ├── residential-proxies/
│   │   ├── datacenter-proxies/
│   │   ├── isp-proxies/
│   │   ├── mobile-proxies/
│   │   ├── docs/             # API documentation
│   │   └── contact/
│   ├── (auth)/               # Login & registration
│   ├── dashboard/            # Protected user dashboard
│   └── api/                  # API routes (auth, stripe, keys, orders)
├── components/
│   ├── ui/                   # Reusable UI primitives
│   ├── layout/               # Header, Footer, Logo
│   ├── marketing/            # Marketing shell
│   └── dashboard/            # Dashboard sidebar & widgets
├── lib/                      # Auth, Prisma, Stripe, utilities
└── middleware.ts             # Dashboard route protection
prisma/
├── schema.prisma             # Database schema
└── seed.ts                   # Proxy package seed data
```

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL database
- Stripe account (test mode for development)

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Copy `.env.example` to `.env` and fill in values:

```bash
cp .env.example .env
```

Generate an auth secret:

```bash
openssl rand -base64 32
```

### 3. Set up the database

```bash
npm run db:push
npm run db:seed
```

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stripe Setup

1. Create products/prices in Stripe Dashboard for Starter, Professional, and Enterprise plans.
2. Add price IDs to `.env` as `STRIPE_PRICE_STARTER`, etc.
3. For local webhooks, use the Stripe CLI:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook/
```

Copy the webhook signing secret to `STRIPE_WEBHOOK_SECRET`.

## Deploy to Vercel

1. Push to GitHub and import the repo in Vercel.
2. Add all environment variables from `.env.example`.
3. Provision a PostgreSQL database (Vercel Postgres, Neon, or Supabase).
4. Set `DATABASE_URL` and run migrations via Vercel build or manually:

```bash
npx prisma migrate deploy
npx prisma db seed
```

5. Configure Stripe webhook endpoint: `https://your-domain.com/api/stripe/webhook/`

## Features

### Marketing Site
- Homepage, Pricing, Product pages (Residential, Datacenter, ISP, Mobile)
- API Documentation, Contact form
- Blog, Use Cases, Locations (legacy content preserved)

### Dashboard
- User registration & login (email/password + Google)
- Overview with usage stats
- Subscription management (Stripe Checkout)
- Proxy package purchasing
- Usage statistics
- Billing history
- API key management

## API Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/api/auth/[...nextauth]` | GET/POST | NextAuth handlers |
| `/api/user` | POST/PATCH | Register / update profile |
| `/api/stripe/checkout` | POST | Subscription checkout |
| `/api/stripe/webhook` | POST | Stripe webhooks |
| `/api/orders/checkout` | POST | Proxy package purchase |
| `/api/api-keys` | GET/POST/DELETE | API key CRUD |
| `/api/dashboard` | GET | Dashboard data |
| `/api/contact` | POST | Contact form |

## License

Proprietary — All rights reserved.
