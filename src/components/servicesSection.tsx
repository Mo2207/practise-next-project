
'use client'

interface ServiceCardProps {
  title: string;
  description: string;
}
const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className='py-20'>
    <div className='container mx-auto px-4'>
      <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
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