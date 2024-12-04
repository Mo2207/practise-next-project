
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
    <form className="py-10 place-content-center" action="">
      <div className='grid grid-cols-1 gap-4 content-center mx-10'>
        <label htmlFor="">Name:
          <input className='bg-gray-600' name="name" value={formData.name}
          onChange={handleChange}
          />
        </label>
        <label htmlFor="">Email:
          <input className='bg-gray-600' name="email" value={formData.email}
          onChange={handleChange}
          />
        </label>
        <label htmlFor="">Message:
          <input className='bg-gray-600' name="message" value={formData.message}
          onChange={handleChange}
          />
        </label>
        <button onClick={handleFormSubmit}>Submit</button>
      </div>
    </form>
  )
}

export default ContactForm;