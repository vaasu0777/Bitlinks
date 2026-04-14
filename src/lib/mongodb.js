import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config({ path: "C:\\Users\\Ishika\\Coding-by-Vaasu\\bitlinks\\.env" });

const uri = process.env.MONGODB_URI;

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Add MongoDB URI to .env");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
