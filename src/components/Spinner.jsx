import { ScaleLoader } from "react-spinners";


const Spinner = () => {
    return (
        <div className="h-screen flex justify-center items-center">
           <ScaleLoader width={20} height={60} color="#36d7b7" /> 
        </div>
    );
};

export default Spinner;