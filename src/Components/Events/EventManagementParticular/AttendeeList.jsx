import React from "react";
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider, Chip, Typography, Box,CircularProgress } from "@mui/material";
import axios from "axios";

const AttendeeList = ({ attendees, selectedEvent, eventTitle, loading }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'attending': return 'success';
      case 'maybe': return 'warning';
      case 'not attending': return 'error';
      default: return 'primary';
    }
  };

  return (
    <Box mt={5}>
      <Typography variant="h5" textAlign="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        Attendees for: {eventTitle}
      </Typography>
      <Typography variant="subtitle1" textAlign="center" color="textSecondary" gutterBottom>
        Total Attendees: {attendees.length}
      </Typography>

      {loading ? (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      ) : (
        <List>
          {attendees.length > 0 ? (
            attendees.map((rsvp, index) => (
              <React.Fragment key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={rsvp.user.fullName}>
                      {rsvp.user.first_name.charAt(0)}{rsvp.user.last_name.charAt(0)}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={rsvp.user.fullName}
                    secondary={
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <Chip
                          label={rsvp.status}
                          size="small"
                          color={getStatusColor(rsvp.status)}
                        />
                      </Box>
                    }
                  />
                </ListItem>
                {index < attendees.length - 1 && <Divider variant="inset" component="li" />}
              </React.Fragment>
            ))
          ) : (
            <Typography textAlign="center" color="textSecondary">
              No attendees found for this event.
            </Typography>
          )}
        </List>
      )}
    </Box>
  );
};

export default AttendeeList;