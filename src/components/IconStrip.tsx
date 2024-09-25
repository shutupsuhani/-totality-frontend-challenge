import React from 'react';
import icons, { IconData } from '../dummy/iconData';
import Filter from './Filter';

interface IconStripProps {
  onFilterChange: (filter: string) => void; 
}

const IconStrip: React.FC<IconStripProps> = ({ onFilterChange }) => {
  return (
    <div className="relative w-full mt-20 shadow-md">
      <div className="flex space-x-4 p-4 overflow-x-auto scrollbar-hide"> {/* Scrollable area for icons */}
        <div 
          className="cursor-pointer flex flex-col items-center" 
          onClick={() => onFilterChange(null)} // Reset filter
        >
          <img src='/all.png' className='w-12 h-12'/>
          <span className="text-center mt-2 text-sm font-semibold">All</span>
        </div>
        
        {icons.map((icon: IconData) => (
          <div 
            key={icon.id} 
            className="flex flex-col items-center pr-6 pl-6 cursor-pointer"  
            onClick={() => onFilterChange(icon.name)}
          >
            <img src={icon.icon} alt={icon.name} className="w-12 h-12 rounded" />
            <span className="text-center mt-2 text-sm font-semibold">{icon.name}</span>
          </div> 
        ))}
      </div>

      <div className="fixed top-0 right-4"> {/* Positioning the Filter icon */}
        <Filter />
      </div>
    </div>
  );
}

export default IconStrip;
