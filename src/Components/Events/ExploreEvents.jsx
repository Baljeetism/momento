import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container, Typography, Card, CardContent,
  CircularProgress, CardMedia, Avatar, Grid, Box,
  Button
} from "@mui/material";
import API_ENDPOINTS from "../../api";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const ExploreEvent = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [similarEvents, setSimilarEvents] = useState([]);
  const [similarLoading, setSimilarLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(API_ENDPOINTS.EXPLORE_EVENTS(eventId))
      .then((res) => {
        setEvent(res.data);
        setLoading(false);

        if (res.data.genre) {
          axios.get(`${API_ENDPOINTS.EVENTS}?genre=${res.data.genre}&exclude=${eventId}`)
            .then(similarRes => {
              setSimilarEvents(similarRes.data.results || similarRes.data);
              setSimilarLoading(false);
            })
            .catch(err => {
              console.error("Failed to fetch similar events:", err);
              setSimilarLoading(false);
            });
        }
      })
      .catch((err) => {
        console.error("Failed to fetch event:", err);
        setLoading(false);
      });
  }, [eventId]);

  const handleEventClick = (id) => {
    window.scrollTo(0, 0)
    navigate(`/events/${id}`);
  };

  if (loading) return <CircularProgress sx={{ display: "block", mx: "auto", mt: 5 }} />;
  if (!event) return <Typography variant="h5" sx={{ textAlign: "center", mt: 5 }}>Event not found!</Typography>;

  return (
    <>
      <Navbar />

      {/* Event Details Card */}
      <Container sx={{ maxWidth: "1000px", minHeight: "50vh", mt: 15, mb: 4 }}>
        <Card sx={{ p: 4, boxShadow: 5, borderRadius: 3, background: "#fff" }}>
          <Grid container spacing={4} alignItems="center">

            {/* Left - Event Details */}
            <Grid item xs={12} md={8}>
              <CardMedia
                component="img"
                height="320"
                image={event.image || "https://via.placeholder.com/600"}
                alt={event.title}
                sx={{ borderRadius: 3, mb: 3 }}
              />
              <CardContent>
                <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
                  {event.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "gray", mb: 1 }}>
                  {event.description}
                </Typography>
                <Typography variant="h6" sx={{ color: "gray", mb: 1 }}>
                  <LocationOnIcon />
                   {event.location} | 
                   <DateRangeIcon />
                    {event.date} | 
                    <AccessAlarmIcon /> {event.time}
                </Typography>
                <Typography variant="h5" sx={{ color: "#20bf55", fontWeight: "bold", mt: 2 }}>
                 <CurrencyRupeeIcon />   {event.price}
                </Typography>
              </CardContent>
            </Grid>

            {/* Right - Artist Info */}
            <Grid item xs={12} md={4}>
              <CardContent sx={{ display: "flex", flexDirection: "column",borderRadius:"5px",background: "linear-gradient(135deg, #a9d6e5, #e7ecef)", alignItems: "center", textAlign: "center",border:"2px solid black",mb:30 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" ,mb:3}}>
                  About Artist
                </Typography>
                <Avatar
                  src={event.image_artist || "https://via.placeholder.com/120"}
                  alt={event.artist}
                  sx={{
                    width: 130,
                    height: 130,
                    mb: 2,
                    boxShadow: 4,
                    border: "3px solid #ddd",
                    transition: "transform 0.3s ease",
                    transform: hovered ? "scale(1.1)" : "scale(1)",
                    cursor: "pointer",
                    "&:hover": { boxShadow: "0 0 20px rgba(0,0,0,0.3)" }
                  }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {event.artist}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray", fontStyle: "italic", mt: 1, maxWidth: "250px" }}>
                  {event.artist_short_description}
                </Typography>
              </CardContent>
            </Grid>

          </Grid>
        </Card>
      </Container>

      {/* Why Attend Section */}
      <Container sx={{ maxWidth: "1000px", mt: 4 }}>
        <Grid container spacing={3}>
          {/* Why Attend Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, boxShadow: 4, borderRadius: 3, backgroundColor: "#fff" }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1, fontFamily: "Outfit, sans-serif" }}>
                Why Should You Attend?
              </Typography>
              <Typography variant="body1" sx={{ color: "gray", lineHeight: 1.6 }}>
                {event.why_attend}
              </Typography>
            </Box>
          </Grid>

          {/* Similar Events Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, boxShadow: 4, borderRadius: 3, background: "linear-gradient(135deg, #a9d6e5, #e7ecef)" }}>
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, fontFamily: "Outfit, sans-serif" }}>
                Similar Events
              </Typography>

              {similarLoading ? (
                <CircularProgress sx={{ display: "block", mx: "auto", mt: 3 }} />
              ) : similarEvents.length > 0 ? (
                <Grid container spacing={2}>
                  {similarEvents.map((similarEvent) => (
                    <Grid item xs={12} sm={6} key={similarEvent.id}>
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
                        onClick={() => handleEventClick(similarEvent.id)}
                      >
                        <CardMedia
                          component="img"
                          height="160"
                          image={similarEvent.image || "https://via.placeholder.com/300"}
                          alt={similarEvent.title}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography variant="h6" sx={{ fontWeight: "bold", fontFamily: "Outfit, sans-serif" }}>
                            {similarEvent.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <DateRangeIcon /> {similarEvent.date} | 
                            <AccessAlarmIcon /> {similarEvent.time}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                            <LocationOnIcon /> {similarEvent.location}
                          </Typography>
                        </CardContent>
                        <Button size="small" color="primary" sx={{ m: 1, alignSelf: "flex-start" }}>

                        </Button>
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
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default ExploreEvent;
