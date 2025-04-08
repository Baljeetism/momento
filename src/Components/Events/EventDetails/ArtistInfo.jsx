import React, { useState } from "react";
import { Avatar, Typography, CardContent, Box } from "@mui/material";

const ArtistInfo = ({ artist, image, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <CardContent sx={{
      display: "flex",
      flexDirection: "column",
      borderRadius: "5px",
      background: "linear-gradient(135deg, #a9d6e5, #e7ecef)",
      alignItems: "center",
      textAlign: "center",
      border: "2px solid black",
      mb: "230px"
    }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
        About Artist
      </Typography>
      <Avatar
        src={image}
        alt={artist}
        sx={{
          width: 130,
          height: 130,
          mb: 2,
          boxShadow: 4,
          border: "3px solid #ddd",
          transition: "transform 0.3s ease",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          cursor: "pointer",
          "&:hover": { boxShadow: "0 0 20px rgba(0,0,0,0.3)" }
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {artist}
      </Typography>
      <Typography variant="body2" sx={{ color: "gray", fontStyle: "italic", mt: 1, maxWidth: "250px" }}>
        {description}
      </Typography>
    </CardContent>
  );
};

export default ArtistInfo;