import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        p: 3,
        mt: 10,
        background: "#ba55d3",
        color: "white",
      }}
    >
      <Typography variant="body2">© 2025 Praju Khanal. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
