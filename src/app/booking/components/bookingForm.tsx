
'use client';

import { useState } from 'react';
import Image from 'next/image';

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

  const [submittedData, setSubmittedData] =useState<FormData | null> (null);

  // handle form input changes
  const handleChange = (
    // event is specifically for input element
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // destructuring event object
    const {name, value} = event.target
    // copy existing form data & set the new form data
    setFormData({...formData, [name]: value})
  }

    // handle form submissions
  const handleFormSubmit = (
    // event is specifically for form event (form submission)
    event: React.FormEvent
  ) => {
    // prevent full page reload
    event.preventDefault();
    // save submitted form data for processing
    setSubmittedData(formData);
    console.log(submittedData);

    // clear form fields
    setFormData({ name: "", email: "", service: "", timeRequest: new Date });
  }

  return (
    <div className='flex justify-center relative'>

      <div className='absolute inset-0 z-0 w-full h-[100vh]'>
      <Image
          src="/images/3-sports-cars.webp" // Replace with your image path
          alt="3 sports cars"
          className="object-cover" // Ensures the image covers the container
          fill
          priority
        />
      </div>

      <form className="my-10 py-3 pb-10 bg-gray-800 rounded w-[60vw] relative bg-opacity-90 z-10 mt-[15vh]" action="">
        <div className='grid grid-cols-1 gap-4 w-[30vw] mx-auto'>

          <h2 className='text-2xl font-bold text-center text-white mb-6'>Book your Detailing today!</h2>

          <label htmlFor='name' className='block font-bold text-white'>Name:</label>
            <input
            className='w-full py-2 px-4 text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring-4 focus:ring-orange-600'/>
          
          <label htmlFor='email' className='block font-bold text-white'>Email:</label>
            <input
            className='w-full py-2 px-4 text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring-4 focus:ring-orange-600'/>
          
          <label htmlFor='service' className='block font-bold text-white'>Service</label>
            <input
            className='w-full py-2 px-4 text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring-4 focus:ring-orange-600'/>
          
          <label htmlFor='timeRequest' className='block font-bold text-white space'>Date:</label>
            <input
            className='w-full py-2 px-4 text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring-4 focus:ring-orange-600'/>
          
          <button className="w-full bg-orange-600 rounded-md py-2 my-6" onClick={handleFormSubmit}>Submit
          </button>

        </div>
      </form>
    </div>
  )
}

export default BookingForm;