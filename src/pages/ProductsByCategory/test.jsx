import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductsByCategory = ({ categoryId, user }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product
  const [showModal, setShowModal] = useState(false); // Track modal visibility

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

  const handleBookNow = (product) => {
    setSelectedProduct(product);
    setShowModal(true); // Open modal
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Close modal and show confirmation
    setShowModal(false);
    alert("The item has been successfully booked!");
  };

  if (loading) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  if (products.length === 0) {
    return <div className="text-center py-10">No products found for this category.</div>;
  }

  return (
    <div>
      <p className="text-3xl font-bold text-center text-gray-800 mb-10">Mobiles Sale in Bangladesh</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {products.slice(0, 6).map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover rounded-t-lg"
            />
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
                <span className="font-semibold">  {product.sellerName}</span>
                {product.isVerified && (
                  <span
                    className="ml-2 text-blue-500"
                    title="Verified Seller"
                  >
                    ✔
                  </span>
                )}
              </p>
            </div>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => handleBookNow(product)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Book Product</h2>
            <form onSubmit={handleFormSubmit}>
              <p><strong>Item Name:</strong> {selectedProduct.name}</p>
              <p><strong>Price:</strong> ${selectedProduct.resalePrice}</p>
              <p><strong>User Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <div className="mt-4">
                <label className="block text-sm font-medium">Phone Number</label>
                <input
                  type="text"
                  required
                  className="w-full border p-2 rounded mt-1"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium">Meeting Location</label>
                <input
                  type="text"
                  required
                  className="w-full border p-2 rounded mt-1"
                  placeholder="Enter meeting location"
                />
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsByCategory;
