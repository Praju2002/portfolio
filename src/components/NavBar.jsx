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
          background: "#fff",
          color: "#111",
          boxShadow: "0 2px 16px 0 rgba(0,0,0,0.04)",
          borderBottom: "1px solid #ececec",
          zIndex: 1201,
        }}
      >
        <Toolbar sx={{ 
          maxWidth: 1200, 
          mx: "auto", 
          width: "100%", 
          minHeight: 64, 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          px: { xs: 2, sm: 3, md: 4 }
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
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {navItems.map((item) => (
                <Button
                  key={item.to}
                  onClick={() => handleNavClick(item.to)}
                  sx={{
                    color: "#222",
                    fontWeight: 600,
                    fontSize: "1.08rem",
                    textTransform: "none",
                    borderRadius: 2,
                    px: 2.5,
                    py: 1.2,
                    transition: "all 0.2s cubic-bezier(.4,0,.2,1)",
                    '&:hover': {
                      background: "#f5f5f7",
                      color: "#0071e3",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                onClick={() => window.open('/Praju_cv.pdf', '_blank')}
                sx={{
                  ml: 2,
                  background: "#0071e3",
                  color: "#fff",
                  fontWeight: 600,
                  borderRadius: 2,
                  px: 2.5,
                  py: 1.2,
                  textTransform: "none",
                  boxShadow: "0 2px 8px #e5e5ea",
                  transition: "all 0.2s cubic-bezier(.4,0,.2,1)",
                  '&:hover': {
                    background: "#005bb5",
                  },
                }}
              >
                Download Resume
              </Button>
            </Box>
          )}

          {/* Hamburger for Mobile */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ ml: "auto" }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
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
          <Typography variant="h6" sx={{ fontWeight: 800, color: "#0071e3" }}>
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
          <ListItem disablePadding>
            <ListItemButton onClick={() => window.open('/Praju_cv.pdf', '_blank')}>
              <ListItemText
                primary="Download Resume"
                primaryTypographyProps={{
                  fontWeight: 600,
                  fontSize: "1.08rem",
                  color: "#0071e3",
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
     
      <Box sx={{ height: 64 }} />
    </>
  );
};

export default Navbar;