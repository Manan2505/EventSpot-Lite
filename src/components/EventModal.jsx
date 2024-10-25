// src/components/EventModal.js
import React from 'react';

const EventModal = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-lg mx-auto shadow-lg relative">
        {/* Close button */}
        <button 
          className="absolute top-2 right-2 text-gray-500 dark:text-gray-300 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Event details */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{event.name}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Date:</strong> {event.date}</p>
        <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Location:</strong> {event.location}</p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{event.description}</p>

        {/* Example event image */}
        <img
          src={`https://source.unsplash.com/featured/?event,${event.id}`} // Replace with your image logic
          alt={event.name}
          className="rounded-lg mb-4"
        />

        {/* Close button */}
        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EventModal;
