import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export async function GET() {
  const greeting = await get('app_key');
  return NextResponse.json({ greeting });
}
