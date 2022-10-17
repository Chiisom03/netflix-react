// import React from "react";
// import { Navigate } from "react-router-dom";
// import { UserAuth } from "../context/authContext";

const ProtectedRoute = ({ children }) => {
  // const { user } = UserAuth;
  return children;
  // return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
