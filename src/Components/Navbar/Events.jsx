import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Box, Typography } from "@mui/material"

export default function Events() {
  return (
    <div>
      <Navbar />
      <Typography sx={{

        margin: "0 auto",
        color: "#black",
        mt: 3,
        position: "relative",
        textAlign: "center",
        fontSize: "4rem",
        fontWeight: "600",
        mb: 70
      }}>Events will Feature Here!!</Typography>
      <Footer />
    </div>
  )
}
