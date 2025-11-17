import clientPromise from '@/utils/connect';
import { NextResponse, NextRequest } from 'next/server';


export async function POST(req: NextRequest) {
    try {
        const { fullname,email,alteremail,eventname,roundname,classname,year,semester,Result,date } = await req.json();

        const client = await clientPromise;
        const db = client.db();

        const eventregister = await db.collection('eventregisteration').insertOne({
            fullname,
            email,
            alteremail,
            eventname,
            roundname,
            classname,
            year,
            semester,
            Result,
            date,
        })
        return NextResponse.json({message:'Event Register Success', eventregister}, {status:200})
    } catch (error) {
        return NextResponse.json({message:'Event Register Unsuccess'}, {status:500})
    }
}

export async function GET(req: NextRequest) {
    try {
        const url = new URL(req.url);
        const eventname = url.searchParams.get('eventname');

        const client = await clientPromise;
        const db = client.db();
        const users =await db.collection('eventregisteration').find({ eventname }).toArray();
        return NextResponse.json({message:'Event Fetched', users}, {status:200})
    } catch (error) {
        return NextResponse.json({message:'Event Not Fetched'}, {status:500})
    }
}