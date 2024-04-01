import { redirect } from "next/navigation";
import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get('__Secure-next-auth.session-token')?.value
  /* const token = request.cookies.get('next-auth.session-token')?.value */
  const signInURL = new URL('/auth/login', request.url)
  const mainURL = new URL('/', request.url)

  if(token && request.nextUrl.pathname  === '/auth/login') {
    return NextResponse.redirect(mainURL)
  }


  if(!token && request.nextUrl.pathname  === '/users') {
    return NextResponse.redirect(signInURL)
    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/users/:slug*', '/auth/login'],
};

