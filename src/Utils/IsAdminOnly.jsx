import {jwtDecode} from "jwt-decode";
import axios from "axios";
import API_ENDPOINTS from "../api";
// import API_ENDPOINTS from "../api"; // Ensure you have an API endpoint for fetching user details

export const isAdminOnly = async () => {
    const token = localStorage.getItem("access_token");
    if (!token) return false;

    try {
        const decoded = jwtDecode(token); // Decode JWT token
        const userId = decoded.user_id; // Extract user_id
        // console.log(decoded);

        // Fetch user details from backend
        const response = await axios.get(API_ENDPOINTS.USERID(userId), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data.is_admin);
        return response.data.is_admin; // Return the superuser status
    } catch (error) {
        console.error("Error fetching user details:", error);
        return false;
    }
};