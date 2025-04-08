import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  CircularProgress, 
  Alert,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button
} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";
import API_ENDPOINTS from "../../api";

const RSVP_API_URL = API_ENDPOINTS.RSVP;
const EVENT_API_URL = API_ENDPOINTS.EVENTS;

const UserEvents = () => {
  const [userEvents, setUserEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const fetchUserEvents = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) {
          setError("You need to be logged in to view your events.");
          setLoading(false);
          return;
        }

        const decodedToken = jwtDecode(token);
        const userId = decodedToken.user_id;

        if (!userId) {
          setError("Invalid token: user ID missing.");
          setLoading(false);
          return;
        }

        // Fetch all RSVPs for the user
        const rsvpResponse = await axios.get(`${RSVP_API_URL}users/${userId}/rsvps/`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const rsvpData = Array.isArray(rsvpResponse.data) 
          ? rsvpResponse.data 
          : rsvpResponse.data?.results || [];

        // Fetch event details for each RSVP
        const eventDetailsPromises = rsvpData.map(async (rsvp) => {
          try {
            const eventId = rsvp.event?.id || rsvp.event;
            if (!eventId) return null;

            const eventResponse = await axios.get(`${EVENT_API_URL}${eventId}/`, {
              headers: { Authorization: `Bearer ${token}` },
            });
            
            return { 
              ...eventResponse.data, 
              rsvpId: rsvp.id,
              currentStatus: rsvp.status,
              rsvpObject: rsvp  // Keep the full RSVP object
            };
          } catch (err) {
            // console.error(`Error fetching event ${eventId}:`, err);
            return null;
          }
        });

        const eventResults = await Promise.allSettled(eventDetailsPromises);
        const eventsWithStatus = eventResults
          .filter(result => result.status === "fulfilled" && result.value)
          .map(result => result.value);

        setUserEvents(eventsWithStatus);

      } catch (err) {
        console.error("Main fetch error:", err);
        setError(
          err.response?.status === 401 
            ? "Your session has expired. Please log in again."
            : err.response?.data?.message || "Failed to fetch events. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUserEvents();
  }, []);

  const handleStatusChange = async (rsvpId, newStatus) => {
    setUpdating(true);
    try {
      const token = localStorage.getItem("access_token");
      
      // Optimistic UI update
      setUserEvents(prevEvents => 
        prevEvents.map(event => 
          event.rsvpId === rsvpId 
            ? { ...event, currentStatus: newStatus } 
            : event
        )
      );

      await axios.patch(
        `${RSVP_API_URL}${rsvpId}/`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );

    } catch (err) {
      console.error("Error updating RSVP:", err);
      setError("Failed to update RSVP status. Please try again.");
      
      // Revert optimistic update on error
      setUserEvents(prevEvents => 
        prevEvents.map(event => 
          event.rsvpId === rsvpId 
            ? { ...event, currentStatus: event.rsvpObject.status } 
            : event
        )
      );
    } finally {
      setUpdating(false);
    }
  };

  const formatDate = (dateString) => {
    try {
      const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      return new Date(dateString).toLocaleString(undefined, options);
    } catch {
      return "Date not specified";
    }
  };

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'attending':
        return 'success.main';
      case 'not_attending':
        return 'error.main';
      case 'maybe':
        return 'warning.main';
      default:
        return 'text.primary';
    }
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 15, minHeight: "50vh" }}>
        <Typography variant="h4" gutterBottom component="h1">
          Your Event RSVPs
        </Typography>

        {loading && (
          <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
            <CircularProgress />
          </div>
        )}

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {!loading && !error && userEvents.length === 0 && (
          <Alert severity="info" sx={{ mb: 3 }}>
            You haven't RSVP'd to any events yet.
          </Alert>
        )}

        {userEvents.map((event) => (
          <Card key={event.rsvpId} sx={{ mb: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                {event.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {event.description || "No description available."}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Date:</strong> {formatDate(event.date)}
              </Typography>
              {event.location && (
                <Typography variant="body2" color="text.secondary">
                  <strong>Location:</strong> {event.location}
                </Typography>
              )}
              
              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel id={`status-label-${event.rsvpId}`}>RSVP Status</InputLabel>
                <Select
                  labelId={`status-label-${event.rsvpId}`}
                  value={event.currentStatus || ''}
                  label="RSVP Status"
                  onChange={(e) => handleStatusChange(event.rsvpId, e.target.value)}
                  disabled={updating}
                  sx={{ 
                    color: getStatusColor(event.currentStatus),
                    fontWeight: 'bold'
                  }}
                >
                  <MenuItem value="Attending">Attending</MenuItem>
                  <MenuItem value="Not_Attending">Not Attending</MenuItem>
                  <MenuItem value="MAYBE">Maybe</MenuItem>
                </Select>
              </FormControl>

              <Typography 
                variant="caption" 
                display="block" 
                sx={{ mt: 1, fontStyle: 'italic' }}
              >
                Current status: 
                <span style={{ 
                  color: getStatusColor(event.currentStatus),
                  fontWeight: 'bold',
                  marginLeft: '4px'
                }}>
                  {event.currentStatus}
                </span>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default UserEvents;