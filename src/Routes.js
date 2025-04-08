import Home from "./Components/Navbar/Home";
import AboutUs from "./Components/Navbar/AboutUs";
import ContactUs from "./Components/Navbar/ContactUs";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import ResetRequest from "./Components/Authentication/ResetRequest";
import ResetPassword from "./Components/Authentication/ResetPassword";
// import List from "./Components/Events/List";
import List from "./Components/Events//List/List";
import EventCreation from "./Components/Events/EventCreation";
import ExploreEvent from "./Components/Events/EventDetails/ExploreEvent";
import UpdateEvent from "./Components/Events/UpdateEvent";
import Rsvp from "./Components/Events/Rsvp";
import UserEvents from "./Components/Events/UserEvents";
// import EventList from "./Components/Events/EventList";
import Admin from "./Components/Authentication/Admin";
import Unauthorized from "./Components/Authentication/Unauthorised";
// import ParticularList from "./Components/Events/ParticularUserList";
import ParticularList from "./Components/Events/EventManagementParticular/ParticularList";
import ParticularListAdmin from "./Components/Events/EventManagementAdmin/ParticularListAdmin";



export const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/contact", element: <ContactUs /> },
    { path: "/about", element: <AboutUs /> },
    { path: "/signup", element: <Signup /> },
    { path: "/reset", element: <ResetRequest /> },
    { path: "/password/reset/confirm/:uid/:token", element: <ResetPassword /> },,
    { path: "/EventCreate", element: <EventCreation /> },
    { path: "/events/:eventId", element: <ExploreEvent /> },
    // { path: "/events/:eventId", element: <ExploreEvent /> },
    { path: "/events/update/:eventId", element: <UpdateEvent /> },
    {path:"/rsvp/:eventId", element:<Rsvp />},
    {path:"/uevents", element:<UserEvents />},
    { path: "/events", element: <List /> },
    {path:"/unauthorized", element:<Unauthorized />},
    {path:"/eventspu", element:<ParticularList />},
    
  ];
  
  // export const protectedRoutes = [
    
  // ];
  export const superuserProtected=[
    {path:"/admin", element:<Admin />},
    {path:"/guests", element:<ParticularListAdmin />},
  ];
  