const express = require("express");
const app = express()

app.post("/user/signup", function (req, res) {
    res.json({
        message: "user created successfully"
    })
})

app.post("/user/signin", function (req, res) {
    res.json({
        message: "user signed in successfully"
    })
})

app.get("/user/purchases", function (req, res) {
    res.json({
        message: "purchase added successfully"
    })
})

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




app.listen(3000, () => {
    console.log("server is running on port 3000")
})