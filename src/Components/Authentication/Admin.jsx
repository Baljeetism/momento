import React, { useState, useEffect } from "react";
import {Box,Typography,List,ListItem,ListItemAvatar,ListItemText,Switch,Avatar,CircularProgress,Divider} from "@mui/material";
import { Person, SupervisorAccount } from "@mui/icons-material";
import axios from "axios";
import Swal from "sweetalert2";
import API_ENDPOINTS from "../../api";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_ENDPOINTS.GET_USERS)
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const handleToggleAdmin = (userId, currentStatus) => {
    const newStatus = !currentStatus;
    setLoading(true);
    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .patch(`${API_ENDPOINTS.MAKE_ADMIN}${userId}/`, { is_admin: newStatus }, config)
      .then((response) => {
        Swal.fire({
          title: "Success!",
          text: response.data.message,
          icon: "success",
          timer: 2000,
        });
        setUsers((prevUsers) =>
          prevUsers.map((user) => (user.id === userId ? { ...user, is_admin: newStatus } : user))
        );
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error.response ? error.response.data.error : "Failed to update user",
          icon: "error",
          timer: 2000,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Navbar />
      <Box sx={{ mt: 12, minHeight: "100vh", bgcolor: "#f9f9f9", p: 3 }}>

        <Typography variant="h4" textAlign="center" sx={{ fontWeight: "bold", mb: 3 }}>
          Manage Users
        </Typography>

        <Box sx={{ maxWidth: 600, mx: "auto", bgcolor: "white", borderRadius: 2, boxShadow: 3 }}>
          <List>
            {users.map((user, index) => (
              <React.Fragment key={user.id}>
                <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: user.is_admin ? "primary.main" : "grey.500" }}>
                      {user.is_admin ? <SupervisorAccount /> : <Person />}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={user.email}
                    secondary={user.is_admin ? "Administrator" : "Regular User"}
                  />
                  <Switch
                    checked={user.is_admin}
                    onChange={() => handleToggleAdmin(user.id, user.is_admin)}
                    color="primary"
                  />
                </ListItem>
                {index < users.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Box>


      </Box>
      <Footer />
    </>
  );
};

export default Admin;
