import axios from "axios";
import { useState } from "react";
import Back from "../components/Back";

const Question = () => {

    const [username, setName] = useState();
    const [topic, setTopic] = useState();
    const [duration, setDuration] = useState();
    const [difficulty, setDifficulty] = useState();
    const [category, setCategory] = useState();
    const [questionOne, setQOne] = useState();
    const [questionTwo, setQTwo] = useState();
    const [questionThree, setQThree] = useState();
    const [questionFour, setQFour] = useState();
    const [questionFive, setQFive] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/server/test/testQuestions", {
            username,
            topic,
            duration,
            difficulty,
            category,
            questionOne,
            questionTwo,
            questionThree,
            questionFour,
            questionFive
        })
            .then(result => {
                console.log(result)
                alert("questions has been made")
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    return (

        <div className="wrapper border form">
            <form className="testDoc" onSubmit={handleSubmit}>
                <h3>Enter Test Details:</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Value</th>
                            <th>Input</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="value">Name</td>
                            <td><input type="text" className="input" placeholder="enter your name" onChange={(e) => setName(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td className="value">Topic</td>
                            <td><input type="text" className="input" placeholder="enter topic name" onChange={(e) => setTopic(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td className="value">Difficulty</td>
                            <td><input type="text" className="input" placeholder="enter difficulty level" onChange={(e) => setDifficulty(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td className="value">Category</td>
                            <td><input type="text" className="input" placeholder="aptitude" onChange={(e) => setCategory(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td className="value">Duration</td>
                            <td><input type="number" className="input" placeholder="enter duration in seconds" onChange={(e) => setDuration(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td className="value">Question</td>
                            <td><textarea name="" id="" className="input" rows="2" placeholder="enter question here" onChange={(e) => setQOne(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td className="value">Question</td>
                            <td><textarea name="" id="" className="input" rows="2" placeholder="enter question here" onChange={(e) => setQTwo(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td className="value">Question</td>
                            <td><textarea name="" id="" className="input" rows="2" placeholder="enter question here" onChange={(e) => setQThree(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td className="value">Question</td>
                            <td><textarea name="" id="" className="input" rows="2" placeholder="enter question here" onChange={(e) => setQFour(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td className="value">Question</td>
                            <td><textarea name="" id="" className="input" rows="2" placeholder="enter question here" onChange={(e) => setQFive(e.target.value)} /></td>
                        </tr>
                        <button type="submit">Submit</button>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default Question;
