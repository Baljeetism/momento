import React, { useEffect, useState } from "react";
import { Container, Typography, CircularProgress, Box } from "@mui/material";
import axios from "axios";
import ReviewCard from "../Review/ReviewCard";
import "../Styles/ReviewsCarousel.css";
import API_ENDPOINTS from "../../api";

const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);  
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            setFetching(true);
            setError(null);

            try {
                const response = await axios.get(API_ENDPOINTS.REVIEWS);
                setReviews(Array.isArray(response.data) ? response.data : []); 
            } catch (err) {
                console.error("Error fetching reviews:", err);
                setError("Failed to load reviews. Please try again.");
                setReviews([]); 
            } finally {
                setFetching(false);
            }
        };

        fetchReviews();
    }, []);

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography 
                variant="h4" 
                sx={{ 
                    fontWeight: "bold", 
                    fontFamily: "Outfit, sans-serif", 
                    mb: 4, 
                    color: "#3A0CA3",
                    textAlign: "center",
                    py: 6 
                }} 
                gutterBottom
            >
                Reviews
            </Typography>

            {fetching ? (
                <Box display="flex" justifyContent="center" alignItems="center" height="200px">
                    <CircularProgress />
                </Box>
            ) : error ? (
                <Typography variant="body1" color="error" textAlign="center">
                    {error}
                </Typography>
            ) : reviews.length > 0 ? (
                <div className="reviews-slider">
                    <div className="reviews-track">
                        {reviews.map((review) => (
                            <div key={review.id} className="review-card">
                                <ReviewCard review={review} />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <Typography variant="body1" color="textSecondary" textAlign="center">
                    No reviews yet. Be the first to write one!
                </Typography>
            )}
        </Container>
    );
};

export default ReviewsPage;
