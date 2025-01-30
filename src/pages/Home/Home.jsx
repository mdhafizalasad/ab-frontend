import React from "react";
import Banner from "./Banner/Banner";
import Reviws from "./Testmonial/Reviws";
import InfoCard from "./InfoCard/InfoCards";
import VisaAppointment from "./VisaAppointment/VisaAppointment";
import EducationVisa from "./EducationVisa/EducationVisa";
import Services from "./Services/Services";
import SliderComponent from "./Slider";
import CategorySlider from "../CategorySlider/CategorySlider";
import PromoSection from "./PromoSection/PromoSection";
import ProductsByCategory from "../ProductsByCategory/ProductsByCategory";
import ProductCard from "../ProductCard/ProductCard";


const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <SliderComponent></SliderComponent>
      <CategorySlider></CategorySlider>
      <PromoSection></PromoSection>
      {/* <InfoCard></InfoCard> */}
      <Services></Services>
      {/* <EducationVisa></EducationVisa>
      <VisaAppointment></VisaAppointment>
      <Reviws></Reviws> 
      <ProductsByCategory></ProductsByCategory>
      */}
    </div>
  );
};

export default Home;
