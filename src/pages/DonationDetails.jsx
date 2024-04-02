import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useLoaderData, useParams } from "react-router-dom";
import useDataLoad from "../Hooks/useDataLoad";
import { useEffect, useState } from "react";
import { saveToLocalStorage } from "../utils/localStorage";
import { Helmet } from "react-helmet-async";

const DonationDetails = () => {
  const [singleData, setsingleData] = useState({});
  const { id } = useParams();
  const { data } = useDataLoad();
  const myData = useLoaderData();

  useEffect(() => {
    if (data) {
      const getData = data.find((item) => item.id === +id);
      setsingleData(getData);
    }
  }, [data, id]);
  const { title, image, description, price, textColor } = singleData || {};

  const handleDonate = () => {
    saveToLocalStorage(singleData);
  };

  return (
    <Card className="mt-10 w-full">
      <Helmet>
        <title>Donation Details- {id}</title>
      </Helmet>
      <div>
        <CardHeader className="h-[600px] relative">
          <img className="w-full" src={image} />
          <div className="bg-[#0b0b0b3d] py-6  w-full absolute left-0 bottom-0">
            <button
              onClick={handleDonate}
              style={{ backgroundColor: textColor }}
              className="px-6 py-2 ml-6 text-white font-medium"
            >
              Donate ${price}
            </button>
          </div>
        </CardHeader>
      </div>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
    </Card>
  );
};

export default DonationDetails;
