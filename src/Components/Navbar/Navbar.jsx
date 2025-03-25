import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const navItems = [
  { label: "Events", path: "/events" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function Navbar({ handleDrawerToggle, mobileOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    Swal.fire({
            
            text: "Logged Out!",
            icon: "success",
          });
    navigate("/login");
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      {navItems.map((item) => (
        <Button key={item.label} component={Link} to={item.path} sx={{ color: "#00072d" }}>
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
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="static" sx={{ backgroundColor: "#979dac", boxShadow: 0, mt: 1 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left Section: Logo */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "#04080f",
              fontWeight: "bold",
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
                sx={{ color: "#04080f", fontWeight: "bold", fontSize: "1rem" }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Right Section: Login/Logout Button */}
          <Box>
            {localStorage.getItem("access_token") ? (
              <Button
                onClick={handleLogout}
                sx={{
                  color: "#04080f",
                  border: "2px solid #e2eafc",
                  borderRadius: "8px",
                  fontWeight: "bold",
                }}
              >
                Logout
              </Button>
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
          </Box>

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
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;



// import React from "react";
// import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Link } from "react-router-dom";

// const navItems = [
//   { label: "Events", path: "/events" },
//   { label: "About", path: "/about" },
//   { label: "Contact", path: "/contact" },
// ];
// const handleLogout = () => {
//   localStorage.removeItem("access_token");
//   localStorage.removeItem("refresh_token");
//   alert("Logged out successfully!");
//   window.location.href = "/login";
// };

// function Navbar({ handleDrawerToggle, mobileOpen, handleLogout }) {
//   const drawer = (
//     <Box sx={{ width: 250 }}>
//       {navItems.map((item) => (
//         <Button key={item.label} component={Link} to={item.path} sx={{ color: "#00072d" }}>
//           {item.label}
//         </Button>
//       ))}
//       {localStorage.getItem("access_token") ? (
//         <Button onClick={handleLogout} sx={{ color: "#e5383b" }}>
//           Logout
//         </Button>
//       ) : (
//         <Button component={Link} to="/login" sx={{ color: "#00072d" }}>
//           Login
//         </Button>
//       )}
//     </Box>
//   );



//   return (
//     <Box sx={{ display: "flex" }}>
//       <AppBar position="static" sx={{ backgroundColor: "#979dac",boxShadow: 0 ,mt:1}}>
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           {/* Left Section: Logo */}
//           <Typography
//             variant="h6"
//             component={Link}
//             to="/"
//             sx={{
//               textDecoration: "none",
//               color: "#04080f",
//               fontWeight: "bold",
//               fontSize: "2rem",
//             }}
//           >
//             Momento
//           </Typography>

//           {/* Center Section: Navigation Links */}
//           <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2,border: "2px solid #354f52",
//                   borderRadius: 8,p: 1 }}>
//             {navItems.map((item) => (
//               <Button
//                 key={item.label}
//                 component={Link}
//                 to={item.path}
//                 sx={{ color: "#04080f", fontWeight: "bold", fontSize: "1rem" }}
//               >
//                 {item.label}
//               </Button>
//             ))}
//           </Box>

//           {/* Right Section: Login/Logout Button */}
//           <Box>
//             {localStorage.getItem("access_token") ? (
//               <Button
//                 onClick={handleLogout}
//                 sx={{
//                   color: "#04080f",
//                   border: "2px solid #e2eafc",
//                   borderRadius: "8px",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Logout
//               </Button>
//             ) : (
//               <Button
//                 component={Link}
//                 to="/login"
//                 sx={{
//                   color: "#0d0106",
//                   fontWeight: "bold",
//                   border: "2px solid #354f52",
//                   borderRadius: 8,
//                   mx: 2,
//                   p: 1,
//                 }}
//               >
//                 Login 
//               </Button>
//             )}
//           </Box>

//           {/* Mobile Menu Icon */}
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="end"
//             onClick={handleDrawerToggle}
//             sx={{ display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer */}
//       <nav>
//         <Drawer
//           anchor="left"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{ keepMounted: true }}
//           sx={{ display: { xs: "block", sm: "none" } }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// }

// export default Navbar;



// import React from "react";
// import { Link } from "react-router-dom";
// import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useState } from "react";


// export default function TestN() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("access_token");
//     localStorage.removeItem("refresh_token");
//     alert("Logged out successfully!");
//     window.location.href = "/login";
//   };

//   const navItems = [
//     { label: "Events", path: "/events" },
//     { label: "About Us", path: "/about" },
//     { label: "Contact Us", path: "/contact" },
//   ];

//   const drawer = (
//     <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
//       <List>
//         {navItems.map((item) => (
//           <ListItem button key={item.label} component={Link} to={item.path}>
//             <ListItemText primary={item.label} />
//           </ListItem>
//         ))}
//         <ListItem button onClick={handleLogout}>
//           <ListItemText primary="Logout" sx={{ color: "red" }} />
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <Box sx={{ display: "flex" }}>
//       <AppBar position="static" sx={{ backgroundColor: "#00072d" }}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component={Link}
//             to="/"
//             sx={{ flexGrow: 1, textDecoration: "none", color: "#e7ecef",fontWeight: "bold" ,fontSize: "2rem" }}
//           >
//             Momento
//           </Typography>
//           <Box sx={{ display: { xs: "none", sm: "block" } }}>
//             {navItems.map((item) => (
//               <Button key={item.label} component={Link} to={item.path} sx={{ color: "#e2eafc",fontWeight: "bold",fontSize: "1rem" }}>
//                 {item.label}
//               </Button>
//             ))}
//             {localStorage.getItem("access_token") ? (
//               <Button onClick={handleLogout} sx={{ color: "#e5383b", border: "2px solid #e2eafc", borderRadius: "8px" }}>
//                 Logout
//               </Button>
//             ) : (
//               <Button component={Link} to="/login" sx={{ color: "#e2eafc" ,fontWeight: "bold", border: "2px solid #354f52", borderRadius: "8px",mx: 2, p:1 }}>
//                 Login
//               </Button>
//             )}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           anchor="left"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{ keepMounted: true }}
//           sx={{ display: { xs: "block", sm: "none" } }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// }




