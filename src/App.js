// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventList from './components/EventList';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <Hero />
      <main className="container mx-auto py-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Upcoming Events
        </h2>
        <EventList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
