import React from "react";


const ProductCard = ({ product }) => {
  if (!product) {
    // Fallback if `product` is undefined
    return <div className="text-center p-4 text-gray-500">Product data is not available.</div>;
  }

  // Destructure with default values to handle missing properties
  const {
    picture = "https://via.placeholder.com/150", // Default image if `picture` is missing
    name = "Unknown Product",
    location = "Unknown",
    resalePrice = 0,
    originalPrice = 0,
    yearsOfUse = "N/A",
    postedTime = "N/A",
    sellerName = "Anonymous",
    isVerified = false,
  } = product;

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
        
      <img
        src={picture}
        alt={name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <p className="text-gray-600">Location: {location}</p>
      <p className="text-gray-600">Resale Price: ${resalePrice}</p>
      <p className="text-gray-600">Original Price: ${originalPrice}</p>
      <p className="text-gray-600">Years of Use: {yearsOfUse} years</p>
      <p className="text-gray-600">Posted: {postedTime}</p>
      <p className="text-gray-600 flex items-center">
        Seller: {sellerName}{" "}
        {isVerified && <span className="text-blue-500 ml-2">✔</span>}
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-2">
        Book Now
      </button>
      
    </div>
  );
};

export default ProductCard;
