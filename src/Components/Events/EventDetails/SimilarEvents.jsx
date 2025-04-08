import React from "react";
import { 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CircularProgress 
} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const SimilarEvents = ({ events, loading, onEventClick }) => {
  return (
    <Box sx={{ p: 3, boxShadow: 4, borderRadius: 3, background: "linear-gradient(135deg, #a9d6e5, #e7ecef)" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, fontFamily: "Outfit, sans-serif" }}>
        Similar Events
      </Typography>

      {loading ? (
        <CircularProgress sx={{ display: "block", mx: "auto", mt: 3 }} />
      ) : events.length > 0 ? (
        <Grid container spacing={2}>
          {events.slice(0, 2).map((event) => (
            <Grid item xs={12} sm={6} key={event.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  borderRadius: 2,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: 8 }
                }}
                onClick={() => onEventClick(event.id)}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={event.image || "https://via.placeholder.com/300"}
                  alt={event.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", fontFamily: "Outfit, sans-serif" }}>
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <DateRangeIcon /> {event.date} |
                    <AccessAlarmIcon /> {event.time}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    <LocationOnIcon /> {event.location}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1" sx={{ color: "gray", textAlign: "center" }}>
          No similar events found.
        </Typography>
      )}
    </Box>
  );
};

export default SimilarEvents;