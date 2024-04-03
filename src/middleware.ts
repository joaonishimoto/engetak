import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get('__Secure-next-auth.session-token')?.value;
  /* const token = request.cookies.get('next-auth.session-token')?.value; */
  const signInPage = new URL('/login', request.url);
  const homePage = new URL('/home', request.url);
  const mainPage = new URL('/', request.url);

  if(!token){
    if(request.nextUrl.pathname === '/login') {
      console.log('you are on login page')
      return NextResponse.next()
    }
    console.log('tou are not authenticate, redirecting to login page...')
    return NextResponse.redirect(signInPage)
  }

  if(token) {
    if(request.nextUrl.pathname === '/login') {
      console.log('you are authenticate, login page is not valid for you now')
      return NextResponse.redirect(homePage)
    }
    if(request.nextUrl.pathname.includes('/home')) {
      console.log("authenticate!")
      return NextResponse.next()
    }
  }


/*   if(request.nextUrl.pathname === '/login') {
    console.log("there's no reason to stay here")
    return NextResponse.redirect(mainPage)
  } */

/*   console.log('authenticate!');
  return NextResponse.next() */
}

export const config = {
  matcher: ['/home/:slug*', '/login'],
};
