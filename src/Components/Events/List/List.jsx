import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Grid, CircularProgress } from "@mui/material";

import Navbar from "../../Navbar/Navbar";
import Footer from "../../Navbar/Footer";
import API_ENDPOINTS from "../../../api";
import { isAdminOnly } from "../../../Utils/IsAdminOnly";
import EventCard from "./EventCard";
import SearchHeader from "./SearchHeader";
import EventsPagination from "./EventsPagination";

const List = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const eventsPerPage = 6;

    const [searchFilters, setSearchFilters] = useState({
        artist: "",
        location: "",
        date: ""
    });

    useEffect(() => {
        fetchEvents();
        checkAdmin();
    }, [currentPage]); // 🔹 Only fetch on page change, not every input change

    const fetchEvents = async () => {
        setLoading(true);
        try {
            const res = await axios.get(API_ENDPOINTS.EVENTSP, {
                params: {
                    page: currentPage, 
                    artist: searchFilters.artist,
                    location: searchFilters.location,
                    date: searchFilters.date
                }
            });
    
            // console.log("API Response:", res.data); 
    
            if (res.data.results) {
                setEvents(res.data.results); 
                setTotalPages(Math.ceil(res.data.count / eventsPerPage));
            } else {
                setEvents([]); 
            }
        } catch (err) {
            console.error("Failed to fetch events:", err);
            setEvents([]); 
        } finally {
            setLoading(false);
        }
    };
    

    const checkAdmin = async () => {
        const adminStatus = await isAdminOnly();
        setIsAdmin(adminStatus);
    };

    const handleSearch = () => {
        setCurrentPage(1);
        fetchEvents(); // 🔹 Calls API only when Search button is clicked
    };

    const clearFilters = () => {
        setSearchFilters({
            artist: "",
            location: "",
            date: ""
        });
        setCurrentPage(1);
        fetchEvents(); // 🔹 Reset filters and fetch new data
    };

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    if (loading) return <CircularProgress />;

    return (
        <>
            <Navbar />
            
            <SearchHeader 
                searchFilters={searchFilters}
                setSearchFilters={setSearchFilters}
                handleSearch={handleSearch} // 🔹 Triggers API call on click
                clearFilters={clearFilters}
                isAdmin={isAdmin}
            />

            <Container>
                <Typography variant="h4" sx={{
                    mb: 3, textAlign: "center",
                    fontSize: "4rem",
                    fontWeight: "600",
                    fontFamily: "Outfit, sans-serif"
                }} gutterBottom>
                    {events.length === 1 ? "Event" : "Events"} Discovered
                </Typography>

                <Grid container spacing={2}>
                    {events.length > 0 ? (
                        events.map((event) => (
                            <Grid item xs={12} sm={6} md={4} key={event.id}>
                                <EventCard event={event} />
                            </Grid>
                        ))
                    ) : (
                        <Typography variant="h6" sx={{ minHeight: "30vh", width: "100%", textAlign: "center" }}>
                            No events found that match your search criteria.
                        </Typography>
                    )}
                </Grid>

                {totalPages > 1 && (
                    <EventsPagination 
                        totalPages={totalPages}
                        currentPage={currentPage}
                        handlePageChange={handlePageChange}
                    />
                )}
            </Container>

            <Footer />
        </>
    );
};

export default List;
