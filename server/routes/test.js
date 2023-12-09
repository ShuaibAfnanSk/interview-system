const router = require("express").Router();
const TestModel = require("../models/question");

router.post("/testQuestions", (req, res) => {
    TestModel.create(req.body)
        .then(test => res.json(test))
        .catch(err => res.json(err))
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    TestModel.findById(id)
        .then(questions => res.json(questions))
        .catch(err => res.json(err))
})

module.exports = router;