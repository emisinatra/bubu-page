import { Box, Image, Stack } from "@chakra-ui/react";
import React from "react";

const ImagesBody = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      position={"absolute"}
      zIndex={"-1"}
     
    >
      <Box
        pos={"relative"}
        left={"-14%"}
        mt={"1%"}
        maxW={"40%"}
      >
        <Image
          src="/diseño01.png"
          transform={"scale(1.2)"}
          height="100%"
          width="100%"
          objectFit="contain"
        />
      </Box>

      <Box position={"relative"} right={"-25%"} mb={"-30%"}>
        <Image
          src="/diseño02.png"
          transform={"scale(2.3)"}
          height="100%"
          width="100%"
          objectFit="contain"
          
        />
      </Box>
    </Box>
  );
};

export default ImagesBody;
