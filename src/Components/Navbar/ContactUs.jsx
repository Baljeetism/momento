import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Link, useMediaQuery, useTheme } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import { contactUs } from '../../Utils/ImageData';

export default function ContactUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const image = contactUs[0].url;

  return (
    <>
      <Navbar />
      
      {/* Page Title */}
      <Typography sx={{
        margin: "0 auto",
        color: "black",
        mt: { xs: 12, sm: 14, md: 15 },
        textAlign: "center",
        fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
        fontWeight: "600",
        fontFamily: "Outfit, sans-serif",
        px: { xs: 2, sm: 0 } // Add padding on mobile
      }}>
        Contact Us
      </Typography>

      {/* Hero Image */}
      <Box sx={{
        width: "100%",
        maxWidth: "1500px",
        height: { xs: "250px", sm: "350px", md: "400px" },
        margin: "0 auto",
        mt: 4,
        px: { xs: 2, sm: 3 } // Responsive padding
      }}>
        <Box sx={{
          position: "relative",
          textAlign: "center",
          height: "100%",
          width: "100%"
        }}>
          <img
            src={image}
            alt="Contact Momento"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </Box>
      </Box>

      {/* Contact Content */}
      <Box sx={{
        textAlign: "center",
        fontFamily: "Roboto",
        color: "#333",
        width: { xs: "90%", sm: "85%", md: "80%" },
        margin: "0 auto",
        mb: { xs: 6, md: 10 },
        mt: { xs: 6, md: 10 },
        px: { xs: 1, sm: 0 }
      }}>
        <Typography variant="body1" sx={{ 
          lineHeight: "1.6", 
          fontWeight: "300", 
          mb: 3,
          fontSize: { xs: "1rem", md: "1.1rem" }
        }}>
          We'd love to hear from you! Whether you have questions, feedback, or want to collaborate — we're here to help.
        </Typography>

        {/* Contact Information Section */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          mb: 4
        }}>
          <Typography variant="h5" fontWeight="800" gutterBottom sx={{
            fontSize: { xs: "1.5rem", md: "1.75rem" }
          }}>
            Get in Touch
          </Typography>

          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1.5,
            width: '100%'
          }}>
            <Typography variant="body1" sx={{ 
              lineHeight: "1.6", 
              fontWeight: "300",
              fontSize: { xs: "0.95rem", md: "1rem" }
            }}>
              <Phone sx={{ 
                verticalAlign: "middle", 
                mr: 1,
                fontSize: { xs: "1.2rem", md: "1.5rem" }
              }} />
              +91 9999999999
            </Typography>

            <Typography variant="body1" sx={{ 
              lineHeight: "1.6", 
              fontWeight: "300",
              fontSize: { xs: "0.95rem", md: "1rem" }
            }}>
              <Email sx={{ 
                verticalAlign: "middle", 
                mr: 1,
                fontSize: { xs: "1.2rem", md: "1.5rem" }
              }} />
              <Link 
                href="mailto:support@momento.com" 
                underline="hover" 
                color="inherit"
                sx={{
                  wordBreak: 'break-word' // Prevent email overflow
                }}
              >
                momento7641253@gmail.com
              </Link>
            </Typography>

            <Typography variant="body1" sx={{ 
              lineHeight: "1.6", 
              fontWeight: "300",
              fontSize: { xs: "0.95rem", md: "1rem" },
              textAlign: 'center'
            }}>
              <LocationOn sx={{ 
                verticalAlign: "middle", 
                mr: 1,
                fontSize: { xs: "1.2rem", md: "1.5rem" }
              }} />
              INDIA, BHARAT
            </Typography>
          </Box>
        </Box>

        {/* Support Hours Section */}
        <Box>
          <Typography variant="h5" fontWeight="800" gutterBottom sx={{
            fontSize: { xs: "1.5rem", md: "1.75rem" },
            mt: { xs: 4, md: 5 }
          }}>
            Support Hours
          </Typography>
          <Typography variant="body1" sx={{ 
            lineHeight: "1.6", 
            fontWeight: "300",
            fontSize: { xs: "0.95rem", md: "1rem" }
          }}>
            Monday - Friday: 9:00 AM - 6:00 PM (IST)<br />
            Saturday: 10:00 AM - 4:00 PM (IST)
          </Typography>
        </Box>

        {/* Optional: Add a contact form component here */}
      </Box>
      
      <Footer />
    </>
  );
}