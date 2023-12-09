import { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Header = () => {

    const { user, dispatch } = useContext(Context)
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <header>
            <div className="logo-box">
                <img src={logo} alt="" />
                <h5 className="logo">LeadSOC</h5>
            </div>
            <ul>
                <Link to={"/finder"} className="link"><li>Find</li></Link>
                {user && user.admin && <Link to="/question" className="link"><li>Question</li></Link>}
                {user ? (<li style={{ cursor: "pointer" }} onClick={handleLogout}>Logout</li>) : (<Link to={"/login"} className="link"><li>Login</li></Link>)}
            </ul>
        </header>
    );
}

export default Header;