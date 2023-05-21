const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const userRoute = require("./routes/user.routes")
const programeRoute = require("./routes/programe.routes")


app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("Welcome to As Sunnah Programe Server!!!");
})

app.use("/api/v1/user", userRoute);
app.use("/api/v1/programe", programeRoute);

module.exports = app;