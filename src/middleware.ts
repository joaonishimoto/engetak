import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  /* const token = request.cookies.get('__Secure-next-auth.session-token')?.value */
  const token = request.cookies.get('next-auth.session-token')?.value
  const signInURL = new URL('/auth/login', request.url)

  if(!token) {
    return NextResponse.redirect(new URL(signInURL))
  }
}

export const config = {
  matcher: ['/private/:slug*'],
};

