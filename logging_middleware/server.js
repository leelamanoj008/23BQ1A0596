const express = require("express");
const axios = require("axios");

const app = express();

async function Log(stack, level, packageName, message) {

    try {

        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack: stack,
                level: level,
                package: packageName,
                message: message
            },
            {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJqdWpqdXJpbGVlbGFtYW5vakBnbWFpbC5jb20iLCJleHAiOjE3ODA2NDIxODEsImlhdCI6MTc4MDY0MTI4MSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjJhMjdjMmM4LWVmZDktNDdmYS1hMTBjLTBhNGRmOGVmNzBjMSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im1hbm9qIiwic3ViIjoiNGM5NDZhYzItNGM5ZS00NWRhLWE0ODEtYTlhMTRlMzRkOTcwIn0sImVtYWlsIjoianVqanVyaWxlZWxhbWFub2pAZ21haWwuY29tIiwibmFtZSI6Im1hbm9qIiwicm9sbE5vIjoiMjNicTFhMDU5NiIsImFjY2Vzc0NvZGUiOiJRUWRFWXkiLCJjbGllbnRJRCI6IjRjOTQ2YWMyLTRjOWUtNDVkYS1hNDgxLWE5YTE0ZTM0ZDk3MCIsImNsaWVudFNlY3JldCI6InB2eGVudlFzcHNmYVVqcEsifQ.zadf6ux8OxgrT2wqIGSAtw3-kwK8--iajJWhWywsp28",
                    "Content-Type": "application/json"
                }
            }
        );

        console.log(response.data);

    } catch (err) {

        console.log(err.response?.data || err.message);

    }
}

app.use((req, res, next) => {

    Log("backend", "info", "middleware", "Request received");

    next();

});

app.get("/", (req, res) => {

    Log("backend", "info", "handler", "Home route accessed");

    res.send("Middleware Working");

});

app.listen(3000, () => {

    Log("backend", "info", "service", "Server started");

    console.log("Server started");

});