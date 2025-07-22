import React from "react";
import { Box, Typography, Paper, Container, Avatar, Chip, Grid, Divider, IconButton, Link } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';

const AboutMe = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 6, md: 10 },
        background: '#fff',
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
     
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Typography
            variant="h1"
            component="h1"
            align="center"
            sx={{
              mb: 1,
              fontWeight: 800,
              fontSize: { xs: "2.2rem", md: "3.5rem" },
              color: "#111",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Praju Khanal
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            align="center"
            sx={{
              mb: 3,
              maxWidth: "700px",
              mx: "auto",
              color: "#555",
              fontWeight: 500,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              fontSize: { xs: "1.1rem", md: "1.3rem" },
            }}
          >
            MERN Stack Developer | Computer Engineering Student
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 6, gap: 2 }}>
            <Link href="https://github.com/Praju2002" target="_blank" rel="noopener noreferrer">
              <IconButton size="large" sx={{ color: "#222", '&:hover': { color: "#0071e3", background: "#f5f5f7" }, transition: 'all 0.3s' }}>
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/in/praju-khanal/" target="_blank" rel="noopener noreferrer">
              <IconButton size="large" sx={{ color: "#222", '&:hover': { color: "#0071e3", background: "#f5f5f7" }, transition: 'all 0.3s' }}>
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </Link>
            <Link href="mailto:prajukhanal21@gmail.com" target="_blank" rel="noopener noreferrer">
              <IconButton size="large" sx={{ color: "#222", '&:hover': { color: "#0071e3", background: "#f5f5f7" }, transition: 'all 0.3s' }}>
                <EmailIcon fontSize="large" />
              </IconButton>
            </Link>
          </Box>
        </motion.div>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  background: "#fafafc",
                  border: `1px solid #ececec`,
                }}
              >
                <Box sx={{ p: 3, display: "flex", flexDirection: "column", alignItems: "center", background: "#fff" }}>
                  <Avatar
                    src="/praju.jpg"
                    alt="Praju Khanal"
                    sx={{
                      width: 160,
                      height: 160,
                      border: `3px solid #e5e5ea`,
                      boxShadow: `0 2px 12px #e5e5ea`,
                      mb: 2
                    }}
                  />
                  <Typography variant="h4" fontWeight="700" textAlign="center" color="#222">
                    Praju Khanal
                  </Typography>
                </Box>
                <Box sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <PersonIcon sx={{ color: "#0071e3", mr: 1 }} />
                    <Typography variant="h6" fontWeight="600">
                      Personal Info
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 2, borderColor: `#ececec` }} />
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight="600" color="#0071e3">
                      Email
                    </Typography>
                    <Typography variant="body2">prajukhanal21@gmail.com</Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight="600" color="#0071e3">
                      Location
                    </Typography>
                    <Typography variant="body2">Kathmandu, Nepal</Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight="600" color="#0071e3">
                      Languages
                    </Typography>
                    <Typography variant="body2">English (Fluent), Nepali (Native)</Typography>
                  </Box>
                </Box>
                <Box sx={{ p: 3, mt: "auto" }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <SchoolIcon sx={{ color: "#0071e3", mr: 1 }} />
                    <Typography variant="h6" fontWeight="600">
                      Education
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 2, borderColor: `#ececec` }} />
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight="600" color="#0071e3">
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
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2, md: 4 },
                  background: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                  mb: 4,
                  border: `1px solid #ececec`
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <PersonIcon sx={{ color: "#0071e3", mr: 1 }} />
                  <Typography variant="h5" fontWeight="600" color="#222">
                    About Me
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2, borderColor: `#ececec` }} />
                <Typography variant="body1" sx={{ mb: 2, color: "#444", lineHeight: 1.8 }}>
                  I'm a passionate Computer Engineering student with a strong drive for developing innovative web applications
                  and solving complex problems. My journey in tech began with curiosity and has evolved into expertise
                  in modern development stacks.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: "#444", lineHeight: 1.8 }}>
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
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.3 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2, md: 4 },
                  background: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                  mb: 4,
                  border: `1px solid #ececec`
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CodeIcon sx={{ color: "#0071e3", mr: 1 }} />
                  <Typography variant="h5" fontWeight="600" color="#222">
                    Technical Skills
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2, borderColor: `#ececec` }} />
                <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                    {skills.map((skill, index) => (
                      <motion.div key={index} variants={fadeInUp}>
                        <Chip
                          label={skill.name}
                          sx={{
                            py: 2,
                            px: 1.5,
                            borderRadius: "8px",
                            backgroundColor: "#f5f5f7",
                            color: "#222",
                            fontSize: "1rem",
                            fontWeight: 600,
                            border: `1px solid #ececec`,
                            boxShadow: "none",
                            '&:hover': {
                              backgroundColor: "#e5e5ea",
                              transform: "translateY(-2px)",
                              boxShadow: `0 2px 8px #e5e5ea`,
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
  );
};

export default AboutMe;