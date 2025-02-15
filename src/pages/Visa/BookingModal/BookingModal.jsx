import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "./../../../contexts/AuthProvider";
import toast from "react-hot-toast";

const BookingModal = ({
  setAppointments,
  appointments,
  selectedDate,
  refetch,
}) => {
  const { user } = useContext(AuthContext);
  const { name, slots } = appointments;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const candidateName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      candidate: candidateName,
      serviceName: name,
      slot: slot,
      email: email,
      phone: phone,
    };
    console.log(booking);

    // fetch("https://ajker-bazar-zeta.vercel.app/bookings", {
    fetch("/products.json", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Booking Confirmed!");
          refetch();
          setAppointments(null);
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">{name}</h3>
            <label
              htmlFor="booking-modal"
              className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white rounded-full w-12 h-10 text-xl"
            >
              X
            </label>
          </div>

          <form onSubmit={handleBooking}>
            <input
              type="text"
              disabled
              value={date}
              placeholder="Date Here"
              className="input input-bordered w-full mt-4"
            />

            <select name="slot" className="select select-bordered w-full  mt-4">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Name Here"
              className="input input-bordered w-full mt-4"
            />

            <input
              name="email"
              type="email"
              placeholder="email Here"
              defaultValue={user?.email}
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
              className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full mt-4"
              type="submit"
              value="Booking Now"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
