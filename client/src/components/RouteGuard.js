import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
// import AdminDashboard from './components/admin/AdminDashboard';
// import jwt_decode from "jwt-decode";

const AdminRouteGuard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const verifyAuth = async () => {
      const token = localStorage.getItem('token');
      console.log('token', token)
      if (!token) {
        return;
      }

      try {
        const response = await fetch('http://localhost:4000/api/admin/verify', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // const user = response.formData;
        if (response.ok) {
          const user = await response.json(); // Parse the response as JSON

          setIsLoggedIn(true);
          setIsAdmin(user.role === 'admin'); // Check if the user's role is 'admin'
        } else {
          // Handle error response
          console.error('Error logging in', response.statusText);
        }
      } catch (error) {
        console.error('Error logging in', error);
      }
    };
    verifyAuth();
  }, []);

  // return {
  //   isLoggedIn,
  //   isAdmin,
  // };

  // useEffect(() => {
  //   // Decode the JWT and check the "role" claim
  //   const token = localStorage.getItem("token"); // Retrieve the JWT from local storage or a secure storage method
  //   console.log("admin token",token)
  //   if (token) {
  //     const decodedToken = jwt_decode(token);
  //     if (decodedToken.role === "admin") {
  //       setIsAdmin(true);
  //       console.log(decodedToken);
  //       console.log('admin', setIsAdmin())
  //     }
  //   }
  // }, []);
  

  if (isLoggedIn && isAdmin) {
    return <Navigate to='/admin' />
  } else {
    return <Navigate to="/login" />;
  }
};

export default AdminRouteGuard;
