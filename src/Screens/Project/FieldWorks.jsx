import React from "react";
import { Link } from "react-router-dom";
import Bismark1 from "@/assets/Research/Bismark1.png";
import Bismark2 from "@/assets/Research/Bismark2.png";
import Bismark3_1 from "@/assets/Research/Bismark3.1.png";
import Bismark3_2 from "@/assets/Research/Bismark3.2.png";
import Bismark4_1 from "@/assets/Research/Bismark4.1.png";
import Bismark4_2 from "@/assets/Research/Bismark4.2.png";
import Bismark5 from "@/assets/Research/Bismark5.png";
import Bismark6_1 from "@/assets/Research/Bismark6.1.png";
import Bismark6_2 from "@/assets/Research/Bismark6.2.png";
import Bismark7 from "@/assets/Research/Bismark7.png";
import Bismark8 from "@/assets/Research/Bismark8.png";
import Bismark9 from "@/assets/Research/Bismark9.png";
import Erick1 from "@/assets/Research/Erick1.jpg";
import Erick2 from "@/assets/Research/Erick2.jpg";
import Erick3 from "@/assets/Research/Erick3.jpg";
import Erick4 from "@/assets/Research/Erick4.jpg";
import Erick5 from "@/assets/Research/Erick5.jpg";
import Erick6 from "@/assets/Research/Erick6.jpg";
import Erick7 from "@/assets/Research/Erick7.jpg";
import Erick8 from "@/assets/Research/Erick8.jpg";
import Erick9 from "@/assets/Research/Erick9.jpg";
import Erick10 from "@/assets/Research/Erick10.jpg";
import Erick11 from "@/assets/Research/Erick11.jpg";
import Erick12 from "@/assets/Research/Erick12.jpg";
import Erick13 from "@/assets/Research/Erick13.jpg";
import Erick14 from "@/assets/Research/Erick14.jpg";
import Erick15 from "@/assets/Research/Erick15.jpg";
import Erick16 from "@/assets/Research/Erick16.jpg";
import Erick17 from "@/assets/Research/Erick17.jpg";
import Erick18 from "@/assets/Research/Erick18.jpg";
import Erick19 from "@/assets/Research/Erick19.jpg";
import Erick20 from "@/assets/Research/Erick20.jpg";
import Sylvester1 from "@/assets/Research/Sylvester1.jpg";
import Sylvester2 from "@/assets/Research/Sylvester2.jpg";
import Sylvester3 from "@/assets/Research/Sylvester3.jpg";
import Sylvester4 from "@/assets/Research/Sylvester4.jpg";
import Sylvester5 from "@/assets/Research/Sylvester5.jpg";
import BismarkImage from "@/assets/People/Picture5.png";
import SylvesterImage from "@/assets/People/Picture4.jpg";
import ErickImage from "@/assets/People/Picture3.png";

const FieldWorks = () => {
  const fieldworkData = [
    {
      title: "FIRST FIELD WORK",
      lead: "Work Package 2 by Dr. Bismark Kwesi Asitoakor",
      leadImage: BismarkImage,
      leadLink: "/people/project-members/5",
      activities: [
        {
          description:
            "Canoe voyage to a cocoa community during the reconnaissance survey",
          images: [Bismark1],
        },
        {
          description:
            "Some PhD Candidates and supervisors prior to field activities (from the left; Prof. Ræbild Anders, Eric Opoku Mensah, Dr. Richard Asare, Prof. Hans Peter Ravn and Bismark Kwesi Asitoakor)",
          images: [Bismark2],
        },
        {
          description:
            "(A) Soil sampling activity and (B) installation of climatic device within a protective device on a cocoa field",
          images: [Bismark3_1, Bismark3_2],
          isTwoImages: true,
        },
        {
          description:
            "(A) Cocoa pod assessment and (B) the download of climatic data during field work",
          images: [Bismark4_1, Bismark4_2],
          isTwoImages: true,
        },
        {
          description:
            "Downloading temperature and relative humidity from an i-button device while field assistants look on in a cocoa farm",
          images: [Bismark5],
        },
        {
          description: "Observed cocoa pods with black pod disease infestation",
          images: [Bismark6_1, Bismark6_2],
          isTwoImages: true,
        },
        {
          description: "Harvested cocoa pods on a sampled field in Asankragua",
          images: [Bismark7],
        },
        {
          description:
            "Drying process of cocoa beans after harvesting and fermentation",
          images: [Bismark8],
        },
        {
          description:
            "Observed harvested shade tree for construction purpose in a cocoa farm",
          images: [Bismark9],
        },
      ],
    },
    {
      title: "SECOND PROJECT",
      lead: "by Eric Opoku Mensah",
      leadImage: ErickImage,
      leadLink: "/people/project-members/3",
      activities: [
        {
          description:
            "Shade nets on top of the cocoa plants to provide 40% shade",
          images: [Erick1],
        },
        {
          description:
            "Building plastic sheet panels below the cocoa plants to suppress water",
          images: [Erick2],
        },
        {
          description:
            "Plastic sheet panels fully installed below the cocoa plants to suppress water",
          images: [Erick3],
        },
        {
          description:
            "Trenches built with aluminium sheets to move water from treated plots",
          images: [Erick4],
        },
        {
          description:
            "Taking data on chlorophyll fluorescence of cocoa leaves under full sun using miniPAM",
          images: [Erick5],
        },
        {
          description:
            "Taking data on chlorophyll fluorescence of cocoa plants under shade net using miniPAM",
          images: [Erick6],
        },
        {
          description:
            "Measuring gas exchange of the cocoa plants under shade using CIRAS 3",
          images: [Erick7],
        },
        {
          description:
            "Taking bulk density and soil moisture along the soil profile",
          images: [Erick8],
        },
        {
          description: "Measuring plant water potential with pressure pump",
          images: [Erick9],
        },
        {
          description:
            "Measuring soil moisture content along the soil profile using Diviner soil moisture sensor",
          images: [Erick10],
        },
        {
          description:
            "Taking below canopy temperature and relative humidity from ibuttons and tinytags",
          images: [Erick11],
        },
        {
          description: "Measuring stem expansion with dendrometer bands",
          images: [Erick12],
        },
        {
          description: "Monitoring yield of cocoa plants",
          images: [Erick13],
        },
        {
          description:
            "Heat stress work - Cocoa seedlings raised and acclimatized to sun for heat stress experiment",
          images: [Erick14],
        },
        {
          description:
            "Improvised greenhouses built for heat stress experiment",
          images: [Erick15],
        },
        {
          description: "Cocoa seedlings kept under infra-red heaters",
          images: [Erick16],
        },
        {
          description: "Cocoa seedlings in 60% shade",
          images: [Erick17],
        },
        {
          description:
            "Measuring growth parameters of cocoa seedlings under infra-red heaters",
          images: [Erick18],
        },
        {
          description: "Leaf area measurements with leaf area meter",
          images: [Erick19],
        },
        {
          description:
            "Field visit by northern partners during the initial stage of the field set up",
          images: [Erick20],
        },
      ],
    },
    {
      title: "THIRD FIELD WORK",
      lead: "by Sylvester Afram Boadi",
      leadImage: SylvesterImage,
      leadLink: "/people/project-members/4",
      activities: [
        {
          description: "Picture from the main WP5 pilot exercise",
          images: [Sylvester1],
        },
        {
          description: "Community mapping with lead farmer",
          images: [Sylvester2],
        },
        {
          description: "Cocoa farm visitation during main fieldwork",
          images: [Sylvester3],
        },
        {
          description: "Picture from a women focus group discussion",
          images: [Sylvester4],
        },
        {
          description: "Picture from a men focus group discussion",
          images: [Sylvester5],
        },
      ],
    },
  ];
  return (
    <section className="py-12 pt-20  max-w-7xl mx-auto">
      {/* <h2 className="text-3xl font-bold text mb-8 text-emerald-800 ">
            Fieldwork and Research Activities
          </h2> */}
      {fieldworkData.map((project, projectIndex) => (
        <div key={projectIndex} className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-emerald-700">
              {project.title}
            </h3>
            <Link
              to={project.leadLink}
              className="text-emerald-600 hover:text-emerald-800 font-medium flex gap-2 items-center"
            >
              <img
                src={project.leadImage}
                alt=""
                className="block w-7 h-7 rounded-full bg-gray-600"
              />{" "}
              {project.lead}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.activities.map((activity, activityIndex) => (
              <div
                key={activityIndex}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {activity.isTwoImages ? (
                  <div className="grid grid-cols-2 gap-1">
                    {activity.images.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={`Activity ${activityIndex + 1} - Image ${
                          imgIndex + 1
                        }`}
                        className="w-full h-[25rem] object-cover"
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={activity.images[0]}
                    alt={`Activity ${activityIndex + 1}`}
                    className="w-full h-[25rem] object-cover"
                  />
                )}
                <div className="p-4">
                  <p className="text-gray-700 ">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FieldWorks;
