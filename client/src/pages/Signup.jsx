import { Link } from "react-router-dom";
import video from "../assets/signUp.mp4";
import axios from "axios";
import { useState } from "react";

const Signup = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [passwordAlt, setPasswordAlt] = useState();
    const [admin, setAdmin] = useState(false);
    const [error, setError] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/server/auth/signup", { username, email, password , admin})
            .then(result => {
                console.log(result)
                window.location.replace("/login")
            })
            .catch(err => {
                console.log(err)
                setError(err.response?.data?.error || 'An unexpected error occurred');
            })
    }

    return (
        <div className="wrapper">
            <div className="video">
                <video src={video} loop muted autoPlay />
            </div>
            <div className="formWrapper" onSubmit={handleSubmit}>
                <form className="authForm">
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="john doe" onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="example@email.com" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" minLength={8} name="password" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="passwordAlt">Confirm Password</label>
                        <input type="password" minLength={8} name="passwordAlt" onChange={(e) => setPasswordAlt(e.target.value)} required />
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" name="isAdmin" onChange={() => setAdmin(!admin)} />
                            I am admin
                        </label>
                    </div>

                    {password !== passwordAlt ? (<span>passwords do not match</span>) : (null)}
                    {error && <span>{error}</span>}

                    <button type="submit">signup</button>
                    <span>Already have an account? <Link to={"/login"} className="link">login</Link></span>
                </form>
            </div>
        </div>
    );
}

export default Signup;