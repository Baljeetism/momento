import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";


const images = [
  { url: "https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

export default function AboutUs() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Navbar />

      <Typography sx={{

        margin: "0 auto",
        color: "#black",
        mt: 3,
        position: "relative",
        textAlign: "center",
        fontSize: "4rem",
        fontWeight: "600"
      }}>About MOMENTO</Typography>
      <Typography sx={{

        margin: "0 auto",
        color: "#6d6875",
        mt: 1,
        position: "relative",
        textAlign: "center",
        fontSize: "1rem",
        fontWeight: "600"
      }}>" Turning Moments Into Milestones. "</Typography>
      <Box
        sx={{
          width: "100%",
          maxWidth: "800px",
          height: "400px",
          margin: "0 auto",
          mt: 4
        }}
      >

        <Box
          sx={{
            position: "relative",
            textAlign: "center",
          }}
        >
          <img
            src={images[0].url}
            alt={images[0].caption}
            style={{
              width: "800px",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />

        </Box>

      </Box>
      <Box
        sx={{
          textAlign: "center",
          fontFamily: "Roboto",
          color: "#333",
          width: "80%",
          margin: "0 auto",
          mb: 10,
          mt: 10,
        }}
      >
        <Typography variant="h4" fontWeight="600" gutterBottom>
          Welcome to <strong>Momento</strong>, your ultimate event management platform!
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: "1.6", fontWeight: "300", mb: 3 }}>
          Our mission is to simplify the way you plan, organize, and enjoy events — whether
          it’s a small gathering, a corporate conference, or a large festival.
        </Typography>

        <Typography variant="h5" fontWeight="600" gutterBottom>
          Who We Are?
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: "1.6", fontWeight: "300", mb: 3 }}>
          We are a passionate team of event enthusiasts, tech innovators, and design thinkers dedicated to creating seamless experiences. We understand that planning events can be overwhelming, so we built a platform that handles the heavy lifting, leaving you more time to focus on what truly matters — making memories.
        </Typography>

        

        

        <Typography variant="h6" fontStyle="italic" sx={{ mt: 3 }}>
          Ready to make your next event a hit? Get started with <strong>Momento</strong> today!
        </Typography>
      </Box>

      <Footer />
    </>
  );
}
