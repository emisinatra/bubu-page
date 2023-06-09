import { useState, useEffect } from "react"; // Importar los módulos useState y useEffect de React
import Head from "next/head"; // Importar el componente Head de next/head

// Definiendo el componente Home
export default function Home() {
  const [fechaLanzamiento, setFechaLanzamiento] = useState(
    new Date("2023-06-12T10:00:00")
  ); // Estado para almacenar la fecha de lanzamiento y una función para actualizarla
  const [tiempoFaltante, setTiempoFaltante] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  }); // Estado para almacenar el tiempo restante y una función para actualizarlo

  // Función para calcular el tiempo restante
  const calcularTiempoFaltante = () => {
    const now = new Date(); // Obtener la fecha y hora actual
    const diferencia = fechaLanzamiento.getTime() - now.getTime(); // Calcular la diferencia entre la fecha de lanzamiento y la fecha actual

    if (diferencia > 0) {
      // Si la diferencia es mayor que cero, es decir, la fecha de lanzamiento todavia llega
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24)); // Calcular el número de días restantes
      const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24); // Calcular el número de horas restantes
      const minutos = Math.floor((diferencia / 1000 / 60) % 60); // Calcular el número de minutos restantes
      const segundos = Math.floor((diferencia / 1000) % 60); // Calcular el número de segundos restantes

      setTiempoFaltante({ dias, horas, minutos, segundos }); // Actualizar el estado de tiempoFaltante con los nuevos valores calculados
    } else {
      // Si la diferencia es menor o igual a cero, es decir, la fecha de lanzamiento ya ha pasado
      setTiempoFaltante({ dias: 0, horas: 0, minutos: 0, segundos: 0 }); // Establecer el tiempo restante como cero
    }
  };

  type Interval = ReturnType<typeof setInterval>; // Definir el tipo Interval para el valor de retorno de setInterval

  useEffect(() => {
    const interval: Interval = setInterval(calcularTiempoFaltante, 1000); // Ejecutar la función calcularTiempoFaltante cada segundo
    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []);
  // Jsx con los estilos
  return (
    <div className="flex flex-col justify-between min-h-screen text-black">
      <Head>
        <title>Bubú Solutions</title>
        <meta name="description" content="Sitio web en construcción" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="video-container">
        <video autoPlay muted loop src="background-4.mp4" />

        <div className="info-container">
          <div className="wrapper">
            <a
              className="button"
              href="https://api.whatsapp.com/send/?phone=%2B542615333661&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              ¡Hablemos!
            </a>
          </div>

          <svg
            style={{ visibility: "hidden", position: "absolute" }}
            width="0"
            height="0"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>
          </svg>

          <div className="container-titulo">
            <figure>
              <svg
                className="svg-circle"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4.5" cy="4.5" r="4.5" fill="#D9D9D9" />
              </svg>
            </figure>
            {/* <h1>BUBÚ</h1> */}
            <figure>
              <img src="logo.png" alt="Logo Bubu Solutions" />
            </figure>
            <figure>
              <svg
                className="svg-circle"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4.5" cy="4.5" r="4.5" fill="#D9D9D9" />
              </svg>
            </figure>
          </div>

          <div className="container-tiempo">
            <div className="info-tiempo">
              <h4>{tiempoFaltante.dias}</h4>
              <p>Días</p>
            </div>
            <div className="info-tiempo">
              <h4>{tiempoFaltante.horas}</h4>
              <p>Horas</p>
            </div>
            <div className="info-tiempo">
              <h4>{tiempoFaltante.minutos}</h4>
              <p>Minutos</p>
            </div>
            <div className="info-tiempo">
              <h4>{tiempoFaltante.segundos}</h4>
              <p>Segundos</p>
            </div>
          </div>
        </div>

        <footer>
          <p>Bubú Solutions® - Mendoza, Argentina.</p>
        </footer>
      </div>
    </div>
  );
}
