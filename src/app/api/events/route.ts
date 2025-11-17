import clientPromise from "@/utils/connect";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";

// Create a Types for Data

interface eventCreateProps {
  eventname: string;
  description: string;
  handlername: string;
  round: string;
  firstround: Date;
}

export async function POST(req: Request) {
  try {
    const {
      eventname,
      description,
      handlername,
      round,
      firstround,
    }: eventCreateProps = await req.json();
    const data = {
      eventname,
      description,
      handlername,
      round,
      firstround,
    };
    const client = await clientPromise;
    const db = client.db();
    await db.collection("eventcreated").insertOne(data);
    return NextResponse.json({ message: "Events Created Success" });
  } catch (error) {
    return NextResponse.json(
      { message: "Something Error", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const contents = await db.collection("eventcreated").find({}).toArray();
    return NextResponse.json(contents, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something Errors", error: error.message },
      { status: 500 }
    );
  }
}

// DELETE API
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ message: "ID is Required" }, { status: 400 });
    }
    const client = await clientPromise;
    const db = client.db();
    const contents = await db
      .collection("eventcreated")
      .deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json(contents, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Data Fetching Error", error: error.message },
      { status: 500 }
    );
  }
}


