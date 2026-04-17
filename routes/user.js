const express = require("express");
const userRouter = express.Router();

app.post("/signup", function (req, res) {
    res.json({
        message: "user created successfully"
    })
})

app.post("/signin", function (req, res) {
    res.json({
        message: "user signed in successfully"
    })
})

app.get("/purchases", function (req, res) {
    res.json({
        message: "purchase added successfully"
    })
})

module.exports = userRouter;
