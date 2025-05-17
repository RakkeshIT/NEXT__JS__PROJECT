import clientPromise from '@/utils/connect'
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    try {
        const { name, email, password, role } = await req.json();

        const client = await clientPromise;
        const db = client.db();
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = { name, email, hashPassword, role, createdAt: new Date() };
        await db.collection('Users').insertOne(newUser)
    } catch (error) {

    }
}


export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db();
        const users = await db.collection('User').find({}).toArray();
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Users is not fetching" }, { status: 500 })
    }
}