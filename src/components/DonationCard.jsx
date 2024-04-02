import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const DonationCard = ({ data }) => {
  const { title, image, price, cardBg, category, textColor } = data || {};
  return (
    <Card style={{ backgroundColor: cardBg }} className="w-full flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-2 uppercase">
          <Button
            style={{ backgroundColor: cardBg, color: textColor }}
            size="sm"
            className="mb-2"
          >
            {category}
          </Button>
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography
          style={{ color: textColor }}
          className="mb-4 font-bold text-xl"
        >
          ${price}
        </Typography>
        <Button
          style={{ backgroundColor: cardBg, color: textColor }}
          size="sm"
          className="mb-5"
        >
          View Details
        </Button>
      </CardBody>
    </Card>
  );
};

export default DonationCard;
