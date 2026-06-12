import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  company: z.string().min(1),
  jobTitle: z.string().min(1),
  companySize: z.string().min(1),
  useCase: z.string().min(1),
  message: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = schema.parse(await req.json());
    console.log('Demo request:', body);
    return NextResponse.json({
      success: true,
      message: 'Thank you! A product expert will reach out within 1 business day to schedule your demo.',
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to submit request' }, { status: 500 });
  }
}
