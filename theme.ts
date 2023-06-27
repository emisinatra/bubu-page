import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      "html, body, #__next": {
        height: "100%",
      },
      body: {
        backgroundColor: "secondary.500",
      },
    },
  },
  colors: {
    primary: {
      ...theme.colors.orange,
      500: "#F29569",
    },
    secondary: {
      /* ...theme.colors.blue, */
      400: "#0F3040",
      500: "#0F3043",
    }
  },
});
