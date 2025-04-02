import clientPromise from '@/utils/connect';
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export async function authMiddleware(req: NextRequest) {
    try {
        const token = req.cookies.get('authToken')?.value;
        if(!token) return NextResponse.json({message:'Unauthorized'}, {status:401})
        
        const decoded : any = jwt.verify(token, process.env.JWT_SECRET as string);

        const client = await clientPromise;
        const db = client.db();

        const user = await db.collection('User').findOne({email: decoded.email})

        if(!user) return NextResponse.json({message: 'User Not Found'}, {status:404})

        const rolesData = await db.collection('Roles').findOne({rolename: user.role})

        return {user, rolesData}
    } catch (error) {
        return NextResponse.json({message: 'Authentication is Failed'}, {status:401})
    }
}