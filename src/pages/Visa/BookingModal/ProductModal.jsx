import React from "react";
import toast, { Toaster } from "react-hot-toast";

const ProductModal = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any validation or API submission logic here
    // ...

    // Trigger toast notification
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
            <h3 className="text-lg font-bold">Item Name</h3>
            <label
              htmlFor="booking-modal"
              className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white rounded-full w-12 h-10 text-xl"
            >
              X
            </label>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name Here"
              className="input input-bordered w-full mt-4"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Here"
              disabled
              className="input input-bordered w-full mt-4"
            />
            <input
              type="text"
              name="itemname"
              placeholder="Item Name Here"
              disabled
              className="input input-bordered w-full mt-4"
            />
            <input
              type="text"
              name="price"
              placeholder="Price Here"
              disabled
              className="input input-bordered w-full mt-4"
            />

            <input
              name="phone"
              type="number"
              placeholder="Phone Here"
              className="input input-bordered w-full mt-4"
            />
            <input
              type="text"
              name="location"
              placeholder="Meeting Location Here"
              className="input input-bordered w-full mt-4"
            />
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
