import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Divider
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
  { label: "Achievements", to: "achievements" },
  { label: "Contact", to: "contact" },
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "#ffffff",
          backdropFilter: "none",
          color: "#9b87c7",
          boxShadow: "none",
          borderBottom: "1px solid #e8e0f8",
          borderRadius: 0,
          zIndex: 1201,
        }}
      >
        <Toolbar sx={{
          maxWidth: 1400,
          mx: "auto",
          width: "100%",
          minHeight: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 3, sm: 4, md: 6, lg: 8 }
        }}>
          {/* Logo/Name */}
          {/* <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              letterSpacing: "-0.02em",
              color: "#0071e3",
              flexGrow: 1,
              cursor: "pointer",
              userSelect: "none",
            }}
            onClick={() => handleNavClick("about")}
          >
            Praju Khanal
          </Typography> */}

          {/* Desktop Nav */}
          {!isMobile && (
            <>
              <Box sx={{ flex: 1 }} /> {/* Spacer for left side */}
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                {navItems.map((item) => (
                  <Button
                    key={item.to}
                    onClick={() => handleNavClick(item.to)}
                    sx={{
                      color: "#9b87c7",
                      fontWeight: 500,
                      background: "transparent",
                      // fontSize: "0.813rem",
                      textTransform: "uppercase",
                      letterSpacing: '0.15em',
                      fontFamily: "'Inter', sans-serif",
                      px: 2,
                      py: 1.5,
                      // borderRadius: 2,
                      border: "none",
                      position: "relative",
                      transition: "all 0.3s ease",
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: '2px',
                        background: '#9b87c7',

                        transition: 'width 0.3s ease',
                      },
                      '&:hover': {
                        background: "transparent",
                        border: "none",
                        color: "#7e5fa6",
                        '&:after': {
                          width: '80%',
                        },
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  onClick={() => window.open('/Praju_cv.pdf', '_blank')}
                  sx={{
                    color: "#ffffff",
                    fontWeight: 500,
                    // background: "transparent",
                    // fontSize: "0.813rem",
                    textTransform: "uppercase",
                    letterSpacing: '0.15em',
                    fontFamily: "'Inter', sans-serif",
                    px: 2,
                    py: 1.5,
                    
                    // borderRadius: 2,
                    position: "relative",
                    transition: "all 0.3s ease",
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: '2px',
                      background: '#9b87c7',

                      transition: 'width 0.3s ease',
                    },
                    '&:hover': {
                      background: "transparent",
                      color: "#7e5fa6",
                      '&:after': {
                        width: '80%',
                      },

                    },
                  }}
                >
                  Resume
                </Button>
              </Box>
            </>
          )}

          {/* Mobile Nav */}
          {isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: "auto", pr: 1 }}>
              <Button
                onClick={() => window.open('/Praju_cv.pdf', '_blank')}
                sx={{
                  background: "#9b87c7",
                  color: "#fff",
                  fontWeight: 600,
                  px: 2,
                  py: 0.8,
                  textTransform: "uppercase",
                  letterSpacing: '0.12em',
                  fontSize: "0.7rem",
                  fontFamily: "'Inter', sans-serif",
                  borderRadius: 0,
                  border: "2px solid #9b87c7",
                  transition: "all 0.3s ease",
                  '&:hover': {
                    background: "#d4c5f9",
                    color: "#fff",
                  },
                }}
              >
                Resume
              </Button>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
                sx={{ ml: 1, borderRadius: 2, mr: 1 }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            background: "#fff",
            borderLeft: "1px solid #ececec",
            boxShadow: "0 2px 16px 0 rgba(0,0,0,0.08)",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: "#7e5fa6", fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}>
            Menu
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.to} disablePadding>
              <ListItemButton onClick={() => handleNavClick(item.to)}>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: "1.08rem",
                    color: "#222",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box sx={{ height: 64 }} />
    </>
  );
};

export default Navbar;