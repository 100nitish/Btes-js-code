require("dotenv").config();

const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGODB_URI);

async function connectDB() {
    try {
        await client.connect();

        console.log("MongoDB connected successfully!");

        const db = client.db("studentDB");
        const collection = db.collection("students");

        const data = await collection.find().toArray();

        console.log(data);

    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        await client.close();
    }
}

connectDB();