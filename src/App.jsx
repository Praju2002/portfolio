import React, { useState } from "react";
import Navbar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import { Box, ThemeProvider, createTheme, CssBaseline } from "@mui/material";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: { main: "#3f51b5" },
    secondary: { main: "#f50057" },
    background: { default: "#f5f5f7" },
  },
  typography: { fontFamily: "'Poppins', 'Roboto', 'Arial', sans-serif" },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          boxShadow: "none",
          "&:hover": { boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" },
        },
      },
    },
    MuiPaper: { styleOverrides: { root: { borderRadius: 12 } } },
  },
});

const App = () => {
  // Changed default active section to "about" instead of "home"
  const [activeSection, setActiveSection] = useState("about");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutMe />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      case "achievements":
        return <Achievements />;
      default:
        return <AboutMe />;  // Changed default to AboutMe
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on desktop
        bgcolor: "background.default",
        position: "relative", // Important for fixed elements positioning context
        pb: { xs: "60px", md: 0 } // Bottom padding on mobile for navbar
      }}>
        {/* Navbar */}
        <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />
        
        {/* Main content */}
        <Box sx={{ 
          flexGrow: 1, 
          width: { xs: "100%", md: "calc(100% - 260px)" }, // Full width minus navbar width
          ml: { xs: 0, md: "260px" }, // Margin on desktop to account for fixed navbar
          p: { xs: 2, sm: 3, md: 4 },
        }}>
          {renderSection()}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;