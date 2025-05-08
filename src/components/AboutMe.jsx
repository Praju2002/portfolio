import React from "react";
import { Box, Typography, Paper, Container, Avatar, Chip, ThemeProvider, Grid, Divider, IconButton, Link } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
// import img from "../assets/praju.jpg";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ba55d3", 
      light: "#d8bfd8", 
      dark: "#9932cc",  
    },
    secondary: {
      main: "#c71585",
    },
    background: {
      default: "#f8f0f8", 
      paper: "#fcf7fc",
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

const AboutMe = () => {
 
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skills = [
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "Express", level: "Intermediate" },
    { name: "C/C++", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
    { name: "PostgreSQL", level: "Basic" },
    { name: "Git", level: "Intermediate" },
    { name: "D3.js", level: "Basic" },
    { name: "Socket.io", level: "Basic" },
    { name: "Docker", level: "Basic" }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box 
        component="section"
        sx={{ 
          py: 8, 
          position: "relative",
          background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, #f3e5f5 100%)`,
          minHeight: "100vh",
        }}
      >
       
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: 0.07, 
            zIndex: 0,
            top: 0,
            left: 0,
            background: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\" fill=\"%23${theme.palette.primary.main.substring(1)}\" fill-opacity=\"1\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')",
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <Typography 
              variant="h1" 
              component="h1" 
              align="center" 
              sx={{ 
                mb: 1, 
                fontWeight: 800,
                background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: "text",
                textFillColor: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                letterSpacing: "-0.02em",
              }}
            >
              Praju Khanal
            </Typography>
            
            <Typography 
              variant="h5" 
              component="h2" 
              align="center" 
              sx={{ 
                mb: 2, 
                maxWidth: "800px",
                mx: "auto",
                color: "#555",
                fontWeight: 500,
                letterSpacing: "0.05em",
                textTransform: "uppercase"
              }}
            >
              MERN Stack Developer | Computer Engineering Student
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", mb: 6, gap: 2 }}>
              <Link href="https://github.com/Praju2002" target="_blank" rel="noopener noreferrer">
                <IconButton 
                  size="large" 
                  sx={{ 
                    color: theme.palette.primary.main,
                    '&:hover': { transform: 'translateY(-3px)', boxShadow: `0 5px 15px ${theme.palette.primary.main}40` },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <GitHubIcon fontSize="large" />
                </IconButton>
              </Link>
              <Link href="https://www.linkedin.com/in/praju-khanal/" target="_blank" rel="noopener noreferrer">
                <IconButton 
                  size="large" 
                  sx={{ 
                    color: theme.palette.primary.main,
                    '&:hover': { transform: 'translateY(-3px)', boxShadow: `0 5px 15px ${theme.palette.primary.main}40` },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </Link>
              <Link href="mailto:prajukhanal21@gmail.com" target="_blank" rel="noopener noreferrer">
                <IconButton 
                  size="large" 
                  sx={{ 
                    color: theme.palette.primary.main,
                    '&:hover': { transform: 'translateY(-3px)', boxShadow: `0 5px 15px ${theme.palette.primary.main}40` },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <EmailIcon fontSize="large" />
                </IconButton>
              </Link>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
           
            <Grid item xs={12} md={5}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 15px 30px rgba(186, 85, 211, 0.15)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    background: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${theme.palette.primary.light}40`,
                  }}
                >
                  <Box 
                    sx={{ 
                      p: 3, 
                      display: "flex", 
                      flexDirection: "column", 
                      alignItems: "center",
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}25 0%, ${theme.palette.secondary.main}25 100%)`,
                    }}
                  >
                    <Avatar 
                     src="/praju.jpg" 
                      alt="Praju Khanal"
                      sx={{ 
                        width: 200, 
                        height: 200, 
                        border: `4px solid ${theme.palette.primary.main}30`,
                        boxShadow: `0 10px 25px ${theme.palette.primary.main}30`,
                        mb: 2
                      }} 
                    />
                    <Typography variant="h4" fontWeight="700" textAlign="center" color="#333">
                      Praju Khanal
                    </Typography>
                
                  </Box>

                  <Box sx={{ p: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <PersonIcon sx={{ color: theme.palette.primary.main, mr: 2 }} />
                      <Typography variant="h6" fontWeight="600">
                        Personal Info
                      </Typography>
                    </Box>
                    <Divider sx={{ mb: 2, borderColor: `${theme.palette.primary.light}30` }} />
                    
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle1" fontWeight="600" color={theme.palette.primary.main}>
                        Email
                      </Typography>
                      <Typography variant="body2">
                        prajukhanal21@gmail.com
                      </Typography>
                    </Box>
                    
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle1" fontWeight="600" color={theme.palette.primary.main}>
                        Location
                      </Typography>
                      <Typography variant="body2">
                        Kathmandu, Nepal
                      </Typography>
                    </Box>
                    
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle1" fontWeight="600" color={theme.palette.primary.main}>
                        Languages
                      </Typography>
                      <Typography variant="body2">
                        English (Fluent), Nepali (Native)
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ p: 3, mt: "auto" }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <SchoolIcon sx={{ color: theme.palette.primary.main, mr: 2 }} />
                      <Typography variant="h6" fontWeight="600">
                        Education
                      </Typography>
                    </Box>
                    <Divider sx={{ mb: 2, borderColor: `${theme.palette.primary.light}30` }} />
                    
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle1" fontWeight="600" color={theme.palette.primary.main}>
                        Bachelor's in Computer Engineering
                      </Typography>
                      <Typography variant="body2" fontWeight="500">
                        Everest Engineering College, Pokhara University
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        2021-2025
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

          
            <Grid item xs={12} md={7}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    background: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "16px",
                    boxShadow: "0 15px 30px rgba(186, 85, 211, 0.15)",
                    mb: 4,
                    border: `1px solid ${theme.palette.primary.light}40`
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <PersonIcon sx={{ color: theme.palette.primary.main, mr: 2 }} />
                    <Typography variant="h5" fontWeight="600" color="#333">
                      About Me
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 3, borderColor: `${theme.palette.primary.light}30` }} />
                  
                  <Typography variant="body1" sx={{ mb: 3, color: "#444", lineHeight: 1.8 }}>
                    I'm a passionate Computer Engineering student with a strong drive for developing innovative web applications
                    and solving complex problems. My journey in tech began with curiosity and has evolved into expertise
                    in modern development stacks.
                  </Typography>

                  <Typography variant="body1" sx={{ mb: 3, color: "#444", lineHeight: 1.8 }}>
                    With a focus on the MERN stack (MongoDB, Express, React, Node.js), I've developed a
                    variety of applications ranging from e-commerce platforms to real-time communication systems.
                    I believe in writing clean, maintainable code and designing intuitive user experiences.
                  </Typography>

                  <Typography variant="body1" sx={{ color: "#444", lineHeight: 1.8 }}>
                    My goal is to continuously learn and grow as a developer while contributing to meaningful
                    projects that make a positive impact on users' lives. I'm particularly interested in web technologies,
                    distributed systems, and the intersection of design and functionality.
                  </Typography>
                </Paper>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    background: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "16px",
                    boxShadow: "0 15px 30px rgba(186, 85, 211, 0.15)",
                    mb: 4,
                    border: `1px solid ${theme.palette.primary.light}40`
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <CodeIcon sx={{ color: theme.palette.primary.main, mr: 2 }} />
                    <Typography variant="h5" fontWeight="600" color="#333">
                      Technical Skills
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 3, borderColor: `${theme.palette.primary.light}30` }} />
                  
                  <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                    <Box sx={{ 
                      display: "flex", 
                      flexWrap: "wrap", 
                      gap: 1.5
                    }}>
                      {skills.map((skill, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                          <Chip
                            label={skill.name}
                            sx={{
                              py: 2.5,
                              px: 1,
                              borderRadius: "8px",
                              backgroundColor: skill.level === "Advanced" 
                                ? `${theme.palette.primary.main}30` 
                                : skill.level === "Intermediate"
                                  ? `${theme.palette.primary.main}20`
                                  : `${theme.palette.primary.main}15`,
                              color: theme.palette.primary.dark,
                              fontSize: "0.95rem",
                              fontWeight: 600,
                              transition: "all 0.3s ease",
                              border: `1px solid ${theme.palette.primary.main}40`,
                              '&:hover': {
                                backgroundColor: `${theme.palette.primary.main}35`,
                                transform: "translateY(-3px)",
                                boxShadow: `0 5px 15px ${theme.palette.primary.main}40`
                              }
                            }}
                          />
                        </motion.div>
                      ))}
                    </Box>
                  </motion.div>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
          
         
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default AboutMe;