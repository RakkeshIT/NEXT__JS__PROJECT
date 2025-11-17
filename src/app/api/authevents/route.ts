import clientPromise from '@/utils/connect';
import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function GET(req: NextRequest) {
    try {
        const token = await getToken({req});

        if(!token) {
            return NextResponse.json({message: "Token is Not Fetch"}, {status:401})
        }

        const client = await clientPromise;
        const db = client.db();
        const userEmail = token.email;
        const userId = token._id;
        const getEvents = await db.collection('eventregisteration').find({email:userEmail}  ).toArray();
        return NextResponse.json({message: 'Event is Fetched', event: getEvents}, {status:200})
    } catch (error) {
        return NextResponse.json({message: 'Event is not Fetched'}, {status:500})
    }
}