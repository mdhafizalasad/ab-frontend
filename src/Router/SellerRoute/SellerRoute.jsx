import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import useSeller from "../../hooks/useSeller";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../pages/Shared/Loading/Loading";

const SellerRoute = ({ children }) => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const [isSeller, sellerLoading] = useSeller(user?.email);
  
  const location = useLocation();

  if (authLoading || sellerLoading) {
    return <Loading />;
  }

  if (user && isSeller) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default SellerRoute;
