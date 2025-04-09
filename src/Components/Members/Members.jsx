import React from "react";
import { Link } from "react-router-dom";
import People1 from "@/assets/people/Picture1.png";
import People2 from "@/assets/people/Picture2.png";
import People3 from "@/assets/people/Picture3.png";
import People4 from "@/assets/people/Picture4.jpg";
import People5 from "@/assets/people/Picture5.png";
import People6 from "@/assets/people/Picture6.png";
import style from "./Members.module.css";

const Card = ({ image, name }) => (
  <div className="cursor-pointer py-8 px-6 bg-gray-200 hover:shadow-lg transition-all rounded-2xl ">
    <div className="w-[17rem] h-[17rem] mb-2">
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
    <p className="text-center text-green-700 font-semibold">{name}</p>
  </div>
);

const Members = () => {
  const peoples = [
    { id: "1", name: "Prof. Kwadwo Owusu", image: People1 },
    { id: "2", name: "Dr. Mette Fog Olwig", image: People2 },
    { id: "3", name: "Dr. Eric Opoku Mensah", image: People3 },
    { id: "4", name: "Dr. Sylvester Afram Boadi", image: People4 },
    { id: "5", name: "Dr. Bismark Kwesi Asitoakor", image: People5 },
    { id: "6", name: "Dr. Aske Skovmand Bosselmann ", image: People6 },
  ];

  return (
    <div className={`${style.members} mt-10  lg:px-12 xl:px-15 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-8  place-items-center`}>
      {peoples.map((people) => (
        <Link to={`/people/project-members/${people.id}`}>
          <Card image={people.image} name={people.name} />
        </Link>
      ))}
    </div>
  );
};

export default Members;
