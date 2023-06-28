import { useState, useEffect } from "react"; // Importo los modulos useState y useEffect de React
import Head from "next/head"; // Importo el componente Head de next/head eso se hace solo igual
import { pageview } from "../analytics"; // Importo la funcion de seguimiento de G.A

import Navbar from "../components/Navbar";
import Body from "@/components/Body";
import { Container, Stack } from "@chakra-ui/react";

// Defino el componente Home
export default function Home() {
  /* const [fechaLanzamiento, setFechaLanzamiento] = useState(
    new Date("2023-07-01T10:00:00")
  ); // Estado para almacenar la fecha de lanzamiento y una funcion para actualizarla
  const [tiempoFaltante, setTiempoFaltante] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  }); // Estado para almacenar el tiempo restante y una función para actualizarlo

  // Funcion para calcular el tiempo restante
  const calcularTiempoFaltante = () => {
    const now = new Date(); // Con esto me traigo la fecha y la hora actual
    const diferencia = fechaLanzamiento.getTime() - now.getTime(); // Aca guardo en diferencia la diferencia valga la redundancia de la fecha de lanzamiento con la de ahora

    if (diferencia > 0) {
      // Si la diferencia es mayor que cero,la fecha de lanzamiento todavia llega
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24)); // Calcular el numero de dias restantes
      const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24); // Calcular el numero de horas restantes
      const minutos = Math.floor((diferencia / 1000 / 60) % 60); // Calcular el numero de minutos restantes
      const segundos = Math.floor((diferencia / 1000) % 60); // Calcular el numero de segundos restantes

      setTiempoFaltante({ dias, horas, minutos, segundos }); // Actualizar el estado de tiempoFaltante con los nuevos valores calculados
    } else {
      // Si la diferencia es menor o igual a cero, la fecha de lanzamiento ya ha pasado
      setTiempoFaltante({ dias: 0, horas: 0, minutos: 0, segundos: 0 }); // Establece el tiempo restante en cero
    }
  };

  type Interval = ReturnType<typeof setInterval>; // Definir el tipo Interval para el valor de retorno de setInterval

  useEffect(() => {
    const interval: Interval = setInterval(calcularTiempoFaltante, 1000); // Ejecutar la funcion calcularTiempoFaltante cada segundo
    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  // Basicamente este efecto se ejecuta una vez al cargar el componente home y despues cada
  // vez que la ruta actual cambia
  useEffect(() => {
    // Con esto agarro la ruta y llama a la funcion que hace toda la magia
    const currentPath = window.location.pathname;
    pageview(currentPath);
  }, []); */

  // Jsx con los estilos
  return (
    <Container
      backgroundColor={"secondary.700"}
      height="100%"
      width={"100%"}
      overflow={"hidden"}
      maxWidth={"100%"}
      textColor={"white"}
      fontFamily={"montserrat"}
    >
      <Head>
        <title>Bubú Solutions</title>
        <meta name="description" content="Sitio web en construcción" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack direction={"column"} display={"flex"}>
        <Navbar />
        <Body />
      </Stack>
    </Container>
  );
}
