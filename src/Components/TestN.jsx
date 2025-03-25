import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function TestN() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    alert("Logged out successfully!");
    window.location.href = "/login";
  };

  const navItems = [
    { label: "Events", path: "/events" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
  ];

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.label} component={Link} to={item.path}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <ListItem button onClick={handleLogout}>
          <ListItemText primary="Logout" sx={{ color: "red" }} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="static" sx={{ backgroundColor: "#333" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, textDecoration: "none", color: "#fff" }}
          >
            Momento
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item.label} component={Link} to={item.path} sx={{ color: "#fff" }}>
                {item.label}
              </Button>
            ))}
            {localStorage.getItem("access_token") ? (
              <Button onClick={handleLogout} sx={{ color: "red" }}>
                Logout
              </Button>
            ) : (
              <Button component={Link} to="/login" sx={{ color: "#fff" }}>
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
