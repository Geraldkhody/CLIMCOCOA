import { Link } from "react-router-dom";
import style from "./Card.module.css";
import image from "@/assets/Resource.png";

export default function ResearchCard({ title, authors, journal, year, doi }) {
  return (
    <Link
      to={doi}
      target="_blank"
      rel="noopener noreferrer"
      className={`${style.researchCard} max-w-[400px] h-full bg-white shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition-all group`}
    >
      <img src={image} alt="" />

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-800">
          {title}
        </h3>
        <p className="text-sm text-gray-700 mt-1">{authors}</p>
        <p className="text-sm italic text-gray-500">
          {journal}, {year}
        </p>
        <div className="mt-3">
          <p>
            Read More...
          </p>
        </div>
      </div>
    </Link>
  );
}

export function ResearchCard2({ title, authors, journal, year, doi }) {
  return (
    <Link
      to={doi}
      target="_blank"
      rel="noopener noreferrer"
      className={`${style.researchCard} bg-green-700 shadow-lg rounded-2xl  border border-gray-200 hover:shadow-2xl transition-all group`}
    >
      <img src={image} alt="" />

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white group-hover:text-blue-600">
          {title}
        </h3>
        <p className="text-sm text-gray-100 mt-2">{authors}</p>
        <p className="text-sm italic text-gray-300">
          {journal}, {year}
        </p>
        <div className="mt-3">
          <Link
            to={doi}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 text-sm no-underline"
          >
            Read More...
          </Link>
        </div>
      </div>
    </Link>
  );
}

export function ResearchCard3({ title, authors, journal, year, doi }) {
  return (
    <div
      className={`${style.researchCard} bg-white hover:bg-green-600 shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition-all group`}
    >
      <img src={image} alt="" />
      <div className="p-5  hover:shadow-xl transition-all">
        <h3 className="text-lg font-semibold text-gray-900  group-hover:text-white">
          <a href={doi} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p className="text-sm text-gray-600 group-hover:text-gray-100 mt-1">
          {authors}
        </p>
        <p className="text-sm italic text-gray-500 group-hover:text-gray-200">
          {journal}, {year}
        </p>
        <div className="mt-3">
          <a
            href={doi}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 text-sm"
          >
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
}
