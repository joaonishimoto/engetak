import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  /* const token = request.cookies.get('__Secure-next-auth.session-token')?.value; */
  const token = request.cookies.get('next-auth.session-token')?.value;
  const signInPage = new URL('/login', request.url);
  const usersPage = new URL('/users', request.url);
  const mainPage = new URL('/', request.url);

  if(!token){
    if(request.nextUrl.pathname === '/login') {
      console.log('not authenticate, please login!')
      return NextResponse.next()
    }
    return NextResponse.redirect(signInPage)
  }

  if(request.nextUrl.pathname === '/') {
    console.log("authenticate!")
    return NextResponse.next()
  }

  if(request.nextUrl.pathname === '/login') {
    console.log("there's no reason to stay here")
    return NextResponse.redirect(mainPage)
  }

  console.log('authenticate!');
  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/login'],
};
