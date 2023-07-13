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
import TextSeccion from "@/Utils/TextSeccion";
import SingleImage from "@/Utils/SingleImage";
import { ClientCarousel } from "./ClientCarousel";

const Body = () => {
  return (
    <Grid>
      <Box>
        <ImagesBody />
        <Box>
          <TextBody />
        </Box>
      </Box>
      <Box mt={"20vh"} overflow={"hidden"} pb={"5rem"} zIndex={"9"}>
        <TextSeccion text="servicios" />
        <ServiceCarousel />
      </Box>
      <Box mt={"10vh"} overflow={"hidden"} pb={"5rem"} zIndex={"9"}>
        <TextSeccion text="clientes" />
        <ClientCarousel />
      </Box>
      <Box ml={"-15%"} mt={"-15%"} zIndex={"-1"}>
        <SingleImage />
      </Box>
    </Grid>
  );
};

export default Body;
