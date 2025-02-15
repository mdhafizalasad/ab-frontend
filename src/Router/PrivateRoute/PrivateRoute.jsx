import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../pages/Shared/Loading/Loading";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext); // Context for authentication
  const location = useLocation(); // Tracks the current location

  // Show a loading indicator if data is still being fetched
  if (loading) {
    return <Loading />;
  }

  // If the user is authenticated, render the children components
  // if (user) {
  //   return children;
  // }

  // If not authenticated, redirect to the login page with the current location state
  // return <Navigate to="/login" state={{ from: location }} replace />;

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children; // Show protected page if logged in
};

export default PrivateRoute;
 