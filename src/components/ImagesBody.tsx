import { Box, Image, Stack } from "@chakra-ui/react";
import React from "react";

const ImagesBody = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      position={"absolute"}
      zIndex={"-1"}
      /* overflowX={"hidden"} */
      /* width="100%"
      height="100%" */
      /* mb={"-72"} */
    >
      <Box
        pos={"relative"}
        left={"-14%"}
        mt={"1%"}
        maxW={"40%"}
      >
        <Image
          src="/diseño01.png"
          /* boxSize={[150, 200, 300, 400, 500]}
          objectFit={"cover"} */
          transform={"scale(1.2)"}
          height="100%"
          width="100%"
          objectFit="contain"
        />
      </Box>

      <Box /*  mr={"-96"} */ position={"relative"} right={"-25%"} mb={"-30%"}>
        <Image
          /* boxSize={[500, 800, 800, 1000, 1200]}
          src="/diseño02.png"
          objectFit={"cover"} */
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
