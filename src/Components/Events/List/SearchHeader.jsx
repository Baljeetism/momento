import React from "react";
import { Container, Typography, Grid, TextField, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";


const SearchHeader = ({ searchFilters, setSearchFilters, handleSearch, clearFilters, isAdmin }) => {

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "30vh",
        borderRadius: 4,
        boxShadow: 5,
        p: 3,
        mb: 4,
        mt: 15,
        textAlign: "center",
        background: "linear-gradient(135deg, #dee2e6, #6c757d)"
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", color: "black", mb: 2 }}>
        Discover Your Next Experience
      </Typography>

      <Grid container spacing={2} sx={{ width: "100%", mt: 2 }}>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            name="artist"
            label=" Search by Artist"
            variant="outlined"
            value={searchFilters.artist}
            onChange={handleInputChange}
            sx={{
              backgroundColor: "#eff7f6",
              borderRadius: "12px",
              transition: "all 0.3s ease-in-out",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",

                transition: "0.3s",
                "& fieldset": {
                  border: "2px solid transparent",
                },
                "&:hover fieldset": {
                  border: "2px solid black",
                },

              },

            }}
          />

        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            name="location"
            label="Search by Location"
            variant="outlined"
            value={searchFilters.location}
            onChange={handleInputChange}
            sx={{
              backgroundColor: "#eff7f6",
              borderRadius: "12px",
              transition: "all 0.3s ease-in-out",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",

                transition: "0.3s",
                "& fieldset": {
                  border: "2px solid transparent",
                },
                "&:hover fieldset": {
                  border: "2px solid black",
                },

              },

            }}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            name="date"
            type="date"
            variant="outlined"
            label={"Search by Date"} // 🔥 Dynamic label
            InputLabelProps={{ shrink: true }}
            value={searchFilters.date}
            onChange={handleInputChange}
           
            onBlur={() => !searchFilters.date } // Reset label if empty
            sx={{
              backgroundColor: "#eff7f6",
              borderRadius: "12px",
              transition: "all 0.3s ease-in-out",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                transition: "0.3s",
                "& fieldset": {
                  border: "2px solid transparent",
                },
                "&:hover fieldset": {
                  border: "2px solid #34a0a4",
                },
                "&.Mui-focused fieldset": {
                  border: "2px solid #168aad",
                  boxShadow: "0px 0px 8px rgba(22, 138, 173, 0.4)",
                },
              },
              "& .MuiInputLabel-root": {
                fontSize: "1rem",
                fontWeight: "600",
                color: "#168aad",
              },
            }}
          />

        </Grid>

        <Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button
            variant="outlined"
            onClick={clearFilters}
            sx={{ borderRadius: "30px", padding: "10px 20px", color: 'black', border: '2px solid black' }}
          >
            Clear Filters
          </Button>
          <Button
            component={Link}
            to="/EventCreate"
            variant="contained"
            disabled={!isAdmin}
            startIcon={<AddIcon />}
            sx={{
              backgroundColor: 'black',
              borderRadius: "30px",
              padding: "10px 20px",
              fontSize: "1rem",
              fontWeight: "bold",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            Create An Event
          </Button>
          <Button
            variant="contained"
            onClick={handleSearch} // 🔹 Triggers search function
            sx={{
              backgroundColor: 'black',
              borderRadius: "30px",
              padding: "10px 20px",
              fontSize: "1rem",
              fontWeight: "bold",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchHeader;
