import {
  Box,
  Stack,
  Text,
  flexbox,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
} from "@chakra-ui/react";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <Breadcrumb
      separator={" "}
      height={"80px"}
      pt={["0px","20px","30px", "40px"]}
      paddingX={["0", "15", "20", "20", "20"]}
      fontSize={["8px", "x-small", "sm", "sm", "sm"]}
      w={["sm", "full"]}
      maxW={["full"]}
      css={{
        "& > ol": {
          display: "flex",
          justifyContent: "space-between",
        },
      }}
    >
      <BreadcrumbItem mr={["-50%",0]}>
        <Image
          transform={[
            "scale(0.4)",
            "scale(0.8)",
            "scale(0.8)",
            "scale(0.9)",
            "scale(1.0)",
          ]}
          ml={["-20%","0"]}
          maxW="100px"
          maxH="70px"
          objectFit="contain"
          src="/bubu2.png"
        />
      </BreadcrumbItem>

      <BreadcrumbItem>
        <HStack spacing={["0.5rem","2rem"]}>
          <BreadcrumbLink href="#">Conócenos</BreadcrumbLink>
          <BreadcrumbLink href="#">Servicios</BreadcrumbLink>
          <BreadcrumbLink href="#">Proyectos</BreadcrumbLink>
        </HStack>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Box marginLeft={["-9.2rem","auto"]}>
          <BreadcrumbLink href="#">Contacto</BreadcrumbLink>
        </Box>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Navbar;
