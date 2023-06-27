import { Box, Stack, Text, flexbox, Image } from "@chakra-ui/react";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <Stack alignItems={"center"} direction={"row"} justifyContent={"space-between"} height={"100px"} paddingX={16}>
      <Image boxSize={100} objectFit={"contain"} src="/bubu2.png"/>
      <Stack direction={"row"} spacing={12}>
        <Text>Conócenos</Text>
        <Text>Servicios</Text>
        <Text>Proyectos</Text>
      </Stack>
      <Text>Contacto</Text>
    </Stack>
  );
};

export default Navbar;