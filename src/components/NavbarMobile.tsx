import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  HStack,
  Image,
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
        <VStack >
          <Button onClick={funcOnClick}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Conócenos</BreadcrumbLink>
            </BreadcrumbItem>
          </Button>
          <Button onClick={funcOnClick}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#services">Servicios</BreadcrumbLink>
            </BreadcrumbItem>
          </Button>
          <Button onClick={funcOnClick}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Proyectos</BreadcrumbLink>
            </BreadcrumbItem>
          </Button>
          <Button onClick={funcOnClick}>
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
