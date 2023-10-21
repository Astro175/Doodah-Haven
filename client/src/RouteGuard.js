// RouteGuard.js - Create a route guard
import React from "react";
import { Navigate } from "react-router-dom";

const RouteGuard = ({ element, isAdmin }) => {
    if (isAdmin) {
      // Render routes for admin
      return element;
    } else {
      // Redirect or render different content for regular users
      return <Navigate to="/login" />;
    }
  };

export default RouteGuard;