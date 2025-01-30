import React from "react";
import Slider from "react-slick";

const CategorySlider = () => {
  const categories = [
    {
      name: "Mobiles",
      img: "/image/Mobile.jpg",
      link: "/product",
    },
    {
      name: "Electronics",
      img: "/image/Electronics.jpg",
      link: "/electronics",
    },
    {
      name: "Vehicles",
      img: "/image/Vehicles.jpg",
      link: "/vehicles",
    },
    {
      name: "Mobiles",
      img: "/image/Mobile.jpg",
      link: "/product",
    },
    {
      name: "Electronics",
      img: "/image/Electronics.jpg",
      link: "/electronics",
    },
    {
      name: "Vehicles",
      img: "/image/Vehicles.jpg",
      link: "/vehicles",
    },
    {
      name: "Mobiles",
      img: "/image/Mobile.jpg",
      link: "/product",
    },
    {
      name: "Electronics",
      img: "/image/Electronics.jpg",
      link: "/electronics",
    },
    {
      name: "Vehicles",
      img: "/image/Vehicles.jpg",
      link: "/vehicles",
    },
    // {
    //   name: "Property",
    //   img: "/src/assets/image/Property.jpg",
    //   link: "https://www.ecommerce-13.elitdevs.xyz/product-categories/raw-meats",
    // },
    // {
    //   name: "Home & Living",
    //   img: "/src/assets/image/Home-Living.jpg",
    //   link: "https://www.ecommerce-13.elitdevs.xyz/product-categories/wines-alcohol-drinks",
    // },
    // {
    //   name: "Pets & Animals",
    //   img: "/src/assets/image/Pets.jpg",
    //   link: "https://www.ecommerce-13.elitdevs.xyz/product-categories/tea-coffee-1",
    // },
    // {
    //   name: "Men's Fashon",
    //   img: "/src/assets/image/MensFashon.jpg",
    //   link: "https://www.ecommerce-13.elitdevs.xyz/product-categories/milks-and-dairies",
    // },
    // {
    //   name: "Women's Fashon",
    //   img: "/src/assets/image/WomensFashon.jpg",
    //   link: "https://www.ecommerce-13.elitdevs.xyz/product-categories/pet-foods",
    // },
   
  ];

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
      onClick={onClick}
    >
      ❯
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
      onClick={onClick}
    >
      ❮
    </div>
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="widget-product-categories pt-5 pb-2">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-12">
            <div className="widget-header flex items-center mb-2">
              <h2 className="text-lg font-semibold mb-0 py-2">Browse by Category</h2>
            </div>
            <div className="product-categories-body pb-4 relative">
              <Slider {...settings} className="product-categories-box">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="product-category-item p-3 transition-transform duration-300 hover:scale-105"
                  >
                    <div className="category-item-body p-3 bg-white shadow-md rounded-lg">
                      <a href={category.link} className="d-block py-3 text-center">
                        <div className="category__thumb mb-3">
                          <img
                            src={category.img}
                            alt={category.name}
                            className="w-full h-auto object-contain mx-auto"
                          />
                        </div>
                        <div className="category__text py-3">
                          <h6 className="text-sm font-medium">{category.name}</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
