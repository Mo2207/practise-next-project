
'use client';

import React from 'react';
import Button from '@/components/button';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const router = useRouter();

  const handleAppointmentClick = () => {
    router.push('/booking');
  }

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Premium Car Detailing Services</h1>
        <p className="text-lg mb-8">
          Bring your car back to life with our professional detailing services.
        </p>
        <Button text="Book an appointment" onClick={handleAppointmentClick} />
      </div>
    </section>
  )
}

export default HeroSection;