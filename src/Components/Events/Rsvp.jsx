import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography, Card, CardContent, CircularProgress, Alert } from "@mui/material";
import API_ENDPOINTS from "../../api";

const API_URL = API_ENDPOINTS.RSVP;  // Update if needed

const AttendingEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAttendingEvents = async () => {
            try {
                const token = localStorage.getItem("access");  // Fetch token from storage
                if (!token) {
                    setError("You need to be logged in to view your events.");
                    setLoading(false);
                    return;
                }

                const response = await axios.get(API_URL, {
                    headers: {
                        Authorization: `Bearer ${token}`,  // Pass JWT token for authentication
                    },
                });

                setEvents(response.data.results);
            } catch (err) {
                setError("Failed to fetch events. Please try again later.");
                console.error("Error fetching attending events:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchAttendingEvents();
    }, []);

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Events You're Attending
            </Typography>

            {loading && <CircularProgress />}
            {error && <Alert severity="error">{error}</Alert>}

            {!loading && !error && events.length === 0 && (
                <Alert severity="info">You are not attending any events yet.</Alert>
            )}

            {events.map((event) => (
                <Card key={event.id} sx={{ mb: 2 }}>
                    <CardContent>
                        
                        <Typography variant="h6">{event.title}</Typography>
                        
                        <Typography variant="body2" color="textSecondary">
                            {event.description}
                        </Typography>
                        <Typography variant="body2">
                            <strong>Location:</strong> {event.location}
                        </Typography>
                        <Typography variant="body2">
                            <strong>Venue:</strong> {event.venue}
                        </Typography>
                        <Typography variant="body2">
                            <strong>Price:</strong> ${event.price}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
};

export default AttendingEvents;






