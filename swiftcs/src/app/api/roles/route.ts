import clientPromise from '@/utils/connect';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { rolename, permission } = await req.json();
        const client = await clientPromise;
        const db = client.db();
        const newRole = { rolename, permission, createdAt: new Date() };
        await db.collection('Roles').insertOne(newRole);

        return NextResponse.json({message: "Role Created is Successfully"}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Role is Not Created"}, {status: 500})
    }
}

export async function GET(){
   try {
    const client = await clientPromise;
    const db = client.db();
    const permissions = await db.collection('Permissions').find().toArray();
    const roles = await db.collection('Roles').find().toArray();
    return NextResponse.json({permissions,roles})
   } catch (error) {
    return NextResponse.json({message: "Roles is not fetching"}, {status:500})
   }
}