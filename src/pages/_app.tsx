import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import theme from "../../theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>

        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ChakraProvider>
    </>
  );
}
