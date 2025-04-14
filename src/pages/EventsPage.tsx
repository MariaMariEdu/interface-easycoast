
import React from 'react';
import Navbar from '@/components/Navbar';
import Events from '@/components/Events';

const EventsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-16">
        <Events />
      </main>
    </div>
  );
};

export default EventsPage;
