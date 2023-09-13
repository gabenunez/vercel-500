import { NextRequest, NextFetchEvent, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  try {
    throw new TypeError("oops");
  } catch (err) {
    console.log("500");
    return NextResponse.redirect(new URL("/500", request.url));
  }
}
