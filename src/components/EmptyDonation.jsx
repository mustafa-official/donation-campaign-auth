import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const EmptyDonation = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-5xl font-bold">Nothing Added</h2>
      <Link to="/">
        <Button>Go to Home</Button>
      </Link>
    </div>
  );
};

export default EmptyDonation;
