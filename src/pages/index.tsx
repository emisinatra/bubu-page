// Importando los íconos de Instagram y Whatsapp de la biblioteca "react-icons"
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
// Importando la función "toast" de "react-toastify" para mostrar alertas
import { toast } from "react-toastify";
// Importando los estilos de "react-toastify"
import "react-toastify/dist/ReactToastify.css";
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <Head>
        <title>Bubú Solutions</title>
        <meta name="description" content="Sitio web en construcción" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow p-4 text-center">
        <h1 className="text-4xl font-bold">
          Bienvenido a <span className="text-blue-600">Bubú Solutions</span>
        </h1>

        <p className="mt-4 text-xl">
          Sitio web en construcción. ¡Pronto veras todo lo que tenemos para vos!
        </p>

        <section className="mt-8">
          <h2 className="mb-4 text-lg font-semibold">
            Para contactarnos y obtener alguno de nuestros servicios, ¡llena
            este formulario!
          </h2>

          <div className="w-full max-w-md p-4 mx-auto border border-gray-300 rounded-md shadow-lg">
            <form onSubmit={handleSubmit}>
              <label className="block text-left">
                <span className="text-gray-700">Tu nombre</span>
                <input
                  type="text"
                  name="nombre"
                  required
                  onChange={handleInputChange}
                  value={formState.nombre}
                  className="mt-1 block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </label>
              <label className="block text-left">
                <span className="text-gray-700">Tu correo electrónico</span>
                <input
                  type="email"
                  name="_replyto"
                  required
                  onChange={handleInputChange}
                  value={formState._replyto}
                  className="mt-1 block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </label>
              <label className="block text-left">
                <span className="text-gray-700">Tu mensaje</span>
                <textarea
                  name="mensaje"
                  required
                  onChange={handleInputChange}
                  value={formState.mensaje}
                  className="mt-1 block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </label>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-1 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                {loading ? <BeatLoader color="white" size={8} /> : "Enviar"}
              </button>
            </form>
          </div>
        </section>

        <div className="flex justify-center mt-16 space-x-4">
          <a
            href="https://www.instagram.com/bubusolutions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={32} />
          </a>
          <a
            href="https://wa.me/+542615333661"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={32} />
          </a>
        </div>
      </main>

      <footer className="p-4 mt-4 text-sm text-center w-full border-t border-gray-300">
        <div className="hover:text-blue-600 transition-colors duration-200">
          Bubú Solutions® - Mendoza, Argentina.
        </div>
      </footer>
    </div>
  );
}
