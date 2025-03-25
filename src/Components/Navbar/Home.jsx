import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import Slider from "react-slick";
import { Box, Typography, Button } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const images = [
  { url: "https://plus.unsplash.com/premium_photo-1705590406534-2903783294e7?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Event in the Heart of Delhi" },
  { url: "https://plus.unsplash.com/premium_photo-1700165319881-be0c22f14c77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Live from Delhi: Unmissable Event" },
  { url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Join the Excitement in Delhi" },
];

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          maxWidth: "1400px", // Increased width
          height: "500px", // Slightly taller for better visuals
          margin: "0 auto",
          mt: 4,
          mb: 50
        }}
      >
        <Slider {...settings}>
          {images.map((item, index) => (
            <Box
              key={index}
              component="div"
              sx={{
                position: "relative",
                textAlign: "center",
                
              }}
            >
              <img
                src={item.url}
                alt={item.caption}
                style={{
                  width: "1400px",
                  height: "500px",
                  objectFit: "cover",
                  borderRadius: "10px",
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
                  padding: "5px 15px",
                  borderRadius: "5px",
                }}
              >
                {item.caption}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>

      <Footer />

    </>

  );
}
