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
        <Box id="about" sx={{ width: "100%", maxWidth: 1200, minHeight: "100vh", py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3, md: 0 } }}>
          <AboutMe />
        </Box>

        {/* Projects Section */}
        <Box id="projects" sx={{ width: "100%", maxWidth: 1200, minHeight: "100vh", py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3, md: 0 } }}>
          <Projects />
        </Box>

        {/* Achievements Section */}
        <Box id="achievements" sx={{ width: "100%", maxWidth: 1200, minHeight: "100vh", py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3, md: 0 } }}>
          <Achievements />
        </Box>

        {/* Contact Section */}
        <Box id="contact" sx={{ width: "100%", maxWidth: 1200, minHeight: "100vh", py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3, md: 0 } }}>
          <Contact />
        </Box>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </Box>
    </ThemeProvider>
  );
};

export default App;