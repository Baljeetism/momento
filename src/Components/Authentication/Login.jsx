import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  TextField, Button, Container, Typography, Card,
  CircularProgress, InputAdornment, IconButton, Grid, Box
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";
import axiosInstance from "../../axiosInstance";
import Swal from "sweetalert2";
import API_ENDPOINTS from "../../api";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) navigate("/");
  }, [navigate]);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post(API_ENDPOINTS.LOGIN, credentials);
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);

      Swal.fire({
        title: "Welcome back!",
        text: "Login successful!",
        icon: "success",
        timer: 2000,
      });

      navigate("/", { replace: true });

    } catch (err) {
      Swal.fire({
        text: "Invalid credentials!",
        icon: "error",
        timer: 5000,
      });
    }
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Branding */}
          <Grid item xs={12} md={6} sx={{
            backgroundColor: "#f8f9fa",
            color: "#00171f",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            p: { xs: 2, md: 4 },
          }}>
            <Typography variant="h3" sx={{ fontWeight: "bold", fontSize: { xs: "3rem", md: "5rem" } }}>
              Momento
            </Typography>
            <Typography variant="h6" sx={{
              mt: 2,
              fontStyle: "italic",
              color: "#3A0CA3",
              fontFamily: "Outfit, sans-serif",
              fontSize: { xs: "1rem", md: "1.2rem" }
            }}>
              "Every great event begins with a single login"
            </Typography>
          </Grid>

          {/* Right Side - Login Form */}
          <Grid item xs={12} sm={10} md={6} display="flex" justifyContent="center">
            <Card sx={{
              p: 4,
              borderRadius: 2,
              boxShadow: 5,
              width: "100%",
              maxWidth: 400
            }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  margin="normal"
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                />

                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  margin="normal"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2, backgroundColor: "#38369a",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#8b8c89" }
                  }}
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : "Login"}
                </Button>

                <Button
                  component={Link}
                  to="/reset"
                  variant="outlined"
                  fullWidth
                  sx={{ mt: 1, color: "#6096ba" }}
                >
                  Forgotten password?
                </Button>

                <Button
                  component={Link}
                  to="/signup"
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 3, backgroundColor: "#20bf55",
                    color: "#00072d",
                    "&:hover": { backgroundColor: "#6096ba" }
                  }}
                >
                  Create New Account
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
