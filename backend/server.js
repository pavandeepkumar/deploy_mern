import express from "express";

const app = express();

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

// get a list of five jokes
app.use(express.static("dist"));
app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Why did the scarecrow win an award?",
            content: "Because he was outstanding in his field!"
        },
        {
            id: 2,
            title: "How do you organize a space party?",
            content: "You 'planet'!"
        },
        {
            id: 3,
            title: "Why don't scientists trust atoms?",
            content: "Because they make up everything!"
        },
        {
            id: 4,
            title: "What do you call a fish with no eyes?",
            content: "Fsh!"
        },
        {
            id: 5,
            title: "What's orange and sounds like a parrot?",
            content: "A carrot!"
        }
    ];
    res.send(jokes);
    // You can access individual jokes like this:
    // console.log(jokes[0]); // Access the first joke

});

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));