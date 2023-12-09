const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    topic: {
        type: String,
        required: true
    },

    difficulty: {
        type: String,
        default: "Unknown"
    },

    duration: {
        type: Number,
        default: 0
    },

    category: {
        type: String,
        default: "Unknown"
    },

    questionOne: {
        type: String,
    },

    questionTwo: {
        type: String,
    },

    questionThree: {
        type: String,
    },

    questionFour: {
        type: String,
    },

    questionFive: {
        type: String,
    }

}, { timestamps: true })

module.exports = mongoose.model("questions", questionSchema)