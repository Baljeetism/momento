import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Slider from "react-slick";
import { Box, Typography, Grid, Button, useMediaQuery, useTheme } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewsPage from '../Review/ReviewsPage';
import { eventImages, featuredImages } from '../../Utils/ImageData';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false,
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Box sx={{ flexGrow: 1, px: { xs: 2, md: 4 }, py: { xs: 4, md: 10 } ,mt:5}}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Outfit, sans-serif",
                fontSize: { xs: "2rem", sm: "3rem", md: "4.5rem" },
                color: "#3A0CA3",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Turning Moments Into Milestones!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#4A4E69",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Discover unforgettable moments with top artists, immersive venues, and the best crowd. Join us and be part of the experience!
            </Typography>
            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "start" } }}>
              <Button
                component={Link}
                to="/login"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  px: 3, py: 2, mt: 3,
                  borderRadius: 4,
                  "&:hover": { backgroundColor: "#333" },
                }}
              >
                Get Started for Free
              </Button>
            </Box>
          </Grid>

          {/* Right Side - Image Display */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", // Show 1 image in mobile, 3 in desktop
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              {/* Show Only Bottom Image on Mobile */}
              {isMobile ? (
                <Box
                  component="img"
                  src={featuredImages.bottom}
                  alt="DJ Party"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "16px",
                    boxShadow: 5,
                    objectFit: "cover",
                  }}
                />
              ) : (
                // Show All Three Images on Larger Screens
                <>
                  <Box
                    component="img"
                    src={featuredImages.topLeft}
                    alt="Concert"
                    sx={{
                      width: "100%",
                      maxWidth: { sm: 180, md: 380 },
                      height: "auto",
                      borderRadius: "16px",
                      boxShadow: 3,
                      transform: "rotate(-10deg)",
                      mx: "auto",
                    }}
                  />
                  <Box
                    component="img"
                    src={featuredImages.topRight}
                    alt="Festival"
                    sx={{
                      width: "100%",
                      maxWidth: { sm: 250, md: 500 },
                      height: "auto",
                      borderRadius: "16px",
                      boxShadow: 4,
                      transform: "rotate(10deg)",
                      ml: { md: -4 },
                    }}
                  />
                  <Box
                    component="img"
                    src={featuredImages.bottom}
                    alt="DJ Party"
                    sx={{
                      width: "100%",
                      maxWidth: { sm: 280, md: 520 },
                      height: "auto",
                      borderRadius: "16px",
                      boxShadow: 5,
                      position: { md: "absolute" },
                      bottom: { md: "-20px" },
                      left: { md: "50%" },
                      transform: { md: "translateX(-50%) rotate(5deg)" },
                    }}
                  />
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Slider Section */}
      <Box sx={{ width: "100%", overflow: "hidden", mt: { xs: 8, md: 15 } }}>
        <Slider {...sliderSettings}>
          {eventImages.map((item, index) => (
            <Box key={index} sx={{ position: "relative", height: { xs: "250px", sm: "350px", md: "500px" } }}>
              <img
                src={item.url}
                alt={item.caption}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  position: "absolute",
                  bottom: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "#fff",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  padding: "8px 16px",
                  borderRadius: "5px",
                  fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" },
                  textAlign: "center",
                  width: "90%",
                  maxWidth: "800px",
                }}
              >
                {item.caption}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>

      <ReviewsPage />
      <Footer />
    </>
  );
}
