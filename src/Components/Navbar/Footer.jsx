import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";

export default function Error() {
  return (
    <Box
      component="footer"
      sx={{
        
        bottom: 0,
        left: 0,
        width: "100%",
        py: 2,
        px: 2,
        backgroundColor: "#000814",  
        color: "white",
        textAlign: "center",
        boxShadow: "0 -2px 5px rgba(0,0,0,0.1)"
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
            Momento 
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          <Link sx={{ color: "#edf2fb", fontFamily: "Poppins", fontWeight: "bold" }} href="/about">
            About
          </Link>{" "}
          |{" "}
          <Link sx={{ color: "#edf2fb", fontFamily: "Poppins", fontWeight: "bold" }} href="/contact">
            Contact
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
