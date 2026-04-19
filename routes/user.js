const express = require("express");
const userRouter = express.Router();

userRouter.post("/signup", function (req, res) {
    res.json({
        message: "user created successfully"
    })
})

userRouter.post("/signin", function (req, res) {
    res.json({
        message: "user signed in successfully"
    })
})

userRouter.get("/purchases", function (req, res) {
    res.json({
        message: "purchase added successfully"
    })
})

module.exports = userRouter;
