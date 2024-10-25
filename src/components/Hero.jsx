// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 text-center">
      <h1 className="text-5xl font-bold mb-4">Discover Local Events</h1>
      <p className="text-lg">Find and attend amazing events happening near you.</p>
      <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-full shadow-lg hover:bg-blue-100 transition">
        Explore Events
      </button>
    </div>
  );
};

export default Hero;
