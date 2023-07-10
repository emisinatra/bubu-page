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
import React from "react";

const NavbarMobile = () => {
  return (
    <VStack zIndex={20}>
      <Breadcrumb separator={""} fontSize={"8px"} maxW={["full"]}>
        <VStack>
          <Button>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Conócenos</BreadcrumbLink>
            </BreadcrumbItem>
          </Button>
          <Button>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Servicios</BreadcrumbLink>
            </BreadcrumbItem>
          </Button>
          <Button>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Proyectos</BreadcrumbLink>
            </BreadcrumbItem>
          </Button>
          <Button>
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
