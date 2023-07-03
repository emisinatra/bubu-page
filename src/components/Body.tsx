import {
  Text,
  Stack,
  Image,
  Flex,
  Grid,
  Box,
  Container,
} from "@chakra-ui/react";
/* import { Container } from "postcss"; */
import React from "react";
import TextBody from "./TextBody";
import ImagesBody from "./ImagesBody";
import ServiceCarousel from "./ServiceCarousel";

const Body = () => {
  return (
    <Grid>
      <Box pos={"relative"}>
        <ImagesBody />
        <Box pos={"absolute"}>
          <TextBody />
        </Box>
      </Box>
      <Box mt={"100vh"} overflow={"hidden"} pb={"5rem"}>
        <ServiceCarousel />
      </Box>
    </Grid>
  );
};

export default Body;
