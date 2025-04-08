import {jwtDecode} from "jwt-decode";
import axios from "axios";
import API_ENDPOINTS from "../api"; 

export const isSuperUser = async () => {
    const token = localStorage.getItem("access_token");
    if (!token) return false;

    try {
        const decoded = jwtDecode(token); // Decode JWT token
        const userId = decoded.user_id; // Extract user_id

        // Fetch user details from backend
        const response = await axios.get(API_ENDPOINTS.USERID(userId), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        // console.log(response.data.is_superuser);
        return response.data.is_superuser; // Return the superuser status
    } catch (error) {
        console.error("Error fetching user details:", error);
        return false;
    }
};
