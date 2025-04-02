import clientPromise from '@/utils/connect'
import { NextResponse, NextRequest } from 'next/server';
export async function POST(req: NextRequest){
    try {
        const {name} = await req.json   (); 
        const client = await clientPromise;
        const db = client.db();
        const newPermissions = {name, createdAt: new Date()}
        await db.collection('Permissions').insertOne(newPermissions);
        return NextResponse.json({message:"Permissions Created Successfully"}, {status:200})
    } catch (error) {
        return NextResponse.json({message:"Permissions Not Created Successfully"}, {status:500})
    }
}


export async function GET(){
    const client = await clientPromise;
    const db = client.db();
    const permissions = await db.collection('Permissions').find().toArray();
    return NextResponse.json(permissions);
}