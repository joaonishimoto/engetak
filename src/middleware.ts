import { redirect } from "next/navigation";
import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  /* const token = request.cookies.get('__Secure-next-auth.session-token')?.value */
  const token = request.cookies.get('next-auth.session-token')?.value
  const signInURL = new URL('/auth/login', request.url)
  const mainURL = new URL('/', request.url)

  if(!token) {
    console.log(5555)
    if(request.nextUrl.pathname === '/auth/login') {
      console.log(111)
      NextResponse.redirect(new URL(signInURL))
      return NextResponse.next()
    }
  }

  if(request.nextUrl.pathname  === '/auth/login') {
    console.log(2222)
    if(token) {
      console.log(3333)
      return NextResponse.redirect(mainURL)
    }
  }
}

export const config = {
  matcher: ['/users/:slug*', '/auth/login'],
};

