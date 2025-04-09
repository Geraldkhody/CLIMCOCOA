import React from "react";
import PresentationCard from "../../Components/PresentationCard/PresentationCard";
import style from "./Research.module.css";

const Research = () => {
  const presentations = [
    {
      title:
        "Influences of climate variability on cocoa health and productivity in agroforestry systems in Ghana",
      event: "5th World Congress on Agroforestry",
      location: "Quebec City, Canada",
      date: "17 – 21 July 2022",
      tags: ["Agroforestry", "ClimateVariability", "CocoaProductivity"],
    },
    {
      title:
        "Shade tree species influence soil fertility and yields differently in cocoa systems",
      event:
        "CocoaSoil Workshop 'Reconciling Different Objectives in Cocoa Landscapes from National to Local Levels: Identifying Research Needs'",
      location: "Accra, Ghana",
      date: "26 – 27 April 2022",
      tags: ["SoilFertility", "CocoaYields", "ShadeTrees"],
    },
    {
      title:
        "Exploring the potential of different shade tree species in influencing mirid infestation and black pod disease management in cocoa-agroforestry systems",
      event: "Annual Meeting of American Association of Geographers (AAG)",
      location: "Virtual",
      date: "8 – 11 April 2021",
      tags: ["PestManagement", "DiseaseControl", "Agroforestry"],
    },
  ];

  return (
    <div>
      <div className=" mt-10">
        <h1
          className={`${style.head} text-3xl font-bold text mb-8 text-emerald-800`}
        >
          Conference Presentations
        </h1>
        <div
          className={`${style.presentation} grid md:grid-cols-2 lg:grid-cols-3 gap-6`}
        >
          {presentations.map((presentation, index) => (
            <PresentationCard key={index} {...presentation} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
