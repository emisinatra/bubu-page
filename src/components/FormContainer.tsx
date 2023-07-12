import Form from "./Form";
import { Box, HStack, Text, Stack } from "@chakra-ui/react";
const FormContainer = () => {
  return (
    <Box position={"relative"} mt={5}>
      {/* Texto del formulario */}

      <HStack
        textColor={"white"}
        fontWeight={"bold"}
        fontSize={["4xl", "5xl", "6xl", "6xl", "7xl"]}
        px={"10"}
        pb={"10"}
        position={["relative", "relative", "relative", "absolute", "absolute"]}
        top={["0", "0", "0", "10", "10", "10"]}
        zIndex={9999}
        mb={["0", "0", "0", "20", "24"]}
      >
        <Text>comencemos</Text>
        <Text textColor={"primary.500"}>.</Text>
      </HStack>

      {/* Formulario desktop*/}
      <Form />
    </Box>
  );
};

export default FormContainer;
