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
        ease: [0.645, 0.045, 0.355, 1.000]
      }
    }
  };

  const socialLinks = [
    { name: "LinkedIn", icon: <LinkedInIcon fontSize="small" />, url: "https://www.linkedin.com/in/praju-khanal/" },
    { name: "GitHub", icon: <GitHubIcon fontSize="small" />, url: "https://github.com/Praju2002" },
  ];

  const accentColor = "#0071e3";
  const softGray = "#f5f5f7";
  const borderGray = "#ececec";

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        backgroundColor: softGray,
        py: { xs: 8, md: 12 },
        overflow: "hidden",
        minHeight: "100vh",

        width: "100%",

      }}
    >
      <Container maxWidth="lg" sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                mb: 1,
                fontWeight: 800,
                color: "#111",
                fontSize: { xs: "2rem", md: "2.7rem" },
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
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
          <Grid container spacing={4} sx={{ alignItems: "stretch", justifyContent: "center", width: "100%" }}>
            <Grid item xs={12} md={5}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: { xs: 3, md: 4 },
                    borderRadius: "20px",
                    background: "#fff",
                    color: "#222",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                    border: `1px solid ${borderGray}`,
                  }}
                >
                  <Box>
                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 4, position: "relative", zIndex: 2, color: accentColor }}>
                      Contact Information
                    </Typography>
                    <Box sx={{ mb: 4, display: "flex", alignItems: "center", position: "relative", zIndex: 2 }}>
                      <Box
                        sx={{
                          mr: 2,
                          p: 1.5,
                          borderRadius: "50%",
                          backgroundColor: softGray,
                          display: "flex"
                        }}
                      >
                        <EmailIcon fontSize="small" sx={{ color: accentColor }} />
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
                            backgroundColor: softGray,
                            color: accentColor,
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.2s cubic-bezier(.4,0,.2,1)",
                            "&:hover": {
                              backgroundColor: "#e5e5ea",
                              color: "#111",
                              transform: "translateY(-2px)"
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
                  elevation={0}
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    p: { xs: 3, md: 5 },
                    borderRadius: "20px",
                    backgroundColor: "#fff",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                    border: `1px solid ${borderGray}`,
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ mb: 4, color: accentColor }}
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
                      background: softGray,
                      borderRadius: 2,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        background: softGray,
                        "& fieldset": { borderColor: borderGray },
                        "&:hover fieldset": { borderColor: accentColor },
                        "&.Mui-focused fieldset": { borderColor: accentColor },
                      }
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon fontSize="small" sx={{ color: accentColor }} />
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
                      background: softGray,
                      borderRadius: 2,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        background: softGray,
                        "& fieldset": { borderColor: borderGray },
                        "&:hover fieldset": { borderColor: accentColor },
                        "&.Mui-focused fieldset": { borderColor: accentColor },
                      }
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon fontSize="small" sx={{ color: accentColor }} />
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
                      background: softGray,
                      borderRadius: 2,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        background: softGray,
                        "& fieldset": { borderColor: borderGray },
                        "&:hover fieldset": { borderColor: accentColor },
                        "&.Mui-focused fieldset": { borderColor: accentColor },
                      }
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ alignSelf: "flex-start", mt: 1.5 }}>
                          <MessageIcon fontSize="small" sx={{ color: accentColor }} />
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
                      backgroundColor: accentColor,
                      color: "white",
                      fontWeight: 500,
                      alignSelf: "flex-start",
                      fontSize: "1.08rem",
                      transition: "all 0.2s cubic-bezier(.4,0,.2,1)",
                      boxShadow: "0 2px 8px #e5e5ea",
                      "&:hover": {
                        backgroundColor: "#005bb5",
                        color: "#fff",
                        transform: "translateY(-2px)",
                        boxShadow: `0 8px 20px #e5e5ea`,
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