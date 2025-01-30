import React, { useState } from "react";
import VisaBanner from "./VisaBanner/VisaBanner";
import VisaAvailableAppointments from "./VisaAvailableAppointments/VisaAvailableAppointments";

const Visa = () => {
  const [selected, setSelected] = useState(new Date());

  return (
    <div>
      <VisaBanner selected={selected} setSelected={setSelected}></VisaBanner>
      <VisaAvailableAppointments
        selectedDate={selected}
      ></VisaAvailableAppointments>
    </div>
  );
};

export default Visa;
