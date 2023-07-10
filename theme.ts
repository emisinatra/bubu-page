import { extendTheme, theme } from "@chakra-ui/react";

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: '580px',
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
      500: "#F29569",
    },
    secondary: {
      /* ...theme.colors.blue, */
      400: "#0F3040",
      500: "#0F3043",
    }
  },
});
