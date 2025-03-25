import Home from "./Components/Navbar/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./Components/Navbar/AboutUs";
import ContactUs from "./Components/Navbar/ContactUs";
import Login from "./Components/Authentication/Login";
import Events from "./Components/Navbar/Events";
import Signup from "./Components/Authentication/Signup";
import ProtectedRoute from "./Components/Authentication/ProtectedRoute";
import ResetRequest from "./Components/Authentication/ResetRequest";
import ResetPassword from "./Components/Authentication/ResetPassword";
import Error from "./Components/Error";
import TestN from "./Components/TestN";
import List from "./Components/Events/List";
import EventCreation from "./Components/Events/EventCreation";




const App = () => {
  return (
    <Router>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/events" element={<List />} /> */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset" element={<ResetRequest />} />
        <Route path="/error" element={<Error />} />
        <Route path="/password/reset/confirm/:uid/:token" element={<ResetPassword />} />
        <Route path="/test" element={<TestN />} />
        <Route path="/EventCreate" element={<EventCreation />} />

        
        <Route
          path="/events"
          element={
            <ProtectedRoute>
              <List />
            </ProtectedRoute>
          }
        />

      </Routes>

    </Router>
  );
};

export default App;
