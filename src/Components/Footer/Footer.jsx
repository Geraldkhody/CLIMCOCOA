import React from "react";

const Footer = () => {
  const quickLinks = [
    { name: 'About us', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'People', href: '#' },
    { name: 'Contact us', href: '#' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Twitter (X)', href: '#' },
  ];
  const contactInfo = {
    email: "climcocoae@ug.edu.gh",
    phone: "(+233) 279943213",
  };

  return (
    <footer className="bg-green-900 mt-10 text-white py-16">
      <div className="wrapper">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">CLIMCOCOA</h2>
            <p className="text-sm">Climate Smart Cocoa Systems for Ghana</p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-20">
            <LinkSection title="Home" links={quickLinks} />
            {/* <LinkSection title="Social" links={socialLinks} /> */}
            <ContactSection title="Contact" contact={contactInfo} />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-white/50 pt-10 text-center">
          <p className="text-sm">&copy; 2025 Copyright CLIMCOCOA</p>
        </div>
      </div>
    </footer>
  );
};

const LinkSection = ({ title, links }) => (
  <div className="text-center md:text-left mt-4">
    <h3 className="font-bold">{title}</h3>
    <ul className="mt-4 space-y-1 md:space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="hover:text-green-200">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const ContactSection = ({ title, contact }) => (
  <div className="text-center md:text-left mt-4">
    <h3 className="font-semibold">{title}</h3>
    <ul className="mt-4 space-y-1">
      <li>
        <a href={`mailto:${contact.email}`} className="hover:text-gray-300">
          {contact.email}
        </a>
      </li>
      <li>
        <a href={`tel:${contact.phone}`} className="hover:text-gray-300">
          {contact.phone}
        </a>
      </li>
    </ul>
  </div>
);

export default Footer;
