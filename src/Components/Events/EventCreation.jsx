import React, { useState } from "react";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";
import axiosInstance from "../../axiosInstance";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";

const EventCreation = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    genre: "",
    duration: "",
    date: "",
    time: "",
    location: "",
    site: "",
    venue: "",
    price: "",
    artist: "",
    artist_short_description: "",
    why_attend: "",
    similar_events: "",
    image: null,
    capacity: "",
    created_by: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? e.target.files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventData = new FormData();
    Object.keys(formData).forEach((key) => {
      eventData.append(key, formData[key]);
    });

    try {
      const response = await axiosInstance.post("/events/", eventData);
      console.log("Event created successfully:", response.data);
      alert("Event created successfully!");
    } catch (error) {
      console.error("Failed to create event:", error.response.data);
      alert("Failed to create event.");
    }
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Create an Event
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {Object.keys(formData).map((key) => (
              <Grid item xs={12} key={key}>
                {key === "image" ? (
                  <input type="file" name={key} onChange={handleChange} />
                ) : (
                  <TextField
                    fullWidth
                    label={key.replace("_", " ").toUpperCase()}
                    name={key}
                    type={key === "date" ? "date" : key === "time" ? "time" : "text"}
                    value={formData[key]}
                    onChange={handleChange}
                  />
                )}
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit Event
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      <Footer />
    </>
  );
};

export default EventCreation;
