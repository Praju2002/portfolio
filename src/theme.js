import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e91e63", // A soft pink tone
    },
    secondary: {
      main: "#ff9800", // Peach/Orange accent
    },
    background: {
      default: "#fff5f8", // Light pinkish background
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "3rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.5rem",
    },
    body1: {
      fontSize: "1.2rem",
    },
  },
});

export default theme;
