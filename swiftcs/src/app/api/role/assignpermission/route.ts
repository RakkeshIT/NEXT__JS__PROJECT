import clientPromise from '@/utils/connect';
import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
export async function PUT(req: NextRequest) {
    try {
        const {roleId, permission} = await req.json();

        if(!roleId || !permission) {
            return NextResponse.json({message:'Field is Required'},  {status:201})
        }

        const client = await clientPromise;
        const db = client.db();

        await db.collection('Roles').updateOne(
            {_id: new ObjectId(roleId)},
            {$set: {permission: permission}}
        )

        return NextResponse.json({message:'Role Has Been Updated'}, {status:200})
    } catch (error) {
        return NextResponse.json({message:'Role Has Not Been Updated'}, {status:500})
    }
}