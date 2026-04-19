const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(process.env.MONGODB_URI)
console.log("connected to db")
const objectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;


const userSchema = Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const adminSchema = Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const courseSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    // ✅ Fixed
    creatorID: {
        type: objectId,
        ref: "Admin",
        required: true
    }

})

const purchaseSchema = Schema({
    userID: {
        type: objectId,
        ref: "User",
        required: true
    },
    courseID: {
        type: objectId,
        ref: "Course",
        required: true
    }
})

const userModel = mongoose.model("User", userSchema)
const adminModel = mongoose.model("Admin", adminSchema)
const courseModel = mongoose.model("Course", courseSchema)
const purchaseModel = mongoose.model("Purchase", purchaseSchema)

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}
