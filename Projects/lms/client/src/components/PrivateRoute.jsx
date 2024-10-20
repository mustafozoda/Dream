import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "/src/context/AuthContext.jsx";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
