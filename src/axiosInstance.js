import axios from "axios";
import API_ENDPOINTS from "./api";

const axiosInstance = axios.create({
  baseURL: API_ENDPOINTS.BASE,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if the error response exists and is a 401 error (Unauthorized)
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refresh_token");

      if (!refreshToken) {
        console.error("No refresh token available.");
        window.location.href = "/login";
        return Promise.reject(error);
      }

      try {
        const res = await axiosInstance.post("/auth/jwt/refresh/", {
          refresh: refreshToken,
        });

        localStorage.setItem("access_token", res.data.access);

        // Update the Authorization header and retry the original request
        originalRequest.headers.Authorization = `Bearer ${res.data.access}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        console.error("Token refresh failed:", err);
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
