function handler(req, res) {
    const eventId = req.query.eventId;

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

        res.status(201).json({ message: "added comment", comment: newComment });
    }

    if (req.method === "GET ") {
        const dummyList = [
            { id: "c1", name: "shota", comment: "badri shubladzes moutyan kargis traki" },
            { id: "c2", name: "badri", comment: "shota shem shegeci" },
        ];
        res.status(200).json({ commnets: dummyList });
    }
}

export default handler;
