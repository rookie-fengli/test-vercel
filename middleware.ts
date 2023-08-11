import { NextRequest, NextResponse } from 'next/server';
import { staticPreFix } from 'config/urlConfig';

export function middleware(req: NextRequest) {
  // if (
  //   req.nextUrl.pathname.includes(`push/push`) &&
  //   req.nextUrl.searchParams.get('userName') !== process.env.AUTH_KEY
  // ) {
  //   return NextResponse.redirect(`/${process.env.BASIC_STATIC_URL}`);
  // }
  return NextResponse.next();
}
export const config = {
  matcher: [],
};
