import { useState, useEffect } from "react";
import Head from "next/head";

// Definiendo el componente Home
export default function Home() {
  const [fechaLanzamiento, setFechaLanzamiento] = useState(
    new Date("2023-06-10T00:00:00")
  );
  const [tiempoFaltante, setTiempoFaltante] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });
  const calcularTiempoFaltante = () => {
    const now = new Date();
    const diferencia = fechaLanzamiento.getTime() - now.getTime();
    if (diferencia > 0) {
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferencia / 1000 / 60) % 60);
      const segundos = Math.floor((diferencia / 1000) % 60);
      setTiempoFaltante({ dias, horas, minutos, segundos });
    } else {
      setTiempoFaltante({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
    }
  };

  type Interval = ReturnType<typeof setInterval>;

  useEffect(() => {
    const interval: Interval = setInterval(calcularTiempoFaltante, 1000);
    return () => clearInterval(interval);
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
