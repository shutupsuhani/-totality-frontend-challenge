import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

const Navbar: React.FC<{ onFilterChange: (filters: any) => void }> = ({ onFilterChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState<boolean>(false);
  const [location, setLocation] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0,100000]);
  const [bedrooms, setBedrooms] = useState<number>(0);
  const [amenities, setAmenities] = useState<string[]>([]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const filterDropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target as Node)) {
        setIsFilterDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const applyFilters = () => {
    onFilterChange({ location, priceRange, bedrooms, amenities });
    toggleFilterDropdown(); 
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <Link to="/">
        <div className="flex items-center">
          <img src="/logo.png" alt="RentEase Logo" className="w-16 h-16" />
          <span className="ml-2 text-xl font-bold font-serif text-gray-400">RentEase</span>
        </div>
      </Link>

      <div className="p-4 rounded-full border border-gray-300">
        <div className="flex">
          <div className="flex border-r border-gray-400 pr-4 ">
            <input
              type="text"
              placeholder="Where"
              value={location}
              onChange={e => setLocation(e.target.value)}
              className="px-2 py-1 rounded focus:outline-none"
            />
            <img src="/loc.png" height={10} width={35} alt="Location" />
          </div>
          <div className="border-r border-gray-400 pr-4">
            <span className="text-gray-400 p-2 ">Check in</span>
            <input
              type="date"
              className="px-2 py-1 focus:outline-none"
            />
          </div>
          <div className="pl-4">
            <button className="bg-pink-500 text-white p-2 rounded-full">
              <img src="/magnifying-glass.png" height={30} width={30} alt="Search" />
            </button>
          </div>
        </div>
      </div>
       
      <img src="/cart.png" className="rounded-full"  width={50} height={50}/>


      <div className="flex items-center space-x-2">
        {/* Filter Icon */}
        <div className="relative" ref={filterDropdownRef}>
          <img
            src="/filter.png"
            className="w-20 h-16 rounded-md cursor-pointer"
            onClick={toggleFilterDropdown}
            alt="Filter"
          />
          {isFilterDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    className="w-full px-2 py-1 rounded"
                  />
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <span>Price Range:</span>
                  <input
                    type="number"
                    placeholder="Min Price"
                    value={priceRange[0]}
                    onChange={e => setPriceRange([+e.target.value, priceRange[1]])}
                    className="w-1/2 px-1 rounded"
                  />
                  <input
                    type="number"
                    placeholder="Max Price"
                    value={priceRange[1]}
                    onChange={e => setPriceRange([priceRange[0], +e.target.value])}
                    className="w-1/2 px-1 rounded"
                  />
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <input
                    type="number"
                    placeholder="Number of Bedrooms"
                    value={bedrooms}
                    onChange={e => setBedrooms(+e.target.value)}
                    className="w-full px-2 py-1 rounded"
                  />
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <input
                    type="text"
                    placeholder="Amenities (comma-separated)"
                    onChange={e => setAmenities(e.target.value.split(',').map(amenity => amenity.trim()))}
                    className="w-full px-2 py-1 rounded"
                  />
                </li>
                <li className="px-4 py-2">
                  <button
                    className="bg-pink-500 text-white p-2 rounded-full w-full"
                    onClick={applyFilters}
                  >
                    Apply Filters
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
       
        <div className="flex items-center space-x-2 p-2 rounded-full border border-gray-500 relative" ref={dropdownRef}>
          <button className="text-2xl font-bold text-gray-500" onClick={toggleDropdown}>
            ☰
          </button>
          <img src="/profile.png" className="w-10 h-10 rounded-full border-2 border-gray-500" alt="Profile" />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-36 w-48 mr-4 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <ul className="py-2">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => alert("Login Clicked")}
                >
                  Login
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => alert("Register Clicked")}
                >
                  Register
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
