import { HStack, Text } from "@chakra-ui/react";
import React from "react";

const TextServicios = () => {
  return (
    <HStack
      textColor={"white"}
      fontWeight={"bold"}
      fontSize={["4xl", "5xl", "6xl", "7xl", "8xl"]}
      px={"20"}
      pb={"10"}
    >
      <Text>servicios</Text>
      <Text textColor={"primary.500"}>.</Text>
    </HStack>
  );
};

export default TextServicios;
