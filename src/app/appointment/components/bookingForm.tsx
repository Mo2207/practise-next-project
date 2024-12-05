
'use client';

import { useState } from 'react';

interface FormData {
  name: string,
  email: string,
  service: string | string[],
  timeRequest: Date
}

const BookingForm: React.FC = () => {

  // state to hold the current values of the form inputs
  const [formData, setFormData] =
  useState<FormData>({
    name: '',
    email: '',
    service: '',
    timeRequest: new Date
  })

  return (
    <div className='flex justify-center'>
      <form className="my-10 py-6 bg-gray-400 w-[60vw]" action="">
        <div className='grid grid-cols-1 gap-4 w-[30vw] mx-auto'>
          <h2 className='text-2xl font-bold text-center text-white mb-6'>Book your Detailing today!</h2>
          <label htmlFor='name' className='block text-sm font-medium text-gray-300'>Name:
            <input
            className='w-full py-2 px-4 text-gray-300 bg-gray-200 rounded focus:outline-none focus:ring-4 focus:ring-orange-600'
            />
          </label>
          <label htmlFor='email' className='block text-sm font-medium text-gray-300'>Email:
            <input
            />
          </label>
          <label htmlFor='service' className='block text-sm font-medium text-gray-300'>Service
            <input
            />
          </label>
          <label htmlFor='timeRequest' className='block text-sm font-medium text-gray-300'>Date:
            <input/>
          </label>
        </div>
      </form>
    </div>
  )
}

export default BookingForm;