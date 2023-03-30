import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div>
            <h2>Page not found!</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae tempora ullam quae.</p>

            <p>Go to <Link to="/">Homepage</Link>.</p>
        </div>
    );
};

export default NotFound;