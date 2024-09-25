// iconData.ts

export interface IconData {
    id: number;
    name: string;
    description: string;
    icon: string; 
  }
  
  const icons: IconData[] = [
    {
      id: 1,
      name: "Pool View",
      description: "Joyable Pool View",
      icon: "pool.png" 
    },
    {
      id: 2,
      name: "Lake View",
      description: "Energized Lake View",
      icon: "lake.png" 
    },
    {
      id: 3,
      name: "Beach Front",
      description: "Front View of Beach",
      icon: "beachfront.png" 
    },
    {
      id: 4,
      name: "Sea Front",
      description: "Scenic Sea Front",
      icon: "seafront.png" 
    },
    {
      id: 5,
      name: "Room",
      description: "Looking for Rooms",
      icon: "room.png" 
    },
    {
      id: 6,
      name: "Mountain View",
      description: "Amazing Mountain View",
      icon: "mountain.png" 
    },
    {
      id: 7,
      name: "Farm View",
      description: "Farm View in Village",
      icon: "farm.png" 
    },
    {
      id: 8,
      name: "Treehouse View",
      description: "Spacious and Amazing Tree House",
      icon: "treehouse.png" 
    },
    {
      id: 9,
      name: "Cabin Houses",
      description: "Cozy Cabin Houses",
      icon: "Cabins.png" 
    },

    {
      id:10,
      name:"Castle",
      description:"Beautiful Royal Mansions",
      icon:"castle.png"

    } ,
   
   
  ];
  
  export default icons;
  