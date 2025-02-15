import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BuyerOrders = () => {
  const [orders, setOrders] = useState([]); // Initialize orders as an empty array

  useEffect(() => {
    // Fetch orders from your backend API 
    fetch("https://ajker-bazar-zeta.vercel.app/buyer-orders")
    // fetch("http://localhost:3000/buyer-orders")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setOrders(data); // If the data is an array, update the state
        } else {
          console.error("Data is not an array:", data);
        }
      })
      .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  // If orders is not an array, avoid rendering the map
  if (!Array.isArray(orders)) {
    return <div>Error: Orders data is not available</div>;
  }

  return (
    <div className="container mx-auto p-6">
        {/* <h2 className="text-2xl font-bold mb-4">
            {isAdmin ? "All Orders (Admin View)" : "My Orders"}
        </h2> */}

        {orders.length === 0 ? (
            <p className="text-center text-gray-600">Pls. wait, orders is Loading. If order is not loading, pls. refrsh the page.</p>
        ) : (
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 text-left">Product</th>
                            <th className="px-4 py-2 text-left">Price</th>
                            <th className="px-4 py-2 text-left">Buyer</th>
                            <th className="px-4 py-2 text-left">Status</th>
                            {/* <th className="px-4 py-2 text-center">Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order._id} className="border-b hover:bg-gray-100">
                                <td className="px-4 py-2">{order.productName}</td>
                                <td className="px-4 py-2">${order.price}</td>
                                <td className="px-4 py-2">{order.buyerEmail}</td>
                                <td className="px-4 py-2">
                                    <span 
                                        className={`px-2 py-1 rounded text-white ${
                                            order.status === "Paid" ? "bg-green-500" : "bg-yellow-500"
                                        }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                                {/* <td className="px-4 py-2 text-center">
                                    {order.status === "Paid" ? (
                                        <button className="px-4 py-2 bg-green-500 text-white rounded" disabled>
                                            Paid
                                        </button>
                                    ) : (
                                        <Link to={`/payment/${order._id}`}>
                                            <button className="px-4 py-2 bg-blue-500 text-white rounded">
                                                Pay
                                            </button>
                                        </Link>
                                    )}
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )}
    </div>
);
};
export default BuyerOrders;
