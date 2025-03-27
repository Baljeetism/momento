import React from "react";
import { Box, Typography, Link, Container, Divider } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bottom: 0,
        left: 0,
        width: "100%",
        py: 4,
        px: 2,
        background: "linear-gradient(135deg, #000814, #192a51)", 
        color: "white",
        textAlign: "center",
        mt: 4,
        boxShadow: "0 -4px 10px rgba(0,0,0,0.2)",
      }}
    >
      <Container maxWidth="md">
        {/* Brand Name */}
        <Typography variant="h5" fontWeight="bold" sx={{ fontFamily: "Outfit, sans-serif" }}>
          Momento
        </Typography>

        {/* Divider */}
        <Divider sx={{ my: 2, backgroundColor: "#fff", opacity: 0.2 }} />

        {/* Navigation Links */}
        <Typography variant="body1" sx={{ mt: 1 }}>
          <Link
            sx={{
              color: "#edf2fb",
              fontFamily: "Poppins",
              fontWeight: "bold",
              mx: 1,
              textDecoration: "none",
              transition: "color 0.3s ease",
              "&:hover": { color: "#00A9FF" },
            }}
            href="/about"
          >
            About
          </Link>
          |
          <Link
            sx={{
              color: "#edf2fb",
              fontFamily: "Poppins",
              fontWeight: "bold",
              mx: 1,
              textDecoration: "none",
              transition: "color 0.3s ease",
              "&:hover": { color: "#00A9FF" },
            }}
            href="/contact"
          >
            Contact
          </Link>
        </Typography>

        {/* Social Icons */}
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2 }}>
          <Link href="https://facebook.com" target="_blank" sx={{ color: "#edf2fb", "&:hover": { color: "#1877F2" } }}>
            <Facebook fontSize="large" />
          </Link>
          <Link href="https://instagram.com" target="_blank" sx={{ color: "#edf2fb", "&:hover": { color: "#E4405F" } }}>
            <Instagram fontSize="large" />
          </Link>
          <Link href="https://twitter.com" target="_blank" sx={{ color: "#edf2fb", "&:hover": { color: "#1DA1F2" } }}>
            <Twitter fontSize="large" />
          </Link>
        </Box>

        {/* Copyright */}
        <Typography variant="body2" sx={{ mt: 2, color: "rgba(255, 255, 255, 0.7)" }}>
          &copy; {new Date().getFullYear()} Momento. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
