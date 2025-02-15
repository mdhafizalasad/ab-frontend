import React from 'react';

const MyProduct = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-md max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Ajker Bazar
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Unfortunately, the Vercel API is currently not loading, and you're seeing this page instead.
        </p>
        <p className="text-lg text-gray-500 mb-4">
          We're working on fixing the issue. Thank you for your patience!
        </p>
        <div className="mt-8">
          <p className="text-sm text-gray-400">
            If you'd like to learn more about our products, feel free to check back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
