import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define types for booking details and cart items
type BookingDetails = {
  startDate: Date;
  endDate: Date;
};

type CartItem = {
  id: number;
  name: string;
  location: string;
  pricePerNight: number;
  image: string;
  bookingDetails: BookingDetails;
};

// Define the type for the context value
type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void; // Changed id type to number
};

// Create the CartContext with undefined as the default value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use the cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// CartProvider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    // Retrieve cart from localStorage if it exists
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const updatedCart = [...prevItems, item];
      localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Persist in localStorage
      return updatedCart;
    });
  };

  // Update the id type to number to match the CartItem id type
  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter((item) => item.id !== id);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Update localStorage
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
