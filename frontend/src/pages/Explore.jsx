import React from 'react'
import RoomsSection from '@/components/RoomsSection';
import HostelsSection from '@/components/HostelsSection';
import TiffinSection from '@/components/TiffinSection';
import GymsSection from '@/components/GymsSection';

const Explore = () => {
  return (
    <div className="border-2 border-green-600 min-h-screen ">
      <main className="border-2 border-yellow-300 max-w-7xl mx-auto px-6 py-10 space-y-16">
        <RoomsSection />
        <HostelsSection />
        <TiffinSection />
        <GymsSection />
      </main>
    </div>
  );
}

export default Explore
