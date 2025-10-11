// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

// Dummy useAuth hook
function useAuth() {
  // Simulate a logged-in user (change to false to test redirection)
  const user = { loggedIn: true };
  return user;
}

export default function ProtectedRoute({ children }) {
  const auth = useAuth();

  if (!auth.loggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
