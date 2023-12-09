const router = require("express").Router()
const FeedbackModel = require("../models/feedback")

router.post("/", (req, res) => {
    FeedbackModel.create(req.body)
        .then(feedbacks => res.json(feedbacks))
        .catch(err => res.json(err))
})

module.exports = router;