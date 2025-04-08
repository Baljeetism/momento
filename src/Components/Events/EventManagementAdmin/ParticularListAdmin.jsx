import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  CircularProgress, 
  Button 
} from '@mui/material';
import axios from 'axios';
import axiosInstance from '../../../axiosInstance';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Navbar/Footer';
import Swal from 'sweetalert2';
import API_ENDPOINTS from '../../../api';
import { isAdminOnly } from '../../../Utils/IsAdminOnly';
import EventCard from './EventCard';
import EventActions from './EventActions';
import AttendeeList from './AttendeeList';
import PaginationControls from './PaginationControls';
import { Link } from 'react-router-dom';


const ParticularList = () => {
  const [isAdmin, setIsAdmin] = useState();
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [users, setUsers] = useState([]);
  const [attendeeCounts, setAttendeeCounts] = useState({});
  const [loading, setLoading] = useState(true);

  // Pagination
  const [currentEventPage, setCurrentEventPage] = useState(1);
  const eventsPerPage = 5;
  const [currentAttendeePage, setCurrentAttendeePage] = useState(1);
  const attendeesPerPage = 5;

  useEffect(() => {
    fetchEvents();
    checkAdminStatus();
  }, []);

  const checkAdminStatus = async () => {
    const adminStatus = await isAdminOnly();
    setIsAdmin(adminStatus);
  };

  const handleDelete = async (eventId) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'This event will be permanently deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        const token = localStorage.getItem('access_token');
        await axios.delete(`${API_ENDPOINTS.EVENTS}${eventId}/`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEvents(prev => prev.filter(event => event.id !== eventId));
        Swal.fire({ 
          title: 'Deleted!', 
          text: 'Event has been deleted.', 
          icon: 'success', 
          timer: 2000 
        });
      } catch (error) {
        Swal.fire({ 
          title: 'Error!', 
          text: error.response?.data?.detail || 'Failed to delete the event.', 
          icon: 'error' 
        });
      }
    }
  };

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get('/events/');
      setEvents(response.data);

      const counts = {};
      await Promise.all(response.data.map(async (event) => {
        try {
          const rsvpResponse = await axiosInstance.get(`/rsvp/rsvp/event/${event.id}/`);
          counts[event.id] = rsvpResponse.data.length;
        } catch (error) {
          counts[event.id] = 0;
        }
      }));
      setAttendeeCounts(counts);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsersForEvent = async (eventId) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/rsvp/rsvp/event/${eventId}/`);
      const usersWithDetails = await Promise.all(
        response.data.map(async (rsvp) => {
          try {
            const userResponse = await axiosInstance.get(`/auth/users/${rsvp.user}/`);
            return {
              ...rsvp,
              user: {
                ...userResponse.data,
                fullName: `${userResponse.data.first_name} ${userResponse.data.last_name}`
              }
            };
          } catch (error) {
            return {
              ...rsvp,
              user: { 
                first_name: 'Unknown', 
                last_name: 'User', 
                fullName: 'Unknown User' 
              }
            };
          }
        })
      );
      setUsers(usersWithDetails);
      setSelectedEvent(eventId);
      setCurrentAttendeePage(1);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  // Pagination logic
  const indexOfLastEvent = currentEventPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalEventPages = Math.ceil(events.length / eventsPerPage);

  const indexOfLastAttendee = currentAttendeePage * attendeesPerPage;
  const indexOfFirstAttendee = indexOfLastAttendee - attendeesPerPage;
  const currentAttendees = users.slice(indexOfFirstAttendee, indexOfLastAttendee);
  const totalAttendeePages = Math.ceil(users.length / attendeesPerPage);

  return (
    <>
      <Navbar />
      
      <Box sx={{ minHeight: '50vh', mt: 12 ,ml:10}}>
        <Button component={Link} to='/admin' sx={{
              backgroundColor: 'white',
              borderRadius: "30px",
              padding: "10px 20px",
              color:'red',
              fontSize: "1rem",
              fontWeight: "bold",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.05)" },
            }}>Admin Panel</Button>
        <Container>
          <Typography variant="h4" gutterBottom textAlign="center" sx={{ fontWeight: 'bold', mb: 3 }}>
            Upcoming Events
          </Typography>

          {loading && events.length === 0 ? (
            <Box display="flex" justifyContent="center" my={4}>
              <CircularProgress />
            </Box>
          ) : (
            <>
              <Grid container spacing={3} justifyContent="center">
                {currentEvents.map((event) => (
                  <Grid item xs={12} md={8} key={event.id}>
                    <EventCard 
                      event={event} 
                      attendeeCount={attendeeCounts[event.id]}
                    >
                      <EventActions 
                        isAdmin={isAdmin} 
                        eventId={event.id} 
                        onDelete={handleDelete} 
                      />
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => fetchUsersForEvent(event.id)}
                        sx={{ mt: 1 }}
                      >
                        View Details
                      </Button>
                    </EventCard>
                  </Grid>
                ))}
              </Grid>

              {events.length > eventsPerPage && (
                <PaginationControls
                  count={totalEventPages}
                  page={currentEventPage}
                  onChange={(e, value) => setCurrentEventPage(value)}
                />
              )}
            </>
          )}

          {selectedEvent && (
            <AttendeeList
              attendees={currentAttendees}
              eventTitle={events.find(e => e.id === selectedEvent)?.title || 'Event'}
              loading={loading}
              totalAttendees={users.length}
              paginationControls={
                users.length > attendeesPerPage && (
                  <PaginationControls
                    count={totalAttendeePages}
                    page={currentAttendeePage}
                    onChange={(e, value) => setCurrentAttendeePage(value)}
                    size="medium"
                  />
                )
              }
            />
          )}
        </Container>
      </Box>
      
      <Footer />
    </>
  );
};

export default ParticularList;