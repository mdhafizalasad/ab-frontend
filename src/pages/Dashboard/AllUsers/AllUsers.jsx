import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Shared/Loading/Loading";
import toast from "react-hot-toast";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://ajker-bazar-zeta.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`https://ajker-bazar-zeta.vercel.app/users/admin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Admin Successfully Done");
          refetch();
        }
      });
  };

  const handleDeleteUser = (user) => {
    const agree = window.confirm(`Are you want to delete ${user?.name}?`);
    if (agree) { 
      fetch(`https://ajker-bazar-zeta.vercel.app/users/${user?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Deleted Successfully Done");
          }
          refetch();
        })
        .catch((error) => {
          toast.error("Delete Failed");
        });
    }
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-2xl">All Users in Dashboard</h1>
      <div className="overflow-x-auto bg-white mt-3">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th> 
            </tr>
          </thead>

          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user?.role !== "admin" ? (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-xs btn-primary"
                    >
                      Make Admin
                    </button>
                  ) : (
                    "Already Admin"
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn-xs btn btn-outline btn-error"
                  >
                    Delete
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

export default AllUsers;
