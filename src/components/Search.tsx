import { Link } from "react-router-dom";

const Search: React.FC = () => {
  return (
    <>
    
    <div className="w-full h-20 shadow-md flex items-center">
        
      <Link to='/'> <div className="flex items-center">
          <img src="/left-arrow.png" className="w-6 h-6"/>
        </div> </Link> 
      
    </div>

    </>
  )  
};

export default Search;
