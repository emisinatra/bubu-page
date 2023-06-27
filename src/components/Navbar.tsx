import { Box, Stack, Text, flexbox, Image } from "@chakra-ui/react";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <Stack alignItems={"center"} direction={"row"} justifyContent={"space-between"} height={"100px"}>
      <Image boxSize={"100px"} objectFit={"cover"} src="/bubu-blanco.png"/>
      <Stack direction={"row"} >
        <Text>Conócenos</Text>
        <Text>Servicios</Text>
        <Text>Proyectos</Text>
      </Stack>
      <Text>Contacto</Text>
    </Stack>
  );
};

export default Navbar;