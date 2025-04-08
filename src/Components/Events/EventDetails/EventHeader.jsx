import React from "react";
import { CardMedia, Typography, Box } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const EventHeader = ({ event }) => {
  return (
    <>
      <CardMedia
        component="img"
        height="320"
        image={event.image || "https://via.placeholder.com/600"}
        alt={event.title}
        sx={{ borderRadius: 3, mb: 3 }}
      />
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
        {event.title}
      </Typography>
      <Typography variant="body1" sx={{ color: "gray", mb: 1 }}>
        {event.description}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
          <LocationOnIcon sx={{ mr: 0.5 }} /> {event.location}
        </Typography>
        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
          <DateRangeIcon sx={{ mr: 0.5 }} /> {event.date}
        </Typography>
        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
          <AccessAlarmIcon sx={{ mr: 0.5 }} /> {event.time}
        </Typography>
      </Box>
      <Typography variant="h5" sx={{ color: "#20bf55", fontWeight: "bold", mt: 2 }}>
        <CurrencyRupeeIcon /> {event.price}
      </Typography>
    </>
  );
};

export default EventHeader;