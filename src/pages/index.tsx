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
    mensaje: "",
  });
  // Función para manejar los cambios en los campos del formulario
  // Esta función se llama cada vez que un usuario escribe en un campo del formulario
  const handleInputChange = (e: any) => {
    setFormState({
      // Manteniendo las propiedades existentes del estado del formulario
      ...formState,

      // Actualizando el valor del campo específico con lo que el usuario ha escrito
      [e.target.name]: e.target.value,
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
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      // Si la petición fue exitosa, mostrando una alerta de éxito y limpiando el formulario
      if (response.ok) {
        toast.success("Tu mensaje ha sido enviado correctamente!");
        setFormState({
          nombre: "",
          _replyto: "",
          mensaje: "",
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
    <div
      className="flex flex-col justify-between min-h-screen text-black"
      style={{
        backgroundImage: `url(/background.jpg)`,
        backgroundSize: "cover",
      }}
    >
      <Head>
        <title>Bubú Solutions</title>
        <meta name="description" content="Sitio web en construcción" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="ml-32 ">
        <main className="flex-grow p-4 text-left">
          <h1 className="mt-4 text-9xl">bubú</h1>
          <TypeAnimation
            sequence={[
              "Esta llegando...",
              2000,
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="h1"
            className=" ml-1 text-pink-600 font-bold text-4xl"
            cursor={true}
            repeat={Infinity}
            style={{ display: "inline-block" }}
          />

          <section className="mt-8">
            <h2
              className=" ml-44
             text-base "
            >
              Para más información{" "}
              <span className="text-black font-bold"> contactate.</span>
            </h2>

            <div className=" ml-20 w-full max-w-md p-4  shadow rounded-md bg-transparent border border-pink-600">
              <form onSubmit={handleSubmit}>
                <label className="block text-left">
                  Tu mail
                  <input
                    type="text"
                    name="nombre"
                    required
                    onChange={handleInputChange}
                    value={formState.nombre}
                    className="mt-1 block w-full px-4 py-2 mb-4 border border-pink-600 rounded-md focus:outline-none focus:ring-2  bg-transparent"
                  />
                </label>

                <label className="block text-left">
                  Tu nombre
                  <input
                    type="email"
                    name="_replyto"
                    required
                    onChange={handleInputChange}
                    value={formState._replyto}
                    className="mt-1 block w-full px-4 py-2 mb-4 border border-pink-600 rounded-md focus:outline-none focus:ring-2  bg-transparent"
                  />
                </label>

                <label className="block text-left">
                  Tu mensaje
                  <textarea
                    name="mensaje"
                    required
                    onChange={handleInputChange}
                    value={formState.mensaje}
                    className="mt-1 block w-full px-4 py-2 mb-4 border border-pink-600 rounded-md focus:outline-none focus:ring-2  bg-transparent"
                  ></textarea>
                </label>

                <div className="flex justify-center mt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 border border-pink-600 text-black bg-magenta-600 rounded-md hover:bg-pink-600 hover:text-white"
                  >
                    {loading ? <BeatLoader color="black" size={8} /> : "Enviar"}
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>

      <footer className="flex justify-between items-end p-4 text-sm text-left w-full border-gray-300">
        <div className="flex space-x-4 mb-4">
          <a
            href="https://www.instagram.com/bubusolutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-150 transition-transform duration-200"
          >
            <FaInstagram size={32} />
          </a>
          <a
            href="https://wa.me/+542615333661"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-150 transition-transform duration-200"
          >
            <FaWhatsapp size={32} />
          </a>
        </div>
        <div className="flex justify-center w-full hover:text-magenta-600 transition-colors duration-200">
          Bubú Solutions® - Mendoza, Argentina.
        </div>
      </footer>
    </div>
  );
}
