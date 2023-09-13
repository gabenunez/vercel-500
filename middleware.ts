import { NextRequest, NextFetchEvent, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  try {
    throw new TypeError("oops");
  } catch (err) {
    console.log("500");
    return NextResponse.redirect(new URL("/500", request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
