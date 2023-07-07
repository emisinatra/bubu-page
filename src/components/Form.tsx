import { useState, ChangeEvent, FormEvent } from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
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
    <Box maxWidth="400px" margin="0 auto">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Nombre:</FormLabel>
          <Input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Negocio:</FormLabel>
          <Input
            type="text"
            name="negocio"
            value={formData.negocio}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Servicio:</FormLabel>
          <Input
            type="text"
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email:</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Enviar
        </Button>
      </form>
    </Box>
  );
};

export default Form;
