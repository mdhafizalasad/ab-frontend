import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "./../../../contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const {
    data: bookings,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        `https://ajker-bazar-zeta.vercel.app/bookings?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="">
      <h1 className="text-2xl"> My Products</h1>
      <div className="overflow-x-auto bg-white mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {(bookings?.length > 0 ? bookings : []).map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking?.candidate}</td>
                <td>{booking?.serviceName}</td>
                <td>{booking?.appointmentDate}</td>
                <td>{booking?.slot}</td>

                <td>
                  <button className="btn-xs btn btn-outline btn-error">
                    cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
