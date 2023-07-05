import {
  Text,
  Stack,
  Image,
  Flex,
  Grid,
  Box,
  Container,
  HStack,
} from "@chakra-ui/react";
/* import { Container } from "postcss"; */
import React from "react";
import TextBody from "../Utils/TextBody";
import ImagesBody from "../Utils/ImagesBody";
import ServiceCarousel from "./ServiceCarousel";
import TextServicios from "@/Utils/TextServicios";
import SingleImage from "@/Utils/SingleImage";

const Body = () => {
  return (
    <Grid>
      <Box pos={"relative"}>
        <ImagesBody />
        <Box pos={"absolute"}>
          <TextBody />
        </Box>
      </Box>
      <Box mt={"100vh"} overflow={"hidden"} pb={"5rem"} zIndex={"9"}>
        <TextServicios />
        <ServiceCarousel />
      </Box>
      <Box ml={"-15%"} mt={"-15%"} zIndex={"-1"}>
        <SingleImage />
      </Box>
    </Grid>
  );
};

export default Body;
