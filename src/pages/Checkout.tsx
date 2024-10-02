
import React, { useContext, useState } from 'react';
import { BookingContext } from '../context/BookingContext';

const Checkout: React.FC = () => {
  const { bookedHouses, totalCost } = useContext(BookingContext)!;
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', expiration: '', cvv: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the booking submission logic (e.g., API call)
    console.log('Submitting booking with:', { contactInfo, paymentInfo, bookedHouses });
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Contact Information</h3>
          <input type="text" placeholder="Name" value={contactInfo.name} onChange={e => setContactInfo({ ...contactInfo, name: e.target.value })} required />
          <input type="email" placeholder="Email" value={contactInfo.email} onChange={e => setContactInfo({ ...contactInfo, email: e.target.value })} required />
          <input type="tel" placeholder="Phone" value={contactInfo.phone} onChange={e => setContactInfo({ ...contactInfo, phone: e.target.value })} required />
        </div>
        <div>
          <h3>Payment Information</h3>
          <input type="text" placeholder="Card Number" value={paymentInfo.cardNumber} onChange={e => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })} required />
          <input type="text" placeholder="Expiration Date" value={paymentInfo.expiration} onChange={e => setPaymentInfo({ ...paymentInfo, expiration: e.target.value })} required />
          <input type="text" placeholder="CVV" value={paymentInfo.cvv} onChange={e => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })} required />
        </div>
        <h3>Total Cost: ${totalCost}</h3>
        <button type="submit" className="bg-green-500 text-white p-2 rounded">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Checkout;
