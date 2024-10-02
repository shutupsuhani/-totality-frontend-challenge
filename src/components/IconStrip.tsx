import React from 'react';
import icons, { IconData } from '../dummy/iconData';


interface IconStripProps {
  onFilterChange: (filter: string | null) => void; 
}

const IconStrip: React.FC<IconStripProps> = ({ onFilterChange }) => {
  return (
    <div className="relative w-full mt-20 shadow-md">
      <div className="flex space-x-4 p-4 overflow-x-auto scrollbar-hide"> {/* Scrollable area for icons */}
        <div 
          className="cursor-pointer flex flex-col items-center" 
          onClick={() => onFilterChange(null)} 
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

      
    </div>
  );
}

export default IconStrip;
