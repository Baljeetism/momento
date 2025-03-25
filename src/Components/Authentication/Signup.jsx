import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";
import axiosInstance from "../../axiosInstance";
import { TextField, Button, Checkbox, FormControlLabel, Container, Typography, Card, Box } from "@mui/material";
// import Alert from '@mui/material/Alert';
import Swal from 'sweetalert2'

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
      const response = await axiosInstance.post("/auth/users/", formData);
      // alert(`Registration successful, ${formData.first_name}! Please login.`);
      Swal.fire({
        title: "Good job!",
        text: `Registration successful, ${formData.first_name}! Please login.`,
        icon: "success"
      });
      // <Alert severity="success">`Registration successful, ${formData.first_name}! Please login.`</Alert>
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error.response?.data);

      const errorData = error.response?.data;
      if (errorData) {
        let errorMessages = Object.entries(errorData)
          .map(([key, value]) => (Array.isArray(value) ? `${key}: ${value.join(", ")}` : `${key}: ${value}`))
          .join(" | ");
          Swal.fire({
            
            text: `${errorMessages}`,
            icon: "error"
          });
          // <Alert severity="error">`${errorMessages}`</Alert>
        // alert(`${errorMessages}`);
      } else {
        Swal.fire({
          
          text: "Registration failed. Please try again!",
          icon: "error"
        });
        // <Alert severity="error">Registration failed. Please try again.</Alert>
        // alert("Registration failed. Please try again.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#979dac" }}>
        <Card sx={{ p: 4, boxShadow: 5, borderRadius: 2, width: "100%" }}>
          <Typography variant="h4" align="center" gutterBottom>
          Create a new account
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField fullWidth label="Email Address" variant="outlined" margin="normal" type="email" name="email" value={formData.email} onChange={handleChange} required />
            <TextField fullWidth label="First Name" variant="outlined" margin="normal" type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
            <TextField fullWidth label="Last Name" variant="outlined" margin="normal" type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />
            <TextField fullWidth label="Password" variant="outlined" margin="normal" type="password" name="password" value={formData.password} onChange={handleChange} required />
            <TextField fullWidth label="Confirm Password" variant="outlined" margin="normal" type="password" name="re_password" value={formData.re_password} onChange={handleChange} required />
            {/* <FormControlLabel control={<Checkbox name="is_admin" checked={formData.is_admin} onChange={handleChange} />} label="Admin" /> */}
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 ,backgroundColor: "#38369a", 
                    color: "#fff", 
                    "&:hover": { backgroundColor: "#8b8c89" }}}>
              Register
            </Button>
          </form>
        </Card>
      </Container>
      <Footer />
    </>
  );
}



