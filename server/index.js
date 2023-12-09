const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/authentication");
const testRoute = require("./routes/test");
const answerRoute = require("./routes/answerFetch");
const feedbackRoute = require("./routes/feedbackRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://shuaibafnansk:Shuaib11@cluster0.k5qlbv2.mongodb.net/leadsoc?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(console.log('atlas is connected'))
    .catch((err) => {
        console.log(err)
    });

app.use("/server/auth", authRoute);
app.use("/server/test", testRoute);
app.use("/server/answerFetch", answerRoute);
app.use("/server/feedback", feedbackRoute);

app.listen(3001, () => (
    console.log("app is running")
))