import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";
import axiosInstance from "../../axiosInstance";
import {
  TextField, Button, Container, Typography, Card, Grid, Box
} from "@mui/material";
import Swal from "sweetalert2";
import API_ENDPOINTS from "../../api";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    re_password: "",
    is_admin: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(API_ENDPOINTS.SIGNUP, formData);

      Swal.fire({
        title: "Good job!",
        text: `Registration successful, ${formData.first_name}! Please login.`,
        icon: "success",
      });

      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error.response?.data);
      const errorData = error.response?.data;
      let errorMessages = "Registration failed. Please try again!";

      if (errorData) {
        errorMessages = Object.entries(errorData)
          .map(([key, value]) =>
            Array.isArray(value) ? `${key}: ${value.join(", ")}` : `${key}: ${value}`
          )
          .join(" | ");
      }

      Swal.fire({
        text: errorMessages,
        icon: "error",
      });
    }
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
        px: { xs: 2, md: 4 }
      }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Left Side - Branding */}
          <Grid item xs={12} md={6} sx={{
            backgroundColor: "#f8f9fa",
            color: "#00171f",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            p: { xs: 2, md: 4 }
          }}>
            <Typography variant="h3" sx={{ fontWeight: "bold", fontSize: { xs: "2.5rem", md: "4rem" } }}>
              Join Momento
            </Typography>
            <Typography variant="h6" sx={{
              mt: 2,
              fontStyle: "italic",
              color: "#3A0CA3",
              fontFamily: "Outfit, sans-serif",
              fontSize: { xs: "1rem", md: "1.2rem" }
            }}>
              "Create unforgettable events, one step at a time."
            </Typography>
          </Grid>

          {/* Right Side - Signup Form */}
          <Grid item xs={12} sm={10} md={6} display="flex" justifyContent="center">
            <Card sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 2,
              boxShadow: 5,
              width: "100%",
              maxWidth: 450
            }}>
              <Typography variant="h4" align="center" gutterBottom>
                Create a new account
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  margin="normal"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  margin="normal"
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  margin="normal"
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  margin="normal"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Confirm Password"
                  variant="outlined"
                  margin="normal"
                  type="password"
                  name="re_password"
                  value={formData.re_password}
                  onChange={handleChange}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2,
                    backgroundColor: "#38369a",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#8b8c89" }
                  }}
                >
                  Register
                </Button>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
