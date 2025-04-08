import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";
import API_ENDPOINTS from "../../api";
import Swal from "sweetalert2";

const PostReview = ({ fetchReviews }) => {
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const getToken = () => localStorage.getItem("access_token");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const token = getToken();
        if (!token) {
            console.error("No token found. Please log in first.");
            Swal.fire({
                    title: "Login First",
                    icon: "error",
                    timer: 2000,
                  });
            
            setLoading(false);
            return;
        }

        try {
            await axios.post(
                API_ENDPOINTS.REVIEWS,
                { description}, // Replace with actual event ID
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setDescription("");
            fetchReviews(); // Refresh the reviews list
        } catch (error) {
            console.error("Error submitting review", error);
        }
        setLoading(false);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
                label="Write a review..."
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" disabled={loading}>
                {loading ? "Submitting..." : "Submit Review"}
            </Button>
        </Box>
    );
};

export default PostReview;
