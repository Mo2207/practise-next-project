
'use client';

// import Image from "next/image";
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/servicesSection';


const HomePage = () => {
  return (
    <main className="bg-gray-100 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <HeroSection/>
      {/* Services Section */}
      <ServicesSection/>
    </main>
  )
}

export default HomePage;
