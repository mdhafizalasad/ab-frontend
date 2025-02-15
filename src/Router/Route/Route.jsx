import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Home/Home";
import Visa from "../../pages/Visa/Visa";
import Login from "../../pages/Login/Login";
import SignUp from "./../../pages/SignUp/SignUp";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import MyAppointment from "../../pages/Dashboard/MyAppointments/MyAppointment";
import AllUsers from "./../../pages/Dashboard/AllUsers/AllUsers";
import PrivateRoute from "./../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddService from "../../pages/Dashboard/AddService/AddService";
import ProductsByCategory from "../../pages/ProductsByCategory/ProductsByCategory";
import Electronics from "../../pages/ProductsByCategory/Electronics";
import Vehicles from "../../pages/ProductsByCategory/Vehicles";
import BlogPage from "../../pages/Blog/BlogPage";
import NotFound from "../../pages/NotFound/NotFound";
import UsersList from "../../pages/Dashboard/UsersList";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import BuyerDashboard from "../../pages/Dashboard/Buyer/BuyerDashboard";
import Payment from "../../pages/Stripe Payment/Payment";
import MyOrders from "../../pages/MyOrders/MyOrders";
import BuyerOrders from "../../pages/BuyerOrders/BuyerOrders";
import SellerRoute from "../SellerRoute/SellerRoute";
import MyProduct from "../../pages/MyProduct/MyProduct";
import TestSeller from "../../pages/TestSeller";
import SellerDashboardLayout from "../../pages/Dashboard/Seller/SellerDashboardLayout";


const router = createBrowserRouter([
  {
    
   
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>
        
      },
     
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
      {
        path: "/shop",
        element: <Visa></Visa>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sing-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/product",
        element: 
        <PrivateRoute>
        <ProductsByCategory></ProductsByCategory>
        </PrivateRoute>
      },
      {
        path: "/electronics",
        element: 
        <PrivateRoute>
        <Electronics></Electronics>
        </PrivateRoute>
      },
      {
        path: "/vehicles",
        element: 
        <PrivateRoute>
        <Vehicles></Vehicles>
        </PrivateRoute>
      },
      // {
      //   path: "category/:id", // Add your category route here
      //   element: (
      //     <PrivateRoute>
      //       <CategoryPage></CategoryPage>
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
  {
    path: "/dashboard",
    
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: 
       
      //  <MyAppointment></MyAppointment>
       
        <MyProduct></MyProduct>
      },
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/users-list",
        element: (
          <AdminRoute>
            <UsersList></UsersList>
          </AdminRoute>
        ),
      },
      // {
      //   path: "/dashboard/add-service",
      //   element: (
      //     <AdminRoute>
      //       <AddService></AddService>
      //     </AdminRoute>
      //   ),
      // },
      {
        path: "/dashboard/buyer-orders",
        element: (
          <AdminRoute>
            <BuyerOrders></BuyerOrders>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/buyer",
        element: (
          <BuyerRoute>
            <BuyerDashboard></BuyerDashboard>
          </BuyerRoute>
        ),
      },
      // {
      //   path: "/dashboard/test",
      //   element: (
      //     <SellerRoute>
      //     <TestSeller></TestSeller>
      //     </SellerRoute> 
      //   ),
      // },
      // {
      //   path: "/dashboard/my-product",
      //   element: (
      //     <SellerRoute>
      //     <MyProduct></MyProduct>
      //     </SellerRoute> 
      //   ),
      // },
      {
        path: "/dashboard/my-product",
        element: (
          <SellerRoute>
          <MyAppointment></MyAppointment>
          </SellerRoute> 
        ),
      },

      {
        path: "/dashboard/add-service",
        element: (
          <SellerRoute>
            <AddService></AddService>
            </SellerRoute> 
        ),
      },
      // {
      //   path: "/dashboard/my-product",
      //   element: (
      //     <AdminRoute>         
      //     <MyAppointment></MyAppointment>
      //     </AdminRoute>
      //   ),
      // },
      
      // {
      //   path: "/dashboard/my-orders",
      //   element: (
      //     <PrivateRoute>
      //       <MyOrders />
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/dashboard/my-orders",
        element: (
          <BuyerRoute>
            <MyOrders />
          </BuyerRoute>
            
          
        ),
      },
      
      {
        path: "/dashboard/payment",
        element: (
        <BuyerDashboard>
          <Payment></Payment>
          </BuyerDashboard>
      ),
      },
    ],
  },
]);

export default router;
