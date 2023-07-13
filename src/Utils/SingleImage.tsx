import { Box, Image } from "@chakra-ui/react";
import React from "react";

const SingleImage = () => {
  return (
    <Box pos={"relative"} mt={"1%"} maxW={"40%"}>
      <Image
        src="/diseño01.png"
        transform={"scale(1.6)"}
        height="100%"
        width="100%"
        objectFit="contain"
      />
    </Box>
  );
};

export default SingleImage;
