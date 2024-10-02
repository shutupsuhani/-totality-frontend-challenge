import React, { useState } from "react";
import rentalHouses, { RentalHouse } from "../dummy/rentalData"; // Adjust the path accordingly
import { Link } from 'react-router-dom';
import Footer from "./Footer";

const locations = [
  "Malibu, California",
  "Lake Tahoe, Nevada",
  "Santa Monica, California",
  "Aspen, Colorado",
  "Lancaster, Pennsylvania",
  "Portland, Oregon",
  "Great Smoky Mountains, Tennessee",
  "Miami Beach, Florida",
  "New York City, New York",
  "Napa Valley, California",
  "Nagpur, India",
  "San Francisco",
  "Puri Beach, Orrisa",
];

const Search: React.FC = () => {
  const [filteredHouses, setFilteredHouses] = useState<RentalHouse[]>(rentalHouses);
  const [location, setLocation] = useState<string>('');
  const [locationSuggestions, setLocationSuggestions] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [numberOfRooms, setNumberOfRooms] = useState<number>(0);

  // Update location suggestions based on input
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocation(value);

    if (value) {
      const filteredLocations = locations.filter(loc =>
        loc.toLowerCase().includes(value.toLowerCase())
      );
      setLocationSuggestions(filteredLocations);
    } else {
      setLocationSuggestions([]);
    }
  };

  // Select a location from the suggestions
  const selectLocation = (loc: string) => {
    setLocation(loc);
    setLocationSuggestions([]); // Clear suggestions
  };

  const applyFilters = () => {
    const filtered = rentalHouses.filter(house => {
      const matchesLocation = location === '' || house.location.toLowerCase().includes(location.toLowerCase());
      const matchesPrice = house.pricePerNight >= minPrice && house.pricePerNight <= maxPrice;
      const matchesRooms = numberOfRooms === 0 || house.numberOfRooms === numberOfRooms;

      return matchesLocation && matchesPrice && matchesRooms;
    });

    setFilteredHouses(filtered);
  };

  return (
    <>
      <nav className="w-full h-20 shadow-md flex items-center">
        <Link to='/'>
          <div className="flex items-center">
            <img src="/left-arrow.png" className="w-6 h-6" alt="Back" />
          </div>
        </Link>
      </nav>

      <div className="w-full p-4 flex flex-col items-center mt-28">
        <img src="filter.png" alt="filter" className="mb-4" width={160} height={160} />

        <div className="relative mb-4 w-full max-w-md">
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={handleLocationChange}
            className="border border-gray-400 p-2 rounded w-full focus:outline-none"
          />
          {locationSuggestions.length > 0 && (
            <ul className="absolute z-10 bg-white border border-gray-300 w-full max-h-60 overflow-y-auto">
              {locationSuggestions.map((loc, index) => (
                <li key={index}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => selectLocation(loc)}>
                  {loc}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex flex-col md:flex-row space-x-2 mb-2 w-full max-w-md">
          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(parseInt(e.target.value))}
            className="border border-gray-400 p-2 rounded focus:outline-none w-full md:w-1/2"
          />
          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            className="border border-gray-400 p-2 rounded focus:outline-none w-full md:w-1/2"
          />
        </div>

        <select name="numberOfRooms" value={numberOfRooms} onChange={(e) => setNumberOfRooms(parseInt(e.target.value))} className="border border-gray-400 p-2 mb-2 rounded w-full max-w-md">
          <option value="0">Any Rooms</option>
          <option value="1">1 Room</option>
          <option value="2">2 Rooms</option>
          <option value="3">3 Rooms</option>
          <option value="4">4 Rooms</option>
          <option value="5">5 Rooms</option>
        </select>

        <button onClick={applyFilters} className="bg-pink-500 text-white p-2 rounded mb-4">Apply Filters</button>

        {/* Display Filtered Houses */}
        <div className="grid grid-cols-1 font-serif  md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredHouses.map(house => (
            <div key={house.id} className="border border-gray-300 rounded-lg p-4 mb-4">
              <img src={house.image} alt={house.name} className="w-full h-48 object-cover rounded-lg mb-2" />
              <h3 className="font-bold text-lg">{house.name}</h3>
              <p>{house.description}</p>
              <p>Location: {house.location}</p>
              <p>Price per Night: ${house.pricePerNight}</p>
              <p>Ratings: {house.ratings}</p>
              <button className="bg-pink-600 mt-1 text-white p-2 rounded">Book Now</button>
            </div>
          ))}
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Search;
