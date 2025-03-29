import { Mail, MapPin, Pencil, PhoneCall, User } from 'lucide-react';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent!');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="wrapper flex flex-col md:flex-row md:items-center py-10 gap-8 text-green-900 w-[69rem] ">
      <div className='md:w-[40%]'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Have Questions? <br /> Get in Touch</h1>
        <div className='space-y-4'>
          <div className='flex gap-4 mt-10 items-start'>
            <div className='p-2 bg-green-200 rounded-md'><MapPin size={20} /></div>
            <p>
              <span className='location'>Climcocoa Project Office.</span>
              <span className='location'>Department of Geography and Resource Developement.</span>
              <span className='location'>P. O. Box LG59</span>
              <span className='location'>UG, Legon Accra</span>
            </p>
          </div>
          <div className='flex gap-4 items-center '>
            <div className='p-2 bg-green-200 rounded-md'><Mail size={20} /></div>
            <p className='text-sm'>climcocoae@ug.edu.gh</p>
          </div>
          <div className='flex gap-4 items-center '>
            <div className='p-2 bg-green-200 rounded-md'><PhoneCall size={20} /></div>
            <p className='text-sm'>+233 279943213</p>
          </div>
        </div>
      </div>
      
      <div className="md:w-2/3  p-8 ">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className='flex gap-4'>
            <div className="input-field">
              <div className='w-6 h-6 mx-2 '><User size={18} /></div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-style"
              />
            </div>
            <div className="input-field">
              <div className='w-6 h-6 mx-2 '><Mail size={18} /></div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-style"
              />
            </div>
          </div>
          <div className='flex gap-4'>
            <div className="input-field">
              <div className='w-6 h-6 mx-2 '><PhoneCall size={18} /></div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="input-style"
              />
            </div>
            <div className="input-field">
              <div className='w-4 '></div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="input-style"
              />
            </div>
          </div>
          <div className="textarea-field">
              <div className='w-6 h-6 mx-2'><Pencil size={18} /></div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="textarea"
            />
          </div>
          <button type="submit" className=" bg-green-700 hover:bg-green-800 text-white text-sm font-semibold py-3 px-8 cursor-pointer rounded-lg">Send Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
