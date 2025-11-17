import { NextRequest, NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

// const PUBLIC_PATHS = ['/client', '/client/auth/login', '/client/auth/register']
const PROTECTED_PATHS = ['/dashboard', '/admin']

export async function middleware(req: NextRequest) {
    const token = req.cookies.get('authToken')?.value;
    const pathname = req.nextUrl.pathname

    if(!PROTECTED_PATHS.some((path) => pathname.startsWith(path))){
        return NextResponse.next()
    }

    if(!token){
        return NextResponse.redirect(new URL('/client/auth/login', req.url))
    }

    try {
        verify(token, process.env.JWT_SECRET!);

        return NextResponse.next()
    } catch (error) {
        return NextResponse.redirect(new URL('/client/auth/login', req.url))
    }
}

export const config = {
    matcher: [
        '/dashboard/:path*', '/admin/:path*',
    ]
}