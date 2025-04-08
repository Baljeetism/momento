import React, { useEffect, useState } from "react";
import { useParams, useNavigate, href } from "react-router-dom";
import axios from "axios";
import {
  Container, Card, Grid, CircularProgress,
  Snackbar, Alert,Typography
} from "@mui/material";
import API_ENDPOINTS from "../../../api";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Navbar/Footer";
import { jwtDecode } from "jwt-decode";
import EventHeader from "./EventHeader";
import ArtistInfo from "./ArtistInfo";
import WhyAttendSection from "./WhyAttendSection";
import SimilarEvents from "./SimilarEvents";
import RSVPControls from "./RSVPControls";

const ExploreEvent = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [similarEvents, setSimilarEvents] = useState([]);
  const [similarLoading, setSimilarLoading] = useState(true);
  const [rsvpStatus, setRsvpStatus] = useState(null);
  const [loadingRsvp, setLoadingRsvp] = useState(false);
  const [snackbar, setSnackbar] = useState({ 
    open: false, 
    message: '', 
    severity: 'success' 
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const [eventRes, rsvpRes] = await Promise.all([
          axios.get(API_ENDPOINTS.EXPLORE_EVENTS(eventId)),
          axios.get(`${API_ENDPOINTS.RSVP}rsvp/event/${eventId}/`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
          }).catch(() => null)
        ]);

        setEvent(eventRes.data);
        
        if (rsvpRes?.data) {
          const decodedToken = jwtDecode(localStorage.getItem("access_token"));
          const userId = decodedToken.user_id;
          const userRsvp = Array.isArray(rsvpRes.data)
            ? rsvpRes.data.find(rsvp => rsvp.user === userId)
            : null;

          setRsvpStatus(userRsvp?.status || null);
        }

        if (eventRes.data.genre) {
          const similarRes = await axios.get(
            `${API_ENDPOINTS.EVENTS}?genre=${eventRes.data.genre}&exclude=${eventId}`
          );
          setSimilarEvents(similarRes.data.results || similarRes.data);
        }
      } catch (err) {
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
        setSimilarLoading(false);
      }
    };

    fetchEventData();
  }, [eventId]);

  const handleRsvp = async (status) => {
    if (!localStorage.getItem('access_token')) {
      setSnackbar({ open: true, message: 'Please login to RSVP', severity: 'error' });
      navigate('/login')
      return;
    }

    setLoadingRsvp(true);
    try {
      await axios.post(
        API_ENDPOINTS.RSVP,
        { event: eventId, status },
        { headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` } }
      );
      
      setRsvpStatus(status);
      setSnackbar({ 
        open: true, 
        message: `You are now ${status} this event!`, 
        severity: 'success' 
      });
    } catch (err) {
      console.error("RSVP failed:", err);
      setSnackbar({
        open: true,
        message: err.response?.data?.error || 'Failed to update RSVP',
        severity: 'error'
      });
    } finally {
      setLoadingRsvp(false);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleEventClick = (id) => {
    window.scrollTo(0, 0);
    navigate(`/events/${id}`);
  };

  if (loading) return <CircularProgress sx={{ display: "block", mx: "auto", mt: 5 }} />;
  if (!event) return <Typography variant="h5" sx={{ textAlign: "center", mt: 5 }}>Event not found!</Typography>;

  return (
    <>
      <Navbar />

      <Container sx={{ maxWidth: "1000px", minHeight: "50vh", mt: 15, mb: 4 }}>
        <Card sx={{ p: 4, boxShadow: 5, borderRadius: 3, background: "#fff" }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <EventHeader event={event} />
              <RSVPControls 
                status={rsvpStatus} 
                loading={loadingRsvp} 
                onRSVP={handleRsvp} 
              />
            </Grid>

            <Grid item xs={12} md={4}>
            {console.log(event.image)}
              <ArtistInfo 
                artist={event.artist}
                image={event.image_artist}
                description={event.artist_short_description}
              />
            </Grid>
          </Grid>
        </Card>
      </Container>

      <Container sx={{ maxWidth: "1000px", mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <WhyAttendSection content={event.why_attend} />
          </Grid>

          <Grid item xs={12} md={6}>
            <SimilarEvents 
              events={similarEvents} 
              loading={similarLoading} 
              onEventClick={handleEventClick} 
            />
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>

      <Footer />
    </>
  );
};

export default ExploreEvent;