const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({

    answers: {
        type: Array,
        required: true
    },
     username: {
        type: String,
        required: true
     }
})

module.exports = mongoose.model("answers", answerSchema)