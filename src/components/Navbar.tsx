import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
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
  IconButton,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import NavbarMobile from "./NavbarMobile";

const Navbar: React.FC = () => {
  const [display, changeDisplay] = useState("none");
  return (
    <Flex>
      <Breadcrumb
        separator={" "}
        height={"80px"}
        pt={["0px", "20px", "30px", "40px"]}
        paddingX={["0", "15", "20", "20", "20"]}
        fontSize={["8px", "x-small", "sm", "sm", "sm"]}
        w={["sm", "full"]}
        maxW={["full"]}
        css={{
          "& > ol": {
            display: "flex",
            justifyContent: ["flex-end", "space-between"],
          },
        }}
        display={["none", "grid"]}
      >
        <BreadcrumbItem mr={["-50%", 0]}>
          <Image
            transform={[
              "scale(0.4)",
              "scale(0.8)",
              "scale(0.8)",
              "scale(0.9)",
              "scale(1.0)",
            ]}
            ml={["-20%", "0"]}
            maxW="100px"
            maxH="70px"
            objectFit="contain"
            src="/bubu2.png"
          />
        </BreadcrumbItem>

        <BreadcrumbItem>
          <HStack spacing={["0.5rem", "2rem"]}>
            <BreadcrumbLink href="#">Conócenos</BreadcrumbLink>
            <BreadcrumbLink href="#">Servicios</BreadcrumbLink>
            <BreadcrumbLink href="#">Proyectos</BreadcrumbLink>
          </HStack>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Box marginLeft={["-9.2rem", "auto"]}>
            <BreadcrumbLink href="#">Contacto</BreadcrumbLink>
          </Box>
        </BreadcrumbItem>
      </Breadcrumb>

      <HStack display={["flex", "none"]}>
        <Box>
          <Image
            transform={"scale(0.4)"}
            ml={"-20%"}
            maxW="100px"
            maxH="70px"
            objectFit="contain"
            src="/bubu2.png"

          />
        </Box>
        <IconButton
          pos={"absolute"}
          right={0}
          aria-label={"Open Menu"}
          size={"md"}
          mt={5}
          icon={<HamburgerIcon />}
          backgroundColor={"secondary.400"}
          color={"white"}
          shadow={"lg"}
          _hover={{ color: "primary.500" }}
          _active={{ backgroundColor: "secondary.500" }}
          onClick={() => changeDisplay("flex")}
        />
      </HStack>

      <Flex
        w={"100vw"}
        bgColor={"secondary.500"}
        zIndex={20}
        h={"100vh"}
        pos={"fixed"}
        top={"0"}
        left={"0"}
        overflowY={"auto"}
        flexDir={"column"}
        display={display}
      >
        <Flex justify={"flex-end"}>
          <IconButton
            mt={2}
            mr={2}
            aria-label="Close Menu"
            size={"md"}
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>
        <NavbarMobile />
      </Flex>
    </Flex>
  );
};

export default Navbar;
