import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  /* const token = request.cookies.get('__Secure-next-auth.session-token')?.value; */
  const token = request.cookies.get('next-auth.session-token')?.value;
  const signInURL = new URL('/login', request.url);
  const usersURL = new URL('/users', request.url);
  const mainURL = new URL('/', request.url);

  if(token && request.nextUrl.pathname === '/login') {
    console.log('redirect to usersURL');
    return NextResponse.redirect(mainURL);
  }

  if (!token) {
    if (request.nextUrl.pathname === '/login') {
      return NextResponse.next();
    }
    console.log('redirect to signInURL');
    return NextResponse.redirect(signInURL);
  }

/*   if (token) {
    if (request.nextUrl.pathname === '/users') {
      return NextResponse.next();
    }
    console.log('redirect to usersURL');
    return NextResponse.redirect(usersURL);
  } */

  console.log('nothing else');
}

export const config = {
  matcher: ['/users/:slug*', '/login'],
};
