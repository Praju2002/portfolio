import React from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from "@mui/lab";
import { Typography, Paper, Box, Divider, Chip, Container } from "@mui/material";
import { motion } from "framer-motion";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const Achievements = () => {
  const accentColor = "#0071e3";
  const softGray = "#f5f5f7";
  const borderGray = "#ececec";

  const achievements = [
    {
      year: "2025",
      event: "Best Project Award – Minor Project.",
      description: "Awarded for building a Maze Generator & Solver using the MERN stack and D3.js, featuring interactive step-by-step animations, HDFS-based solving, and performance analytics like number of intersections, dead ends, and steps taken.",
      icon: <EmojiEventsIcon />,
      category: "Academic"
    },
    {
      year: "2024",
      event: "1st Place – Intra-College Coding Competition",
      description: "Developed a real-time collaborative code editor with integrated compiler and version control system.",
      icon: <CodeIcon />,
      category: "Competition"
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
      event: "Participant – KU Hackathon",
      description: "Developed an interactive travel app utilizing OpenStreetMap API with custom route planning features.",
      icon: <GroupsIcon />,
      category: "Hackathon"
    },
    {
      year: "2024",
      event: "Contributor to GirlScript Summer of Code (GSSoC)",
      description: "Contributed to open source projects focusing on educational technology tools for underserved communities.",
      icon: <VolunteerActivismIcon />,
      category: "Open Source"
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  const staggerItems = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
 
  const getCategoryColor = () => accentColor;

  return (
    <Box
      component="section"
      id="achievements"
      sx={{
        py: { xs: 6, md: 10 },
        background: softGray,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        px: { xs: 1, md: 2 },
      }}
    >
      <Container maxWidth="lg" sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2, justifyContent: "center", width: "100%" }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "2.7rem" },
                color: "#111",
                textAlign: "center",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
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
            background: "#fff",
            borderRadius: "20px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
            border: `1px solid ${borderGray}`,
            overflow: "hidden"
          }}
        >
          <motion.div initial="hidden" animate="visible" variants={staggerItems}>
            <Timeline position="alternate">
              {achievements.map((achievement, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0',display: { xs: 'none', sm: 'block' } }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <Chip
                          label={achievement.year}
                          sx={{
                            fontWeight: 600,
                            backgroundColor: softGray,
                            color: accentColor,
                            mb: 1,
                            fontSize: "1rem",
                          }}
                        />
                        <Chip
                          label={achievement.category}
                          size="small"
                          sx={{
                            fontWeight: 500,
                            backgroundColor: "#f0f4f8",
                            color: "#222",
                            border: `1px solid ${borderGray}`,
                            fontSize: "0.95rem",
                          }}
                        />
                      </Box>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector sx={{ backgroundColor: borderGray, opacity: 0.5 }} />
                      <TimelineDot
                        sx={{
                          backgroundColor: accentColor,
                          boxShadow: `0 0 12px ${accentColor}22`,
                          p: 1
                        }}
                      >
                        {achievement.icon}
                      </TimelineDot>
                      <TimelineConnector sx={{ backgroundColor: borderGray, opacity: 0.5 }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                      <Paper
                        elevation={0}
                        component={motion.div}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                        sx={{
                          p: { xs: 2, sm: 3 },
                          backgroundColor: softGray,
                          borderRadius: '14px',
                          border: `1px solid ${borderGray}`,
                          transition: 'all 0.3s',
                          '&:hover': {
                            boxShadow: `0 8px 24px #e5e5ea`,
                          }
                        }}
                      >
                        <Typography
                          variant="h6"
                          component="h3"
                          fontWeight="700"
                          sx={{
                            color: accentColor,
                            mb: 1,
                            fontSize: "1.1rem",
                          }}
                        >
                          {achievement.event}
                        </Typography>
                        <Divider sx={{ mb: 2, borderColor: borderGray }} />
                        <Typography
                          variant="body2"
                          sx={{
                            lineHeight: 1.7,
                            fontSize: "1.05rem",
                            color: "#555"
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