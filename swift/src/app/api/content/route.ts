import ConnectMongo from "@/utils/connect";
import ContentModel from "@/models/content";
import { NextRequest, NextResponse } from "next/server";

interface ContentType {
    title: string,
    description: string,
}
export async function POST(req: Request): Promise<Response> {
    try {
        const { title, description }: ContentType = await req.json();
        const Data = { title, description };
        await ConnectMongo();
        await ContentModel.create(Data)
        return new Response(JSON.stringify({ msg: 'Succes' }))
    } catch (error) {
        return new Response(JSON.stringify({ msg: (error as Error).message }))
    }
}

export async function GET(): Promise<Response> {
    try {
        await ConnectMongo();
        const dataFetching = await ContentModel.find({})
        return new Response(JSON.stringify(dataFetching), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({ msg: (error as Error).message }))
    }
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
    try {
        await ConnectMongo();
        const { id } = await req.json();
        await ContentModel.findByIdAndDelete(id);
        return NextResponse.json({ msg: "Content deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: (error as Error).message }, { status: 500 });
    }
}