// app/api/events/[id]/route.ts
import clientPromise from '@/utils/connect';
import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const event = await db.collection('eventcreated').findOne({ _id: new ObjectId(params.id) });
    if (!event) {
      return NextResponse.json({ message: "Event not found" }, { status: 404 });
    }
    return NextResponse.json(event);
  } catch (error: any) {
    return NextResponse.json(
      { message: "Fetch Error", error: error.message },
      { status: 500 }
    );
  }
}


// DELETE API
export async function PATCH(req: Request) {
  try {
    const {
      id,
      eventname,
      description,
      handlername,
      round,
      firstround,
      secondround,
      thirdround,
    } = await req.json();
    if (!id) {
      return NextResponse.json({ message: "ID is Required" }, { status: 400 });
    }
    const client = await clientPromise;
    const db = client.db();
    const update = await db.collection("eventcreated").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          eventname,
          description,
          handlername,
          round,
          firstround,
          secondround,
          thirdround,
        },
      }
    );
    return NextResponse.json({message:"Updated", update}, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Data Fetching Error", error: error.message },
      { status: 500 }
    );
  }
}