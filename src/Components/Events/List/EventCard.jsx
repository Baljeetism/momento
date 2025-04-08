import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { CalendarMonth, AccessTime, Mic } from "@mui/icons-material";

const EventCard = ({ event }) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease-in-out",
        borderRadius: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        "&:hover": {
          transform: "scale(1.05)",
          background: "linear-gradient(135deg, #a9d6e5, #e7ecef)",
          boxShadow: 6,
        },
      }}
    >
      <Link to={`/events/${event.id}`} style={{ textDecoration: "none" }}>
        <CardMedia
          component="img"
          height="200"
          image={event.image}
          alt={event.title}
        />
        {console.log(event.image)}
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 1,
              fontWeight: "bold",
              fontFamily: "Outfit, sans-serif",
              color: "black",
            }}
          >
            {event.title}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CalendarMonth sx={{ fontSize: 18, color: "gray" }} /> {event.date}
            <AccessTime sx={{ fontSize: 18, color: "gray" }} /> Duration: {event.duration} hrs
            <Mic sx={{ fontSize: 18, color: "gray" }} /> {event.artist}
          </Typography>

          <Typography variant="body1" sx={{ mt: 1 , color: "black" }}>
            {event.description}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default EventCard;