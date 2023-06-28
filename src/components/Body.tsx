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

const Body = () => {
  return (
    <Grid>
      <Box>
        <Image
          src="/diseño01.png"
          boxSize={375}
          objectFit={"cover"}
          marginLeft={"-24"}
          marginBottom={"-48"}
        />
      </Box>

      <Box>
        <Image
          src="/diseño02.png"
          boxSize={"100%"}
          objectFit={"contain"}
          /* marginTop={"-80"}
          marginRight={"-96"} */
          position={"relative"}
          /* right={-20} */
          minW={"-moz-min-content"}
          justifySelf={"center"}
        />
      </Box>

      <Stack
        paddingX={"20"}
        /* direction={"row-reverse"} */
        /* justifyContent={"space-between"} */
      >
        <Stack
          position={"absolute"}
          left={20}
          textColor={"white"}
          fontWeight={"bold"}
          fontSize={"8xl"}
        >
          <Box>
            <Text marginBottom={-10}>CREATING BONDS</Text>
            <Stack direction={"row"}>
              <Text>JOINING PEOPLE</Text>
              <Text textColor={"primary.500"}>.</Text>
            </Stack>
          </Box>
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
            <Text fontSize={20} fontWeight={"bold"}>
              Charlemos...
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default Body;
