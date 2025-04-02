import { authMiddleware } from "@/lib/middleware/authMiddleware";
import { NextResponse, NextRequest } from "next/server";


export async function GET(req: NextRequest) {
    
    const authData = await authMiddleware(req);

    if('message' in authData) return authData;

    const {user, rolesData} = authData;
    
    return NextResponse.json({user, permission: rolesData?.permission || []})
}