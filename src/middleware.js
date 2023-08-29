import { NextResponse } from 'next/server';

function middleware(request) {
    if (request.nextUrl.pathname != "/login") {
        console.log("middleware");
        return NextResponse.redirect(new URL("/login", request.url))
    }
}

export default middleware