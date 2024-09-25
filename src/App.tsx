import Home from "./pages/Home.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PropertyDetails } from "./pages/PropertyDetails.tsx";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import ResetPassword from "./pages/ResetPassword.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </Router>
  );
};

export default App;