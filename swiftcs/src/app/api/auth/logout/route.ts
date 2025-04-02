import { NextResponse, NextRequest } from 'next/server';

export async function POST(req:NextRequest) {
    try {
        const response = NextResponse.json({message: 'Logout Successfull'})

        response.cookies.set({
            name:'authToken',
            value:'',
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production',
            sameSite:'strict',
            path:'/',
            maxAge: 0,
        })

        return response;
    } catch (error) {
        return NextResponse.json({message: 'Logout UnSuccess'}, {status:500})
    }
}