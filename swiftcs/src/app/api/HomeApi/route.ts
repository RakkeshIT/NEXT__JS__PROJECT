import { ObjectId } from 'mongodb';
import clientPromise from '@/utils/connect';
import { NextRequest, NextResponse } from 'next/server';
interface ContentType {
    TextOne: string,
    TextTwo: string,
}
// Post Method
export async function POST(req: Request) {
    try {
        const { TextOne,TextTwo }: ContentType = await req.json();
        const data = { TextOne, TextTwo};
        const client = await clientPromise;
        const db = client.db();
        await db.collection('contents').insertOne(data);
        return NextResponse.json({ message: "Content created successfully" });
    } catch (error) {
        return NextResponse.json({ message: "Something Error", error: error.message }, { status: 500 });
    }
}
// GET API
export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db();
        const contents = await db.collection('contents').find({}).toArray();
        return NextResponse.json(contents, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Data Fetching Error", error: error.message }, { status: 500 })
    }
}
// UPDATE API
export async function PUT(req:Request) {
    try {
        const {id,TextOne,TextTwo} =await req.json();
      
        if(!id){
            alert("Id is Required")
        }
        const client = await clientPromise;
        const db = client.db();
        const update = await db.collection('contents').updateOne(
            {_id: new ObjectId(id)},
            {$set: {TextOne,TextTwo}}
        )
        if(update.matchedCount === 0 ){
            return NextResponse.json({message:"Content not Found"}, {status:404});
        }
        return NextResponse.json({message:"Content Updated"}, {status:200});
    } catch (error) {
        return NextResponse.json({message:"Content Not Updated", error:error.mesaage}, {status:500});
    }
}
// DELETE API
export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");
        if(!id) {
            return NextResponse.json({message: "ID is Required"}, {status:400})
        }
        const client = await clientPromise;
        const db = client.db();
        const contents = await db.collection('contents').deleteOne({_id: new ObjectId(id)});
        return NextResponse.json(contents, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Data Fetching Error", error: error.message }, { status: 500 })
    }
}