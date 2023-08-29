import { NextResponse } from 'next/server';

function middleware(request) {
    if (request.nextUrl.pathname != "/login") {
        console.log("middleware");
        return NextResponse.redirect(new URL("/login", request.url))
    }
}

export const config = {

    //For single URL  path
    // matcher: "/about/:path*"

    //For multiple URL path
    matcher: ["/about/:path*", "/studentlist/:path*"]
}

export default middleware