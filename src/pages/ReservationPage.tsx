
import React from 'react';
import Navbar from '@/components/Navbar';
import ReservationForm from '@/components/ReservationForm';

const ReservationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-16">
        <ReservationForm />
      </main>
    </div>
  );
};

export default ReservationPage;
