import React from "react";
import { Box, Typography, Button, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const EventCard = ({ event, attendeeCount, isAdmin, onDelete, onViewDetails }) => {
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

        {isAdmin && (
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              onClick={() => onDelete(event.id)}
              variant="text"
              startIcon={<DeleteIcon sx={{ color: "red" }} />}
              sx={{ minWidth: "auto" }}
            />
            <Button
              component={Link}
              to={`/events/update/${event.id}`}
              variant="text"
              startIcon={<EditIcon sx={{ color: "green" }} />}
              sx={{ minWidth: "auto" }}
            />
          </Box>
        )}

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Badge badgeContent={attendeeCount || 0} color="primary" overlap="circular" sx={{ mr: 2 }}>
            <PeopleIcon color="action" fontSize="large" />
          </Badge>
          <Button
            variant="contained"
            size="small"
            onClick={() => onViewDetails(event.id)}
            sx={{ mt: 1 }}
          >
            View Details
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EventCard;