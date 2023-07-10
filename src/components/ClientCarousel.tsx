import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Box, Center } from "@chakra-ui/react";
import { Client } from "./Client";

const clients = [
  { name: "ted", pathToLogo: "/clients/Group 59.svg" },
  { name: "otro", pathToLogo: "/clients/Vector.svg" },
  { name: "ted2", pathToLogo: "/clients/Group 59.svg" },
  { name: "otro2", pathToLogo: "/clients/Vector.svg" },
];

export const ClientCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      marginX={10}
      padding={4}
      border={"5px solid #8D9195"}
      borderRadius={20}
      mt={3}
    >
      <Slider {...settings}>
        {clients.map((client) => {
          return (
            <Client
              name={client.name}
              pathToLogo={client.pathToLogo}
              key={client.name}
            />
          );
        })}
      </Slider>
    </Box>
  );
};
