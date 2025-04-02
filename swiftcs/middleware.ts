import jwt from 'jsonwebtoken';
import { NextRequest , NextResponse} from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET as string;
const roleBasedRoute: Record<string, string[]> = {
    SuperAdmin: ['/admin'],
    User:['/dashboard'],
    Guest:['/client']
}

export function middleware(req: NextRequest){
    const token = req.cookies.get('authToken')?.value || req.headers.get('Authorization')?.replace('Bearer','');

    const pathName = req.nextUrl.pathname;

    if(pathName.startsWith('/client')){
        return NextResponse.next();
    }

    if(!token){
        return NextResponse.redirect(new URL('/client/auth/login',req.url))
    }

    try {
        const decoded: any = jwt.verify(token, JWT_SECRET);
        const userRole = decoded.role;

        if(pathName.startsWith('/client')){
            return NextResponse.redirect(new URL('/dashboard', req.url))
        }

        if(roleBasedRoute[userRole]?.some(route=> pathName.startsWith(route))){
            return NextResponse.next();
        }

        return NextResponse.redirect(new URL('/client', req.url))
    } catch (error) {
        return NextResponse.redirect(new URL('/client/auth/login',req.url))
    }
}

export const config = {
    matcher: ['/admin/:path*', '/dashboard/:path*', '/client'],
    runtime: 'edge',
}