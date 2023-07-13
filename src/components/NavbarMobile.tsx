import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Image,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  funcOnClick: () => void;
}

const NavbarMobile: React.FC<Props> = ({funcOnClick}) => {
  const [display, changeDisplay] = useState("flex");
  return (
    <VStack zIndex={20}>
      <Breadcrumb separator={""} fontSize={"8px"} maxW={["full"]}>
        <VStack w={"100vw"} mt={"10"} /* divider={<StackDivider shadow={"dark-lg"} borderColor='primary.500'/>} */ >
          <Button onClick={funcOnClick} h={"40px"} w={"80vw"} mb={4} color={"primary.500"} backgroundColor={"secondary.500"} shadow={"dark-lg"} _active={{shadow: "none", color: "primary.500"}} _hover={{color: "primary.600"}}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Conócenos</BreadcrumbLink>
            </BreadcrumbItem>
          </Button>
          <Button onClick={funcOnClick} h={"40px"} w={"80vw"} mb={4} color={"primary.500"} variant={"ghost"} shadow={"dark-lg"} _active={{shadow: "none", color: "primary.500"}} _hover={{color: "primary.600"}}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#services">Servicios</BreadcrumbLink>
            </BreadcrumbItem>
          </Button>
          <Button onClick={funcOnClick} h={"40px"} w={"80vw"} mb={4} color={"primary.500"} variant={"ghost"} shadow={"dark-lg"} _active={{shadow: "none", color: "primary.500"}} _hover={{color: "primary.600"}}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Proyectos</BreadcrumbLink>
            </BreadcrumbItem>
          </Button>
          <Button onClick={funcOnClick} h={"40px"} w={"80vw"} mb={4} color={"primary.500"} variant={"ghost"} shadow={"dark-lg"} _active={{shadow: "none", color: "primary.500"}} _hover={{color: "primary.600"}}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Contacto</BreadcrumbLink>
            </BreadcrumbItem>
          </Button>
        </VStack>
      </Breadcrumb>
    </VStack>
  );
};

export default NavbarMobile;
