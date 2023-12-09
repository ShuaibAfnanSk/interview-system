import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div class="errorWrapper">
            <div class="errorBx">
                <h2>404</h2>
                <h2>Erorr</h2>
                <div>
                    <p>The page you are looking for could not be found</p>
                    <Link to='/' className="link"><button style={{color:"#000"}}>Back to homepage</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Error;