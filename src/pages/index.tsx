// Importando los íconos de Instagram y Whatsapp de la biblioteca "react-icons"
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
// Importando la función "toast" de "react-toastify" para mostrar alertas
import { toast } from "react-toastify";
// Importando los estilos de "react-toastify"
import "react-toastify/dist/ReactToastify.css";
// Importando libreria para animacion de typing
import { TypeAnimation } from "react-type-animation";
// Importando el componente Head de Next.js para modificar el encabezado del documento HTML
import Head from "next/head";
//Importando componente para animacion de carga
import { BeatLoader } from "react-spinners";
// Importando la función useState de React para manejar el estado del formulario
import { useState } from "react";
// Definiendo el componente Home
export default function Home() {
  //Estado para manejar si el formulario esta siendo enviado
  const [loading, setLoading] = useState(false);
  // Usando useState para almacenar y actualizar el estado del formulario
  const [formState, setFormState] = useState({
    nombre: "",
    _replyto: "",
    mensaje: ""
  });
  // Función para manejar los cambios en los campos del formulario
  // Esta función se llama cada vez que un usuario escribe en un campo del formulario
  const handleInputChange = (e: any) => {
    setFormState({
      // Manteniendo las propiedades existentes del estado del formulario
      ...formState,

      // Actualizando el valor del campo específico con lo que el usuario ha escrito
      [e.target.name]: e.target.value
    });
  };

  // Función para manejar el envío del formulario
  // Esta función se llama cuando un usuario envía el formulario
  const handleSubmit = async (e: any) => {
    // Evitando que la página se recargue, que es el comportamiento por defecto al enviar un formulario
    e.preventDefault();
    // Inicia la animacion de carga
    setLoading(true);

    try {
      // Enviando una petición POST a la API de Formspree con los datos del formulario
      const response = await fetch("https://formspree.io/f/xqkojewa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formState)
      });

      // Si la petición fue exitosa, mostrando una alerta de éxito y limpiando el formulario
      if (response.ok) {
        toast.success("Tu mensaje ha sido enviado correctamente!");
        setFormState({
          nombre: "",
          _replyto: "",
          mensaje: ""
        });
      } else {
        // Si la respuesta no fue exitosa, lanzando un error
        throw new Error("Error en la respuesta");
      }
    } catch (error) {
      // Manejando cualquier error lanzado en el try o en el else con un toast
      toast.error(
        "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo."
      );
    }
    // Detiene la animacion de carga
    setLoading(false);
  };

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
              <h4>30</h4>
              <p>Días</p>
            </div>
            <div className="info-tiempo">
              <h4>24</h4>
              <p>Horas</p>
            </div>
            <div className="info-tiempo">
              <h4>15</h4>
              <p>minutos</p>
            </div>
            <div className="info-tiempo">
              <h4>30</h4>
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
