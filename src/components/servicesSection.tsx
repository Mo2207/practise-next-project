
'use client'

import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
}
const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white hover:bg-slate-200 hover:scale-110 transition ease-in duration-300 shadow-md rounded-lg p-6">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className='py-20 relative min-h-[60vh] flex justify-center'>

      {/* background image componenet */}
      {/* absolute positioning over content div and set behind */}
      <div className="absolute inset-0 z-0"> 
        <Image
          src="/images/black-exterior.webp" // Replace with your image path
          alt="Detailing Garage"
          layout="fill" // Makes the image fill the parent container
          objectFit="cover" // Ensures the image covers the container
          objectPosition="center" // Centers the image
          priority // load image fast
        />
      </div>

      {/* Content */}
    <div className='relative container mx-auto py-20 px-4 bg-transparent flex justify-center'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          title="Exterior Detailing"
          description="Restore your car's shine with our comprehensive exterior detailing services."
        />
        <ServiceCard
          title="Interior Cleaning"
          description="Deep cleaning for your car's interior, leaving it fresh and spotless."
        />
        <ServiceCard
          title="Engine Detailing"
          description="Professional engine cleaning to ensure your car runs smoothly."
        />
      </div>
    </div>
  </section>
  )
}

export default ServicesSection;