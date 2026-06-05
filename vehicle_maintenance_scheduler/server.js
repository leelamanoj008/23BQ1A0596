const express = require("express");

const app = express();

app.use(express.json());

let vehicles = [];

app.post("/addVehicle", (req, res) => {
    vehicles.push(req.body);

    res.json({
        message: "Vehicle Added",
        data: vehicles
    });
});

app.get("/vehicles", (req, res) => {
    res.json(vehicles);
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});