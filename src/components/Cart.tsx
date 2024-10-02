import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Modal from "../components/Modal.tsx"; // Import the Modal component

const Cart: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();
  const [isModalOpen, setModalOpen] = useState(false);
  const [itemIdToRemove, setItemIdToRemove] = useState<number | null>(null);

  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  // Helper function to ensure the input is a Date object
  const parseDate = (date: any) => {
    return date instanceof Date ? date : new Date(date);
  };

  const calculateTotalCost = (
    startDate: any,
    endDate: any,
    pricePerNight: number
  ) => {
    const start = parseDate(startDate);
    const end = parseDate(endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return "Invalid dates";
    }

    const diffInTime = end.getTime() - start.getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24)); // Calculate the difference in days

    return diffInDays * pricePerNight; // Total cost
  };

  const handleRemoveClick = (id: number) => {
    setItemIdToRemove(id);
    setModalOpen(true);
  };

  const confirmRemove = () => {
    if (itemIdToRemove !== null) {
      removeFromCart(itemIdToRemove);
      setModalOpen(false);
      setItemIdToRemove(null);
    }
  };

  const cancelRemove = () => {
    setModalOpen(false);
    setItemIdToRemove(null);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 mt-32 font-serif">
        <Link to="/">
          <div className="cursor-pointer flex justify-start">
            <button className="bg-white border-2 border-black text-black w-36 h-16 hover:bg-black hover:text-white">
              Return To Book
            </button>
          </div>
        </Link>

        <h1 className="text-3xl mt-3 font-bold mb-6">Your Bookings</h1>
        {cartItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
            <img src={item.image} alt={item.name} />
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">{item.name}</h2>
            </div>
            <p>
              <strong>Location:</strong> {item.location}
            </p>
            <p>
              <strong>Price Per Night:</strong> ${item.pricePerNight}
            </p>
            <p>
              <strong>Start Date:</strong>{" "}
              {item.bookingDetails?.startDate
                ? parseDate(item.bookingDetails.startDate).toDateString()
                : "Not available"}
            </p>
            <p>
              <strong>End Date:</strong>{" "}
              {item.bookingDetails?.endDate
                ? parseDate(item.bookingDetails.endDate).toDateString()
                : "Not available"}
            </p>
            <p>
              <strong>Total Cost:</strong>{" "}
              {item.bookingDetails?.startDate && item.bookingDetails?.endDate
                ? `$${calculateTotalCost(
                    item.bookingDetails.startDate,
                    item.bookingDetails.endDate,
                    item.pricePerNight
                  )}`
                : "Not available"}
            </p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4">
              Booked!
            </button>

            <button
              onClick={() => handleRemoveClick(item.id)}
              className="bg-red-500 text-white px-4 ml-2 py-2 rounded-lg"
            >
              Remove
            </button>
          </div>
        ))}

        {isModalOpen && (
          <Modal
            message="Are you sure you want to delete this booking?"
            onConfirm={confirmRemove}
            onCancel={cancelRemove}
          />
        )}
      </div>
    </>
  );
};

export default Cart;
