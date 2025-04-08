import React from "react";
import { Button, Box, Typography } from "@mui/material";

const RSVPControls = ({ status, loading, onRSVP }) => {
  if (status === null) {
    return (
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={() => onRSVP("Attending")}
        disabled={loading}
        sx={{
          mt: 2,
          px: 4,
          py: 1.5,
          fontSize: "1.1rem",
          fontWeight: "bold",
          textTransform: "none",
          borderRadius: "8px",
          boxShadow: 3,
          "&:hover": {
            boxShadow: 6,
            transform: "translateY(-2px)",
          },
        }}
      >
        Register for Event
      </Button>
    );
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        You are already marked as
        <span
          style={{
            color:
              status === "Attending"
                ? "green"
                : status === "Maybe"
                  ? "orange"
                  : "red",
            marginLeft: "8px",
          }}
        >
          "{status}" 
        </span>
        for this event.
      </Typography>
    </Box>
  );
};

export default RSVPControls;