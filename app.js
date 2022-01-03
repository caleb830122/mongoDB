const express = require("express");

const app = express();

// Middleware
app.use("/posts", () => {
    console.log("This is from middleware");
});

// Routes
app.get("/", (req, res) => {
    res.send("You are on home");
});

app.listen(8082);
