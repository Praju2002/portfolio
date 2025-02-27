import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Box, Chip, Container, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const projects = [
  {
    title: "Maze Generator",
    image: "/maze.jpg",
    desc: "Interactive maze generator using MERN Stack and D3.js. Create, solve, and share custom maze puzzles with varying difficulty levels.",
    tags: ["React", "MongoDB", "D3.js", "Express"],
    github: "https://github.com/yourusername/maze-generator",
    liveDemo: "https://maze-generator.yourdomain.com"
  },
  {
    title: "Text Compressor",
    image: "/compressor.jpg",
    desc: "C++ tool for text compression using Huffman encoding. Reduces file sizes by up to 60% while maintaining data integrity.",
    tags: ["C++", "Algorithms", "Data Structures"],
    github: "https://github.com/yourusername/text-compressor",
    liveDemo: null
  },
  {
    title: "Gantabya",
    image: "/gantabya.jpg",
    desc: "Hyper-localized travel app using OpenStreetMap and real-time updates. Discover hidden gems with personalized recommendations.",
    tags: ["React Native", "OpenStreetMap", "Firebase"],
    github: "https://github.com/yourusername/gantabya",
    liveDemo: "https://gantabya.yourdomain.com"
  },
  {
    title: "SootheSphere",
    image: "/soothe.jpg",
    desc: "Sound therapy app with personalized soundscapes. Create custom audio environments to enhance focus, sleep, and relaxation.",
    tags: ["React", "Web Audio API", "TensorFlow.js"],
    github: "https://github.com/yourusername/soothesphere",
    liveDemo: "https://soothesphere.yourdomain.com"
  }
];

const Projects = () => {
  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      } 
    },
    hover: { 
      y: -12,
      boxShadow: "0 22px 40px rgba(186, 85, 211, 0.2)",
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 20 
      }
    }
  };

  // Lilac theme colors from the AboutMe component
  const colors = {
    primary: {
      main: "#ba55d3", // Medium orchid - stronger lilac pink
      light: "#d8bfd8", // Thistle - lighter shade
      dark: "#9932cc",  // Dark orchid
    },
    secondary: {
      main: "#c71585", // Medium violet red - complementary
    },
    background: {
      default: "#f8f0f8", // Subtle lilac background
      paper: "#fcf7fc",
    }
  };

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 8, md: 12 }, 
        position: "relative",
        background: `linear-gradient(135deg, ${colors.background.default} 0%, #f3e5f5 100%)`
      }}
    >
      {/* Decorative background elements */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: 0.07,
          zIndex: 0,
          top: 0,
          left: 0,
          background: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\" fill=\"%23ba55d3\" fill-opacity=\"1\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')",
          backgroundSize: "cover",
        }}
      />
      
      {/* Gradient overlay top */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "200px",
          background: `linear-gradient(to bottom, ${colors.background.default} 0%, rgba(248, 240, 248, 0) 100%)`,
          zIndex: 1
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Typography 
            variant="h2" 
            component="h2" 
            align="center" 
            sx={{ 
              mb: 2, 
              fontWeight: 800,
              color: colors.primary.dark,
              background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.secondary.main} 100%)`,
              backgroundClip: "text",
              textFillColor: "transparent",
              letterSpacing: "-0.02em",
              textShadow: `0px 2px 10px ${colors.primary.main}30`,
            }}
          >
            Featured Projects
          </Typography>
          
          <Typography 
            variant="h6" 
            component="p" 
            align="center" 
            sx={{ 
              mb: { xs: 6, md: 8 }, 
              maxWidth: "650px",
              mx: "auto",
              color: "#555",
              fontWeight: 400,
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.6
            }}
          >
            A collection of my latest work showcasing creativity, problem-solving, and technical expertise across various development platforms
          </Typography>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4} justifyContent="center">
            {projects.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={6} lg={4}>
                <motion.div
                  variants={projectCardVariants}
                  whileHover="hover"
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      background: "rgba(255, 255, 255, 0.95)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "16px",
                      overflow: "hidden",
                      boxShadow: `0 10px 30px ${colors.primary.main}15`,
                      border: `1px solid ${colors.primary.light}40`,
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    <Box sx={{ position: "relative" }}>
                      <CardMedia 
                        component="img" 
                        height="220" 
                        image={project.image} 
                        alt={project.title}
                        sx={{
                          objectFit: "cover",
                          objectPosition: "center",
                          filter: "brightness(0.95)",
                          transition: "all 0.4s ease-in-out",
                          "&:hover": {
                            filter: "brightness(1.05)",
                            transform: "scale(1.02)",
                          }
                        }}
                      />
                      <Box 
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          background: "linear-gradient(to bottom, rgba(0,0,0,0.01) 60%, rgba(0,0,0,0.6) 100%)",
                          opacity: 0.7,
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 16,
                          left: 16,
                        }}
                      >
                        <Chip 
                          label={project.tags[0]} 
                          size="small"
                          sx={{ 
                            background: "rgba(255, 255, 255, 0.85)",
                            color: colors.primary.main,
                            fontWeight: 600,
                            fontSize: "0.7rem",
                            backdropFilter: "blur(4px)",
                            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                          }}
                        />
                      </Box>
                    </Box>
                    
                    <CardContent sx={{ flexGrow: 1, p: 3, pt: 2.5 }}>
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        gutterBottom
                        sx={{ 
                          fontWeight: 700,
                          color: colors.primary.dark,
                          fontSize: "1.5rem",
                          mb: 1.5
                        }}
                      >
                        {project.title}
                      </Typography>
                      
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          mb: 2.5,
                          color: "#4A4A68",
                          lineHeight: 1.7,
                          fontSize: "0.95rem"
                        }}
                      >
                        {project.desc}
                      </Typography>
                      
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 3 }}>
                        {project.tags.slice(1).map((tag, idx) => (
                          <Chip 
                            key={idx} 
                            label={tag} 
                            size="small"
                            sx={{ 
                              background: `${colors.primary.main}15`,
                              border: `1px solid ${colors.primary.main}30`,
                              color: colors.primary.dark,
                              fontWeight: 500,
                              fontSize: "0.7rem",
                              height: "22px"
                            }}
                          />
                        ))}
                      </Box>
                      
                      <Box 
                        sx={{ 
                          display: "flex", 
                          justifyContent: "space-between",
                          alignItems: "center",
                          mt: "auto",
                          pt: 1,
                          borderTop: "1px solid rgba(0, 0, 0, 0.04)"
                        }}
                      >
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <IconButton 
                            size="small" 
                            aria-label="github" 
                            sx={{ 
                              color: colors.primary.main, 
                              bgcolor: `${colors.primary.main}15`,
                              "&:hover": {
                                bgcolor: `${colors.primary.main}25`,
                              },
                              width: 34,
                              height: 34
                            }}
                          >
                            <GitHubIcon fontSize="small" />
                          </IconButton>
                          
                          {project.liveDemo && (
                            <IconButton 
                              size="small" 
                              aria-label="live demo" 
                              sx={{ 
                                color: colors.primary.main, 
                                bgcolor: `${colors.primary.main}15`,
                                "&:hover": {
                                  bgcolor: `${colors.primary.main}25`,
                                },
                                width: 34,
                                height: 34
                              }}
                            >
                              <LaunchIcon fontSize="small" />
                            </IconButton>
                          )}
                        </Box>
                        
                        <Typography 
                          component="a" 
                          variant="button"
                          href="#"
                          sx={{ 
                            display: "flex", 
                            alignItems: "center", 
                            color: colors.primary.main,
                            fontWeight: 600,
                            fontSize: "0.8rem",
                            textDecoration: "none",
                            "&:hover": {
                              textDecoration: "underline"
                            }
                          }}
                        >
                          Details
                          <ArrowForwardIcon fontSize="small" sx={{ ml: 0.5, fontSize: "1rem" }} />
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
        
        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            display: "flex",
            justifyContent: "center"
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Box
              component="a"
              href="#"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                py: 1.5,
                px: 4,
                bgcolor: colors.primary.main,
                color: "#fff",
                borderRadius: 50,
                fontWeight: 600,
                textDecoration: "none",
                textTransform: "uppercase",
                fontSize: "0.875rem",
                letterSpacing: 1,
                boxShadow: `0 4px 14px ${colors.primary.main}40`,
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: colors.primary.dark,
                  transform: "translateY(-3px)",
                  boxShadow: `0 6px 20px ${colors.primary.main}50`,
                }
              }}
            >
              View All Projects
              <ArrowForwardIcon fontSize="small" sx={{ ml: 1 }} />
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;