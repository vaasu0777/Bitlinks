import { NextResponse, NextRequest } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST() {
  const body = await NextRequest.json();
  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("links");

  const doc = await collection.findOne({ shorturl: body.shorturl });
  if (doc) {
    return NextResponse.json({
      success: false,
      error: true,
      message: "URL already exists!",
    });
  } else {
    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
      userId: body.userId,
    });
    return NextResponse.json({
      success: true,
      error: false,
      message: "Abe oooo Bhikmangye",
    });
  }
}
