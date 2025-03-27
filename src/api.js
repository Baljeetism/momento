
const BASE_URL = "http://localhost:8000/api";

const API_ENDPOINTS = {
  EVENTS: `${BASE_URL}/events/`,
  LOGIN: `${BASE_URL}/auth/login/`,
  SIGNUP: `${BASE_URL}/auth/users/`,
  RESET_REQUEST: `${BASE_URL}/auth/users/reset_password/`,
  RESET_CONFIRM: `${BASE_URL}/auth/users/reset_password_confirm/`,
  EXPLORE_EVENTS: (id) => `${BASE_URL}/events/${id}/`, // Dynamic route
};

export default API_ENDPOINTS;
