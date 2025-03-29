export default function ResearchCard({ title, authors, journal, year, doi }) {
    return (
      <div className="bg-white shadow-lg rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition-all">
        <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
          <a href={doi} target="_blank" rel="noopener noreferrer">{title}</a>
        </h3>
        <p className="text-sm text-gray-600 mt-1">{authors}</p>
        <p className="text-sm italic text-gray-500">{journal}, {year}</p>
        <div className="mt-3">
          <a 
            href={doi} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 underline text-sm"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
  