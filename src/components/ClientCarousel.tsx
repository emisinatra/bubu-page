import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import { Box, Center } from "@chakra-ui/react";
import { Client } from "./Client";

const clients = [
    {name: "ted", pathToLogo: "/clients/Group 59.svg"},
    {name: "otro", pathToLogo: "/clients/Vector.svg"},
    {name: "ted2", pathToLogo: "/clients/Group 59.svg"},
    {name: "otro2", pathToLogo: "/clients/Vector.svg"},
]
export const ClientCarousel = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        
    };
    const newLocal = "200px";
    return (
        <Box marginX={4} padding={"10px"} border={"5px solid #8D9195"} borderRadius={20}>
           

                <Slider {...settings}>
                    {clients.map((client) => {
                        return ( 
                            
                            <Client name={client.name} pathToLogo={client.pathToLogo}/>

                            )
                        })}
                </Slider>
            
        </Box>
    )
}