import React from "react";
import rentalHouses, { RentalHouse } from "../dummy/rentalData"; // Adjust the import path based on your project structure
import { useNavigate } from "react-router-dom";

interface RentalListProps {
  selectedView: string | null; 
}

const RentalList: React.FC<RentalListProps> = ({ selectedView }) => {
  const navigate = useNavigate();
  
  // Filter the rental houses based on the selected view (category)
  const filteredHouses = selectedView 
    ? rentalHouses.filter((house: RentalHouse) => house.view === selectedView)
    : rentalHouses;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-6 p-4 font-serif">
      {filteredHouses.map((house: RentalHouse) => (
        <div
          key={house.id}
          className="border rounded-lg overflow-hidden shadow-md"
        >
          <img
            src={house.image}
            alt={house.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between">
              <h2 className="text-lg font-bold">{house.name}</h2>
              <p>{house.ratings}</p>
            </div>
            <p className="text-gray-600">{house.location}</p>
            <p>{house.description}</p>
            <p className="font-bold text-pink-600">
              Price: ${house.pricePerNight}/night
            </p>
          </div>
          <div className="flex justify-center items-center p-5">
            <button 
              onClick={() => navigate(`/property/${house.id}`)} 
              className="w-36 h-12 bg-pink-700 text-white text-lg shadow-md rounded-lg"
            >
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RentalList;
