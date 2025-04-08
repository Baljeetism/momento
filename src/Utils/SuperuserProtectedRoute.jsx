import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isSuperUser } from "./auth";

const SuperuserProtectedRoute = () => {
    const [isSuper, setIsSuper] = useState(null);
    // const [isAdmin, setIsAdmin] = useState(null); // Start with null (loading state)

    useEffect(() => {
        const checkSuperUser = async () => {
            const result = await isSuperUser(); // Wait for API response
            // console.log("Superuser status:", result);
            setIsSuper(result);
        };
        checkSuperUser();
    }, [isSuper]);

    if (isSuper === null) return <p>Loading...</p>; // Show loading until check is complete

    return isSuper ? <Outlet /> : <Navigate to="/unauthorized" replace />;
};

export default SuperuserProtectedRoute;
