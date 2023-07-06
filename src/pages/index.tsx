import { useState, useEffect } from "react"; // Importo los modulos useState y useEffect de React
import Head from "next/head"; // Importo el componente Head de next/head eso se hace solo igual
import { pageview } from "../analytics"; // Importo la funcion de seguimiento de G.A

import ServiceCarousel from "@/components/ServiceCarousel";
import { Box, Image, Center } from "@chakra-ui/react";
import { ProyectCard } from "@/components/ProyectCard";
import { ProyectGrid } from "@/components/ProyectGrid";

// Defino el componente Home
export default function Home() {
  // Jsx con los estilos
  return (
    <Box overflow={"hidden"}>
      <Head>
        <title>Bubú Solutions</title>
        <meta name="description" content="Sitio web en construcción" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ServiceCarousel />

      <ProyectGrid />

      <Box position={"absolute"} top={0} zIndex={-1} overflow={"hidden"}>
        <Image
          src="/fondo_web-100.jpg"
          width={"200vw"}
          height={"200vh"}
        ></Image>
      </Box>
    </Box>
  );
}
