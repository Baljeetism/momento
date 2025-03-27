import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
// import Alert from '@mui/material/Alert';
import Swal from 'sweetalert2'

import { TextField, Button, Box, Typography, Container, Paper } from '@mui/material';
import API_ENDPOINTS from '../../api';

export default function ResetRequest() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_ENDPOINTS.RESET_REQUEST, { email });
      // alert('Password reset link sent to your email!');
      // <Alert severity="success">Password reset link sent to your email!</Alert>
      Swal.fire({
        title: "Good job!",
        text: "Password reset link sent to your email!",
        icon: "success"
      });
      navigate('/login');
    } catch (err) {
      console.error('Error:', err);
      Swal.fire({
        
        text: "Failed to send reset link.",
        icon: "error"
      });
      // <Alert severity="error">Failed to send reset link.</Alert>
      // alert('Failed to send reset link.');
    }
  };

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} sx={{ p: 4, mt: 25, borderRadius: 2 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Find Your Account
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Enter your email"
              variant="outlined"
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 ,backgroundColor: "#38369a", 
                color: "#fff", 
                "&:hover": { backgroundColor: "#8b8c89" } }}
            >
              Send Reset Link
            </Button>
          </Box>
        </Paper>
      </Container>
      
    </>
  );
}






