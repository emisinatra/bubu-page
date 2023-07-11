import { extendTheme, theme } from "@chakra-ui/react";

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '992px',
  xl: '1280px',
  '2xl': '1536px',
}

export default extendTheme({
  breakpoints,
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
      400: "#F58008",
      500: "#F29569",
      600: "#F29590",
    },
    secondary: {
      /* ...theme.colors.blue, */
      200: "#063c5b",
      300: "#0f4d71",
      400: "#0F3058",
      500: "#0F3043",
    }
  },
});
