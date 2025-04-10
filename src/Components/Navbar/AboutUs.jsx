import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import PostReview from '../Review/PostReview';
import { aboutUs } from '../../Utils/ImageData';

export default function AboutUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const image = aboutUs[0].url;

  return (
    <>
      <Navbar />

      {/* Hero Title */}
      <Typography sx={{
        margin: "0 auto",
        color: "black",
        mt: { xs: 10, sm: 12, md: 15 },
        textAlign: "center",
        fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
        fontWeight: "600",
        fontFamily: "Outfit, sans-serif",
        px: 2 // Add padding on mobile
      }}>
        About MOMENTO
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
            alt="About Momento"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </Box>
      </Box>

      {/* Content Section */}
      <Box sx={{
        textAlign: "center",
        fontFamily: "Roboto",
        color: "#333",
        width: { xs: "90%", sm: "85%", md: "80%" },
        margin: "0 auto",
        mb: { xs: 6, md: 10 },
        mt: { xs: 6, md: 10 },
        px: { xs: 1, sm: 0 } // Extra padding on mobile
      }}>
        <Typography variant="h4" fontWeight="600" gutterBottom sx={{
          fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" }
        }}>
          Welcome to <strong>Momento</strong>, your ultimate event management platform!
        </Typography>

        <Typography variant="body1" sx={{ 
          lineHeight: "1.6", 
          fontWeight: "300", 
          mb: 3,
          fontSize: { xs: "1rem", md: "1.1rem" }
        }}>
          Our mission is to simplify the way you plan, organize, and enjoy events — whether
          it's a small gathering, a corporate conference, or a large festival.
        </Typography>

        <Typography variant="h5" fontWeight="600" gutterBottom sx={{
          fontSize: { xs: "1.5rem", md: "1.75rem" },
          mt: { xs: 4, md: 5 }
        }}>
          Who We Are?
        </Typography>
        
        <Typography variant="body1" sx={{ 
          lineHeight: "1.6", 
          fontWeight: "300", 
          mb: 3,
          fontSize: { xs: "1rem", md: "1.1rem" }
        }}>
          We are a passionate team of event enthusiasts, tech innovators, and design thinkers dedicated to creating seamless experiences. We understand that planning events can be overwhelming, so we built a platform that handles the heavy lifting, leaving you more time to focus on what truly matters — making memories.
        </Typography>

        <Typography variant="h6" fontStyle="italic" sx={{ 
          mt: 3,
          fontSize: { xs: "1rem", sm: "1.1rem" }
        }}>
          Ready to make your next event a hit? Get started with <strong>Momento</strong> today!
        </Typography>
        
        <Typography variant="h4" fontWeight="600" gutterBottom sx={{
          mt: { xs: 4, md: 5 },
          fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" }
        }}>
          Share Your Feedback With Us
        </Typography>
        
        <PostReview />
      </Box>

      <Footer />
    </>
  );
}