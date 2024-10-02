// Navbar.tsx
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.tsx"; // Adjust the import path as necessary
import { signOut } from "firebase/auth"; // Import signOut function from Firebase
import { auth } from '../firebase.ts';
import { useNavigate } from "react-router-dom";


const Navbar: React.FC = () => {
  const { user } = useAuth(); // Get the user from AuthContext
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate=useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Call signOut from Firebase
      navigate('/');
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <Link to="/">
        <div className="flex items-center">
          <img src="/logo.png" alt="RentEase Logo" className="w-16 h-16" />
          <span className="ml-2 text-lg md:text-xl font-bold font-serif text-gray-400">
            RentEase
          </span>
        </div>
      </Link>

      <div className="flex items-center">
        <Link to='/search'>
          <div className="pr-2 flex justify-end">
            <button className="bg-pink-500 text-white p-2 rounded-full">
              <img
                src="/magnifying-glass.png"
                className="h-6 w-6"
                alt="Search"
              />
            </button>
          </div>
        </Link>

        <Link to='/cart'><div className="pr-2 pl-1">
          <img src="/cart.png" className="rounded-full" width={40} height={40} />
        </div></Link>

        <div
          className="flex items-center space-x-2 p-2 rounded-full border border-gray-500 relative"
          ref={dropdownRef}
        >
          <button
            className="text-2xl font-bold text-gray-500"
            onClick={toggleDropdown}
          >
            ☰
          </button>
          <img
            src="/profile.png"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-500"
            alt="Profile"
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-36 w-40 mr-4 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <ul className="py-2">
                {user ? (
                  <>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      {user.displayName || user.email} {/* Display user's name or email */}
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={handleLogout} // Call logout on click
                    >
                      Logout
                    </li>
                  </>
                ) : (
                  <>
                    <Link to='/login'>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Login
                      </li>
                    </Link>
                    <Link to='/register'>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Register
                      </li>
                    </Link>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
