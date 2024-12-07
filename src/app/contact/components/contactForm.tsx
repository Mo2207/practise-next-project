
'use client'

import { useState } from 'react';

interface FormData {
  name: string,
  email: string,
  message: string
}

const ContactForm: React.FC = () => {

  // state to hold the current values of the form inputs
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  // state to store the data submitted from the form for display or processing
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
    // console.log(name, value)
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
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <form className="py-6 px-6 max-w-lg mx-auto border bg-gray-800 bg-opacity-90 rounded-lg shadow-md mb-6" action="">
      <div className='grid grid-cols-1 gap-4 mx-auto'>

        <h2 className='text-2xl font-bold text-center text-white mb-6'>Reach out to us!</h2>

        <label htmlFor="name" className='block font-bold text-gray-300'>Name</label>
          <input className='w-full py-2 px-4 text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring-4 focus:ring-orange-600' name="name" value={formData.name}
          onChange={handleChange}/>
        
        <label htmlFor="email" className='block font-bold text-gray-300'>Email</label>
          <input className='w-full py-2 px-4 text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring-4 focus:ring-orange-600' name="email" value={formData.email}
          onChange={handleChange}/>
        
        <label htmlFor="message" className='block font-bold text-gray-300'>Message</label>
          <input className='w-full py-2 px-4 text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring-4 focus:ring-orange-600' name="message" value={formData.message}
          onChange={handleChange}/>
        
        <button className="w-full bg-orange-600 rounded-md py-2 my-2" onClick={handleFormSubmit}>Submit</button>

      </div>
    </form>
  )
}

export default ContactForm;