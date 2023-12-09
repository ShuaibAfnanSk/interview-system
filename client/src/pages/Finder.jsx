import { useState } from "react";
import { Link } from "react-router-dom";
import Back from "../components/Back";

const Finder = () => {

    const [id, setId] = useState();

    return (
        <>
            <Back />
            <div className="wrapper finderWrapper">
                <form className="finder">
                    <label htmlFor="finder">Enter test id</label>
                    <input type="text" name="finder" placeholder="enter id here" onChange={(e) => setId(e.target.value)} />
                    <Link className="link" to={`/test/${id}`}><button style={{ background: "#4CAF50" }} type="submit">Find</button></Link>
                </form>
            </div>
        </>
    );
}

export default Finder;