import React from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from "@mui/lab";
import { Typography, Paper, Box, Divider, Chip, Container } from "@mui/material";
import { motion } from "framer-motion";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const Achievements = () => {
  // Enhanced lilac pink colors - more vibrant and less light
  const primaryColor = "#ba55d3"; // Medium orchid - stronger lilac pink
  const secondaryColor = "#9932cc"; // Dark orchid - deeper for contrast
  const lightColor = "#d8bfd8"; // Thistle - less light but still provides contrast
  const textOnPrimaryColor = "#ffffff"; // White text on primary color
  const backgroundColor = "#f8f0f8"; // Subtle lilac background
  const paperColor = "#fcf7fc";

  const achievements = [
    { 
      year: "2024", 
      event: "1st Place – Intra-College Coding Competition",
      description: "Developed a real-time collaborative code editor with integrated compiler and version control system.",
      icon: <CodeIcon />,
      category: "Competition"
    },
    { 
      year: "2024", 
      event: "Participant – KU Hackathon",
      description: "Developed an interactive travel app utilizing OpenStreetMap API with custom route planning features.",
      icon: <GroupsIcon />,
      category: "Hackathon"
    },
    { 
      year: "2024", 
      event: "Selected as a Fellow for Women Leaders in Technology (WLiT)",
      description: "One of 15 selected from over 150+ applicants for this prestigious technology leadership program.",
      icon: <EmojiEventsIcon />,
      category: "Fellowship"
    },
    { 
      year: "2024", 
      event: "Contributor to GirlScript Summer of Code (GSSoC)",
      description: "Contributed to open source projects focusing on educational technology tools for underserved communities.",
      icon: <VolunteerActivismIcon />,
      category: "Open Source"
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const staggerItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case "Competition":
        return primaryColor;
      case "Hackathon":
        return "#c71585"; // Medium violet red
      case "Fellowship":
        return secondaryColor;
      case "Open Source":
        return "#c71585";
      default:
        return primaryColor;
    }
  };

  return (
    <Box
      component="section"
      id="achievements"
      sx={{ 
        py: 6, 
        position: "relative",
        background: `linear-gradient(135deg, ${backgroundColor} 0%, #ffeef5 100%)`,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingLeft: { xs: 2, md: 2 }, // Account for sidebar on desktop
        paddingRight: { xs: 2, md: 2 },
        paddingBottom: { xs: "80px", md: 6 }, // Extra padding on mobile for bottom nav
      }}
    >
      <Container maxWidth="lg" sx={{ width: "100%" ,display: "flex", 
      flexDirection: "column", 
      alignItems: "center", }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 ,justifyContent: "center",width: "100%"}}>
            <Typography 
              variant="h3" 
              component="h2"
              sx={{ 
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontFamily: "'Poppins', sans-serif",
                background: `linear-gradient(90deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                backgroundClip: "text",
                textFillColor: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0px 2px 4px rgba(0,0,0,0.05)",
                
              }}
            >
              Achievements & Recognitions
            </Typography>
          </Box>
          
          <Typography 
            variant="h6" 
            component="p"
            sx={{ 
              mb: 6, 
              maxWidth: "700px",
              color: "#555",
              fontWeight: 400,
              fontFamily: "'Poppins', sans-serif",
              fontSize: "1.1rem",
              textAlign: "center"
            }}
          >
            A timeline of my professional journey and key milestones that have shaped my development career
          </Typography>
        </motion.div>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 5 },
            background: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(10px)",
            borderRadius: "16px",
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
            border: `1px solid ${primaryColor}22`,
            overflow: "hidden"
          }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerItems}
          >
            <Timeline position="alternate">
              {achievements.map((achievement, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                        <Chip 
                          label={achievement.year} 
                          sx={{ 
                            fontWeight: 600, 
                            backgroundColor: `${getCategoryColor(achievement.category)}15`,
                            color: getCategoryColor(achievement.category),
                            mb: 1,
                            fontFamily: "'Poppins', sans-serif",
                          }} 
                        />
                        <Chip 
                          label={achievement.category} 
                          size="small"
                          sx={{ 
                            fontWeight: 500, 
                            backgroundColor: `${getCategoryColor(achievement.category)}10`,
                            color: getCategoryColor(achievement.category),
                            border: `1px solid ${getCategoryColor(achievement.category)}30`,
                            fontFamily: "'Poppins', sans-serif",
                          }} 
                        />
                      </Box>
                    </TimelineOppositeContent>
                    
                    <TimelineSeparator>
                      <TimelineConnector sx={{ 
                        backgroundColor: index === 0 ? 'transparent' : getCategoryColor(achievement.category),
                        opacity: 0.3
                      }} />
                      <TimelineDot 
                        sx={{ 
                          backgroundColor: getCategoryColor(achievement.category),
                          boxShadow: `0 0 15px ${getCategoryColor(achievement.category)}80`,
                          p: 1
                        }}
                      >
                        {achievement.icon}
                      </TimelineDot>
                      <TimelineConnector sx={{ 
                        backgroundColor: index === achievements.length - 1 ? 'transparent' : getCategoryColor(achievement.category),
                        opacity: 0.3
                      }} />
                    </TimelineSeparator>
                    
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                      <Paper
                        elevation={0}
                        component={motion.div}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                        sx={{
                          p: 3,
                          backgroundColor: 'rgba(255, 255, 255, 0.85)',
                          borderRadius: '12px',
                          border: `1px solid ${getCategoryColor(achievement.category)}20`,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            boxShadow: `0 10px 20px ${getCategoryColor(achievement.category)}20`,
                          }
                        }}
                      >
                        <Typography 
                          variant="h6" 
                          component="h3" 
                          fontWeight="700"
                          sx={{ 
                            color: getCategoryColor(achievement.category),
                            mb: 1,
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          {achievement.event}
                        </Typography>
                        <Divider sx={{ mb: 2, borderColor: `${getCategoryColor(achievement.category)}30` }} />
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            lineHeight: 1.7,
                            fontSize: "0.95rem",
                            fontFamily: "'Poppins', sans-serif",
                            color: "#7a7a8c"
                          }}
                        >
                          {achievement.description}
                        </Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                </motion.div>
              ))}
            </Timeline>
          </motion.div>
        </Paper>
      </Container>
    </Box>
  );
};

export default Achievements;