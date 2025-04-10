const BASE_URL = process.env.BASE_URL


const API_ENDPOINTS = {
  BASE:`${BASE_URL}/`,
  EVENTSP: `${BASE_URL}/eventsz/`,
  EVENTS: `${BASE_URL}/events/`,
  LOGIN: `${BASE_URL}/auth/login/`,
  SIGNUP: `${BASE_URL}/auth/users/`,
  RSVP: `${BASE_URL}/rsvp/`,
  RESET_REQUEST: `${BASE_URL}/auth/users/reset_password/`,
  RESET_CONFIRM: `${BASE_URL}/auth/users/reset_password_confirm/`,
  GET_USERS : `${BASE_URL}/auth/usersz/`,
  MAKE_ADMIN: `${BASE_URL}/auth/make-admin/`,
  EXPLORE_EVENTS: (id) => `${BASE_URL}/events/${id}/`,
  REVIEWS:`${BASE_URL}/reviews/reviews/`,
  USERID: (id) => `${BASE_URL}/auth/users/${id}/`,
  EVENTS_BY_CREATOR: (creatorId) => `${BASE_URL}/?created_by=${creatorId}`
  
};

export default API_ENDPOINTS;
