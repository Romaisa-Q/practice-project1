import React from 'react';
import Image from 'next/image';


const HostProfile = () => {
  return (

    <div className="max-w-5xl p-6 font-sans">
      <h1 className="text-2xl font-bold mb-6">Meet your host</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Host Card Section */}
       <div className="flex flex-col w-md items-center shadow-xl border border-gray-300 h-52 px-8 py-3 rounded-2xl text-center">
        <div className='flex gap-20'>
        <div>

        <div className="w-24 h-24 relative rounded-full mb-4 overflow-hidden bg-gray-100">
        {/* Profile Image  */}
          <Image
            src="/icons/boy.png" // Replace with your image path
            alt="Assad"
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>
        
        {/* Name and Superhost Badge */}
        <h2 className="text-2xl font-semibold">Assad</h2>
        <p className="text-gray-500 text-sm mb-6">Superhost</p>
        </div>
        {/* Stats Grid */}
        <div className="grid grid-rows-3  w-full">
          <div className="flex flex-col">
            <span className="font-bold text-2xl">550</span>
            <span className="text-gray-500 text-xs">Reviews</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl">4.91★</span>
            <span className="text-gray-500 text-xs">Rating</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl">4</span>
            <span className="text-gray-500 text-xs">Years hosting</span>
          </div>
        </div>
       
      </div>
        <div className="mt-6">
            <p className="text-gray-700">Lives in Islamabad, Pakistan</p>
          </div>
        </div>
        {/* Host Details Section */}
        <div className="w-full md:w-2/3">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Assad is a Superhost</h2>
            <p className="text-gray-700">
              Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="font-semibold mb-2">Host details</h3>
            <ul className="space-y-1">
              <li>Response rate: <span className="font-semibold">100%</span></li>
              <li>Responds within <span className="font-semibold">an hour</span></li>
            </ul>
          </div>
          
          <button className="bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition">
            Message host
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostProfile;