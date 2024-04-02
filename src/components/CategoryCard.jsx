import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const CategoryCard = ({ item }) => {
  const {
    title,
    category,
    image,
    cardBg,
    textColor,
    id,
    animation,
    duration,
    easing,
  } = item || {};
  return (
    <Link to={`/donation-details/${id}`}>
      <Card
        data-aos-easing={easing}
        data-aos={animation}
        data-aos-duration={duration}
        style={{ backgroundColor: cardBg }}
        className="mt-6 cursor-pointer"
      >
        <img
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="w-full"
          src={image}
          alt="card-image"
        />

        <CardBody>
          <Button
            data-aos="flip-left"
            data-aos-duration="1000"
            style={{ backgroundColor: cardBg, color: textColor }}
            size="sm"
            className="mb-5"
          >
            {category}
          </Button>
          <Typography
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="1000"
            style={{ color: textColor }}
            variant="h5"
            className="mb-2"
          >
            {title}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CategoryCard;
