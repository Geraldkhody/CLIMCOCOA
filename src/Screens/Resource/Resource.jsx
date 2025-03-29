import React from 'react'
import ResearchCard from './Card';

const Resource = () => {

    const book = {
        title: "The potential of selected shade tree species for managing mirids and black pod disease infection in cocoa agroforestry systems in Ghana. ",
        author: "Asitoakor, B.K., Vaast, P., Asare, R., Ræbild, A., Eziah, Y.V., Owusu, K., Mensah, E.O. and Ravn, H.P ",
        journal: "Crop Protection",
        year: "2024",
        DOI: "https://doi.org/10.1016/j.cropro.2024.106810",
    }

  return (
    <div className='wrapper mt-20 flex'>
        <div className='w-50 gap-10 '>
            <p>Category 1</p>
            <p>Category 2</p>
            <p>Category 3</p>
            <p>Category 4</p>
            <p>Category 5</p>
            <p>Category 6</p>
            <p>Category 7</p>
        </div>
        <div className='border w-full grid grid-cols-3 gap-4'>
            <ResearchCard authors={book.author} title={book.title} journal={book.journal} year={book.year} doi={book.DOI} />
            <ResearchCard authors={book.author} title={book.title} journal={book.journal} year={book.year} doi={book.DOI} />
            <ResearchCard authors={book.author} title={book.title} journal={book.journal} year={book.year} doi={book.DOI} />
            <ResearchCard authors={book.author} title={book.title} journal={book.journal} year={book.year} doi={book.DOI} />
        </div>
        {/* <div className="grid grid-cols-3 gap-6">
            <ResearchCard authors={book.author} title={book.title} journal={book.journal} year={book.year} doi={book.DOI} />
            <ResearchCard authors={book.author} title={book.title} journal={book.journal} year={book.year} doi={book.DOI} />
            <ResearchCard authors={book.author} title={book.title} journal={book.journal} year={book.year} doi={book.DOI} />
            <ResearchCard authors={book.author} title={book.title} journal={book.journal} year={book.year} doi={book.DOI} />
        </div> */}
    </div>
  )
}

export default Resource;