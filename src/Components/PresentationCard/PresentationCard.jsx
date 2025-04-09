import { Calendar, MapPin } from "lucide-react";
import React from "react";

const PresentationCard = ({
  presentationType = "Oral paper presentation",
  title,
  event,
  location,
  date,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 hover:shadow-lg transition-shadow duration-300">
      <div className="p-8">
        <div className="uppercase tracking-wide text-xs text-emerald-600 font-semibold">
          {presentationType}
        </div>
        <h1 className="block mt-2 text-xl leading-tight font-medium text-gray-900">
          {title}
        </h1>
        
        <div className="mt-4">
          <div className="flex items-center">
            <Calendar className="text-gray-500 w-5 h-5" />
            <span className="ml-2 text-gray-600">{date}</span>
          </div>
          
          <div className="flex items-center mt-2">
            <MapPin className="text-gray-500 w-5 h-5    " />
            <span className="ml-2 text-gray-600">{location}</span>
          </div>
          
          <div className="mt-6 flex items-center">
            <div className="text-sm">
              <p className="text-gray-500">Presented at</p>
              <p className="font-medium text-gray-700">{event}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationCard;