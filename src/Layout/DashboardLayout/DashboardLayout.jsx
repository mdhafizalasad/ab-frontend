import React, { useContext } from "react";
import Header from "../../pages/Shared/Header/Header";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { AuthContext } from "../../contexts/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Header></Header>

      <div className="drawer lg:drawer-open  md:mt-12">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="bg-base-200 drawer-content my-12 pt-5  md:my-0 px-4 md:p-10 min-h-screen">
          <Outlet></Outlet>
        </div>

        <div className="drawer-side mt-20 md:mt-0">
          <label
            htmlFor="dashboard-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu   min-h-full w-80 p-0 rounded-0">
            <li>
              <Link className="rounded-none mt-2" to="/dashboard">
                My Appointment
              </Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link className="rounded-none mt-2" to="/dashboard/all-users">
                    All Users
                  </Link>
                </li>
                <li>
                  <Link
                    className="rounded-none mt-2"
                    to="/dashboard/add-service"
                  >
                    Add Service
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
