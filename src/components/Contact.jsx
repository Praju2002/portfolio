import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  InputAdornment,
  Snackbar,
  Alert,
  Paper,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [formStatus, setFormStatus] = useState({ open: false, message: "", severity: "success" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        open: true,
        message: "Message sent successfully! I'll get back to you soon.",
        severity: "success"
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const handleCloseSnackbar = () => {
    setFormStatus({ ...formStatus, open: false });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.645, 0.045, 0.355, 1.000] // Cubic bezier for smoother animation
      }
    }
  };

  const socialLinks = [
    { name: "LinkedIn", icon: <LinkedInIcon fontSize="small" />, url: "https://www.linkedin.com/in/praju-khanal/" },
    { name: "GitHub", icon: <GitHubIcon fontSize="small" />, url: "https://github.com/Praju2002" },
    // { name: "Twitter", icon: <TwitterIcon fontSize="small" />, url: "https://twitter.com/your-profile" }
  ];

  return (
    <Box sx={{
      backgroundColor: "#f8f0f8", // Using the theme's background.default
      py: { xs: 6, md: 12 },
      overflow: "hidden"
    }}>
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              color="#ba55d3" // Using primary.main for the heading
              sx={{
                textAlign: "center",
                mb: 1,
                fontWeight: 700,
              }}
            >
              Get in Touch
            </Typography>



            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                textAlign: "center",
                mb: 6,
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.8,
                px: 2
              }}
            >
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
              Fill out the form below and I'll get back to you as soon as possible.
            </Typography>
          </motion.div>

          <Grid container spacing={4} alignItems="stretch">
            <Grid item xs={12} md={5}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={6}
                  sx={{
                    height: "100%",
                    p: 4,
                    borderRadius: 4,
                    background: `linear-gradient(135deg, #d8bfd8 0%, #ba55d3 100%)`, // Using primary.light to primary.main
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: "-50px",
                      right: "-50px",
                      width: "150px",
                      height: "150px",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "50%"
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "-80px",
                      left: "-80px",
                      width: "200px",
                      height: "200px",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "50%"
                    }
                  }}
                >
                  <Box>
                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 4, position: "relative", zIndex: 2 }}>
                      Contact Information
                    </Typography>

                    <Box sx={{ mb: 4, display: "flex", alignItems: "center", position: "relative", zIndex: 2 }}>
                      <Box
                        sx={{
                          mr: 2,
                          p: 1.5,
                          borderRadius: "50%",
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                          display: "flex"
                        }}
                      >
                        <EmailIcon fontSize="small" />
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>Email</Typography>
                        <Typography variant="body1" fontWeight="medium">prajukhanal21@gmail.com</Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={{ position: "relative", zIndex: 2 }}>
                    <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>Connect with me</Typography>
                    <Box sx={{ display: "flex", gap: 2, mt: 0.5 }}>
                      {socialLinks.map((platform) => (
                        <Box
                          key={platform.name}
                          component="a"
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            p: 1.5,
                            borderRadius: "50%",
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            color: "white",
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              backgroundColor: "rgba(255, 255, 255, 0.3)",
                              transform: "translateY(-3px)"
                            }
                          }}
                        >
                          {platform.icon}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={7}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={6}
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    p: { xs: 3, md: 5 },
                    borderRadius: 4,
                    backgroundColor: "#fcf7fc", // Using theme.background.paper
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h5"
                    color="#ba55d3" // Using primary.main
                    fontWeight="bold"
                    sx={{ mb: 4 }}
                  >
                    Send a Message
                  </Typography>

                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    sx={{
                      mb: 3,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "&:hover fieldset": {
                          borderColor: "#ba55d3", // Using primary.main
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#ba55d3", // Using primary.main
                        }
                      }
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon fontSize="small" sx={{ color: "#ba55d3" }} /> {/* Using primary.main */}
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    variant="outlined"
                    required
                    sx={{
                      mb: 3,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "&:hover fieldset": {
                          borderColor: "#ba55d3", // Using primary.main
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#ba55d3", // Using primary.main
                        }
                      }
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon fontSize="small" sx={{ color: "#ba55d3" }} /> {/* Using primary.main */}
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={isMobile ? 3 : 5}
                    variant="outlined"
                    required
                    sx={{
                      mb: 4,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "&:hover fieldset": {
                          borderColor: "#ba55d3", // Using primary.main
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#ba55d3", // Using primary.main
                        }
                      }
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ alignSelf: "flex-start", mt: 1.5 }}>
                          <MessageIcon fontSize="small" sx={{ color: "#ba55d3" }} /> {/* Using primary.main */}
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button
                    variant="contained"
                    type="submit"
                    startIcon={<SendIcon />}
                    disableElevation
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: 2,
                      backgroundColor: "#ba55d3", // Using primary.main
                      color: "white",
                      fontWeight: "medium",
                      alignSelf: "flex-start",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#9932cc", // Using primary.dark
                        transform: "translateY(-2px)",
                        boxShadow: `0 8px 20px rgba(186, 85, 211, 0.3)`, // Using primary.main with opacity
                      }
                    }}
                  >
                    Send Message
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      <Snackbar
        open={formStatus.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={formStatus.severity}
          sx={{ width: '100%', borderRadius: 2 }}
        >
          {formStatus.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;