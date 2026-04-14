import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("links");
  const url = (await params).url;
  const link = await collection.findOne({ shorturl: url });

  if (link) {
    redirect(link.url);
  } else {
    return <p className="w-full w-text text-center">Link not found</p>;
  }
}
