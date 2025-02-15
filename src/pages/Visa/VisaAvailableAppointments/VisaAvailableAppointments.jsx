import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import { useState } from "react";

const VisaAvailableAppointments = ({ selectedDate }) => {
  //
  const date = format(selectedDate, "PP");
  const [appointments, setAppointments] = useState(null);

  //
  const {
    data: appointmentOptions,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `https://ajker-bazar-zeta.vercel.app/appointmentOptions?date=${date}`
        // `http://localhost:3000/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>; 
  }

  return (
    <div className="my-10 px-5 mx-auto">
      <div className="text-center font-semibold mb-3 md:mb-10">
        <h2 className="text-primary ">Visa Appointments</h2>

        <h3 className="text-2xl md:text-3xl">
          Visa Appointment on: {format(selectedDate, "PP")}
        </h3>
      </div>

      {/* ==== appointment option ==== */}
      <div className=" grid md:grid-cols-3 gap-4">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setAppointments={setAppointments}
          ></AppointmentOption>
        ))}
      </div>
      {/* ===== booking modal ===== */}
      {appointments && (
        <BookingModal
          setAppointments={setAppointments}
          appointments={appointments}
          selectedDate={selectedDate}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default VisaAvailableAppointments;
