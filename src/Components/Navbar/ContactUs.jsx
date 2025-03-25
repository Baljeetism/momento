import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography,Link } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";

const images = [
    { url: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "CONTACT US" }
];

export default function ContactUs() {

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
            }}>Contact Us</Typography>

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

            </Box >

            <Box sx={{
          textAlign: "center",
          fontFamily: "Roboto",
          color: "#333",
          width: "80%",
          margin: "0 auto",
          mb: 10,
          mt: 10,
        }}>
            <Typography variant="body1" sx={{ lineHeight: "1.6", fontWeight: "300", mb: 3 }}>
                We’d love to hear from you! Whether you have questions, feedback, or want to collaborate — we’re here to help.
            </Typography>

            <Typography variant="h5" fontWeight="800" gutterBottom>
                Get in Touch
            </Typography>

            <Typography variant="body1" sx={{ lineHeight: "1.6", fontWeight: "300", mb: 2 }}>
                <Phone sx={{ verticalAlign: "middle", mr: 1 }} />
                +91 9999999999
            </Typography>

            <Typography variant="body1" sx={{ lineHeight: "1.6", fontWeight: "300", mb: 2 }}>
                <Email sx={{ verticalAlign: "middle", mr: 1 }} />
                <Link href="mailto:support@momento.com" underline="hover" color="inherit">
                    momento7641253@gmail.com
                </Link>
            </Typography>

            <Typography variant="body1" sx={{ lineHeight: "1.6", fontWeight: "300", mb: 4 }}>
                <LocationOn sx={{ verticalAlign: "middle", mr: 1 }} />
                INDIA , BHARAT
            </Typography>

            <Typography variant="h5" fontWeight="800" gutterBottom>
                Support Hours
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: "1.6", fontWeight: "300", mb: 4 }}>
                Monday - Friday: 9:00 AM - 6:00 PM (IST)
                Saturday: 10:00 AM - 4:00 PM (IST)
            </Typography>

            
        </Box>
            
            
            <Footer />
        </>
    )
}
