import clientPromise from '@/utils/connect';
import jwt from 'jsonwebtoken';
import { NextRequest , NextResponse} from 'next/server';
import { cookies } from 'next/headers';
export const GET =  async () =>  {
    try {
        const cookiesStore = await cookies();
        const token = cookiesStore.get('authToken')?.value;
        if(!token) {
            return NextResponse.json({message:"Unauthorized"}, {status:401})
        }
        
        const JWT_SECRET = process.env.JWT_SECRET as string;
        const decoded = jwt.verify(token, JWT_SECRET) as {email: string};

        const client = await clientPromise;
        const db = client.db();
        const events = await db.collection('eventregisteration').find({email:decoded.email}).toArray();
        return NextResponse.json({ message: "Data Fetched", events: events }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Data Fetching Error", error: error.message }, { status: 500 })
    }
}