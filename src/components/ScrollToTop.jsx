import React, { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  return (
    <Zoom in={showScroll}>
      <Fab
        onClick={scrollTop}
        aria-label="Scroll to top"
        sx={{
          position: "fixed",
          bottom: { xs: 80, md: 20 },
          right: 20,
          background: "#9b87c7",
          color: "white",
          zIndex: 1000,
          borderRadius: 0,
          border: "1px solid #9b87c7",
          boxShadow: "none",
          "&:hover": {
            background: "#d4c5f9",
            color: "#fff",
            border: "1px solid #d4c5f9",
          },
          transition: "all 0.3s ease",
        }}
        size="medium"
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
