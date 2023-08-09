import { NextResponse, type NextRequest } from 'next/server';
import { get } from '@vercel/edge-config';

export async function GET(
  req: NextRequest,
  { params }: { params: Record<string, string | string | undefined[]> },
) {
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // });
  // const data = await res.json();
  const greeting = await get('greeting');
  return NextResponse.json({ data: 'get 123434', greeting });
}

export async function POST(
  req: NextRequest,
  { params }: { params: Record<string, string | string | undefined[]> },
) {
  // ...
  return NextResponse.json({
    data: 'post 123434',
  });
}
