
'use client';

import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

const ContactInfo = () => {
  return (
    <section className="py-10 bg-gray-200">
      <div className="text-gray-800 mx-auto space-y-4 text-center content-center">
        <h2 className="texl-5xl font-bold mb-6 text-center">Our Contact Details</h2>
        <p className="flex items-center justify-center space-x-3">
          <MapPinIcon className="h-6 w-6 text-orange-600" />
          <strong className="font-semibold text-orange-600">Address </strong>
          <a href="address" className="hover:underline">
          123 Premium St, Car City, CC 56789
          </a>
        </p>
        <p className="flex items-center justify-center space-x-3">
          <PhoneIcon className="h-6 w-6 text-orange-600" />
          <strong className="font-semibold text-orange-600">Phone </strong>
          <a href="phone#" className="hover:underline">
          (123) 456-7890
          </a>
        </p>
        <p className="flex items-center justify-center space-x-3">
          <EnvelopeIcon className="h-6 w-6 text-orange-600" />
          <strong className="font-semibold text-orange-600">Email </strong>
          <a href="email" className="hover:underline">
          example@email.com
          </a>
        </p>
      </div>
    </section>
  )
}

export default ContactInfo;

