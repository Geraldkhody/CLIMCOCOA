import React from "react";
import sectionImage1 from "@/assets/cocoa/image1.jpg";
import sectionImage2 from "@/assets/cocoa/image2.jpg";
import sectionImage3 from "@/assets/cocoa/image4.jpg";
import Members from "../../Components/Members/Members";


const Section = ({ head, body }) => (
  <div className="">
    <h1 className="text-2xl md:text-3xl font-bold">{head}</h1>
    <p className="text-sm md:text-[16px]">{body}</p>
  </div>
);


const About = () => {
  const vision = [
    {
      head: "Vision",
      body: "To create a sustainable and climate-resilient cocoa sector in Ghana that supports farmers and preserves the environment",
    },
    {
      head: "Mission",
      body: "Our mission is to understand the impacts of climate change on cocoa systems, promote agroforestry as a climate-smart solution, and empower farmers and stakeholders with the tools and knowledge needed for adaptation",
    },
  ];



  return (
    <>
      <div className="wrapper mt-12 text-green-900">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-15 lg:gap-27 mt-20 px-5 sm:px-10 ">
          <div className="w-full md:max-w-[55%] lg:w-[50%] text-justify">
            <p className=" ">
              Cocoa (Theobroma cacao L.) is the third highest export commodity
              of Ghana and represents the most important source of revenue for
              numerous small scale farmers. Climate change (CC) in the form of
              higher temperatures and reduced rainfall is expected to adversely
              affect cocoa productivity and reduce the area suitable for cocoa
              cultivation in Ghana, but the extent and underlying mechanisms are
              not well understood.
              <br />
              <br />
              The CLIMCOCOA project aims to develop a comprehensive
              understanding of the impacts of CC on the socio-biophysical bases
              of cocoa systems in Ghana, and assess the role of agroforestry
              (AF) as a model for climate smart agriculture in Ghana. We will
              use a multidisciplinary approach to investigate the
              socio-biophysical limitations and options for cocoa cultivation
              under CC, and to assess institutional and socioeconomic factors
              that favor or limit adoption by farmers of innovative management
              options.
            </p>
          </div>
          <div className="w-[70%] sm:w-[50%]  md:w-[37%] lg:w-[25%] ">
            <img src={sectionImage1} alt="" className="rounded-3xl" />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-15 lg:gap-27 mt-20 px-5 sm:px-10 ">
          <div className="w-[70%] sm:w-[50%]  md:w-[37%] lg:w-[25%] relative ">
            <img src={sectionImage2} alt="" className="rounded-3xl" />
            <div className="absolute inset-0 bg-black/10 rounded-3xl "></div>
          </div>
          <div className="w-full md:max-w-[55%] lg:w-[50%] text-justify">
            <p className=" ">
              The project is structured in 7 work packages (WPs). WPs 1, 2 and 3
              provide a comprehensive and novel understanding of cocoa
              production under current and future climates, using 3 different
              approaches. WP1 studies historical yield and climate data at
              country/district level, WP2 assesses cocoa yield using on-farm
              studies over a climate gradient, and WP3 studies cocoa tree
              ecophysiology. Based on studies of livelihood and farming
              strategies and institutional mapping, WPs 4 and 5 investigate the
              socioeconomic and institutional factors influencing cocoa farmers’
              ability to adapt to CC and adopt AF practices.
              <br />
              <br />
              WP6 is dedicated to capacity building activities and dissemination
              of results through journal articles, policy briefs, training
              sessions of trainers, local stakeholder seminars, and a dedicated
              website, targeting farmers, Government officials and researchers.
              WP7 is management and coordination. CLIMCOCOA will enhance
              farmers’ capacity to be more resilient to CC impacts on cocoa in
              Ghana, and build capacities of local researchers to be able to
              apply state of the art modelling tools to assess CC impact.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-700 py-10 px-6 mt-10 md:mt-20 mb-20">
        <div className="wrapper text-white flex flex-col sm:flex-row justify-between md:justify-center items-center gap-8 md:gap-30">
          <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[40%] flex flex-col gap-6 md:gap-15">
            {vision.map((item) => (
              <Section head={item.head} body={item.body} />
            ))}
          </div>
          <div className="w-[60%] sm:w-[27%] md:w-[22%] lg:w-[18%] ">
            <img src={sectionImage3} alt="" className="rounded-3xl" />
          </div>
        </div>
      </div>

      <div className="wrapper mb-26">
        <h1 className="text-xl sm:text-2xl  font-bold text-center text-green-800">Project Team</h1>
        <Members />
      </div>
    </>
  );
};

export default About;
