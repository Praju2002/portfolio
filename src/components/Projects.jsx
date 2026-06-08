import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  Container,
  IconButton
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import mazeimg from "/maze.png";
import textimg from "/text.png";
import soothesphereimg from "/soothesphere.png";
import docufindimg from "/docufind.png";

const projects = [
  {
    title: "Maze Generator",
    image: mazeimg,
    desc: "An interactive maze generator and solver that visualizes algorithms (Kruskal, Prim) and performance using D3.js. I implemented a heuristic DFS solver and added analytics; this project won the Best Project Award.",
    tags: ["React", "MongoDB", "D3.js", "Express", "Algorithms"],
    github: "https://github.com/Praju2002/Minorproj.git"
  },
  {
    title: "DocuFind",
    image: docufindimg,
    desc: "An adaptive word-detection system that handles low-contrast and damaged documents. I compared pixel- and feature-based approaches and built an 'Auto' mode to pick the best method — work that contributed to an IEEE paper.",
    tags: ["OpenCV", "Python", "Computer Vision"],
    github: "https://github.com/Praju2002/template-final.git"
  },
  {
    title: "Text Compressor",
    image: textimg,
    desc: "A lossless compression tool using Huffman encoding. It reduces file sizes while preserving every bit of data, with simple file and directory handling.",
    tags: ["C++", "Huffman Encoding", "Algorithms"],
    github: "https://github.com/Praju2002/miniproject.git"
  },
  {
    title: "Gantabya",
    image: "/gantabya.jpg",
    desc: "A hyper-local travel app for Nepali travelers that lets users share trails and map routes with OpenStreetMap. It also surfaces live weather for each trail.",
    tags: ["React", "OpenStreetMap", "REST APIs", "Geolocation"],
    github: "https://github.com/Abhiyan31415/Elsendero.git"
  },
  {
    title: "SootheSphere",
    image: soothesphereimg,
    desc: "A sound-therapy app that generates personalized soundscapes and includes a simple journaling interface to help with focus, sleep, and relaxation.",
    tags: ["Node.js", "MongoDB", "EJS", "Audio Processing"],
    github: "https://github.com/Praju2002/WLiT-Hackathon.git"
  }
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 0.8 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Projects = () => {
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: { xs: 12, md: 16 },
        background: "#f8f8f8",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", maxWidth: 1400, px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
        <motion.div initial="hidden" animate="visible" variants={itemVariants}>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "#7e5fa6",
              mb: 8,
              letterSpacing: '0.02em',
              lineHeight: 1,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Featured Projects
          </Typography>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Grid container spacing={5} sx={{ justifyContent: "center", alignItems: "stretch", width: "100%", maxWidth: "100%" }}>
            {projects.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                <motion.div variants={itemVariants} style={{ display: 'flex', flex: 1 }}>
                  <Card
                    sx={{
                      height: '100%',
                      minHeight: 420,
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: "none",
                      borderRadius: 0,
                      overflow: "hidden",
                      border: `1px solid #d4c5f9`,
                      background: "#fff",
                      transition: "all 0.4s ease",
                      '&:hover': {
                       boxShadow: "2px 0px 4px rgba(182, 171, 207, 0.3)",

                        transform: "translateY(-4px)"
                      },
                      flex: 1,
                    }}
                  >
                    {project.image && (
                      <CardMedia
                        component="img"
                        image={project.image}
                        alt={project.title}
                        sx={{ height: 180, objectFit: "cover" }}
                      />
                    )}
                    <CardContent sx={{ flexGrow: 1, minHeight: 140, display: 'flex', flexDirection: 'column' }}>
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        sx={{ color: "#7e5fa6", fontSize: "1.2rem", mb: 1, letterSpacing: '0.01em' }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mt: 0.5,
                          mb: 2,
                          fontSize: "1.05rem",
                          lineHeight: 1.7,
                          flexGrow: 1,
                        }}
                      >
                        {project.desc}
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 'auto' }}>
                        {project.tags.map((tag, i) => (
                          <Chip
                            key={i}
                            label={tag}
                            size="small"
                            sx={{
                              backgroundColor: "#f9f7ff",
                              color: "#7e5fa6",
                              border: `1px solid #d4c5f9`,
                              fontWeight: 500,
                              fontSize: "0.98rem",
                              boxShadow: "none"
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                    <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end", mt: 'auto' }}>
                      <IconButton
                        component="a"
                        href={project.github}
                        target="_blank"
                        sx={{
                          color: "#9b87c7",
                          border: "1px solid #d4c5f9",
                          borderRadius: 0,
                          transition: "all 0.3s ease",
                          '&:hover': { 
                            color: "#fff", 
                            background: "#9b87c7",
                            border: "1px solid #9b87c7",
                          }
                        }}
                      >
                        <GitHubIcon />
                      </IconButton>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
