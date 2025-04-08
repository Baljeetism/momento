import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography,Link } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import { contactUs } from '../../Utils/ImageData';



export default function ContactUs() {

    const image=contactUs[0].url;
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
            }}>Contact Us</Typography>

            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1500px",
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
                        src={image}
                        
                        style={{
                            width: "1500px",
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
