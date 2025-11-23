import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        p: 4,
        width: "100%",
        background: "#9b87c7",
        color: "#fff",
        borderTop: "none",
        fontSize: "0.875rem",
        letterSpacing: '0.08em',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 400, fontSize: "0.875rem", fontFamily: "'Inter', sans-serif" }}>
        © 2025 Praju Khanal. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
