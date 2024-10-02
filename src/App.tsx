import React, { useState, useEffect } from "react";
import Home from "./pages/Home.tsx";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { PropertyDetails } from "./pages/PropertyDetails.tsx";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import ResetPassword from "./pages/ResetPassword.tsx";
import Search from "./components/Search.tsx";
import Cart from "./components/Cart.tsx";
import Success from "./pages/Success.tsx";
import Payment from "./pages/Payment.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { BookingProvider } from "./context/BookingContext.tsx";
import { CartProvider } from "./context/CartContext.tsx";
import Navbar from "./components/Navbar.tsx"; // Import Navbar
import Loader from "./components/Loader.tsx"; // Import Loader

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  // Simulating a loading state (you can replace this with your actual loading logic)
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      <BookingProvider>
        <CartProvider>
          <Router>
            {loading ? (
              <Loader /> // Show Loader when loading
            ) : (
              <>
                <ConditionalNavbar /> {/* Conditionally render Navbar */}
                <Routes>
                  {/* Home, Register, Login, Reset Password pages */}
                  <Route path="/" element={<Home />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/reset-password" element={<ResetPassword />} />

                  {/* Protected routes */}
                  <Route
                    path="/search"
                    element={
                      <ProtectedRoute>
                        <Search />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/property/:id"
                    element={
                      <ProtectedRoute>
                        <PropertyDetails />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/cart"
                    element={
                      <ProtectedRoute>
                        <Cart />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/success/:id"
                    element={
                      <ProtectedRoute>
                        <Success />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/payment/:id"
                    element={
                      <ProtectedRoute>
                        <Payment />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </>
            )}
          </Router>
        </CartProvider>
      </BookingProvider>
    </AuthProvider>
  );
};

// Component to conditionally render Navbar
const ConditionalNavbar: React.FC = () => {
  const location = useLocation();

  // Define paths where Navbar should not be rendered
  const noNavbarPaths = ["/login", "/register", "/search"];

  // Check if the current path is in the noNavbarPaths array
  const showNavbar = !noNavbarPaths.includes(location.pathname);

  return showNavbar ? <Navbar /> : null; // Render Navbar based on condition
};

export default App;
