const PropertyList: React.FC<{ rentalHouses: RentalHouse[] }> = ({ rentalHouses }) => {
    return (
      <div className="property-list">
        {rentalHouses.map((house) => (
          <div key={house.id} className="property-card">
            <h2>{house.name}</h2>
            <img src={house.image} alt={house.name} />
            <p>{house.description}</p>
            <p>{house.location}</p>
            <p>{house.view}</p>
            <p>{house.ratings}</p>
            <p>${house.pricePerNight} per night</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default PropertyList;
  