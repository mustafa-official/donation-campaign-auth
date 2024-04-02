import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h2>Oops!</h2>
            <Link to="/"><Button>Go to Home</Button></Link>
        </div>
    );
};

export default ErrorPage;