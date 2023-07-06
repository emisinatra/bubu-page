import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ServiceCard } from "./ServiceCard";
import { Box } from "@chakra-ui/react";
import { ServiceCardInfo } from "@/utils/ServiceCardInfo";

export default class ServiceCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      draggable: true,
      autoplay: true,
      autoplaySpeed: 30000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
      arrows: false,
    };

    return (
      <Box padding={"5rem 0"}>
        <Slider {...settings}>
          {ServiceCardInfo.map((item, key) => {
            return (
              <ServiceCard
                key={key}
                title={item.title}
                subtitle={item.subtitle}
                body={item.body}
              />
            );
          })}
        </Slider>
      </Box>
    );
  }
}
