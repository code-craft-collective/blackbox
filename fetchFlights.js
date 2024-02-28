const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5005;

const uri = "mongodb://localhost:27017/plane";

app.use(express.json());

/*async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
} */

app.get("/api/flights", async (req, res) => {
  try {
    const database = client.db("mongodb://localhost:27017/plane");
    const collection = database.collection("flights");
    const flights = await collection.find({}).toArray();
    res.json(flights);
  } catch (error) {
    console.error("Error fetching flights:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/* connectToMongoDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}); */

module.exports = app;
