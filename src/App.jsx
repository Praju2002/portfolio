import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Box, ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: { main: "#111" },
    secondary: { main: "#888" },
    background: { default: "#fff" },
  },
  typography: { fontFamily: "'SF Pro Display', 'Poppins', 'Roboto', 'Arial', sans-serif" },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          boxShadow: "none",
          fontWeight: 500,
          fontSize: "1.1rem",
          padding: "0.75rem 2rem",
          letterSpacing: 0.5,
          background: "#f5f5f7",
          color: "#111",
          transition: "all 0.2s cubic-bezier(.4,0,.2,1)",
          "&:hover": { boxShadow: "0 4px 24px rgba(0,0,0,0.08)", background: "#e5e5ea" },
        },
      },
    },
    MuiPaper: { styleOverrides: { root: { borderRadius: 16 } } },
  },
});

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Box sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        px: { xs: 0, sm: 1, md: 2, lg: 3 },
      }}>
        {/* About Section */}
        <AboutMe />

        {/* Projects Section */}
        <Projects />

        {/* Achievements Section */}
        <Achievements />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </Box>
    </ThemeProvider>
  );
};

export default App;