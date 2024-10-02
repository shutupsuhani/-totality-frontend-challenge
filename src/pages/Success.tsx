import React from 'react';
import { useParams,Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Success: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const bookingDetails = localStorage.getItem(`booking_${id}`);

  if (!bookingDetails) {
    return <div>No booking details found.</div>;
  }

  const { totalCost, propertyName, propertyLocation, startDate, endDate } = JSON.parse(bookingDetails);

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 mt-40 font-serif">
      <img
          src="/successtick.gif"
          alt="Success"
          className="mx-auto w-24 h-24 mb-6"
        />
        <h1 className="text-3xl font-bold text-green-500 text-center mb-6">Booking Successful!</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl  font-semibold">Booking Details</h2>
          <p><strong>Property Name:</strong> {propertyName}</p>
          <p><strong>Location:</strong> {propertyLocation}</p>
          <p><strong>Start Date:</strong> {new Date(startDate).toLocaleDateString()}</p>
          <p><strong>End Date:</strong> {new Date(endDate).toLocaleDateString()}</p>
          <p><strong>Total Cost:</strong> ${totalCost.toFixed(2)}</p>
          <div>
            <button className='bg-green-500 text-white w-24 h-10 text-xl mt-3 hover:border-2 hover:border-green-600 hover:bg-white hover:text-green-600'>Paid!</button>
         </div>

         <Link to='/'><div>
            <button className='bg-black text-white w-36 h-16 text-md mt-3 hover:border-2 hover:border-black hover:bg-white hover:text-black'>Return To Home Page</button>
         </div></Link>
        
        
        </div>
        
      </div>
    </>
  );
};

export default Success;
