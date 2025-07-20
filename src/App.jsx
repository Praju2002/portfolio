import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Box, ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import "./App.css";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: { main: "#ba55d3" },
    secondary: { main: "#9932cc" },
    background: { default: "#f8f0f8" },
  },
  typography: { fontFamily: "'Poppins', 'Roboto', 'Arial', sans-serif" },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          boxShadow: "none",
          "&:hover": { boxShadow: "0px 4px 12px rgba(186, 85, 211, 0.25)" },
        },
      },
    },
    MuiPaper: { styleOverrides: { root: { borderRadius: 16 } } },
  },
});

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  // Handle scroll-based active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "achievements", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: "100vh", 
        bgcolor: "background.default",
        position: "relative",
      }}>
        {/* Fixed Navigation */}
        <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />
        
        {/* Main scrollable content */}
        <Box sx={{ 
          ml: { xs: 0, md: "240px" }, // Margin for desktop sidebar
          transition: "margin 0.3s ease",
        }}>
          {/* About Section */}
          <Box id="about" sx={{ minHeight: "100vh" }}>
            <AboutMe />
          </Box>

          {/* Projects Section */}
          <Box id="projects" sx={{ minHeight: "100vh" }}>
            <Projects />
          </Box>

          {/* Achievements Section */}
          <Box id="achievements" sx={{ minHeight: "100vh" }}>
            <Achievements />
          </Box>

          {/* Contact Section */}
          <Box id="contact" sx={{ minHeight: "100vh" }}>
            <Contact />
          </Box>

          {/* Footer */}
          <Footer />
        </Box>

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </Box>
    </ThemeProvider>
  );
};

export default App;