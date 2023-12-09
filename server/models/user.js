const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: false
    },
    admin: {
        type: Boolean,
        default: false
    }
    
})

module.exports = mongoose.model("users", userSchema)