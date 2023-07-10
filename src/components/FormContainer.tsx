import Form from "./Form";
import { Box, HStack, Text, Stack } from "@chakra-ui/react";
const FormContainer = () => {
  return (
    <Box position={"relative"} mt={5}>
      <Stack>
        <HStack
          textColor={"white"}
          fontWeight={"bold"}
          fontSize={["4xl", "5xl", "6xl", "6xl", "7xl"]}
          px={"10"}
          pb={"10"}
          position={"absolute"}
          zIndex={"1"}
        >
          <Text>comencemos</Text>
          <Text textColor={"primary.500"}>.</Text>
        </HStack>
        <Text
          position={"relative"}
          mt={[20, 20, 20, 20, 28]}
          px={10}
          fontSize={"large"}
        >
          formulario básico
        </Text>
      </Stack>
      <Form />
    </Box>
  );
};

export default FormContainer;
