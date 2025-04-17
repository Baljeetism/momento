// const BASE_URL = process.env.BASE_URL_REACT
// console.log("API_BASE_URL:", BASE_URL);
// console.log("ENV VARIABLES:", process.env);
// const BASE_URL ="https://localhost:3000/#/api";

const BASE_URL ="https://3.109.58.111:443/api"
console.log(BASE_URL);
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
console.log(API_ENDPOINTS.REVIEWS);

export default API_ENDPOINTS;
