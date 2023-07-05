import { Box, Stack, Text, flexbox, Image } from "@chakra-ui/react";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <Stack
      alignItems={"center"}
      direction={"row"}
      justifyContent={"space-between"}
      height={"80px"}
      pt={["0px","50px"]}
      paddingX={["0", "15", "20", "20", "20"]}
      fontSize={["x-small", "x-small", "sm", "md", "md"]}
      w={["sm", "full"]}
      maxW={["-webkit-max-content","full"]}
    >
      <Image
        transform={[
          "scale(0.5)",
          "scale(0.8)",
          "scale(1.0)",
          "scale(1.0)",
          "scale(1.0)",
        ]}
        maxW={"100px"}
        maxH={"70px"}
        objectFit={"contain"}
        src="/bubu2.png"
      />
      <Stack direction={"row"} spacing={["2","6"]}>
        <Text>Conócenos</Text>
        <Text>Servicios</Text>
        <Text>Proyectos</Text>
      </Stack>
      <Text>Contacto</Text>
    </Stack>
  );
};

export default Navbar;
