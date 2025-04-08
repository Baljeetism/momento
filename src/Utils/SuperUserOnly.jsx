import { isSuperUser } from "./auth"; // Ensure auth function is correctly implemented

const SuperUserOnly = ({ children }) => {
    return isSuperUser() ? children : null; // Render button only if the user is a superuser
};

export default SuperUserOnly;
