import React from "react";
import education from "../../../assets/image/education.jpg";
import MainButton from "../../../components/MainButton/MainButton";

const EducationVisa = () => {
  return (
    <div className="md:my-20 px-5 md:w-3/4 mx-auto">
      <div className="">
        <div className="px-5 my-10">
          <div className=" md:flex items-center">
            <div className="md:w-1/2 md:flex justify-end">
              <img
                src={education}
                className="mt-5 md:mt-0 p-2 md:p-0 rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-2xl md:text-5xl font-bold text-accent">
                Explore the world with F1 visa
              </h1>
              <p className="py-6">
                and make your dream live 2025 the year you discover word open
                community – where you can live, learn, create and innovate at
                the heart of world. the year you discover word open community –
                where you can live, learn, create and innovate at the heart of
                world. Make 2024 the year you discover word open community –
                where you can live, learn, create and innovate at the heart of
                world. the year you discover word open community – where you can
                live, learn, create and innovate at the heart of world.
              </p>
              <MainButton>See Details F1</MainButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationVisa;
