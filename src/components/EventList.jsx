// src/components/EventList.js
import React, { useState } from 'react';
import EventCard from './EventCard';
import { events } from '../data/events';
import EventModal from './EventModal';

const EventList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);  // For modal

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="p-4">
      {/* Search Input */}
      <input 
        type="text" 
        placeholder="Search by event name or location..." 
        className="w-full mb-4 p-2 rounded-lg border border-gray-300 shadow-sm focus:ring focus:border-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Event List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEvents.map((event) => (
          <div key={event.id} onClick={() => handleEventClick(event)}>
            <EventCard event={event} />
          </div>
        ))}
      </div>

      {/* Event Modal */}
      {selectedEvent && <EventModal event={selectedEvent} onClose={closeModal} />}
    </div>
  );
};

export default EventList;
