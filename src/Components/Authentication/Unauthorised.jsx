import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";

const Unauthorized = () => {
    return (
        <Container
            maxWidth="sm"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                textAlign: "center",
                // background: "linear-gradient(135deg, #a9d6e5, #2a6f97)",
                borderRadius: 4,
                // boxShadow: 5,
                p: 4,
            }}
        >
            <Box
                sx={{
                    backgroundColor: "white",
                    borderRadius: "20px",
                    padding: "40px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                <LockIcon sx={{ fontSize: 60, color: "#d32f2f" }} />
                
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "black" }}>
                    403 - Unauthorized
                </Typography>

                <Typography variant="body1" sx={{ color: "gray", mb: 2 }}>
                    You do not have permission to view this page.
                </Typography>

                <Button
                    component={Link}
                    to="/"
                    variant="contained"
                    sx={{
                        backgroundColor: "black",
                        borderRadius: "30px",
                        padding: "10px 20px",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                        transition: "transform 0.2s",
                        "&:hover": { transform: "scale(1.05)" },
                    }}
                >
                    Go Back to Home
                </Button>
            </Box>
        </Container>
    );
};

export default Unauthorized;
