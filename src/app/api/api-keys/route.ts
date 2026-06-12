import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { generateApiKey } from '@/lib/utils';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const keys = await prisma.apiKey.findMany({
    where: { userId: session.user.id },
    select: { id: true, name: true, prefix: true, lastUsed: true, createdAt: true },
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(keys);
}

const createSchema = z.object({ name: z.string().min(1).max(50) });

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { name } = createSchema.parse(await req.json());
    const { key, prefix, hash } = generateApiKey();
    const keyHash = await bcrypt.hash(hash, 10);

    const apiKey = await prisma.apiKey.create({
      data: { userId: session.user.id, name, keyHash, prefix },
    });

    return NextResponse.json({
      id: apiKey.id,
      name: apiKey.name,
      prefix: apiKey.prefix,
      key,
      createdAt: apiKey.createdAt,
    });
  } catch {
    return NextResponse.json({ error: 'Failed to create API key' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await req.json();
  await prisma.apiKey.deleteMany({ where: { id, userId: session.user.id } });
  return NextResponse.json({ success: true });
}
