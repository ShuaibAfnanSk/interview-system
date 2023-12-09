import { useState } from "react";
import Back from "../components/Back";
import axios from "axios";

const Feedback = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = () => {
        axios.post("http://localhost:3001/server/feedback", { username, email, feedback })
            .then(result => {
                console.log(result)
                window.location.replace("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Back />
            <section className="feedback-form">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Full Name" onChange={(e) => setUsername(e.target.value)} />
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <textarea name="" id="" cols="30" rows="5" onChange={(e) => setFeedback(e.target.value)} placeholder="Feedback"></textarea>
                    <button style={{ background: "#4CAF50" }} type="submit">Submit</button>
                </form>
            </section>
        </>
    );
}

export default Feedback;