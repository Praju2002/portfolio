import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        p: 2,
        width: "100%",
        background: "#f5f5f7",
        color: "#222",
        borderTop: "1px solid #ececec",
        fontSize: "1.05rem",
        letterSpacing: 0.1,
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 500, fontSize: "1.05rem" }}>
        © 2025 Praju Khanal. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
