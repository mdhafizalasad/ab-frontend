import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductModal from "../Visa/BookingModal/ProductModal";

const Vehicles = ({ categoryId }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/products.json");
        if (response.data.success) {
          setProducts(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  if (products.length === 0) {
    return <div className="text-center py-10">No products found for this category.</div>;
  }

  return (
    <div>
      <p className="text-3xl font-bold text-center text-gray-800 mb-10">Vehicles Sale in Bangladesh</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {products.slice(12, 18).map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between">
            <img src={product.image} alt={product.name} className="h-48 w-full object-cover rounded-t-lg" />
            <div className="mt-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.location}</p>
              <p className="mt-2">
                <span className="font-bold text-green-600">Resale: ${product.resalePrice}</span>{" "}
                <span className="line-through text-gray-500">Original: ${product.originalPrice}</span>
              </p>
              <p className="text-sm text-gray-500">
                {product.yearsOfUse} years of use | Posted: {product.postedTime}
              </p>
              <p className="mt-2 flex items-center">
                <span className="font-semibold">{product.sellerName}</span>
                {product.isVerified && (
                  <span className="ml-2 text-blue-500" title="Verified Seller">✔</span>
                )}
              </p>
            </div>

            {/* Book Now Button */}
            <label
              htmlFor="booking-modal"
              className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full mt-4"
              onClick={() => setSelectedProduct(product)}
            >
              Book Now
            </label>
          </div>
        ))}
      </div>

      {/* Product Booking Modal (Only Show When a Product is Selected) */}
      {selectedProduct && <ProductModal selectedProduct={selectedProduct} />}
    </div>
  );
};

export default Vehicles;
