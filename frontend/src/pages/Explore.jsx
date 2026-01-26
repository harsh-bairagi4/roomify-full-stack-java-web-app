import React from 'react'
import FacilitySections from '@/components/FacilitySections';
import { libraries, rooms ,hostels, tiffins, gyms} from '@/assets/assets';


const Explore = () => {
  return (
    <div className="border-2 border-green-600 min-h-screen ">
      <main className="border-2 border-yellow-300 max-w-7xl mx-auto px-6 py-10 space-y-16">
        <FacilitySections title="Rooms" subtitle="Private rooms available near your location" facilities={rooms}/>
        <FacilitySections title="Hostels" subtitle="Budget-friendly shared living options" facilities={hostels}/>
        <FacilitySections title="Tiffin & Mess" subtitle="Daily meal services around you" facilities={tiffins}/>
        <FacilitySections title="Libraries" subtitle="Quiet and comfortable spaces for focused study" facilities={libraries}/>
        <FacilitySections title="Gyms" subtitle="Fitness centers near your stay" facilities={gyms}/>
      </main>
    </div>
  );
}

export default Explore
