import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider'; // Import AuthContext
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyAppointment = () => {
  const { user } = useContext(AuthContext); // Get logged-in user
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  // Fetch products that belong to the logged-in seller
  useEffect(() => {
    const fetchData = async () => { 
      try {
        if (!user?.email) return; // Ensure user is logged in
        
        const response = await fetch(`ajker-bazar-zeta.vercel.app/api/products?seller=${user.email}`);
        //const response = await fetch(`http://localhost:3000/api/products?seller=${user.email}`);
        if (!response.ok) {
          throw new Error('Failed to load data');
        }
        const data = await response.json();
        setProducts(data); // Set only seller's products in state
      } catch (err) {
        setError(err.message); // Set error state
      } finally {
        setLoading(false); // Disable loading state
      }
    };

    fetchData();
  }, [user?.email]); // Fetch data when user's email is available

  // Delete product function
  const handleDelete = async () => {
    try {
      if (!productToDelete) return;

      const serial = productToDelete.Serial;
      const response = await fetch(`ajker-bazar-zeta.vercel.app/api/products/${serial}`, {
      //const response = await fetch(`http://localhost:3000/api/products/${serial}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete data');
      }

      // Remove the deleted product from the state
      const updatedProducts = products.filter((product) => product.Serial !== serial);
      setProducts(updatedProducts);

      toast.success(`Product with Serial ${serial} has been deleted!`);
      setIsModalOpen(false);
    } catch (err) {
      setError(err.message);
      toast.error(`Error: ${err.message}`);
      setIsModalOpen(false);
    }
  };

  // Show confirmation modal
  const showDeleteModal = (product) => {
    setProductToDelete(product);
    setIsModalOpen(true);
  };

  // Loading state
  if (loading) {
    return <div>Loading data...</div>;
  }

  // Error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">My Product List</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Serial</th>
            <th className="px-4 py-2 text-left">Product Name</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.Serial} className="border-t">
              <td className="px-4 py-2">{product.Serial}</td>
              <td className="px-4 py-2">{product['Product Name']}</td>
              <td className="px-4 py-2">{product.Status}</td>
              <td className="px-4 py-2">${product.Price}</td>
              <td className="px-4 py-2">{product.Category}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => showDeleteModal(product)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Delete Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-bold">Are you sure you want to delete this product?</h2>
            <div className="mt-4">
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mr-2"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default MyAppointment;
