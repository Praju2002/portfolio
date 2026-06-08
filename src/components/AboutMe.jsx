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
    { name: "TypeScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Express", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "TanStack Router", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "Material-UI", level: "Intermediate" },
    { name: "Shadcn/ui", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "C/C++", level: "Intermediate" },
    { name: "Playwright", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
    { name: "PostgreSQL", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "D3.js", level: "Intermediate" },
    { name: "OpenCV", level: "Basic" },
    { name: "Streamlit", level: "Basic" },
    { name: "JIRA/Jam", level: "Intermediate" },
    { name: "Postman", level: "Intermediate" }
  ];

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 12, md: 16 }, 
        background: '#ffffff',
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center", 
        position: 'relative',
        overflow: 'hidden',
      }}
    >
     
      <Container maxWidth="lg" sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", maxWidth: 1400, px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography
            variant="h1"
            component="h1"
            align="center"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: "3.5rem", sm: "4.5rem", md: "5.5rem" }, 
              color: "#7e5fa6",
              letterSpacing: { xs: "0.02em", md: "0.02em" }, 
              lineHeight: 1,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Praju Khanal
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            align="center"
            sx={{
              mb: 6,
              maxWidth: "700px",
              mx: "auto",
              color: "#000000",
              fontWeight: 400,
              letterSpacing: { xs: "0.18em", md: "0.2em" }, 
              textTransform: "uppercase",
              fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Frontend Developer & QA Engineer
          </Typography>

          
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 2 }} 
            justifyContent="center" 
            sx={{ mb: 6 }}
          >
            <Link href="https://github.com/Praju2002" target="_blank" rel="noopener noreferrer">
              <IconButton size="large" sx={{
               color: "#9b87c7",
                border: "1px solid #d4c5f9",
                borderRadius: 0,
                '&:hover': { 
                  color: "#fff", 
                  background: "#9b87c7",
                  border: "1px solid #9b87c7",
                },
                transition: 'all 0.3s ease',
                fontSize: { xs: '1.8rem', sm: '2rem' }
              }}>
                <GitHubIcon sx={{ fontSize: 'inherit' }} /> 
              </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/in/praju-khanal/" target="_blank" rel="noopener noreferrer">
              <IconButton size="large" sx={{
                color: "#9b87c7",
                border: "1px solid #d4c5f9",
                borderRadius: 0,
                '&:hover': { 
                  color: "#fff", 
                  background: "#9b87c7",
                  border: "1px solid #9b87c7",
                },
                transition: 'all 0.3s ease',
                fontSize: { xs: '1.8rem', sm: '2rem' }
              }}>
                <LinkedInIcon sx={{ fontSize: 'inherit' }} />
              </IconButton>
            </Link>
            <Link href="mailto:prajukhanal21@gmail.com" target="_blank" rel="noopener noreferrer">
              <IconButton size="large" sx={{
                color: "#9b87c7",
                border: "1px solid #d4c5f9",
                borderRadius: 0,
                '&:hover': { 
                  color: "#fff", 
                  background: "#9b87c7",
                  border: "1px solid #9b87c7",
                },
                transition: 'all 0.3s ease',
                fontSize: { xs: '1.8rem', sm: '2rem' }
              }}>
                <EmailIcon sx={{ fontSize: 'inherit' }} />
              </IconButton>
            </Link>
          </Stack>
        </motion.div>

   
        <Grid container spacing={4} sx={{ justifyContent: "center", width: "100%" }}> 
        
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
                  background: "#f9f7ff",
                  border: `1px solid #e8e0f8`,
                }}
              >
              
                <Box sx={{ p: { xs: 2, sm: 3 }, display: "flex", flexDirection: "column", alignItems: "center", background: "#fff" }}>
                  <Avatar
                    src="/praju.jpg" 
                    alt="Praju Khanal"
                    sx={{
                      width: { xs: 120, sm: 160, md: 160 }, 
                      height: { xs: 120, sm: 160, md: 160 },
                      border: `3px solid #d4c5f9`,
                      boxShadow: `0 2px 12px rgba(212, 197, 249, 0.3)`,
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
                    <PersonIcon sx={{ color: "#9b87c7", mr: 1, fontSize: { xs: "1.2rem", md: "1.5rem" } }} />
                    <Typography variant="h6" fontWeight="600" sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" }, fontFamily: "'Playfair Display', serif", letterSpacing: '-0.01em' }}>
                      Personal Info
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 2, borderColor: `#e8e0f8` }} />
                  {/* Each info block */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight="600" color="#7e5fa6" sx={{ fontSize: { xs: "0.9rem", md: "1rem" }, fontFamily: "'Inter', sans-serif", letterSpacing: '0.02em' }}>
                      Email
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: { xs: "0.85rem", md: "0.9rem" }, color: "#666", letterSpacing: '0.01em' }}>prajukhanal21@gmail.com</Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight="600" color="#7e5fa6" sx={{ fontSize: { xs: "0.9rem", md: "1rem" }, fontFamily: "'Inter', sans-serif", letterSpacing: '0.02em' }}>
                      Phone
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: { xs: "0.85rem", md: "0.9rem" }, color: "#666", letterSpacing: '0.01em' }}>+977 984 038 4530</Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight="600" color="#7e5fa6" sx={{ fontSize: { xs: "0.9rem", md: "1rem" }, fontFamily: "'Inter', sans-serif", letterSpacing: '0.02em' }}>
                      Location
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: { xs: "0.85rem", md: "0.9rem" }, color: "#666", letterSpacing: '0.02em' }}>Kusunti-13, Lalitpur, Nepal</Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight="600" color="#7e5fa6" sx={{ fontSize: { xs: "0.9rem", md: "1rem" }, fontFamily: "'Inter', sans-serif", letterSpacing: '0.02em' }}>
                      Languages
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: { xs: "0.85rem", md: "0.9rem" } }}>English (Fluent), Nepali (Native)</Typography>
                  </Box>
                </Box>

                {/* Education */}
                <Box sx={{ p: { xs: 2, sm: 3 }, mt: "auto" }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <SchoolIcon sx={{ color: "#9b87c7", mr: 1, fontSize: { xs: "1.2rem", md: "1.5rem" } }} />
                    <Typography variant="h6" fontWeight="600" sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" }, fontFamily: "'Playfair Display', serif", letterSpacing: '-0.01em' }}>
                      Education
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 2, borderColor: `#e8e0f8` }} />
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight="600" color="#7e5fa6" sx={{ fontSize: { xs: "0.9rem", md: "1rem" }, fontFamily: "'Inter', sans-serif", letterSpacing: '0.02em' }}>
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
                  <PersonIcon sx={{ color: "#9b87c7", mr: 1, fontSize: { xs: "1.2rem", md: "1.5rem" } }} />
                  <Typography variant="h5" fontWeight="600" color="#7e5fa6" sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" }, fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}>
                    About Me
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2, borderColor: `#e8e0f8` }} />
                <Typography variant="body1" sx={{ mb: 2, color: "#444", lineHeight: 1.8, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                  I graduated in Computer Engineering and enjoy building clear, responsive frontends and reliable test suites. My day-to-day work blends React, TypeScript, and modern CSS with hands-on QA using Playwright and manual testing.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: "#444", lineHeight: 1.8, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                  Right now I'm a QA Trainee at Asteroid Studio, where I write test plans, track down tricky bugs, and help keep staging and production stable. I also have experience interning as a frontend developer, shipping responsive UI features using React and TypeScript.
                </Typography>
                <Typography variant="body1" sx={{ color: "#444", lineHeight: 1.8, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                  I care about readable, maintainable code and user experiences that feel effortless. Combining development, QA, and data-focused work helps me solve problems from different angles and collaborate well with teammates.
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
                  <CodeIcon sx={{ color: "#9b87c7", mr: 1, fontSize: { xs: "1.2rem", md: "1.5rem" } }} />
                  <Typography variant="h5" fontWeight="600" color="#7e5fa6" sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" }, fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}>
                    Technical Skills
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2, borderColor: `#e8e0f8` }} />
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
                            backgroundColor: "#f9f7ff",
                            color: "#7e5fa6",
                            fontSize: { xs: "0.85rem", sm: "1rem" }, 
                            fontWeight: 600,
                            border: `1px solid #d4c5f9`,
                            boxShadow: "none",
                            '&:hover': {
                              backgroundColor: "#d4c5f9",
                              color: "#fff",
                              transform: "translateY(-2px)",
                              boxShadow: `0 2px 8px rgba(212, 197, 249, 0.3)`,
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