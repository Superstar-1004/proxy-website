import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { getStripe } from '@/lib/stripe';
import { prisma } from '@/lib/prisma';
import Stripe from 'stripe';

function getSubscriptionPeriod(sub: Stripe.Subscription) {
  const item = sub.items.data[0];
  const start = item?.current_period_start ?? sub.billing_cycle_anchor ?? Math.floor(Date.now() / 1000);
  const end = item?.current_period_end ?? start;
  return { start, end };
}

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      if (session.mode === 'payment' && session.metadata?.orderId) {
        await prisma.order.update({
          where: { id: session.metadata.orderId },
          data: {
            status: 'completed',
            stripePaymentIntentId: session.payment_intent as string,
          },
        });
      } else if (session.mode === 'subscription' && session.subscription) {
        const sub = await getStripe().subscriptions.retrieve(session.subscription as string);
        const userId = session.metadata?.userId;
        const planId = session.metadata?.planId ?? 'starter';
        const { start, end } = getSubscriptionPeriod(sub);
        if (userId) {
          await prisma.subscription.upsert({
            where: { userId },
            create: {
              userId,
              stripeSubscriptionId: sub.id,
              stripePriceId: sub.items.data[0].price.id,
              status: sub.status,
              plan: planId,
              currentPeriodStart: new Date(start * 1000),
              currentPeriodEnd: new Date(end * 1000),
            },
            update: {
              stripeSubscriptionId: sub.id,
              stripePriceId: sub.items.data[0].price.id,
              status: sub.status,
              plan: planId,
              currentPeriodStart: new Date(start * 1000),
              currentPeriodEnd: new Date(end * 1000),
            },
          });
        }
      }
      break;
    }
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription;
      const { end } = getSubscriptionPeriod(sub);
      await prisma.subscription.updateMany({
        where: { stripeSubscriptionId: sub.id },
        data: {
          status: sub.status,
          currentPeriodEnd: new Date(end * 1000),
          cancelAtPeriodEnd: sub.cancel_at_period_end,
        },
      });
      break;
    }
    case 'invoice.paid': {
      const invoice = event.data.object as Stripe.Invoice;
      if (invoice.customer && invoice.id) {
        const user = await prisma.user.findFirst({
          where: { stripeCustomerId: invoice.customer as string },
        });
        if (user) {
          await prisma.invoice.upsert({
            where: { stripeInvoiceId: invoice.id },
            create: {
              userId: user.id,
              stripeInvoiceId: invoice.id,
              amount: (invoice.amount_paid ?? 0) / 100,
              currency: invoice.currency,
              status: 'paid',
              pdfUrl: invoice.invoice_pdf ?? null,
            },
            update: { status: 'paid', pdfUrl: invoice.invoice_pdf ?? null },
          });
        }
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}
