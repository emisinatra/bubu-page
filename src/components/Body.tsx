import { Text, Stack, Image } from "@chakra-ui/react";
import React from "react";

const Body = () => {
  return (
    <Stack>
      <Image
        src="/diseño01.png"
        boxSize={375}
        objectFit={"cover"}
        marginLeft={"-24"}
        marginBottom={"-48"}
      />
      <Stack paddingX={"20"} direction={"row-reverse"} justifyContent={"space-between"}>
      <Image
          src="/diseño02.png"
          boxSize={1000}
          objectFit={"cover"}
          marginTop={"-80"}
          marginRight={"-96"}
          position={"relative"}
          right={-20}
          minW={"-moz-min-content"}

        />
        <Stack  position={"absolute"} left={20} textColor={"white"}>
          <Text fontWeight={"bold"} fontSize={"8xl"} marginBottom={-10}>
            CREATING BONDS
          </Text>
          <Stack direction={"row"} fontWeight={"bold"} fontSize={"8xl"} >
            <Text >JOINING PEOPLE</Text>
            <Text textColor={"primary.500"}>.</Text>
          </Stack>
          <Stack maxW={860} textAlign={"left"}>
            <Text fontWeight={"300"} fontSize={18} lineHeight={"6"}>
              es una agencia de creatividad y diseño situada en Córdoba,
              Argentina.Hace más de diez años trabajamos transversalmente con
              clientes de todo tipo. Acompañando desde compañías internacionales
              hasta startups locales, para ayudarlas a conectarse con las
              personas. Porque de eso se trata. De que las marcas que pasan por
              nuestra agencia logren repercutir en un mundo totalmente
              cambiante.
            </Text>
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <Image src="/diseño01.png" boxSize={50} objectFit={"cover"} />
            <Text fontSize={20} fontWeight={"bold"}>Charlemos...</Text>
          </Stack>
          
        </Stack>
        
      </Stack>
    </Stack>
  );
};

export default Body;
