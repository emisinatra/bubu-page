import { useState, useEffect } from "react"; // Importo los modulos useState y useEffect de React
import Head from "next/head"; // Importo el componente Head de next/head eso se hace solo igual
import { pageview } from "../analytics"; // Importo la funcion de seguimiento de G.A

import LazyLoad from "@/components/ServiceCarousel";
import { Box, Image, Center } from "@chakra-ui/react";

// Defino el componente Home
export default function Home() {
  // Jsx con los estilos
  return (
    <Box overflow={"hidden"} height={"1000px"}>
      <Head>
        <title>Bubú Solutions</title>
        <meta name="description" content="Sitio web en construcción" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box padding={"5rem 0"}>
        <LazyLoad />
      </Box>

      <Box position={"absolute"} top={0} zIndex={-1}>
        <Image src="/fondo_web-100.jpg"></Image>
      </Box>
      <footer>
        <p>Bubú Solutions® - Mendoza, Argentina.</p>
      </footer>
    </Box>
  );
}
