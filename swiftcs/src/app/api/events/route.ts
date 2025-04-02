import clientPromise from '@/utils/connect';
import { error } from 'console';
import { NextResponse } from 'next/server';

// Create a Types for Data

interface eventCreateProps {
    eventname: string,
    description: string,
    handlername:string,
    round:string,
    firstround:Date,
    secondround:Date,
    thirdround:Date,
}

export async function POST(req: Request) {
    try {
        const {eventname,description,handlername,round,firstround,secondround, thirdround}: eventCreateProps = await req.json();
        const data = {eventname,description,handlername,round,firstround,secondround, thirdround};
        const client = await clientPromise;
        const db = client.db();
        await db.collection('eventcreated').insertOne(data);
        return NextResponse.json({message:'Events Created Success'})
    } catch (error) {
        return NextResponse.json({message:'Something Error', error:error.message}, {status:500})
    }
}

export async function GET(){
    try {
       const client =  await clientPromise;
       const db = client.db();
      const contents =  await db.collection('eventcreated').find({}).toArray();
       return NextResponse.json(contents, {status:200}) 
    } catch (error) {
        return NextResponse.json({message:'Something Errors', error:error.message}, {status:500})
    }
}