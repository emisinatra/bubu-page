import { useState, useEffect } from "react"; // Importo los modulos useState y useEffect de React
import Head from "next/head"; // Importo el componente Head de next/head eso se hace solo igual
import { pageview } from "../analytics"; // Importo la funcion de seguimiento de G.A

import Navbar from "../components/Navbar";
import Body from "@/components/Body";
import { Container, Stack, Image, Box } from "@chakra-ui/react";
import NavbarMobile from "@/components/NavbarMobile";

// Defino el componente Home
export default function Home() {
  return (
    <Container
      backgroundColor={"secondary.700"}
      height="100%"
      width={["full"]}
      overflowX={"hidden"}
      maxWidth={"100%"}
      textColor={"white"}
      fontFamily={"montserrat"}
    >
      <Head>
        <title>Bubú Solutions</title>
        <meta name="description" content="Sitio web en construcción" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Imágen de fondo */}
      <Box pos={"relative"}>
        <Image
          src="/fondo_web-100.jpg"
          zIndex={"-9"}
          h={"100%"}
          w={"100%"}
          transform={"scale(1.2)"}
          objectFit={"cover"}
          pos={"fixed"}
        />

        {/* Contenedor con navbar y body */}
        <Box pos={"absolute"}>
          <Stack direction={"column"} display={"flex"} zIndex={"9"}>
            <Navbar />
            <Body />
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
