import React, { createContext, useState, ReactNode } from 'react';
import { RentalHouse } from '../dummy/rentalData';


interface BookingContextType {
    bookedHouses: { house: RentalHouse; dates: { start: string; end: string } }[];
    addBooking: (house: RentalHouse, dates: { start: string; end: string }) => void;
    removeBooking: (houseId: number) => void;
   /* updateBooking: (houseId: number, action: 'increase' | 'decrease') => void; */
    totalCost: number;
}

export const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [bookedHouses, setBookedHouses] = useState<{ house: RentalHouse; dates: { start: string; end: string } }[]>([]);
    
    const addBooking = (house: RentalHouse, dates: { start: string; end: string }) => {
      setBookedHouses(prev => [...prev, { house, dates }]);
    };
  
    const removeBooking = (houseId: number) => {
      setBookedHouses(prev => prev.filter(booking => booking.house.id !== houseId));
       alert('Payment will be Refund');
    };
  
   /* const updateBooking = (houseId: number, action: 'increase' | 'decrease') => {
      
    };  */
  
    const totalCost = bookedHouses.reduce((total, booking) => total + booking.house.pricePerNight, 0);
  
    return (
      <BookingContext.Provider value={{ bookedHouses, addBooking, removeBooking, totalCost }}>
        {children}
      </BookingContext.Provider>
    );
  };
