import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Reusable Product Card Component
const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-600">Location: {product.location}</p>
        <p className="text-sm text-gray-600">
          Resale Price: ${product.resalePrice}
        </p>
        <p className="text-sm text-gray-600">
          Original Price: ${product.originalPrice}
        </p>
        <p className="text-sm text-gray-600">Years of Use: {product.yearsOfUse}</p>
        <p className="text-sm text-gray-600">Posted: {product.postedTime}</p>
        <p className="text-sm text-gray-600">
          Seller: {product.sellerName}{" "}
          {product.isVerified && (
            <span className="text-green-600 font-semibold">(Verified)</span>
          )}
        </p>
      </div>
    </div>
  );
};

const CategoryPage = () => {
  const { id } = useParams(); // Get category ID from the URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products by category ID
    fetch(`/api/products?category=${id}`)
      .then((response) => response.json())
      .then((data) => setProducts(data.data || [])) // Use `data.data` as the response structure
      .catch((error) => console.error("Error fetching products:", error));
  }, [id]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Products in Category: {id}
      </h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found in this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;
