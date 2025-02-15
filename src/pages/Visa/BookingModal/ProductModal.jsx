import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider"; // Import AuthContext

const ProductModal = ({ selectedProduct }) => {
  const { user } = useContext(AuthContext); // Get logged-in user

  const handleSubmit = (event) => {
    event.preventDefault();

    toast.success("Item successfully booked!");
  };

  return (
    <div>
      {/* Toaster component to render toast notifications */}
      <Toaster position="top-center" reverseOrder={false} />

      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">{selectedProduct?.name || "Item Name"}</h3>
            <label
              htmlFor="booking-modal"
              className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white rounded-full w-12 h-10 text-xl"
            >
              X
            </label> 
          </div>

          <form onSubmit={handleSubmit}>
            {/* Logged-in User's Name */}
            <input
              type="text"
              name="name"
              value={user?.displayName || "Guest User"}
              disabled
              className="input input-bordered w-full mt-4"
            />

            {/* Logged-in User's Email */}
            <input
              name="email"
              type="email"
              value={user?.email || "guest@example.com"}
              disabled
              className="input input-bordered w-full mt-4"
            />

            {/* Selected Product Name */}
            <input
              type="text"
              name="itemname"
              value={selectedProduct?.name || "Unknown Product"}
              disabled
              className="input input-bordered w-full mt-4"
            />

            {/* Selected Product Price */}
            <input
              type="text"
              name="price"
              value={selectedProduct?.resalePrice || "0"}
              disabled
              className="input input-bordered w-full mt-4"
            />

            {/* User's Phone Number */}
            <input
              name="phone"
              type="number"
              placeholder="Enter your phone number"
              className="input input-bordered w-full mt-4"
              required
            />

            {/* Meeting Location */}
            <input
              type="text"
              name="location"
              placeholder="Enter meeting location"
              className="input input-bordered w-full mt-4"
              required
            />

            {/* Submit Button */}
            <input
              className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full mt-4"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
