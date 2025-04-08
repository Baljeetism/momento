import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import PostReview from '../Review/PostReview';
import { aboutUs } from '../../Utils/ImageData';




export default function AboutUs() {
  const image = aboutUs[0].url;

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
        mt: 15,
        position: "relative",
        textAlign: "center",
        fontSize: "4rem",
        fontWeight: "600",
        fontFamily: "Outfit, sans-serif"


      }}>About MOMENTO</Typography>

      <Box
        sx={{
          width: "100vw",  // Full viewport width
          height: "400px",
          margin: "0 auto",
          mt: 4,

        }}
      >

        <Box
          sx={{
            position: "relative",
            textAlign: "center",
          }}
        >
          <img
            src={image}
    
            style={{
              width: "1500px",
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
        <Typography variant="h4" fontWeight="600" gutterBottom sx={{mt:5}}>
          Share Your Feedback With Us
        </Typography>
        <PostReview />
      </Box>

      <Footer />
    </>
  );
}
