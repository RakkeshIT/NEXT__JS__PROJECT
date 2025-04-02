import clientPromise from '@/utils/connect';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

async function getUserRole(email: string){
   const client = await clientPromise;
   const db = client.db();
   const user= await db.collection('User').findOne({email})
   return user?.role || 'user'

}


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, password, role  }  = body;
        if (!name || !email || !password ) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db()

        const existingUser = await db.collection('User').findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: 'User is Exist' }, { status: 400 })
        }

        const hashPassword = await bcrypt.hash(password, 10);
        // Assign Role
        let assignedRole = 'user'

        if(role){
            const requestHeaders = req.headers;
            const requestEmail = requestHeaders.get('request-email')
            if(!requestEmail){
                return NextResponse.json({message: 'Unauthorized'}, {status:403})
            }

            const requestRole = await getUserRole(requestEmail)

            if(requestRole === "SuperAdmin"){
                assignedRole = role
            }else {
                return NextResponse.json({message:'nauthorized to assign roles'},{status:403})
            }
        }

        const newUser = {
            name,
            email,
            password: hashPassword,
            role: assignedRole,
            createdAt: new Date(),
        }
        await db.collection('User').insertOne(newUser);
        return NextResponse.json({ message: "User Create Successfully" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "User can not Create", error: error.message }, { status: 500 })
    }
}