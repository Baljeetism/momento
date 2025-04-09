import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Slider from "react-slick";
import { Box, Typography, Grid, Button, Container, CardContent, Card } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventIcon from "@mui/icons-material/Event";
import PeopleIcon from "@mui/icons-material/People";
import PaymentIcon from "@mui/icons-material/Payment";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ReviewsPage from '../Review/ReviewsPage';
import { eventImages, featuredImages } from '../../Utils/ImageData';  // Import images

const features = [
  { title: "Event Scheduling", icon: <ScheduleIcon sx={{ fontSize: 50, color: "#5E60CE" }} /> },
  { title: "Attendee Management", icon: <PeopleIcon sx={{ fontSize: 50, color: "#5E60CE" }} /> },
  { title: "Secure Payments", icon: <PaymentIcon sx={{ fontSize: 50, color: "#5E60CE" }} /> },
  { title: "Venue Selection", icon: <LocationOnIcon sx={{ fontSize: 50, color: "#5E60CE" }} /> },
  { title: "Automated Reminders", icon: <NotificationsIcon sx={{ fontSize: 50, color: "#5E60CE" }} /> },
  { title: "Event Scheduling", icon: <EventIcon sx={{ fontSize: 50, color: "#5E60CE" }} /> },
];

export default function Home() {
  const settings = {
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
      <Box sx={{ flexGrow: 1, p: 4, mt: 30 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontFamily: "Outfit, sans-serif", fontSize: "5rem", color: "#3A0CA3" }}>
              Turning Moments Into Milestones!
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, fontSize: "1.2rem", color: "#4A4E69" }}>
              Discover unforgettable moments with top artists, immersive venues, and the best crowd. Join us and be part of the experience!
            </Typography>
            <Button component={Link} to="/login" sx={{ backgroundColor: 'black', color: 'white', p: 2, mt: 2, ml: 3, borderRadius: 4 }}>Get Started for Free</Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2, alignItems: "center", justifyContent: "center", position: "relative" }}>
              <Box component="img" src={featuredImages.topLeft} alt="Concert"
                sx={{ width: 380, height: 280, borderRadius: "16px", boxShadow: 3, transform: "rotate(-10deg)" }} />

              <Box component="img" src={featuredImages.topRight} alt="Festival"
                sx={{ width: 500, height: 300, borderRadius: "16px", boxShadow: 4, transform: "rotate(10deg)", marginLeft: -4 }} />

              <Box component="img" src={featuredImages.bottom} alt="DJ Party"
                sx={{ width: 520, height: 420, borderRadius: "16px", boxShadow: 5, position: "absolute", bottom: "-20px", left: "50%", transform: "translateX(-50%) rotate(5deg)" }} />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ width: "100vw", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw", overflow: "hidden", mt: 15 }}>
        <Slider {...settings}>
          {eventImages.map((item, index) => (
            <Box key={index} component="div" sx={{ position: "relative", height: { xs: "300px", sm: "400px", md: "500px" } }}>
              <img src={item.url} alt={item.caption} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <Typography variant="h5" sx={{
                position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)",
                color: "#fff", backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "10px 20px",
                borderRadius: "5px", fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                textAlign: "center", width: "80%", maxWidth: "800px"
              }}>
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
