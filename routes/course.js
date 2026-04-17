const express = require("express");
const courseRouter = express.Router();

app.get("/course", function (req, res) {
    res.json({
        message: "courses fetched successfully"
    })
})

app.post("/course/purchase", function (req, res) {
    res.json({
        message: "purchase added successfully"
    })
})

module.exports = router;