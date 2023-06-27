import { Text, Stack, Image } from "@chakra-ui/react";
import React from "react";

const Body = () => {
  return (
    <Stack>
      <Image
        src="/diseño01.png"
        boxSize={350}
        objectFit={"cover"}
        marginLeft={"-24"}
      />
      <Stack paddingX={"20"}>
        <Text textColor={"white"} fontWeight={"bold"} fontSize={"8xl"}>
          CREATING BONDS
        </Text>
        <Stack direction={"row"} fontWeight={"bold"} fontSize={"8xl"}>
          <Text textColor={"white"} >
            JOINING PEOPLE
          </Text>
          <Text textColor={"primary.500"}>.</Text>
        </Stack>
        <Stack maxW={860} textAlign={"left"}>
          <Text textColor={"white"} fontWeight={"300"} fontSize={"20"} >es una agencia de creatividad y diseño situada en Córdoba, Argentina.Hace más de diez años trabajamos transversalmente con clientes de todo tipo. Acompañando desde compañías internacionales hasta startups locales, para ayudarlas a conectarse con las personas. Porque de eso se trata. De que las marcas que pasan por nuestra agencia logren repercutir en un mundo totalmente cambiante.</Text>  
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Body;
