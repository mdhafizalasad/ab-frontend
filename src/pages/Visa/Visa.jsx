import React, { useState } from "react";
import VisaBanner from "./VisaBanner/VisaBanner";
import VisaAvailableAppointments from "./VisaAvailableAppointments/VisaAvailableAppointments";
import CategorySlider from "../CategorySlider/CategorySlider";
import PromoSection from "../Home/PromoSection/PromoSection";
import Services from "../Home/Services/Services";

const Visa = () => {
  const [selected, setSelected] = useState(new Date());

  return (
    <div>
      <CategorySlider></CategorySlider>
      <PromoSection></PromoSection>
      <Services></Services>

      {/* <VisaBanner selected={selected} setSelected={setSelected}></VisaBanner>
      <VisaAvailableAppointments
        selectedDate={selected}
      ></VisaAvailableAppointments> */}
    </div>
  );
};

export default Visa;
