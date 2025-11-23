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
    primary: { main: "#9b87c7" },
    secondary: { main: "#d4c5f9" },
    background: { default: "#faf8ff" },
  },
  typography: { 
    fontFamily: "'Playfair Display', 'Georgia', serif",
    h1: { fontWeight: 700, letterSpacing: '0.02em' },
    h2: { fontWeight: 700, letterSpacing: '0.02em' },
    h3: { fontWeight: 700, letterSpacing: '0.01em' },
    body1: { fontFamily: "'Inter', 'Helvetica', sans-serif", letterSpacing: '0.02em' },
    body2: { fontFamily: "'Inter', 'Helvetica', sans-serif", letterSpacing: '0.01em' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: "uppercase",
          boxShadow: "none",
          fontWeight: 600,
          fontSize: "0.875rem",
          padding: "1rem 3rem",
          letterSpacing: '0.15em',
          fontFamily: "'Inter', 'Helvetica', sans-serif",
          background: "#9b87c7",
          color: "#fff",
          transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
          border: "2px solid #9b87c7",
          "&:hover": { 
            background: "#d4c5f9", 
            color: "#fff",
            border: "2px solid #d4c5f9",
          },
        },
      },
    },
    MuiPaper: { styleOverrides: { root: { borderRadius: 0 } } },
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
        maxWidth: "100vw",
        overflow: "hidden",
        px: 0,
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