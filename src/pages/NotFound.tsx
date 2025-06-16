import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-screen h-screen bg-gaming-bg flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-white font-pixelify text-8xl font-bold mb-8 text-stroke">
          404
        </h1>
        <h2 className="text-white font-hanken text-4xl font-bold mb-4">
          Page Not Found
        </h2>
        <p className="text-white font-hanken text-xl mb-8 opacity-90">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-gaming-button rounded-lg text-white font-hanken text-xl font-bold hover:bg-opacity-80 transition-opacity"
        >
          Return to bozo.win
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
