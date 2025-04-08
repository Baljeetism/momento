import React from 'react';
import { Box, Typography, Badge } from '@mui/material';

import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const EventCard = ({ event, attendeeCount, children }) => {
  return (
    <Box sx={{ boxShadow: 3, p: 2, width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
            {event.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EventIcon color="action" sx={{ mr: 1 }} />
              <Typography variant="body2">{event.date}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon color="action" sx={{ mr: 1 }} />
              <Typography variant="body2">{event.location}</Typography>
            </Box>
          </Box>
        </Box>

        {children}

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Badge badgeContent={attendeeCount || 0} color="primary" overlap="circular" sx={{ mr: 2 }}>
            <PeopleIcon color="action" fontSize="large" />
          </Badge>
        </Box>
      </Box>
    </Box>
  );
};

export default EventCard;