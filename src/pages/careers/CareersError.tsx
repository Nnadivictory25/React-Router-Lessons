import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";


const CareersError = () => {
    const error = useRouteError() as ErrorEvent

    return (
        <div className="careers-error">
            <h2>Error</h2>
            <p>{error.message}</p>
            <Link to="/">Back to Homepage</Link>
        </div>
    );
};

export default CareersError;