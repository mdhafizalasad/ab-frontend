import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useBuyer from '../../hooks/useBuyer';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../pages/Shared/Loading/Loading';
import useAdmin from '../../hooks/useAdmin';

const BuyerRoute = ({ children }) => {
const { user, loading } = useContext(AuthContext);
const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  const location = useLocation();

  // if (loading || isBuyerLoading) {
  //   return <Loading />;
  // }

  // if (user && isBuyer) {
  //   return children;
  // }

  if (loading || isBuyerLoading || isAdminLoading) {
    return <Loading />;
  }
 
  if (user && (isBuyer || isAdmin)) {
    return children;
}


  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default BuyerRoute;