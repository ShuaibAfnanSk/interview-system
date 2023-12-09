const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({

    answers: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model("answers", answerSchema)