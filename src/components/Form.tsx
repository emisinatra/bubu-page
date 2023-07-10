import { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Button,
  Wrap,
  FormControl,
  Input,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import axios from "axios";

const Form = () => {
  // estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    negocio: "",
    servicio: "",
    email: "",
  });

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
    <Box
      background={"rgba(22, 25, 27, 0.50)"}
      backdropFilter={"blur(25px)"}
      borderRadius={54}
      width={["90vw", "85vw", "80vw"]}
      py={[10, 10, 10, 10, 20]}
      px={20}
      minH={300}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      fontWeight={600}
      fontSize={"1.5rem"}
      position={"absolute"}
      top={["32", "32", "20", "20", "0"]}
      right={["-10%", "-15%", "-15%"]}
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
                value={formData.email}
                onChange={handleChange}
              ></Input>
            </WrapItem>
          </Wrap>

          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Button type="submit" mt={5}>
              enviar información
            </Button>
          </Box>
        </FormControl>
      </form>
    </Box>
  );
};

export default Form;
