import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://talinspelningar:cYSyhiAls2HeOlGS@cluster0.llcphw5.mongodb.net/";
const dbName = "talinspelningar"; // Replace 'your_database_name' with your actual database name

let client: MongoClient;

export async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    console.log("Connected to MongoDB");
  }
  return client.db(dbName);
}

export async function disconnectFromDatabase() {
  if (client) {
    await client.close();
  }
}

export default connectToDatabase;
