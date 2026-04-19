const express = require("express");
const adminRouter = express.Router();

adminRouter.post("/signup", function (req, res) {
    res.json({
        message: "admin created successfully"
    })
})

adminRouter.post("/signin", function (req, res) {
    res.json({
        message: "admin signed in successfully"
    })
})

adminRouter.use(adminMiddleware)

adminRouter.post("/courses", function (req, res) {
    res.json({
        message: "course created successfully"
    })
})

adminRouter.post("/courses/bulk", function (req, res) {
    res.json({
        message: "course updated successfully"
    })
})

module.exports = adminRouter