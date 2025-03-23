import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Visual_1 from "@/assets/kyle-hinkson-fuuhb86A-tE-unsplash.jpg";
import Visual_2 from "@/assets/elle-inlom-VcUH1qneMeg-unsplash.jpg";
import ClimateChnage from "@/assets/Key aspect/Climate health.png";
import Agroforestry from "@/assets/Key aspect/agroforestry.png";
import Socioeconomic from "@/assets/Key aspect/socioeconomic.png";
import Capacity from "@/assets/Key aspect/Knowledge and tools.png"

// Reusable Card Component
const Card = ({ icon, title, description, className, children }) => (
  <div className={`flex-1 min-w-[200px] max-w-[250px] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${className}`}>
    {icon && <img src={icon} alt={`${title} Icon`} className="w-12 h-12 mx-auto mb-4 bg-white p-1.5 rounded-lg " />}
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm">{description}</p>
    {children}
  </div>
);

// Reusable Section Component
const Section = ({ title, subtitle, children, className }) => (
  <section className={`py-16 text-center ${className}`}>
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{title}</h2>
      <p className="text-xl text-gray-700 font-semibold mb-12">{subtitle}</p>
      {children}
    </div>
  </section>
);

// Reusable CTA Button Component
const CTAButton = ({ href, text, className }) => (
  <a
    href={href}
    className={`inline-block px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors ${className}`}
  >
    {text}
  </a>
);

// Main Component
const Home = () => {
  const focusAreas = [
    {
      icon: ClimateChnage,
      title: "Climate Change Impacts",
      description: "Studying how climate variability affects cocoa health and productivity.",
    },
    {
      icon: Agroforestry,
      title: "Agroforestry Solutions",
      description: "Promoting shade trees to improve yields and manage pests.",
    },
    {
      icon: Socioeconomic,
      title: "Socioeconomic Studies",
      description: "Assessing the costs and benefits of agroforestry for farmers.",
    },
    {
      icon: Capacity,
      title: "Capacity Building",
      description: "Empowering farmers with knowledge and tools for climate adaptation.",
    },
  ];

  const researchHighlights = [
    {
      title: "Influences of Climate Variability on Cocoa Health",
      author: "Asitoakor et al., 2022",
      link: "https://doi.org/10.1016/j.agrformet.2022.109199",
    },
    {
      title: "Combined Effects of Shade and Drought on Cocoa",
      author: "Mensah et al., 2023",
      link: "https://doi.org/10.1016/j.scitotenv.2023.165657",
    },
  ];

  return (
    <div >
      <Hero />
      {/* Introduction Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Section
          title="Building Resilience for Ghana’s Cocoa Future"
          subtitle="Understanding the impacts of climate change on cocoa production and empowering farmers with innovative agroforestry solutions."
          className=""
        >
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            The Climate Smart Cocoa Systems (CLIMCOCOA) project is a
            multidisciplinary initiative aimed at understanding the impacts of
            climate change on cocoa production in Ghana. By promoting
            agroforestry and sustainable practices, we are working to enhance
            the resilience of cocoa farmers and ensure the long-term
            sustainability of Ghana’s cocoa sector.
          </p>
          {/* Key Focus Areas */}
          <div className="flex flex-wrap justify-center gap-6 mb-24">
            {focusAreas.map((item, index) => (
              <Card
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                className="bg-green-700 text-white"
              />
            ))}
          </div>
          
          {/* Visuals */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <img
              src={Visual_1}
              alt="Cocoa Farm with Shade Trees"
              className="max-w-full md:max-w-[45%] rounded-lg shadow-md"
            />
            <img
              src={Visual_2}
              alt="Researchers Conducting Fieldwork"
              className="max-w-full md:max-w-[45%] rounded-lg shadow-md"
            />
          </div>
          {/* Call-to-Action */}
          {/* the href here will go the /about path */}
          <CTAButton href="#" text="Learn More About Our Work" />
        </Section>

        {/* Featured Research Highlights */}
        <Section
          title="Our Latest Research"
          subtitle="Discover the groundbreaking insights from our work on climate-smart cocoa systems."
          className="bg-white"
        >
          <div className="flex flex-wrap justify-center gap-20 mb-12">
            {researchHighlights.map((research, index) => (
              <Card
                key={index}
                title={research.title}
                description={research.author}
                className="bg-gray-200 text-gray-800 "
              >
                <a
                  href={research.link}
                  className="text-green-600 font-bold hover:underline pt-4"
                >
                  Read More...
                </a>
              </Card>
            ))}
          </div>
          {/* the href here will go to the /resource path */}
          <CTAButton href="#" text="View All Publications" />
        </Section>
      </div>
    </div>
  );
};

export default Home;