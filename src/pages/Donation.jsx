import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../utils/localStorage";
import DonationCard from "../components/DonationCard";
import { Button } from "@material-tailwind/react";
import EmptyDonation from "../components/EmptyDonation";
import { Helmet } from "react-helmet-async";

const Donation = () => {
  const [localData, setLocalData] = useState([]);
  const [show, setShow] = useState(4);
  useEffect(() => {
    setLocalData(getFromLocalStorage);
  }, []);
  return (
    <>
      <Helmet>
        <title>Campaign | Donation</title>
      </Helmet>
      <div className="grid grid-cols-2 gap-5">
        {localData.slice(0, show).map((data) => (
          <DonationCard key={data.id} data={data}></DonationCard>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        {localData.length < 1 ? <EmptyDonation></EmptyDonation> : ""}
        {localData.length > 4 && (
          <Button
            onClick={() => setShow(localData.length)}
            className={show === localData.length && "hidden"}
          >
            Show All
          </Button>
        )}
      </div>
    </>
  );
};

export default Donation;
