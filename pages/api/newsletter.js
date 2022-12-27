const { MongoClient } = require("mongodb");

// Connection URL
const url =
    "mongodb+srv://david:a3C0chwoyjQUDHPv@cluster0.pvgapfv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

const dbName = "Project0";

async function main(email) {
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("emails");

    // the following code examples can be pasted here...
    await collection.insertOne({ email });

    return "done.";
}

function handler(req, res) {
    if (req.method === "POST") {
        const userEmail = req.body.email;

        main(userEmail)
            .then(console.log)
            .finally(() => client.close());

        if (!userEmail || !userEmail.includes("@")) {
            res.status(422).json({ message: "invalid email address!" });
            return;
        }
        console.log(userEmail);
        res.status(201).json({ message: "Singed up", userEmail });
    }
}
export default handler;
