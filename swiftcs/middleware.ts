import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value;
  const pathname = req.nextUrl.pathname;

  // Define your public (unprotected) routes
  const PUBLIC_PATHS = [
    "/",
    "/client/auth/login",
    "/client/auth/register",
  ];

  // Allow public routes without token
  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Redirect to login if no token
  if (!token) {
    console.log("❌ No token found. Redirecting to login.");
    return NextResponse.redirect(new URL("/client/auth/login", req.url));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;

    // Optional: Role-based restriction (customize if needed)
    // if (pathname.startsWith("/client/admin") && decoded.role !== "admin") {
    //   return NextResponse.redirect(new URL("/unauthorized", req.url));
    // }

    return NextResponse.next();
  } catch (error) {
    console.log("❌ Invalid token. Redirecting to login.");
    return NextResponse.redirect(new URL("/client/auth/login", req.url));
  }
}

// Configure paths that should trigger the middleware
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    // Add all your private route prefixes here
  ],
};
