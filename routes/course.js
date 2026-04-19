const express = require("express");
const courseRouter = express.Router();

courseRouter.get("/preview", function (req, res) {
    res.json({
        message: "courses fetched successfully"
    })
})

courseRouter.post("/purchase", function (req, res) {
    res.json({
        message: "purchase added successfully"
    })
})

module.exports = courseRouter;