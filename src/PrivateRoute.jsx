import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext"; // Adjust path as needed

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
