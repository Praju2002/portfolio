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

const projects = [
  {
    title: "Maze Generator",
    image: mazeimg,
    desc: "Interactive maze generator using MERN Stack and D3.js. Create, solve, and share custom maze puzzles with varying difficulty levels.",
    tags: ["React", "MongoDB", "D3.js", "Express"],
    github: "https://github.com/Praju2002/Minorproj.git"
  },
  {
    title: "Text Compressor",
    image: textimg,
    desc: "C++ tool for text compression using Huffman encoding. Reduces file sizes by up to 60% while maintaining data integrity.",
    tags: ["C++", "Algorithms", "Data Structures"],
    github: "https://github.com/Praju2002/miniproject.git"
  },
  {
    title: "Gantabya",
    image: "/gantabya.jpg",
    desc: "Hyper-localized travel app using OpenStreetMap and real-time updates. Discover hidden gems with personalized recommendations.",
    tags: ["React", "OpenStreetMap"],
    github: "https://github.com/Abhiyan31415/Elsendero.git"
  },
  {
    title: "SootheSphere",
    image: soothesphereimg,
    desc: "Sound therapy app with personalized soundscapes. Create custom audio environments to enhance focus, sleep, and relaxation.",
    tags: ["React"],
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
        py: { xs: 8, md: 12 },
        background: "#fafafc",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <motion.div initial="hidden" animate="visible" variants={itemVariants}>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.7rem" },
              color: "#111",
              mb: 5,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
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
                      boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                      borderRadius: "18px",
                      overflow: "hidden",
                      border: `1px solid #ececec`,
                      background: "#fff",
                      transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
                      '&:hover': {
                        boxShadow: `0 8px 32px #e5e5ea` ,
                        transform: "translateY(-6px)"
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
                        sx={{ color: "#111", fontSize: "1.2rem", mb: 1 }}
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
                              backgroundColor: "#f5f5f7",
                              color: "#222",
                              border: `1px solid #ececec`,
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
                          color: "#222",
                          transition: "color 0.2s, background 0.2s",
                          '&:hover': { color: "#0071e3", background: "#f5f5f7" }
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
