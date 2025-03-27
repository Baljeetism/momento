import Home from "./Components/Navbar/Home";
import AboutUs from "./Components/Navbar/AboutUs";
import ContactUs from "./Components/Navbar/ContactUs";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import ResetRequest from "./Components/Authentication/ResetRequest";
import ResetPassword from "./Components/Authentication/ResetPassword";
import Error from "./Components/Error";
import TestN from "./Components/TestN";
import List from "./Components/Events/List";
import EventCreation from "./Components/Events/EventCreation";
import ExploreEvent from "./Components/Events/ExploreEvents";
import UpdateEvent from "./Components/Events/UpdateEvent";
import Rsvp from "./Components/Events/Rsvp";




export const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/contact", element: <ContactUs /> },
    { path: "/about", element: <AboutUs /> },
    { path: "/signup", element: <Signup /> },
    { path: "/reset", element: <ResetRequest /> },
    { path: "/error", element: <Error /> },
    { path: "/password/reset/confirm/:uid/:token", element: <ResetPassword /> },
    { path: "/test", element: <TestN /> },
    { path: "/EventCreate", element: <EventCreation /> },
    { path: "/events/:eventId", element: <ExploreEvent /> },
    { path: "/events/update/:eventId", element: <UpdateEvent /> },
    {path:"/rsvp/:eventId", element:<Rsvp />}
    
  ];
  
  export const protectedRoutes = [
    { path: "/events", element: <List /> },
  ];