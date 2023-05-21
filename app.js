const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const userRoute = require("./routes/user.routes")


app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("Route is working! Owe!");
})

app.use("/api/v1/user", userRoute);

module.exports = app;