import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h1>Oh no, this page doesn't exist</h1>
            <p>
                <Link to="/">Go Back Home</Link>
            </p>
        </div>
    )
}

export default Error;