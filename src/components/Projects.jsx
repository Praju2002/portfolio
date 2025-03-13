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
    github: "https://github.com/Abhiyan31415/Elsender.git"
  },
  {
    title: "SootheSphere",
    image: soothesphereimg,
    desc: "Sound therapy app with personalized soundscapes. Create custom audio environments to enhance focus, sleep, and relaxation.",
    tags: ["React"],
    github: "https://github.com/Praju2002/WLiT-Hackathon.git"
  }
];

const Projects = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, background: "#f8f0f8" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 4,
            fontWeight: 700,
            color: "#9932cc",
            letterSpacing: "-0.02em"
          }}
        >
          Featured Projects
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: "0 10px 20px rgba(186, 85, 211, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  {project.image && (
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.title}
                      sx={{ height: 180, objectFit: "cover" }}
                    />
                  )}

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" fontWeight={700}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                      {project.desc}
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {project.tags.map((tag, i) => (
                        <Chip key={i} label={tag} size="small" sx={{ bgcolor: "#ba55d3", color: "#fff" }} />
                      ))}
                    </Box>
                  </CardContent>

                  <Box sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
                    <IconButton component="a" href={project.github} target="_blank" sx={{ color: "#9932cc" }}>
                      <GitHubIcon />
                    </IconButton>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
