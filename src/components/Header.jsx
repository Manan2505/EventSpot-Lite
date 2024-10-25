// src/components/Header.js
import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  return (
    <header className="bg-blue-600 dark:bg-gray-900 p-4 text-white text-center flex justify-between items-center">
      <h1 className="text-3xl font-bold">EventSpot Lite</h1>
      <DarkModeToggle />
    </header>
  );
};

export default Header;
