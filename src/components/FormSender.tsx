import { Box, Button } from "@chakra-ui/react";

interface FormSenderProps {
  isDisabled: boolean;
  handleClick: () => void;
}

const FormSender = ({ isDisabled, handleClick }: FormSenderProps) => {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Button
        type="submit"
        mt={5}
        isDisabled={isDisabled}
        onClick={() => {
          handleClick();
        }}
        _hover={{
          backgroundColor: "rgba(242, 149, 105)",
          color: "white",
          transition: "ease-in-out",
          transitionDuration: "0.1s",
        }}
      >
        enviar
      </Button>
    </Box>
  );
};

export default FormSender;
