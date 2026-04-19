const express = require("express");
const mongoose = require("mongoose");
const app = express()
const userRouter = require("./routes/user");
const courseRouter = require("./routes/course");
const adminRouter = require("./routes/admin");
const dotenv = require("dotenv");
dotenv.config();




app.use(express.json());

app.use("/api/v1/user", userRouter)
app.use("/api/v1/courses", courseRouter)
app.use("/api/v1/admin", adminRouter)

async function main() {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("connected to db")
    app.listen(3000, () => {
        console.log("server is running on port 3000")
    })
}
main()