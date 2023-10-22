import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
// import AdminDashboard from './components/admin/AdminDashboard';
import jwt_decode from "jwt-decode";

const RouteGuard = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Decode the JWT and check the "role" claim
    const token = localStorage.getItem("token"); // Retrieve the JWT from local storage or a secure storage method
    console.log("admin token",token)
    if (token) {
      const decodedToken = jwt_decode(token);
      if (decodedToken.role === "admin") {
        setIsAdmin(true);
        console.log(decodedToken);
        console.log('admin', setIsAdmin())
      }
    }
  }, []);
  

  if (isAdmin) {
    return <Navigate to='/admin' />
  } else {
    return <Navigate to="/login" />;
  }
};

export default RouteGuard;
