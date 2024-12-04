
'use client'

import { useState } from 'react';

interface FormData {
  name: string,
  email: string,
  message: string
}

const ContactForm: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

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

  // const handleFormSubmit = ()

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
      </div>
    </form>
  )
}

export default ContactForm;