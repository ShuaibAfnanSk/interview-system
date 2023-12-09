import { Link } from "react-router-dom";
import video from "../assets/logIn.mp4"
import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../context/Context";

const Login = () => {

    const [password, setPassword] = useState();
    const [username, setUser] = useState();
    const [error, setError] = useState();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });

        axios.post("http://localhost:3001/server/auth/login", {
            username,
            password
        })
            .then(result => {
                const user = result.data.user;
                dispatch({ type: "LOGIN_SUCCESS", payload: user });
                window.location.replace('/');
                alert(`Welcome to leadsoc ${user.username}`)
            })
            .catch(err => {
                setError(err.response?.data?.error || 'An unexpected error occurred');
                dispatch({ type: "LOGIN_FAILURE" });
            });
    };

    return (
        <div className="wrapper">
            <div className="video">
                <video src={video} loop muted autoPlay />
            </div>
            <div className="formWrapper">
                <form className="authForm" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="john doe" onChange={(e) => setUser(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit">login</button>

                    {error && <span>{error}</span>}

                    <span>Don't have an account? <Link to={"/signup"} className="link">signup</Link></span>
                </form>
            </div>
        </div>
    );
}

export default Login;