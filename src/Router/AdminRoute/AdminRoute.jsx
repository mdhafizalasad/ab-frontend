import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../pages/Shared/Loading/Loading";
import useSeller from "../../hooks/useSeller"; // ✅ Added useSeller hook



//   if (user && isAdmin) {
//     return children;
//   }
//   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
// };

// export default AdminRoute;
// components/AdminRoute/AdminRoute.js



const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email); // ✅ Get the seller status
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loading></Loading>;
  }

  // Allow only Admins to view the restricted pages, but not Sellers
  if (user && isAdmin && !isSeller) {
    return children;
  }

  // If not Admin or Seller, redirect to another page
  return <Navigate to="/dashboard" state={{ from: location }} replace />;
};

export default AdminRoute;
