import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import IconStrip from '../components/IconStrip'; // Import your IconStrip component
import RentalList from '../components/RentalList'; // Import your RentalList component
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  
  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "120px" }}> 
        <IconStrip onFilterChange={handleFilterChange} />
        <RentalList selectedView={selectedFilter} />
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
