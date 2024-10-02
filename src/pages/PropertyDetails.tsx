import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import rentalHouses from '../dummy/rentalData';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext'; // Import the cart context

// Define the CartItem type
type CartItem = {
  id: number;
  name: string;
  location: string;
  pricePerNight: number;
  image: string;
  bookingDetails?: {
    startDate: Date;
    endDate: Date;
  };
};

export const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = rentalHouses.find((house) => house.id === parseInt(id)); // Make sure this is a CartItem-like object
  const { addToCart } = useCart(); // Get addToCart from the context
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  if (!property) {
    return <div>Property not found</div>;
  }

  const handleBooking = () => {
    if (startDate && endDate) {
      if (endDate < startDate) {
        alert("End date must be after start date.");
        return;
      }

      const bookingDetails = { startDate, endDate };

      // Calculate totalCost based on the difference in days
      const differenceInTime = endDate.getTime() - startDate.getTime(); // Difference in milliseconds
      const differenceInDays = differenceInTime / (1000 * 3600 * 24); // Convert to days
      const totalCost = property.pricePerNight * differenceInDays; // Total cost calculation

      addToCart({
        id: property.id,
        name: property.name,
        location: property.location,
        pricePerNight: property.pricePerNight,
        image: property.image,
        bookingDetails: bookingDetails, // Include booking details
      });

      // Store complete booking details in local storage
      localStorage.setItem(`booking_${property.id}`, JSON.stringify({
        ...bookingDetails,
        totalCost, // Use the calculated totalCost
        propertyName: property.name,
        propertyLocation: property.location,
      }));

      navigate(`/payment/${property.id}`);
    } else {
      alert("Please select booking dates");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 mt-40 font-serif">
        {/* Property Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Property Image */}
          <div className="w-full h-96 overflow-hidden">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Property Details */}
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-800">{property.name}</h1>
              <span className="bg-pink-600 text-white px-4 py-2 rounded-lg font-semibold">
                ${property.pricePerNight} / night
              </span>
            </div>
            <p className="text-gray-600 text-lg">{property.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <p>
                <strong>Location:</strong> {property.location}
              </p>
              <p>
                <strong>Number of Rooms:</strong> {property.numberOfRooms}
              </p>
              <p>
                <strong>View:</strong> {property.view}
              </p>
              <p>
                <strong>Ratings:</strong> {property.ratings} / 5
              </p>
            </div>

            {/* Booking Dates */}
            <div className="flex space-x-4">
              <input
                type="date"
                value={startDate ? startDate.toISOString().split('T')[0] : ''}
                onChange={(e) => setStartDate(new Date(e.target.value))}
                className="border p-2"
              />
              <input
                type="date"
                value={endDate ? endDate.toISOString().split('T')[0] : ''}
                onChange={(e) => setEndDate(new Date(e.target.value))}
                className="border p-2"
              />
            </div>

            {/* Book Now Button */}
            <div className="text-center mt-6">
              <button
                className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-10 rounded-lg text-lg shadow-lg transition duration-300"
                onClick={handleBooking}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
