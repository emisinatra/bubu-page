import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Stack, Text, Image, HStack, Link } from "@chakra-ui/react";
import React from "react";



const TextBody = () => {
  return (
    <Box
      paddingX={["20px","20"]}
      mt={["6%", "6%", "8%", "8%", "10%"]}
      zIndex={"9999"}
      textColor={"white"}
      fontWeight={"bold"}
      fontSize={["4xl", "5xl", "6xl", "7xl", "80px"]}
    >
      <Box>
        <Stack direction={["column", "row"]} spacing={["0","2rem"]} >
          <Text mb={["-1.2rem","0"]} >CREATING </Text>
          <Text>BONDS</Text>
        </Stack>
        <Stack direction={"row"}>
          <Stack direction={["column", "row"]} spacing={["0","2rem"]}>
            <Text mb={["-1.2rem", "0"]}>JOINING </Text>
            <HStack>
              <Text>PEOPLE</Text>
              <Text textColor={"primary.500"}>.</Text>
            </HStack>
          </Stack>
        </Stack>
      </Box>
      <Stack maxW={[250, 450, 573, 688, 800]} textAlign={"left"}>
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
        <Link fontSize={[10, 13, 14, 18, 20]} fontWeight={"bold"} href="https://api.whatsapp.com/send?phone=542617166509&text=Hola%20buenos%20dias!%20Me%20gustaria%20saber%20sobre%20su%20servicio%20de%3A%20" isExternal>
          Charlemos... <ExternalLinkIcon mx={"2px"}/> 
        </Link>
      </Stack>
    </Box>
  );
};

export default TextBody;
