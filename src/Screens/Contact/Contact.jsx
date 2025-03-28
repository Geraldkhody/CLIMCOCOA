import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="flex flex-col md:flex-row bg-teal-500 p-10 rounded-lg text-white max-w-5xl mx-auto">
      {/* Left Column: Form */}
      <div className="md:w-2/3 bg-teal-600 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Hey! Let's Talk</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-white text-gray-900"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-white text-gray-900"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-white text-gray-900"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-white text-gray-900 h-32"
          />
          <button type="submit" className="w-full bg-teal-800 hover:bg-teal-900 p-3 rounded-lg">Send Now</button>
        </form>
      </div>

      {/* Right Column: Contact Info */}
      <div className="md:w-1/3 bg-teal-500 p-6 rounded-lg flex flex-col justify-center">
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
      </div>
    </div>
  );
};

export default Contact;
