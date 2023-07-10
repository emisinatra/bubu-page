import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Box, Center } from "@chakra-ui/react";
import { Client } from "./Client";
import Marquee from "react-fast-marquee";

const clients = [
  { name: "ibox", pathToLogo: "/clients/IBOX REDUCIDO.png" },
  { name: "monki", pathToLogo: "/clients/MONKI REDUCIDO.png" },
];

export const ClientCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
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
      px={4}
      border={"5px solid #8D9195"}
      borderRadius={20}
      mt={3}
    >
      <Marquee speed={50} autoFill={true}>
        {clients.map((client) => {
          return (
            <Client
              name={client.name}
              pathToLogo={client.pathToLogo}
              key={client.name}
            />
          );
        })}
      </Marquee>
    </Box>
  );
};
