import clientPromise from '@/utils/connect'
import bcrypt from 'bcryptjs';
import { NextRequest,NextResponse } from 'next/server'

export async function POST(req:NextRequest) {
    try {
        const {name, email, password, role} = await req.json();

        const client = await clientPromise;
        const db = client.db();
        const hashPassword = await bcrypt.hash(password,10);
        const newUser = {name, email, hashPassword, role, createdAt: new Date()};
        await db.collection('Users').insertOne(newUser)
    } catch (error) {
        
    }
}