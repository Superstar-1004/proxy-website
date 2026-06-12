import Stripe from 'stripe';

let stripeClient: Stripe | null = null;

export function getStripe(): Stripe {
  if (!stripeClient) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) throw new Error('STRIPE_SECRET_KEY is not configured');
    stripeClient = new Stripe(key, { typescript: true });
  }
  return stripeClient;
}

export const PLANS = {
  starter: {
    name: 'Starter',
    price: 29,
    priceId: process.env.STRIPE_PRICE_STARTER ?? '',
    features: ['5 GB residential traffic', '2 API keys', 'Email support', 'Basic analytics'],
  },
  professional: {
    name: 'Professional',
    price: 99,
    priceId: process.env.STRIPE_PRICE_PROFESSIONAL ?? '',
    features: ['50 GB residential traffic', '10 API keys', 'Priority support', 'Advanced analytics', 'Team access'],
    popular: true,
  },
  enterprise: {
    name: 'Enterprise',
    price: 299,
    priceId: process.env.STRIPE_PRICE_ENTERPRISE ?? '',
    features: ['500 GB traffic', 'Unlimited API keys', 'Dedicated manager', 'SLA guarantee', 'Custom integrations'],
  },
} as const;

export type PlanId = keyof typeof PLANS;
