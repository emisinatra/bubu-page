import { HStack, Text } from "@chakra-ui/react";
import React from "react";

type TextSeccionProps = {
  text: string;
};
const TextSeccion: React.FC<TextSeccionProps> = ({text}) => {
  return (
    <HStack
      textColor={"white"}
      fontWeight={"bold"}
      fontSize={["30px", "40px", "50px", "60px", "70px"]}
      px={"20"}
      pb={"10"}
    >
      <Text>{text}</Text>
      <Text textColor={"primary.500"}>.</Text>
    </HStack>
  );
};

export default TextSeccion;
