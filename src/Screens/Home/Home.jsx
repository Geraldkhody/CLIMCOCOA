import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Visual_1 from "@/assets/kyle-hinkson-fuuhb86A-tE-unsplash.jpg";
import Visual_2 from "@/assets/elle-inlom-VcUH1qneMeg-unsplash.jpg";
import ClimateChnage from "@/assets/Key aspect/Climate health.png";
import Agroforestry from "@/assets/Key aspect/agroforestry.png";
import Socioeconomic from "@/assets/Key aspect/socioeconomic.png";
import Capacity from "@/assets/Key aspect/Knowledge and tools.png"

// Reusable Card Component
const Card = ({ icon, title, description, className }) => (
  <div className={`flex-1 min-w-[200px] max-w-[250px] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${className}`}>
    {icon && <img src={icon} alt={`${title} Icon`} className="w-12 h-12 mx-auto mb-4 bg-white p-1.5 rounded-lg " />}
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

// Reusable Section Component
const Section = ({ title, subtitle, children, className }) => (
  <section className={`py-16 text-center ${className}`}>
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{title}</h2>
      <p className="text-xl text-gray-700 mb-12">{subtitle}</p>
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
          <CTAButton href="/about-us" text="Learn More About Our Work" />
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
                className="bg-gray-200 text-gray-800"
              >
                <a
                  href={research.link}
                  className="text-green-600 font-bold hover:underline"
                >
                  Read More
                </a>
              </Card>
            ))}
          </div>
          <CTAButton href="/resources" text="View All Publications" />
        </Section>
      </div>
    </div>
  );
};

export default Home;

// import React from 'react'
// import Hero from '../../Components/Hero/Hero'

// const Home = () => {
//   return (
//     <div>
//       <Hero />
//       <div className='w-[80%]  mx-auto '>
//     <div>
//       {/* Introduction Section */}
//       <section className="py-16  text-center">
//         <div className="container mx-auto px-4">
//           {/* Headline */}
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//             Building Resilience for Ghana’s Cocoa Future
//           </h2>

//           {/* Subheadline */}
//           <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-8">
//             Understanding the impacts of climate change on cocoa production and
//             empowering farmers with innovative agroforestry solutions.
//           </p>

//           {/* Project Overview */}
//           <p className="text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
//             The Climate Smart Cocoa Systems (CLIMCOCOA) project is a
//             multidisciplinary initiative aimed at understanding the impacts of
//             climate change on cocoa production in Ghana. By promoting
//             agroforestry and sustainable practices, we are working to enhance
//             the resilience of cocoa farmers and ensure the long-term
//             sustainability of Ghana’s cocoa sector.
//           </p>

//           {/* Key Focus Areas */}
//           <div className="flex flex-wrap justify-center gap-6 mb-12">
//             {[
//               {
//                 icon: "https://via.placeholder.com/50",
//                 title: "Climate Change Impacts",
//                 description: "Studying how climate variability affects cocoa health and productivity.",
//               },
//               {
//                 icon: "agroforestry-icon.png",
//                 title: "Agroforestry Solutions",
//                 description: "Promoting shade trees to improve yields and manage pests.",
//               },
//               {
//                 icon: "socioeconomic-icon.png",
//                 title: "Socioeconomic Studies",
//                 description: "Assessing the costs and benefits of agroforestry for farmers.",
//               },
//               {
//                 icon: "capacity-icon.png",
//                 title: "Capacity Building",
//                 description: "Empowering farmers with knowledge and tools for climate adaptation.",
//               },
//             ].map((item, index) => (
//               <div key={index} className="flex-1 min-w-[200px] max-w-[250px] p-6 bg-green-700 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                 <img src={item.icon} alt={`${item.title} Icon`} className="w-12 h-12 mx-auto mb-4" />
//                 <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//                 <p className="text-sm">{item.description}</p>
//               </div>
//             ))}
//           </div>

//           {/* Visuals */}
//           <div className="flex flex-wrap justify-center gap-6 mb-12">
//             <img
//               src="cocoa-farm.jpg"
//               alt="Cocoa Farm with Shade Trees"
//               className="max-w-full md:max-w-[45%] rounded-lg shadow-md"
//             />
//             <img
//               src="fieldwork.jpg"
//               alt="Researchers Conducting Fieldwork"
//               className="max-w-full md:max-w-[45%] rounded-lg shadow-md"
//             />
//           </div>

//           {/* Call-to-Action */}
//           <a
//             href="/about-us"
//             className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//           >
//             Learn More About Our Work
//           </a>
//         </div>
//       </section>

//       {/* Featured Research Highlights */}
//       <section className="py-16 bg-white text-center">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//             Our Latest Research
//           </h2>
//           <p className="text-xl text-gray-700 mb-12">
//             Discover the groundbreaking insights from our work on climate-smart
//             cocoa systems.
//           </p>

//           <div className="flex flex-wrap justify-center gap-6 mb-12">
//             {[
//               {
//                 title: "Influences of Climate Variability on Cocoa Health",
//                 author: "Asitoakor et al., 2022",
//                 link: "https://doi.org/10.1016/j.agrformet.2022.109199",
//               },
//               {
//                 title: "Combined Effects of Shade and Drought on Cocoa",
//                 author: "Mensah et al., 2023",
//                 link: "https://doi.org/10.1016/j.scitotenv.2023.165657",
//               },
//             ].map((research, index) => (
//               <div key={index} className="flex-1 min-w-[300px] max-w-[400px] p-6 bg-gray-50 rounded-lg shadow-md">
//                 <h3 className="text-xl font-bold text-gray-800 mb-4">{research.title}</h3>
//                 <p className="text-gray-600 mb-4">{research.author}</p>
//                 <a
//                   href={research.link}
//                   className="text-green-600 font-bold hover:underline"
//                 >
//                   Read More
//                 </a>
//               </div>
//             ))}
//           </div>

//           <a
//             href="/resources"
//             className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//           >
//             View All Publications
//           </a>
//         </div>
//       </section>
//     </div>


//       </div>
//     </div>
//   )
// }

// export default Home;