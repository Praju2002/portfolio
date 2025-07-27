import React from "react";
import { Box, Typography, Paper, Container, Avatar, Chip, Grid, Divider, IconButton, Link, Stack } from "@mui/material"; // Import Stack
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center", 
        position: 'relative',
        overflow: 'hidden',
      }}
    >
     
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, px: { xs: 2, sm: 3, md: 0 } }}>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Typography
            variant="h1"
            component="h1"
            align="center"
            sx={{
              mb: 1,
              fontWeight: 800,
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem" }, 
              color: "#111",
              letterSpacing: { xs: "-0.01em", md: "-0.03em" }, 
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
              letterSpacing: { xs: "0.03em", md: "0.05em" }, 
              textTransform: "uppercase",
              fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.3rem" }, 
            }}
          >
            MERN Stack Developer | Computer Engineering Student
          </Typography>

          
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 2 }} 
            justifyContent="center" 
            sx={{ mb: 6 }}
          >
            <Link href="https://github.com/Praju2002" target="_blank" rel="noopener noreferrer">
              <IconButton size="large" sx={{
                color: "#222",
                '&:hover': { color: "#0071e3", background: "#f5f5f7" },
                transition: 'all 0.3s',
             
                fontSize: { xs: '1.8rem', sm: '2rem' } 
              }}>
                <GitHubIcon sx={{ fontSize: 'inherit' }} /> 
              </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/in/praju-khanal/" target="_blank" rel="noopener noreferrer">
              <IconButton size="large" sx={{
                color: "#222",
                '&:hover': { color: "#0071e3", background: "#f5f5f7" },
                transition: 'all 0.3s',
                fontSize: { xs: '1.8rem', sm: '2rem' }
              }}>
                <LinkedInIcon sx={{ fontSize: 'inherit' }} />
              </IconButton>
            </Link>
            <Link href="mailto:prajukhanal21@gmail.com" target="_blank" rel="noopener noreferrer">
              <IconButton size="large" sx={{
                color: "#222",
                '&:hover': { color: "#0071e3", background: "#f5f5f7" },
                transition: 'all 0.3s',
                fontSize: { xs: '1.8rem', sm: '2rem' }
              }}>
                <EmailIcon sx={{ fontSize: 'inherit' }} />
              </IconButton>
            </Link>
          </Stack>
        </motion.div>

   
        <Grid container spacing={4} sx={{ justifyContent: "center" }}> 
        
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
              
                <Box sx={{ p: { xs: 2, sm: 3 }, display: "flex", flexDirection: "column", alignItems: "center", background: "#fff" }}>
                  <Avatar
                    src="/praju.jpg" 
                    alt="Praju Khanal"
                    sx={{
                      width: { xs: 120, sm: 160, md: 160 }, 
                      height: { xs: 120, sm: 160, md: 160 },
                      border: `3px solid #e5e5ea`,
                      boxShadow: `0 2px 12px #e5e5ea`,
                      mb: 2
                    }}
                  />
                  <Typography variant="h4" fontWeight="700" textAlign="center" color="#222"
                    sx={{ fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem" } }}> 
                    Praju Khanal
                  </Typography>
                </Box>

                {/* Personal Info */}
                <Box sx={{ p: { xs: 2, sm: 3 } }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <PersonIcon sx={{ color: "#0071e3", mr: 1, fontSize: { xs: "1.2rem", md: "1.5rem" } }} />
                    <Typography variant="h6" fontWeight="600" sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
                      Personal Info
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 2, borderColor: `#ececec` }} />
                  {/* Each info block */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight="600" color="#0071e3" sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
                      Email
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: { xs: "0.85rem", md: "0.9rem" } }}>prajukhanal21@gmail.com</Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight="600" color="#0071e3" sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
                      Location
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: { xs: "0.85rem", md: "0.9rem" } }}>Kathmandu, Nepal</Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight="600" color="#0071e3" sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
                      Languages
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: { xs: "0.85rem", md: "0.9rem" } }}>English (Fluent), Nepali (Native)</Typography>
                  </Box>
                </Box>

                {/* Education */}
                <Box sx={{ p: { xs: 2, sm: 3 }, mt: "auto" }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <SchoolIcon sx={{ color: "#0071e3", mr: 1, fontSize: { xs: "1.2rem", md: "1.5rem" } }} />
                    <Typography variant="h6" fontWeight="600" sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
                      Education
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 2, borderColor: `#ececec` }} />
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight="600" color="#0071e3" sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
                      Bachelor's in Computer Engineering
                    </Typography>
                    <Typography variant="body2" fontWeight="500" sx={{ fontSize: { xs: "0.85rem", md: "0.9rem" } }}>
                      Everest Engineering College, Pokhara University
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: "0.8rem", md: "0.85rem" } }}>
                      2021-2025
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            {/* About Me Card */}
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2, sm: 4 }, 
                  background: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                  mb: 4,
                  border: `1px solid #ececec`
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <PersonIcon sx={{ color: "#0071e3", mr: 1, fontSize: { xs: "1.2rem", md: "1.5rem" } }} />
                  <Typography variant="h5" fontWeight="600" color="#222" sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
                    About Me
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2, borderColor: `#ececec` }} />
                <Typography variant="body1" sx={{ mb: 2, color: "#444", lineHeight: 1.8, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                  I'm a passionate Computer Engineering student with a strong drive for developing innovative web applications
                  and solving complex problems. My journey in tech began with curiosity and has evolved into expertise
                  in modern development stacks.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: "#444", lineHeight: 1.8, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                  With a focus on the MERN stack (MongoDB, Express, React, Node.js), I've developed a
                  variety of applications ranging from e-commerce platforms to real-time communication systems.
                  I believe in writing clean, maintainable code and designing intuitive user experiences.
                </Typography>
                <Typography variant="body1" sx={{ color: "#444", lineHeight: 1.8, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                  My goal is to continuously learn and grow as a developer while contributing to meaningful
                  projects that make a positive impact on users' lives. I'm particularly interested in web technologies,
                  distributed systems, and the intersection of design and functionality.
                </Typography>
              </Paper>
            </motion.div>

            {/* Technical Skills Card */}
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.3 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2, sm: 4 }, 
                  background: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                  mb: 4,
                  border: `1px solid #ececec`
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CodeIcon sx={{ color: "#0071e3", mr: 1, fontSize: { xs: "1.2rem", md: "1.5rem" } }} />
                  <Typography variant="h5" fontWeight="600" color="#222" sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
                    Technical Skills
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2, borderColor: `#ececec` }} />
                <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 1, sm: 1.5 } }}> 
                    {skills.map((skill, index) => (
                      <motion.div key={index} variants={fadeInUp}>
                        <Chip
                          label={skill.name}
                          sx={{
                            py: { xs: 1.5, sm: 2 }, 
                            px: { xs: 1, sm: 1.5 }, 
                            borderRadius: "8px",
                            backgroundColor: "#f5f5f7",
                            color: "#222",
                            fontSize: { xs: "0.85rem", sm: "1rem" }, 
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