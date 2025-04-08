import React, { useEffect, useState } from "react";
import { Container, Typography, CircularProgress, Box } from "@mui/material";
import axios from "axios";
import ReviewCard from "../Review/ReviewCard";
import "../Styles/ReviewsCarousel.css";
import API_ENDPOINTS from "../../api";

const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        fetchReviews();
    }, []);

    const getToken = () => localStorage.getItem("access_token");

    const fetchReviews = async () => {
        // const token = getToken();
        // if (!token) {
        //     console.error("No token found. User may not be logged in.");
        //     return;
        // }

        try {
            setFetching(true);
            const response = await axios.get(API_ENDPOINTS.REVIEWS);
            setReviews(response.data);
        } catch (error) {
            console.error("Error fetching reviews", error);
        }
        setFetching(false);
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", fontFamily: "Outfit, sans-serif", mb: 4, color: "#3A0CA3" ,textAlign: "center", py: 6 }} gutterBottom>
                Reviews
            </Typography>

           

            {fetching ? (
                <CircularProgress />
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
                <Typography variant="body1" color="textSecondary">
                    No reviews yet. Be the first to write one!
                </Typography>
            )}
        </Container>
    );
};

export default ReviewsPage;
