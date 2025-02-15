import React from "react";
import EducationVisa from "./../Home/EducationVisa/EducationVisa";
import InfoCards from "./../Home/InfoCard/InfoCards";
import Reviws from "./../Home/Testmonial/Reviws";
import SliderComponent from "../Home/Slider";
import CategorySlider from "../CategorySlider/CategorySlider";

const About = () => {
  return (
    <div>
      {/* <EducationVisa></EducationVisa> */}
      <SliderComponent></SliderComponent>
      <CategorySlider></CategorySlider>
      <InfoCards></InfoCards>
      <Reviws></Reviws>
    </div>
  );
};

export default About;
