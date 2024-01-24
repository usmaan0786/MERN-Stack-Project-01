import express from "express";

const app = express();
const port = 3000

app.get("/" , (req, res) => {
    res.send("Welcome to home page");
})

app.get("/about" , (req, res) => {
    res.send("Welcome to about page");
})

app.get("/contact" , (req, res) => {
    res.send("Welcome to contact page");
})
app.get("/signIn" , (req, res) => {
    res.send("Welcome to signIn page");
})
app.get("/signUp" , (req, res) => {
    res.send("Welcome to signUp page");
})


app.listen(port, () => {
    console.log(`Listening to port no ${port}`)
})