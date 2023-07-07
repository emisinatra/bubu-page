import { Box, Stack, Text, Image, HStack } from "@chakra-ui/react";
import React from "react";

const TextBody = () => {
  return (
    <Box
      paddingX={"20px"}
      mt={["10%", "20%", "20%", "20%", "12%"]}
      ml={["0", "0", "0", "0", "10%"]}
      zIndex={"9999"}
      textColor={"white"}
      fontWeight={"bold"}
      fontSize={["4xl", "4xl", "6xl", "6xl", "7xl"]}
    >
      <Box>
        <Stack direction={["column", "row"]}>
          <Text mb={["-30px", "0"]}>CREATING</Text>
          <Text>BONDS</Text>
        </Stack>
        <Stack direction={"row"}>
          <Stack direction={["column", "row"]}>
            <Text mb={["-30px", "0"]}>JOINING </Text>
            <HStack>
              <Text>PEOPLE</Text>
              <Text textColor={"primary.500"}>.</Text>
            </HStack>
          </Stack>
        </Stack>
      </Box>
      <Stack maxW={[300, 450, 573, 688, 917]} textAlign={"left"}>
        <Text
          fontWeight={"300"}
          fontSize={[10, 13, 13, 14, 18]}
          lineHeight={"6"}
        >
          es una agencia de creatividad y diseño situada en Córdoba,
          Argentina.Hace más de diez años trabajamos transversalmente con
          clientes de todo tipo. Acompañando desde compañías internacionales
          hasta startups locales, para ayudarlas a conectarse con las personas.
          Porque de eso se trata. De que las marcas que pasan por nuestra
          agencia logren repercutir en un mundo totalmente cambiante.
        </Text>
      </Stack>
      <Stack direction={"row"} alignItems={"center"}>
        <Image src="/diseño01.png" boxSize={50} objectFit={"cover"} />
        <Text fontSize={[10, 13, 14, 18, 20]} fontWeight={"bold"}>
          Charlemos...
        </Text>
      </Stack>
    </Box>
  );
};

export default TextBody;
