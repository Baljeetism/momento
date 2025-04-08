import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, Avatar, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import Swal from "sweetalert2";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { isSuperUser } from "../../Utils/auth";
import { isAdminOnly } from "../../Utils/IsAdminOnly";


const navItems = [
  { label: "Events", path: "/events" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function Navbar({ handleDrawerToggle, mobileOpen }) {

  const navigate = useNavigate();
  const location = useLocation(); // Get current route
  const [anchorEl, setAnchorEl] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [superuser, setSuperUser] = useState();
  const [adminuser, setAdminUser] = useState();

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("registered_events")) || [];
    setRegisteredEvents(events);
    const checkAdmin = async () => {
      const adminStatus = await isSuperUser();
      setSuperUser(adminStatus);
      // console.log(adminStatus);
      const Status = await isAdminOnly();
      setAdminUser(Status);

    };
    checkAdmin();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    Swal.fire({ text: "Logged Out!", icon: "success" });
    navigate("/login");
  };

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#f8f9fa", boxShadow: 2 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left Section: Logo */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "#04080f",
              fontFamily: "Alfa Slab One, serif",
              fontWeight: 400,
              fontSize: "2rem",
            }}
          >
            Momento
          </Typography>

          {/* Center Section: Navigation Links */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2, p: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: location.pathname === item.path ? "purple" : "#04080f", // Change text color dynamically
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Right Section: Avatar Dropdown */}
          {localStorage.getItem("access_token") ? (
            <Box>
              <IconButton onClick={handleMenuOpen}>
                <Avatar sx={{ bgcolor: "#354f52" }}>
                  <AccountCircleIcon />
                </Avatar>
              </IconButton>

              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                {registeredEvents.length > 0 ? (
                  registeredEvents.map((event, index) => (
                    <MenuItem key={index} onClick={handleMenuClose}>
                      {event}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem component={Link} to="/uevents">Registered Events</MenuItem>
                )}

                <MenuItem disabled={!superuser} component={Link} to="/guests">Guest list</MenuItem>
                <MenuItem disabled={!adminuser} component={Link} to="/eventspu">Dashboard</MenuItem>

                <MenuItem onClick={handleLogout} sx={{ color: "red" }}>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Button
              component={Link}
              to="/login"
              sx={{
                color: "#0d0106",
                fontWeight: "bold",
                border: "2px solid #354f52",
                borderRadius: 8,
                mx: 2,
                p: 1,
              }}
            >
              Login
            </Button>
          )}

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <nav>
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <Box sx={{ width: 250 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{ color: location.pathname === item.path ? "purple" : "#00072d" }} // Change drawer text color dynamically
              >
                {item.label}
              </Button>
            ))}
            {localStorage.getItem("access_token") ? (
              <Button onClick={handleLogout} sx={{ color: "#e5383b" }}>
                Logout
              </Button>
            ) : (
              <Button component={Link} to="/login" sx={{ color: "#00072d" }}>
                Login
              </Button>
            )}
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;
