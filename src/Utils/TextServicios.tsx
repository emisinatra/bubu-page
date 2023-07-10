import { HStack, Text } from "@chakra-ui/react";
import React from "react";

const TextServicios = () => {
  return (
    <HStack
      textColor={"white"}
      fontWeight={"bold"}
      fontSize={["30px", "40px", "50px", "60px", "70px"]}
      px={"20"}
      pb={"10"}
    >
      <Text>servicios</Text>
      <Text textColor={"primary.500"}>.</Text>
    </HStack>
  );
};

export default TextServicios;
