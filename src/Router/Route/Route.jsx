import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Visa from "../../pages/Visa/Visa";
import Login from "../../pages/Login/Login";
import SignUp from "./../../pages/SignUp/SignUp";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import MyAppointment from "../../pages/Dashboard/MyAppointments/MyAppointment";
import AllUsers from "./../../pages/Dashboard/AllUsers/AllUsers";
import PrivateRoute from "./../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddService from "../../pages/Dashboard/AddService/AddService";
import CategoryPage from "../../pages/CategoryPage/CategoryPage"; // Import your CategoryPage component
import ProductCard from "../../pages/ProductCard/ProductCard";
import ProductsByCategory from "../../pages/ProductsByCategory/ProductsByCategory";
import Electronics from "../../pages/ProductsByCategory/Electronics";
import Vehicles from "../../pages/ProductsByCategory/Vehicles";

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
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/visa",
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
        element: <ProductsByCategory></ProductsByCategory>
      },
      {
        path: "/electronics",
        element: <Electronics></Electronics>
      },
      {
        path: "/vehicles",
        element: <Vehicles></Vehicles>
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
        element: <MyAppointment></MyAppointment>,
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
        path: "/dashboard/add-service",
        element: (
          <AdminRoute>
            <AddService></AddService>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
