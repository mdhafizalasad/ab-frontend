import React from "react";
import visa from "../../../assets/image/education.jpg";
import { DayPicker } from "react-day-picker";
const VisaBanner = ({ selected, setSelected }) => {
  return (
    <div className="pt-16 md:pt-0">
      <div className="px-5 my-10">
        <div className=" md:flex justify-center items-center">
          <div className="mx-auto p-5 shadow-lg w-96">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src={visa}
              className="mt-5 md:mt-0 p-2 md:p-0 md:w-4/6 md:h-[450px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaBanner;
