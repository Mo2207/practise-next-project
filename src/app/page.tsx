
'use client';

// import Image from "next/image";
import React from 'react';
import {useRouter} from 'next/navigation';
import Button from '@/components/button';


const HomePage = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/contact'); // Navigate to the contact page
  };

  return (
    <main className="bg-gray-100 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className='bg-gray-900 text-white py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-5xl font-bold mb-4'>Premium Car Detailing Services</h1>
          <p className="text-lg mb-8">Bring your car back to life with our professional detailing services.</p>
        <Button text="Contact Us" onClick={handleContactClick}/>
        </div>
      </section>
    </main>
  )
}

export default HomePage;
