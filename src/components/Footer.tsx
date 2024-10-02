import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 w-full sm:full md:full lg:full px-4 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="col-span-1">
          <h4 className="text-lg font-bold mb-2">Exclusive</h4>
          <p className="mb-2">Subscribe</p>
          <p className="mb-4">Get 10% off your first Booking</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full rounded mb-2 bg-black focus:outline-none text-white border-2 border-white pl-12"
            />
            <img
              src="/send3.png" // Adjust the path to your image
              alt="Send"
              className="absolute left-3 top-2 w-6 h-6"
            />
          </div>
         
        </div>
        <div className="col-span-1">
          <h4 className="text-lg font-bold mb-2">Support</h4>
          <p>Los Angeles,USA</p>
          <p>rentease@gmail.com</p>
          <p>+123 99999</p>
        </div>
        <div className="col-span-1">
          <h4 className="text-lg font-bold mb-2">Account</h4>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <Link to="/cart"><li>Cart</li></Link>
            <li >Book</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="text-lg font-bold mb-2">Quick Link</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="text-lg font-bold mb-2">Download App</h4>
          <p>Save $3 with App New User Only</p>
          <div className="flex space-x-2 mt-2">
            <img
              src="/Googleplay.png"
              alt="Google Play"
              className="w-24 h-auto rounded-md cursor-pointer"
            />
            <img
              src="/appstore.png"
              alt="App Store"
              className="w-24 h-auto rounded-md cursor-pointer"
            />
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-400">
        <p>© RentEase 2024, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;