import React from "react";
import { Typography, Box } from "@mui/material";

const WhyAttendSection = ({ content }) => {
  return (
    <Box sx={{ p: 3, boxShadow: 4, borderRadius: 3, background: "linear-gradient(135deg, #ffd6ff, #bbd0ff)" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1, fontFamily: "Outfit, sans-serif" }}>
        Why Should You Attend?
      </Typography>
      <Typography variant="body1" sx={{ color: "gray", lineHeight: 1.6 }}>
        {content}
      </Typography>
    </Box>
  );
};

export default WhyAttendSection;