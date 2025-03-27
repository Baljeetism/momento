import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
    Container, CardMedia, Typography, Grid, Card, CardContent,
    CircularProgress, Button, TextField, CardActionArea, Box
} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import API_ENDPOINTS from "../../api";
import Swal from "sweetalert2";
import { CalendarMonth, AccessTime, Mic } from "@mui/icons-material";

const List = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchFilters, setSearchFilters] = useState({
        artist: "",
        location: "",
        date: ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const res = await axios.get(API_ENDPOINTS.EVENTS);
            setEvents(res.data);
        } catch (err) {
            console.error("Failed to fetch events:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (eventId) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "This event will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`${API_ENDPOINTS.EVENTS}${eventId}/`);
                setEvents((prevEvents) => prevEvents.filter(event => event.id !== eventId));

                Swal.fire({
                    title: "Deleted!",
                    text: "Event has been deleted.",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false,
                });
            } catch (error) {
                console.error("Error deleting event:", error);
                Swal.fire({
                    title: "Error!",
                    text: "Failed to delete the event.",
                    icon: "error",
                });
            }
        }
    };

    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        setSearchFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const clearFilters = () => {
        setSearchFilters({
            artist: "",
            location: "",
            date: ""
        });
    };

    const filteredEvents = events.filter(event => {
        return (
            (searchFilters.artist === "" ||
                event.artist.toLowerCase().includes(searchFilters.artist.toLowerCase())) &&
            (searchFilters.location === "" ||
                event.location.toLowerCase().includes(searchFilters.location.toLowerCase())) &&
            (searchFilters.date === "" ||
                event.date.includes(searchFilters.date))
        );
    });

    if (loading) return <CircularProgress />;

    return (
        <>
            <Navbar />
            {/* Search and Create Section */}
            <Container
                maxWidth="md"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "30vh",
                    borderRadius: 4,
                    boxShadow: 5,
                    p: 3,
                    mb: 4,
                    mt: 15,
                    textAlign: "center",
                    background: "linear-gradient(135deg, #a9d6e5, #2a6f97)"
                }}
            >
                <Typography variant="h3" sx={{ fontWeight: "bold", color: "#333", mb: 2 }}>
                    Discover Your Next Experience
                </Typography>

                <Grid container spacing={2} sx={{ width: "100%", mt: 2 }}>
                    {/* Artist Search */}
                    <Grid item xs={12} md={4}>
                        <TextField
                            fullWidth
                            name="artist"
                            label="Search by Artist"
                            variant="outlined"
                            value={searchFilters.artist}
                            onChange={handleSearchChange}
                            sx={{ backgroundColor: "#eff7f6" }}
                        />
                    </Grid>

                    {/* Location Search */}
                    <Grid item xs={12} md={4}>
                        <TextField
                            fullWidth
                            name="location"
                            label="Search by Location"
                            variant="outlined"
                            value={searchFilters.location}
                            onChange={handleSearchChange}
                            sx={{ backgroundColor: "#eff7f6" }}
                        />
                    </Grid>

                    {/* Date Search */}
                    <Grid item xs={12} md={4}>
                        <TextField
                            fullWidth
                            name="date"
                            label="Search by Date"
                            type="date"
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                            value={searchFilters.date}
                            onChange={handleSearchChange}
                            sx={{ backgroundColor: "#eff7f6" }}
                        />
                    </Grid>

                    {/* Action Buttons */}
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                        <Button
                            variant="outlined"
                            onClick={clearFilters}
                            sx={{ borderRadius: "30px", padding: "10px 20px", color: 'black', border: '2px solid black' }}
                        >
                            Clear Filters
                        </Button>
                        <Button
                            component={Link}
                            to="/EventCreate"
                            variant="contained"
                            startIcon={<AddIcon />}
                            sx={{
                                backgroundColor: 'black',
                                borderRadius: "30px",
                                padding: "10px 20px",
                                fontSize: "1rem",
                                fontWeight: "bold",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                                transition: "transform 0.2s",
                                "&:hover": { transform: "scale(1.05)" },
                            }}
                        >
                            Create An Event
                        </Button>
                    </Grid>
                </Grid>
            </Container>

            {/* Events List */}
            <Container>
                <Typography variant="h4" sx={{
                    mb: 3, textAlign: "center",
                    fontSize: "4rem",
                    fontWeight: "600",
                    fontFamily: "Outfit, sans-serif"
                }} gutterBottom>
                    {filteredEvents.length} {filteredEvents.length === 1 ? "Event" : "Events"} Discovered
                </Typography>

                <Grid container spacing={2}>
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event) => (
                            <Grid item xs={12} sm={6} md={4} key={event.id}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        transition: "all 0.3s ease-in-out",
                                        borderRadius: "20px",
                                        backgroundColor: "rgba(0, 0, 0, 0.05)",

                                        "&:hover": {
                                            transform: "scale(1.05)",
                                            backgroundColor: "#b8dbd9",
                                            boxShadow: 6,
                                        },
                                    }}
                                >
                                    <CardActionArea component={Link} to={`/events/${event.id}`}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={event.image || "https://plus.unsplash.com/premium_photo-1732636442966-35f1abf2e43b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                            alt={event.title}
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            {/* Event Title */}
                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    mb: 1,
                                                    fontWeight: "bold",
                                                    fontFamily: "Outfit, sans-serif",
                                                    color: "black",
                                                }}
                                            >
                                                {event.title}
                                            </Typography>

                                            {/* Event Info with Icons */}
                                            <Typography variant="body2" color="text.secondary" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                                <CalendarMonth sx={{ fontSize: 18, color: "gray" }} /> {event.date}
                                                <AccessTime sx={{ fontSize: 18, color: "gray" }} /> Duration: {event.duration} hrs
                                                <Mic sx={{ fontSize: 18, color: "gray" }} /> {event.artist}
                                            </Typography>

                                            {/* Event Description */}
                                            <Typography variant="body1" sx={{ mt: 1 }}>
                                                {event.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                    {/* Action Buttons */}
                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        gap: 1,
                                        mt: "auto",
                                        p: 1,
                                    }}>
                                        <Button
                                            onClick={() => handleDelete(event.id)}
                                            variant="text"
                                            startIcon={<DeleteIcon sx={{ color: "red" }} />}
                                            sx={{ minWidth: "auto" }}
                                        ></Button>
                                        <Button
                                            component={Link}
                                            to={`/events/update/${event.id}`}
                                            variant="text"
                                            startIcon={<EditIcon sx={{ color: "green" }} />}
                                            sx={{ minWidth: "auto" }}
                                        ></Button>
                                    </Box>
                                </Card>
                            </Grid>
                        ))
                    ) : (
                        <Typography variant="h6" sx={{ minHeight: "30vh", width: "100%", textAlign: "center" }}>
                            No events found that match your search criteria.
                        </Typography>
                    )}
                </Grid>

            </Container>

            <Footer />
        </>
    );
};

export default List;