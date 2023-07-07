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
      fontSize={["4xl", "5xl", "6xl", "7xl", "8xl"]}
      px={"20"}
      pb={"10"}
    >
      <Text>{text}</Text>
      <Text textColor={"primary.500"}>.</Text>
    </HStack>
  );
};

export default TextSeccion;
