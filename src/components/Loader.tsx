// Loader.tsx
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src="/loader.gif" alt="Loading..." />
    </div>
  );
};

export default Loader;
