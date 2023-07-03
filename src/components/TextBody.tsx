import { Box, Stack, Text, Image, HStack } from "@chakra-ui/react";
import React from "react";

const TextBody = () => {
  return (
    <Box
      paddingX={"20"}
      /* mt={"-96"} */
      mt={["10%", "24%", "24%", "24%", "24%"]}
      zIndex={"9999"}
      left={20}
      textColor={"white"}
      fontWeight={"bold"}
      fontSize={["4xl", "5xl", "6xl", "7xl", "8xl"]}
      /* position={"absolute"} */
    >
      <Box>
        {/* <Text lineHeight={["8"]} mb={"2"}>CREATING BONDS</Text> */}
        <Stack direction={["column", "row"]}>
          <Text mb={["-30px", "0"]}>CREATING </Text>
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
      <Stack maxW={[200, 450, 573, 688, 917]} textAlign={"left"}>
        <Text
          fontWeight={"300"}
          fontSize={[10, 13, 13, 14, 18]}
          lineHeight={"6"}
          /* textAlign={{base:"justify"}} */
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
