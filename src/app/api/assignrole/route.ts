import clientPromise from "@/utils/connect";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
export async function PUT(req: Request) {
  try {
    const { userId, role } = await req.json();

    if (!userId || !role) {
      return NextResponse.json(
        { message: "UserId and RoleId Req" },
        { status: 201 }
      );
    }

    const client = await clientPromise;
    const db = client.db();

    const updateUser = await db.collection("User").updateOne(
      { _id: new ObjectId(userId) },
      {
        $set: {
          role: role,
        },
      }
    );

    return NextResponse.json(
      { message: "success", updateUser },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Somethind went Wrong" },
      { status: 500 }
    );
  }
}
