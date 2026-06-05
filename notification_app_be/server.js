const express = require("express");

const app = express();

app.use(express.json());

app.post("/sendNotification", (req, res) => {

    const { message } = req.body;

    res.json({
        success: true,
        notification: message
    });

});

app.get("/", (req, res) => {
    res.send("Notification App Backend Running");
});

app.listen(3002, () => {
    console.log("Server running on port 3002");
});