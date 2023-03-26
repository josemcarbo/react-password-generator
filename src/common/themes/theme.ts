import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#15C15D",
      light: "#15C15D",
      dark: "#25B160",
    },
    secondary: {
      main: "#66A8FF",
      light: "#425FFF",
      dark: "#66A8FF",
    },
    error: {
      main: "#FF4238",
      light: "#FF4238",
      dark: "#F6544C",
    },
    success: {
      main: "#15C15D",
      light: "#15C15D",
      dark: "#25B160",
    },
    warning: {
      main: "#FF4238",
      light: "#FF4238",
      dark: "#FF4238",
    },
  },
  typography: {
    h1: {
      fontSize: "24px",
      fontWeight: 600,
    },
    h2: {
      fontSize: "22px",
      fontWeight: 500,
    },
    h3: {
      fontSize: "20px",
      fontWeight: 500,
    },
    h4: {
      fontSize: "18px",
      fontWeight: 500,
    },
    h5: {
      fontSize: "16px",
      fontWeight: 400,
    },
    h6: {
      fontSize: "14px",
      fontWeight: 400,
    },
    body1: {
      fontSize: "12px",
      fontWeight: 400,
    },
    body2: {
      fontSize: "12px",
      fontWeight: 600,
    },
  },
});

export default theme;
