import React from 'react';
import { Button, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

const EventActions = ({ isAdmin, eventId, onDelete }) => {
  if (!isAdmin) return null;

  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <Button
        onClick={() => onDelete(eventId)}
        variant="text"
        startIcon={<DeleteIcon sx={{ color: "red" }} />}
        sx={{ minWidth: "auto" }}
      />
      <Button
        component={Link}
        to={`/events/update/${eventId}`}
        variant="text"
        startIcon={<EditIcon sx={{ color: "green" }} />}
        sx={{ minWidth: "auto" }}
      />
    </Box>
  );
};

export default EventActions;