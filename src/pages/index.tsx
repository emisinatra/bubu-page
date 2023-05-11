import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <Head>
        <title>Mi sitio web</title>
        <meta name="description" content="Sitio web en construcción" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-4 text-center">
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

          <div className="w-full max-w-md p-4 mx-auto border border-gray-300 rounded-md">
            <form
              action="https://formspree.io/f/xqkojewa"
              method="POST"
              data-netlify-recaptcha="true"
            >
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                required
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                name="_replyto"
                placeholder="Tu correo electrónico"
                required
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                name="mensaje"
                placeholder="Tu mensaje"
                required
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
              <button
                type="submit"
                className="px-4 py-1 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>

        <div className="flex justify-center mt-8 space-x-4">
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

        <footer className="mt-8 text-sm">
          Bubú Solutions® - Mendoza, Argentina.
        </footer>
      </main>
    </div>
  );
}
