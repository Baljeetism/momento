import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Card, Grid, Select, MenuItem, FormControl, InputLabel, Box, Stepper, Step, StepLabel } from "@mui/material";
import Swal from 'sweetalert2';
import axiosInstance from "../../axiosInstance";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";

const steps = ["Basic Info", "Event Details", "Media Upload"];

const EventCreation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    genre: "",
    duration: "",
    date: "",
    why_attend: "",
    time: "",
    location: "",
    site: "",
    venue: "",
    price: "",
    artist: "",
    artist_short_description: "",
    image: null,
    image_artist: null,
    capacity: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? e.target.files[0] : value,
    });
  };

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventData = new FormData();
    Object.keys(formData).forEach((key) => {
      eventData.append(key, formData[key]);
    });

    try {
      await axiosInstance.post("/events/", eventData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      Swal.fire({ title: "Success!", text: "Event created successfully!", icon: "success" });
      navigate("/events");
    } catch (error) {
      console.error("Failed to create event:", error.response?.data || error);
      Swal.fire({ title: "Error", text: "Failed to create event. Please check your data and try again.", icon: "error" });
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <TextField fullWidth label="Title" name="title" value={formData.title} onChange={handleChange} margin="normal" required />
            <TextField fullWidth label="Description" name="description" value={formData.description} onChange={handleChange} margin="normal" required />
            <FormControl fullWidth margin="normal">
              <InputLabel>Genre</InputLabel>
              <Select name="genre" value={formData.genre} onChange={handleChange}>
                {["Music", "Sports", "Tech", "Art", "Food", "Comedy"].map((genre, index) => (
                  <MenuItem key={index} value={genre}>{genre}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </>
        );
      case 1:
        return (
          <>
            <TextField fullWidth label="Duration (hrs)" name="duration" value={formData.duration} onChange={handleChange} margin="normal" required />
            <TextField fullWidth label="Date" type="date" name="date" value={formData.date}   InputLabelProps={{ shrink: true }} onChange={handleChange} margin="normal" required />
            <TextField fullWidth label="Time" type="time" name="time" value={formData.time}  InputLabelProps={{ shrink: true }} onChange={handleChange} margin="normal" required />
            <TextField fullWidth label="Location" name="location" value={formData.location} onChange={handleChange} margin="normal" required />
            <TextField fullWidth label="Venue" name="venue" value={formData.venue} onChange={handleChange} margin="normal" required />
          </>
        );
      case 2:
        return (
          <>
            <TextField fullWidth label="Price" name="price" value={formData.price} onChange={handleChange} margin="normal" required />
            <TextField fullWidth label="Capacity" name="capacity" value={formData.capacity} onChange={handleChange} margin="normal" required />
            <TextField fullWidth label="Artist" name="artist" value={formData.artist} onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Artist Short Description" name="artist_short_description" value={formData.artist_short_description} onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Why Attend" name="why_attend" value={formData.why_attend} onChange={handleChange} margin="normal" />
            <label>Event Image:</label>
            <input type="file" name="image" onChange={handleChange} style={{ width: "100%", padding: "10px" }} />
            <label>Artist Image:</label>
            <input type="file" name="image_artist" onChange={handleChange} style={{ width: "100%", padding: "10px" }} />
          </>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="sm" sx={{ mt: 15, mb: 2, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Card sx={{ p: 4, boxShadow: 5, borderRadius: 2 }}>
          <Typography variant="h4" align="center" gutterBottom>Create a New Event</Typography>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}><StepLabel>{label}</StepLabel></Step>
            ))}
          </Stepper>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {renderStepContent(activeStep)}
            <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
              <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
              {activeStep === steps.length - 1 ? (
                <Button type="submit" variant="contained" color="primary">Submit Event</Button>
              ) : (
                <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
              )}
            </Box>
          </form>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default EventCreation;
