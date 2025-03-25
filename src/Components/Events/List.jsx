import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Typography, Grid, Card, CardContent, CircularProgress ,Button } from "@mui/material";
import Navbar from "../Navbar/Navbar";


const List = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/events/")
            .then((res) => {
                setEvents(res.data);
                setLoading(false);
            })
            .catch((err) => console.error("Failed to fetch events:", err));
    }, []);

    if (loading) return <CircularProgress />;

    return (
        <>
            <Navbar />

            <Container>
                <Typography variant="h4" gutterBottom>
                    Upcoming Events
                </Typography>

                <Grid container spacing={2}>
                    {/* <Button
                        component={Link}
                        to="/EventCreate"
                        variant="contained"
                        color="secondary"
                        fullWidth
                        sx={{
                            mt: 5, backgroundColor: "#20bf55",
                            color: "#00072d",
                            "&:hover": { backgroundColor: "#6096ba" }
                        }}
                    >
                        Create An event
                    </Button> */}
                    {events.length > 0 ? (
                        events.map((event) => (
                            <Grid item xs={12} sm={6} md={4} key={event.id}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5">{event.title}</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {event.date} | Duration: {event.duration} hrs
                                        </Typography>
                                        <Typography variant="body1">{event.description}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    ) : (
                        <Typography variant="h6">No events available.</Typography>
                    )}
                </Grid>
            </Container>


        </>

    );
};

export default List;
