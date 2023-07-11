import { useState, useEffect } from "react"; // Importo los modulos useState y useEffect de React
import Head from "next/head"; // Importo el componente Head de next/head eso se hace solo igual
import { pageview } from "../analytics"; // Importo la funcion de seguimiento de G.A

import ServiceCarousel from "@/components/ServiceCarousel";
import { Box, Image, Center } from "@chakra-ui/react";
import { ProyectCard } from "@/components/ProyectCard";
import { ProyectGrid } from "@/components/ProyectGrid";
import ServiceCardSelector from "@/components/ServiceCardSelector";
import { Footer } from "@/components/Footer";
import { FooterSocialInfo } from "@/utils/FooterSocialInfo";

// Defino el componente Home
export default function Home() {
  // Jsx con los estilos
  return (
    <Box overflow={"hidden"} bg={"rgba(22, 25, 27, 0.5)"}>
      <Head>
        <title>Bubú Solutions</title>
        <meta name="description" content="Sitio web en construcción" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box display={["none", "none", "none", "block", "block", "block"]}>
        <ServiceCardSelector />
      </Box>
      <Box display={["block", "block", "block", "none", "none", "none"]}>
        <ServiceCarousel />
      </Box>

      <ProyectGrid />

      <Box position={"absolute"} top={0} zIndex={-1} overflow={"hidden"}>
        <Image
          src="/fondo_web-100.jpg"
          width={"200vw"}
          height={"200vh"}
        ></Image>
      </Box>
      <Footer
        leftDescription={"2023 © Bubú Solutions"}
        social={FooterSocialInfo}
      />
    </Box>
  );
}
