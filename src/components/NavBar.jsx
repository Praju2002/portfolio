import React from "react";
import { Box, Button, Typography, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

const Navbar = ({ setActiveSection, activeSection }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  // Enhanced lilac pink colors - more vibrant and less light
  const primaryColor = "#ba55d3"; // Medium orchid - stronger lilac pink
  const secondaryColor = "#9932cc"; // Dark orchid - deeper for contrast
  const lightColor = "#d8bfd8"; // Thistle - less light but still provides contrast
  const textOnPrimaryColor = "#ffffff"; // White text on primary color

  // Navigation items with icons
  const navItems = [
    { 
      label: "About", 
      to: "about", 
      number: "01", 
      icon: <PersonRoundedIcon sx={{ fontSize: "1.2rem" }} />
    },
    { 
      label: "Projects", 
      to: "projects", 
      number: "02", 
      icon: <CodeRoundedIcon sx={{ fontSize: "1.2rem" }} />
    },
    { 
      label: "Achievements", 
      to: "achievements", 
      number: "03", 
      icon: <EmojiEventsRoundedIcon sx={{ fontSize: "1.2rem" }} />
    },
    { 
      label: "Contact", 
      to: "contact", 
      number: "04", 
      icon: <EmailRoundedIcon sx={{ fontSize: "1.2rem" }} />
    },
  ];

  // Function to handle navigation
  const handleNavClick = (section) => {
    console.log("Navigation clicked:", section);
    setActiveSection(section);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.1
      }
    }
  };

  // Handle resume download
  const handleDownloadResume = () => {
    window.open('/Praju_cv.pdf', '_blank');
  };

  // Desktop sidebar
  const DesktopSidebar = () => (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      sx={{
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        position: "fixed",
        top: 0,
        left: 0,
        width: "240px",
        height: "100vh",
        background: "rgba(250, 240, 250, 0.97)", // Slightly tinted background
        padding: "28px 20px",
        boxShadow: "1px 0 20px rgba(186, 85, 211, 0.1)", // Shadow with primary color tint
        backdropFilter: "blur(10px)",
        borderRight: `1px solid ${lightColor}`,
        zIndex: 1000,
        overflowY: "auto"
      }}
    >
      <motion.div variants={logoVariants} initial="hidden" animate="visible">
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "12px",
              background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1.5,
              boxShadow: `0 4px 10px rgba(186, 85, 211, 0.4)` // Enhanced shadow
            }}
          >
            <Typography sx={{ color: textOnPrimaryColor, fontWeight: "bold", fontSize: "1.2rem" }}>P</Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{
              color: primaryColor,
              fontWeight: "bold",
              background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
              backgroundClip: "text",
              textFillColor: "transparent"
            }}
          >
            Praju
          </Typography>
        </Box>
      </motion.div>

      <Box
        sx={{
          mt: 2,
          mb: 4,
          height: "1px",
          background: `linear-gradient(to right, ${lightColor}80, ${lightColor}, ${lightColor}80)`
        }}
      />

      <Box 
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: 1.5, 
          width: "100%",
          alignItems: "flex-start",
          mt: 2
        }}
      >
        {navItems.map((item) => (
          <motion.div key={item.to} variants={itemVariants} style={{ width: "100%" }}>
            <Button
              onClick={() => handleNavClick(item.to)}
              sx={{
                color: activeSection === item.to ? primaryColor : "#7a7a8c", // Darker inactive text
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: activeSection === item.to ? "600" : "500",
                padding: "10px 16px",
                borderRadius: "12px",
                justifyContent: "flex-start",
                width: "100%",
                textAlign: "left",
                position: "relative",
                background: activeSection === item.to ? `${primaryColor}20` : "transparent", // More visible active background
                "&:hover": { 
                  background: `${primaryColor}15`,
                  color: primaryColor
                },
                transition: "all 0.3s ease",
                overflow: "hidden",
                "& .MuiButton-startIcon": {
                  marginRight: 1.5
                }
              }}
              startIcon={item.icon}
            >
              <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
                <Typography 
                  component="span" 
                  sx={{ 
                    color: activeSection === item.to ? primaryColor : "#8a8a9a", // Darker number color
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    opacity: 0.9, // Increased opacity
                    mr: 1.5,
                    fontFamily: "'Space Mono', monospace"
                  }}
                >
                  {/* {item.number} */}
                </Typography>
                <Typography component="span" sx={{ fontWeight: "inherit" }}>
                  {item.label}
                </Typography>
                {activeSection === item.to && (
                  <Box
                    sx={{
                      width: "4px",
                      height: "100%",
                      background: `linear-gradient(to bottom, ${primaryColor}, ${secondaryColor})`,
                      position: "absolute",
                      right: 0,
                      borderRadius: "4px 0 0 4px"
                    }}
                  />
                )}
              </Box>
            </Button>
          </motion.div>
        ))}
      </Box>

      <Box sx={{ mt: "auto", pt: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Button
          component={motion.button}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleDownloadResume}
          sx={{
            mt: 2,
            bgcolor: primaryColor,
            color: textOnPrimaryColor,
            borderRadius: "12px",
            padding: "10px 20px",
            textTransform: "none",
            fontWeight: 600,
            boxShadow: `0 4px 12px rgba(186, 85, 211, 0.35)`, // Enhanced shadow
            "&:hover": {
              bgcolor: secondaryColor
            },
            width: "90%"
          }}
        >
          Download Resume
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Only render desktop sidebar */}
      <DesktopSidebar />

      {/* Mobile bottom navigation */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          background: "rgba(250, 240, 250, 0.95)", // Slightly tinted background
          backdropFilter: "blur(10px)",
          borderTop: `1px solid ${lightColor}`,
          boxShadow: "0 -2px 10px rgba(186, 85, 211, 0.1)", // Shadow with primary color tint
          zIndex: 1000,
          justifyContent: "space-around",
          padding: "8px 0"
        }}
      >
        {navItems.map((item) => (
          <IconButton
            key={item.to}
            onClick={() => handleNavClick(item.to)}
            sx={{
              color: activeSection === item.to ? primaryColor : "#7a7a8c", // Darker inactive text
              borderRadius: "12px",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2px",
              "&:hover": {
                background: `${primaryColor}15`
              }
            }}
          >
            {item.icon}
            <Typography
              variant="caption"
              sx={{
                fontSize: "0.65rem",
                color: "inherit",
                fontWeight: activeSection === item.to ? 600 : 400
              }}
            >
              {item.label}
            </Typography>
          </IconButton>
        ))}
      </Box>
    </>
  );
};

export default Navbar;