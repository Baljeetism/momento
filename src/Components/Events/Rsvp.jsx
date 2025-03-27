import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { Button, Menu, MenuItem, Chip, Box } from '@mui/material';
import axios from 'axios';

const RSVPButton = () => {
  const { eventId } = useParams(); // Get event ID from URL
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const fetchRSVPStatus = async () => {
      try {
        const response = await axios.get(`/api/events/${eventId}/`);
        setStatus(response.data.rsvp_status);
      } catch (error) {
        console.error("Error fetching RSVP status:", error);
      }
    };
    if (eventId) {
      fetchRSVPStatus();
    }
  }, [eventId]);

  const handleRSVP = async (newStatus) => {
    setLoading(true);
    setAnchorEl(null);
    try {
      await axios.post('/api/rsvps/', {
        event: eventId,
        status: newStatus
      });
      setStatus(newStatus);
    } catch (error) {
      console.error("Error updating RSVP:", error);
    } finally {
      setLoading(false);
    }
  };

  const buttonText = () => {
    if (loading) return "Loading...";
    if (!status) return "RSVP";
    return `RSVP: ${status.charAt(0).toUpperCase() + status.slice(1)}`;
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        disabled={loading}
      >
        {buttonText()}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => handleRSVP('attending')}>Attending</MenuItem>
        <MenuItem onClick={() => handleRSVP('maybe')}>Maybe</MenuItem>
        <MenuItem onClick={() => handleRSVP('not_attending')}>Not Attending</MenuItem>
      </Menu>

      {status && (
        <Chip 
          label={`${status} (${status === 'attending' ? '✓' : '✗'})`} 
          color={status === 'attending' ? 'success' : status === 'maybe' ? 'warning' : 'error'}
        />
      )}
    </Box>
  );
};

export default RSVPButton;
