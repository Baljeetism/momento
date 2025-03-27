import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Container, Typography, Card } from '@mui/material';
// import Alert from '@mui/material/Alert';
import Swal from 'sweetalert2'
import API_ENDPOINTS from "../../api";

export default function ResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [re_newPassword, setReNewPassword] = useState('');
    const { uid, token } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== re_newPassword) {
            // <Alert severity="error">Passwords don't match!</Alert>
            Swal.fire({
               
                text: "Passwords don't match!",
                icon: "error"
              });
            // alert("Passwords don't match!");
            return;
        }

        try {
            await axios.post(API_ENDPOINTS.RESET_CONFIRM, {
                uid,
                token,
                new_password: newPassword,
                re_new_password: re_newPassword
            });

            // alert('Password reset successfully!');
            // <Alert severity="success">Password reset successfully!</Alert>
            Swal.fire({
                title: "Good job!",
                text: "Password reset successfully!",
                icon: "success"
              });
            navigate('/login');
        } catch (err) {
            console.error('Error:', err);
            console.log(err.response.data);
            // <Alert severity="error">Failed to reset password!</Alert>
            Swal.fire({
                
                text: "Failed to reset password!",
                icon: "error"
              });
            // alert('Failed to reset password!');
        }
    };

    return (
        <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
            <Card sx={{ p: 4, boxShadow: 3, borderRadius: 2, width: "100%" }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Set New Password
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="New Password"
                        variant="outlined"
                        margin="normal"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Confirm New Password"
                        variant="outlined"
                        margin="normal"
                        type="password"
                        value={re_newPassword}
                        onChange={(e) => setReNewPassword(e.target.value)}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2,backgroundColor: "#38369a", 
                    color: "#fff", 
                    "&:hover": { backgroundColor: "#8b8c89" } }}>
                        Reset Password
                    </Button>
                </form>
            </Card>
        </Container>
    );
}




