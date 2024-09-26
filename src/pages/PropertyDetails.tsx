import React from 'react'
import { useParams } from 'react-router-dom'
import rentalHouses from '../dummy/rentalData.ts'
import Navbar from '../components/Navbar.tsx'

export const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const property = rentalHouses.find((house) => house.id === parseInt(id))

  if (!property) {
    return <div>Property not found</div>
  }

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

            {/* Book Now Button */}
            <div className="text-center mt-6">
              <button className="bg-pink-700 hover:bg-pink-800 text-white py-3 px-10 rounded-lg text-lg shadow-lg transition duration-300">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
