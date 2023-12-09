const router = require("express").Router();
const AnswerModel = require("../models/answer");

router.post("/sendAnswers", (req, res) => {
    AnswerModel.create(req.body)
        .then(answers => res.json(answers))
        .catch(err => res.json(err))
})

module.exports = router;