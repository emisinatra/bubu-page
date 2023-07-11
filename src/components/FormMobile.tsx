import { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Button,
  Wrap,
  FormControl,
  Input,
  Text,
  WrapItem,
  Center,
} from "@chakra-ui/react";
import axios from "axios";
import FormSender from "./Form/FormSender";
import { Zoom } from "react-toastify";

const FormMobile = () => {
  // estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    negocio: "",
    servicio: "",
    email: "",
  });

  const [isDisabled, setDisabled] = useState(false);

  // maneja el estado del boton submit para evitar spam. Se deshabilita por 20 segundos
  const handleClick = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 20000);
  };
  // funcion para manejar los cambios en los campos del formulario
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // funcion para manejar el envio del formulario
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // enviar los datos del formulario al controlador usando axios
      const response = await axios.post("/api/SubmitForm", formData);

      if (response.status === 200) {
        // si el formulario se envio correctamente
        console.log("Formulario enviado!");
      } else {
        // si paso un error al enviar el formulario
        console.error("Hubo un error al enviar el formulario :(");
      }
    } catch (error) {
      // si paso un error en el servidor o otra cosa
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <Center
      background={"rgba(22, 25, 27, 0.50)"}
      backdropFilter={"blur(25px)"}
      borderRadius={54}
      width={["80vw", "70vw", "80vw"]}
      py={[10, 10, 10, 10, 20]}
      px={20}
      minH={300}
      display={["flex", "flex", "flex", "none", "none", "none"]}
      justifyContent={"center"}
      alignItems={"center"}
      fontWeight={600}
      fontSize={"1.5rem"}
      marginX={"auto"}
    >
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Wrap maxW={["80vw", "50vw", "50vw"]}>
            <WrapItem>
              <Text>Mi nombre es </Text>
            </WrapItem>
            <WrapItem>
              <Input
                placeholder="TU NOMBRE COMPLETO"
                variant="flushed"
                name="nombre"
                fontSize={"0.9rem"}
                textAlign={"center"}
                value={formData.nombre}
                onChange={handleChange}
              ></Input>
            </WrapItem>
            <WrapItem>
              <Text> y tengo un </Text>
            </WrapItem>
            <WrapItem>
              <Input
                placeholder="TU NEGOCIO"
                variant="flushed"
                name="negocio"
                fontSize={"0.9rem"}
                textAlign={"center"}
                value={formData.negocio}
                onChange={handleChange}
              ></Input>
            </WrapItem>
            <WrapItem>
              <Text> el cual necesita ayuda.</Text>
            </WrapItem>
            <WrapItem>
              <Text> Podrían ayudarme con </Text>
            </WrapItem>
            <WrapItem>
              <Input
                placeholder="DISEÑO WEB"
                variant="flushed"
                name="servicio"
                fontSize={"0.9rem"}
                textAlign={"center"}
                value={formData.servicio}
                onChange={handleChange}
              ></Input>
            </WrapItem>
            <WrapItem>
              <Text> para que empiece a ocurrir la magia. </Text>
            </WrapItem>
            <WrapItem>
              <Text> Mi email es </Text>
            </WrapItem>
            <WrapItem>
              <Input
                placeholder="TU EMAIL"
                variant="flushed"
                name="email"
                fontSize={"0.9rem"}
                textAlign={"center"}
                value={formData.email}
                onChange={handleChange}
                mr={2}
              ></Input>
            </WrapItem>
            <WrapItem>
              <Text>.</Text>
            </WrapItem>
          </Wrap>

          <FormSender
            handleClick={handleClick}
            isDisabled={isDisabled}
          ></FormSender>
        </FormControl>
      </form>
    </Center>
  );
};

export default FormMobile;
