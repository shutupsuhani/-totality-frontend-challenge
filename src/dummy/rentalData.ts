export interface RentalHouse {
    id: number;
    name: string;
    numberOfRooms: number;
    view: string; 
    ratings?:string;
    location: string; 
    description: string;
    pricePerNight: number; 
    image: string; 
  }
  
  const rentalHouses: RentalHouse[] = [
    {
      id: 1,
      name: "Luxury Villa",
      numberOfRooms: 4,
      view: "Pool View",
      location: "Malibu, California",
      description: "A luxurious villa with stunning pool views, perfect for a relaxing getaway.",
      pricePerNight: 350,
      ratings:"4.4⭐",
      image: "/ph1.jpg" 
    },
    {
      id: 2,
      name: "Cozy Lake House",
      numberOfRooms: 3,
      view: "Lake View",
      location: "Lake Tahoe, Nevada",
      description: "A cozy lake house with beautiful views of the lake, ideal for family vacations.",
      pricePerNight: 250,
      ratings:"4.8⭐",
      image: "/lf1.jpg" 
    },
    {
      id: 3,
      name: "Beachfront Bungalow",
      numberOfRooms: 2,
      view: "Beach Front",
      location: "Santa Monica, California",
      description: "A charming bungalow right on the beach, perfect for sun lovers.",
      pricePerNight: 300,
      ratings:"4.9⭐",
      image: "/befr1.jpg" 
    },
    {
      id: 4,
      name: "Mountain Retreat",
      numberOfRooms: 5,
      view: "Mountain View",
      location: "Aspen, Colorado",
      description: "A spacious retreat in the mountains, great for hiking enthusiasts.",
      pricePerNight: 400,
      ratings:"4.5⭐",
      image: "/mv3.jpg" // Replace with actual image path
    },
    {
      id: 5,
      name: "Farmhouse Escape",
      numberOfRooms: 4,
      view: "Farm View",
      location: "Lancaster, Pennsylvania",
      description: "A serene farmhouse surrounded by nature, perfect for a peaceful getaway.",
      pricePerNight: 220,
      ratings:"4.6⭐",
      image: "/fv1.jpg" // Replace with actual image path
    },
    {
      id: 6,
      name: "Treehouse Hideaway",
      numberOfRooms: 1,
      view: "Treehouse View",
      location: "Portland, Oregon",
      description: "An adventurous treehouse that offers a unique living experience in nature.",
      pricePerNight: 180,
      ratings:"4.4⭐",
      image: "/th1.jpg" // Replace with actual image path
    },
    {
      id: 7,
      name: "Charming Cabin",
      numberOfRooms: 3,
      view: "Cabin Houses",
      location: "Great Smoky Mountains, Tennessee",
      description: "A charming cabin in the woods, perfect for cozy family getaways.",
      pricePerNight: 200,
      ratings:"4.5⭐",
      image: "/cabin1.jpg" // Replace with actual image path
    },
    {
      id: 8,
      name: "Sea Front Apartment",
      numberOfRooms: 2,
      view: "Sea Front",
      location: "Miami Beach, Florida",
      description: "An elegant apartment with breathtaking sea views, ideal for romantic getaways.",
      pricePerNight: 280,
      ratings:"4.8⭐",
      image: "/sf1.jpg" 
    },
    {
      id: 9,
      name: "Modern Loft",
      numberOfRooms: 2,
      view: "Room",
      location: "New York City, New York",
      description: "A stylish modern loft with city views, perfect for urban explorers.",
      pricePerNight: 260,
      ratings:"4.6⭐",
      image: "/loft1.jpg" // Replace with actual image path
    },
    {
      id: 10,
      name: "Rustic Farm Stay",
      numberOfRooms: 4,
      view: "Farm View",
      location: "Napa Valley, California",
      description: "A rustic farm stay experience, complete with farm activities and fresh produce.",
      pricePerNight: 230,
      ratings:"4.9⭐",
      image: "/fv1.jpg" 
    } ,
    {
      id: 11,
      name: "Spacious Treehouse ",
      numberOfRooms: 2,
      view: "Treehouse View",
      location: "Nagpur, India",
      description: "An adventurous treehouse that offers a unique living experience in nature.",
      pricePerNight: 240,
      ratings:"4.5⭐",
      image: "/th2.jpg" // Replace with actual image path
    },
    {
      id: 12,
      name: "Beautiful 4-BHK Duplex",
      numberOfRooms: 6,
      view: "City View",
      location: "San Francisco",
      description: "A stylish modern loft with city views, perfect for urban explorers.",
      pricePerNight: 500,
      ratings:"4.8⭐",
      image: "/loft2.jpg" // Replace with actual image path
    },
    {
      id: 13,
      name: "Sea Front Apartment",
      numberOfRooms: 3,
      view: "Sea Front",
      location: "Puri Beach, Orrisa",
      description: "An elegant apartment with breathtaking sea views, ideal for romantic getaways.",
      pricePerNight: 350,
      ratings:"4.8⭐",
      image: "/sf2.jpg" 
    },
  ];
  
  export default rentalHouses;
  