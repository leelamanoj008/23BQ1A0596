const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    next();
});

app.get("/", (req, res) => {
    res.send("Middleware Working");
});

app.listen(3000, () => {
    console.log("Server started");
});