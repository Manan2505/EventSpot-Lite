// src/components/EventCard.js
import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg transform transition hover:scale-105 hover:shadow-lg duration-300 ease-in-out cursor-pointer">
      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{event.name}</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-1">{event.date}</p>
      <p className="text-gray-600 dark:text-gray-400 mb-1">{event.location}</p>
    </div>
  );
};

export default EventCard;
