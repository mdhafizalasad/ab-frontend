import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/image/image1.jpg";
import image2 from "../../assets/image/image2.jpg";
import image3 from "../../assets/image/image3.jpg";
import rightImage from "../../assets/image/rightImage.jpg";

const SliderComponent = () => {
  const images = [image1, image2, image3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-4 h-auto md:h-[400px] mb-20 px-4">
      {/* Left Column - Slider */}
      <div className="flex-2 w-full md:w-2/3">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="h-[200px] md:h-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Right Column - Image */}
      <div className="flex-1 w-full md:w-1/3 h-[200px] md:h-full">
        <img
          src={rightImage}
          alt="Right Column"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default SliderComponent;
