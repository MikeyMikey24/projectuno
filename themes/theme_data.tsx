import { extendTheme } from "@chakra-ui/react";

const THEME_DATA = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    app_bg: "#EEEEEE",
    app_teal: "#00ADB5",
    app_faded_black: "#393E46",
    app_black: "#222831",
    app_button_bg: "#00ADB5",
    app_button_text: "#EEEEEE",
  },
  components: {
    Button: {
      variants: {
        solid: {
          backgroundColor: "app_button_bg",
          color: "app_button_text",
          _hover: {
            backgroundColor: "app_button_bg",
            color: "app_button_text",
          },
          _active: {
            backgroundColor: "app_button_bg",
            color: "app_button_text",
          },
        },
      },
    },
  },
});

export default THEME_DATA;