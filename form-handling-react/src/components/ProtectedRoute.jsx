import React from "react";
import { Navigate } from "react-router-dom";

// Simple useAuth hook for authentication simulation
const useAuth = () => {
  // Change to true to simulate logged-in user
  const user = { loggedIn: true };
  return user;
};

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();

  if (!auth.loggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
