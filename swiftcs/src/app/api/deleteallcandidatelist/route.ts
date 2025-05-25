import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/utils/connect";
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const eventname = searchParams.get("eventname");
    const client = await clientPromise;
    const db = client.db();
    const deleteContent = await db
      .collection("eventregisteration")
      .deleteMany({eventname});
    return NextResponse.json(
      { message: "All Data was Deleted", deleteContent },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Data Was not deleted", error },
      { status: 500 }
    );
  }
}
