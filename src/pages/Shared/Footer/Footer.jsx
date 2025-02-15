import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <section className="bg-gray-900 py-10 text-gray-300">
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {/* About Section */}
            <div className="text-center md:text-left">
              <a href="https://ecommerce-16.elitdevs.xyz" className="inline-block">
                <img
                  className="mx-auto md:mx-0"
                  src="/image/logo.png"
                  alt="XMART"
                  height="44"
                />
              </a>
              <p className="my-4">
                <strong>earlybd.net</strong> is a trusted virtual e-commerce
                marketplace. It sells various products online in Bangladesh
                with a 30-day money-back guarantee. Thanks for staying with us!
              </p>
              <form className="flex flex-col sm:flex-row justify-center md:justify-start gap-2">
                <input
                  type="email"
                  className="form-input px-4 py-2 rounded-md bg-gray-800 border border-gray-600 text-gray-300"
                  placeholder="Your Email Address"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="ml-20">
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <ul>
                <li className="mb-2">
                  <span className="block text-gray-400">Address:</span>
                  Dhaka, Bangladesh
                </li>
                <li className="mb-2">
                  <span className="block text-gray-400">Phone:</span>
                  01700001111
                </li>
                <li className="mb-2">
                  <span className="block text-gray-400">Email:</span>
                  <a href="mailto:admin@elitdevs.com" className="text-blue-500">
                    admin@elitdevs.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="ml-20">
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul>
                <li className="mb-2">
                  <a href="/" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="hover:underline">
                    Terms and Conditions
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="hover:underline">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* My Account Links */}
            <div className="ml-20">
              <h4 className="text-lg font-bold mb-4">My Account</h4>
              <ul>
                <li className="mb-2">
                  <a href="/users/login" className="hover:underline">
                    Login
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/purchase_history" className="hover:underline">
                    Order History
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/wishlists" className="hover:underline">
                    My Wishlist
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/track-your-order" className="hover:underline">
                    Track Order
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <footer className="bg-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-300">
            <p className="text-center md:text-left mb-4 md:mb-0">
              All Rights Reserved By Ajker Bazar
            </p>
            <ul className="flex gap-4 justify-center mb-4 md:mb-0">
              <li>
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                  <i className="lab la-facebook-f text-2xl"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <i className="lab la-twitter text-2xl"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                  <i className="lab la-instagram text-2xl"></i>
                </a>
              </li>
              <li>
                <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                  <i className="lab la-youtube text-2xl"></i>
                </a>
              </li>
            </ul>
            <p className="text-center md:text-right">
              Website Designed By:{" "}
              <a href="#" className="text-blue-500" >
                Asad
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
