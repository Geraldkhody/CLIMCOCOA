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
            <div className='p-2 bg-green-200 rounded-md'>img</div>
            <p>
              <span className='location'>Climcocoa Project Office.</span>
              <span className='location'>Department of Geography and Resource Developement.</span>
              <span className='location'>P. O. Box LG59</span>
              <span className='location'>UG, Legon Accra</span>
            </p>
          </div>
          <div className='flex gap-4 items-center '>
            <div className='p-2 bg-green-200 rounded-md'>img</div>
            <p className='text-sm'>climcocoae@ug.edu.gh</p>
          </div>
          <div className='flex gap-4 items-center '>
            <div className='p-2 bg-green-200 rounded-md'>img</div>
            <p className='text-sm'>+233 279943213</p>
          </div>
        </div>
      </div>
      
      {/* Left Column: Form */}
      <div className="md:w-2/3  p-8 ">
        {/* <h2 className="text-3xl font-bold mb-4">Hey! Let's Talk</h2> */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className='flex gap-4'>
            <div className="input-field">
              <div className='w-6 h-6 mx-2 border'></div>
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
              <div className='w-6 h-6 mx-2 border'></div>
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
              <div className='w-6 h-6 mx-2 border'></div>
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
              <div className='w-6 h-6 mx-2 border'></div>
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
              <div className='w-6 h-6 mx-2 border'></div>
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

      {/* Right Column: Contact Info */}
      {/* <div className="md:w-1/3 bg-teal-500 p-6 rounded-lg flex flex-col justify-center">
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Call Anytime</h3>
          <p>+91 23678 27867</p>
          <p>+91 67678 92878</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Send Email</h3>
          <p>connect@ifirms.com</p>
          <p>hello@ifirms.com</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Visit Us</h3>
          <p>20 Island Park Road, New Jersey, New York, USA</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Follow us</h3>
          <div className="flex space-x-4 mt-2">
            {['linkedin', 'instagram', 'facebook', 'twitter'].map((platform) => (
              <a key={platform} href="#" className="text-white text-2xl">
                <i className={`fab fa-${platform}`} />
              </a>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
