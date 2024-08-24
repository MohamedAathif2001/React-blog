import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404 Not Found</h1>
            <Link to="/">Back to HomePage!!!</Link>
        </div>
    )
}

export default NotFound;