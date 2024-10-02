import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();


  if (loading) return <p>Loading...</p>;
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
