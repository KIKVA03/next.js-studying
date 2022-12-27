const { MongoClient } = require("mongodb");

// Connection URL
const url =
    "mongodb+srv://david:a3C0chwoyjQUDHPv@cluster0.pvgapfv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

const dbName = "Project0";

async function main(newComment) {
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("comments");

    // the following code examples can be pasted here...
    await collection.insertOne({ newComment });

    return "done.";
}

function handler(req, res) {
    const eventId = req.query.eventId;
    console.log(eventId);

    if (req.method === "POST") {
        const { email, name, text } = JSON.parse(req.body);

        if (!email.includes("@") || !name || name.trim() === "" || !text || text.trim === "") {
            res.status(402).json({ message: "invalid inputs" });
        }

        const newComment = {
            id: new Date().toISOString(),
            email,
            name,
            text,
        };

        main(newComment)
            .then(console.log)
            .finally(() => client.close());

        res.status(201).json({ message: "added comment", comment: newComment });
    }

    if (req.method === "GET") {
        const dummyList = [
            { id: "c1", name: "shota", comment: "badri shubladzes moutyan kargis traki" },
            { id: "c2", name: "badri", comment: "shota shem shegeci" },
            { id: "c3", name: "grisha", comment: "she komunisto nabichvaro" },
        ];

        res.status(200).json({ comments: dummyList });
    }
}

export default handler;
