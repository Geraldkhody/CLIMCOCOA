import React, { useRef, useState } from "react";
import ResearchCard from "./Card";
import { Menu } from "lucide-react";

const Resource = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const journalArticlesRef = useRef(null)
    const booksRef = useRef(null)
    const bookChaptersRef = useRef(null)

  const publications = {
    journalArticles: [
      {
        title:
          "The potential of selected shade tree species for managing mirids and black pod disease infection in cocoa agroforestry systems in Ghana",
        authors:
          "Asitoakor, B.K., Vaast, P., Asare, R., Ræbild, A., Eziah, Y.V., Owusu, K., Mensah, E.O., Ravn, H.P",
        journal: "Crop Protection",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cropro.2024.106810",
      },
      {
        title:
          "Combined effects of shade and drought on physiology, growth, and yield of mature cocoa trees",
        authors:
          "Mensah, E.O., Ræbild, A., Asare, R., Amoatey, C.A., Markussen, B., Owusu, K., Asitoakor, B.K., Vaast, P.",
        journal: "Science of the Total Environment",
        year: 2023,
        doi: "https://doi.org/10.1016/j.scitotenv.2023.165657",
      },
      {
        title:
          "Influences of climate variability on cocoa health and productivity in agroforestry systems in Ghana",
        authors:
          "Asitoakor, B.K., Asare, R., Ræbild, A., Ravn, H.P., Eziah, Y.V., Owusu, K., Mensah, E.O., Vaast, P.",
        journal: "Agricultural and Forest Meteorology",
        year: 2022,
        doi: "https://doi.org/10.1016/j.agrformet.2022.109199",
      },
      {
        title:
          "Selected shade tree species improved cocoa yields in low-input agroforestry systems in Ghana",
        authors:
          "Asitoakor, B.K., Ræbild, A., Ravn, H.P., Vaast, P., Eziah, Y.V., Owusu, K., Mensah, E.O., Asare, R.",
        journal: "Agricultural Systems",
        year: 2022,
        doi: "https://doi.org/10.1016/j.agsy.2022.103476",
      },
      {
        title:
          "Limited effects of shade on physiological performances of cocoa (Theobroma cacao L.) under elevated temperature",
        authors:
          "Mensah, E.O., Asare, R., Vaast, P., Amoatey, C.A., Markussen, B., Owusu, K., Asitoakor, B.K., Ræbild, A.",
        journal: "Environmental and Experimental Botany",
        year: 2022,
        doi: "https://doi.org/10.1016/j.envexpbot.2022.104983",
      },
    ],

    books: [
      {
        title:
          "Agroforestry as Climate Change Adaptation: The Case of Cocoa Farming in Ghana",
        authors: "Olwig, M. F., Skovmand Bosselmann, A., Owusu, K.",
        journal: "Springer Nature",
        year: 2024,
        doi: "https://doi.org/10.1007/978-3-031-45635-0",
      },
    ],

    bookChapters: [
      {
        title: "Introduction: climate, cocoa and trees",
        authors: "Olwig, M. F., Asare, R., Meilby, H., Vaast, P., Owusu, K.",
        journal: "In Agroforestry as Climate Change Adaptation",
        year: 2023,
        doi: "https://doi.org/10.1007/978-3-031-45635-0_1",
      },
      {
        title: "Cocoa under heat and drought stress",
        authors:
          "Mensah, E. O., Vaast, P., Asare, R., Amoatey, C. A., Owusu, K., Asitoakor, B. K., Ræbild, A.",
        journal: "In Agroforestry as Climate Change Adaptation",
        year: 2023,
        doi: "https://doi.org/10.1007/978-3-031-45635-0_2",
      },
      {
        title:
          "Shade Tree Species Matter: Sustainable Cocoa-Agroforestry Management",
        authors:
          "Asitoakor, B. K., Ræbild, A., Vaast, P., Ravn, H. P., Owusu, K., Mensah, E. O., Asare, R.",
        journal: "In Agroforestry as Climate Change Adaptation",
        year: 2023,
        doi: "https://doi.org/10.1007/978-3-031-45635-0_3",
      },
      {
        title:
          "Social challenges and opportunities in agroforestry: cocoa farmers' perspectives",
        authors: "Bosselmann, A. S., Boadi, S. A., Olwig, M. F., Asare, R.",
        journal: "In Agroforestry as Climate Change Adaptation",
        year: 2023,
        doi: "https://doi.org/10.1007/978-3-031-45635-0_4",
      },
      {
        title: "Household economics of cocoa agroforestry: costs and benefits",
        authors:
          "Boadi, S. A., Bosselmann, A. S., Owusu, K., Asare, R., Olwig, M. F.",
        journal: "In Agroforestry as Climate Change Adaptation",
        year: 2023,
        doi: "https://doi.org/10.1007/978-3-031-45635-0_5",
      },
      {
        title:
          "Can Agroforestry Provide a Future for Cocoa? Implications for Policy and Practice",
        authors: "Olwig, M. F., Asare, R., Vaast, P., Bosselmann, A. S.",
        journal: "In Agroforestry as Climate Change Adaptation",
        year: 2024,
        doi: "https://doi.org/10.1007/978-3-031-45635-0_6",
      },
      {
        title:
          "The role of innovation in sustainable cocoa cultivation: Moving beyond mitigation and adaptation",
        authors:
          "Boadi, S. A., Olwig, M. F., Asare, R., Bosselmann, A. S., Owusu, K.",
        journal:
          "In Climate-induced innovation: Mitigation and adaptation to climate change",
        year: 2022,
        doi: "https://doi.org/10.1007/978-3-031-01330-0_3",
      },
    ],
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setShowSidebar(false); // Close sidebar on mobile after clicking
      console.log("oasdjakd")
    }
  };

  return (
    <div className="wrapper mt-10 flex flex-col md:flex-row gap-6">
      {/* Mobile Sidebar Toggle */}
      <button
        className="md:hidden bg-gray-200 p-2 rounded-lg flex items-center gap-2"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <Menu className="w-5 h-5" />
        <span>Categories</span>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:sticky left-0 top-28 md:top-35 h-full bg-gray-100 text-gray-900 shadow-lg md:shadow-none px-4 py-6 pb-8 rounded-r-xl md:rounded-xl transition-transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:min-w-56 md:text-sm lg:text-[16px] lg:min-w-64`}
      >
        <h1 className="font-bold text-lg">Categories</h1>
        <div className="ml-3 space-y-4">
          <p className="cursor-pointer" onClick={scrollToSection(journalArticlesRef)}>Refereed Journal Articles</p>
          <p className="cursor-pointer" onClick={scrollToSection(booksRef)}>Book</p>
          <p className="cursor-pointer" onClick={scrollToSection(bookChaptersRef)}>Book Chapters</p>
        </div>
      </div>

      <div className="space-y-12">
        {/* Journal Articles Section */}
        <section ref={journalArticlesRef}>
          <h2 className="publication-heads">
            Journal Articles
          </h2>
          <div className="publication-grid">
            {publications.journalArticles.map((pub, index) => (
              <ResearchCard
                key={`journal-${index}`}
                title={pub.title}
                authors={pub.authors}
                journal={pub.journal}
                year={pub.year}
                doi={pub.doi}
              />
            ))}
          </div>
        </section>

        {/* Books Section */}
        <section ref={booksRef}>
          <h2 className="publication-heads">Books</h2>
          <div className="publication-grid">
            {publications.books.map((book, index) => (
              <ResearchCard
                key={`book-${index}`}
                title={book.title}
                authors={book.authors}
                journal={book.journal}
                year={book.year}
                doi={book.doi}
              />
            ))}
          </div>
        </section>

        {/* Book Chapters Section */}
        <section ref={bookChaptersRef}>
          <h2 className="publication-heads">
            Book Chapters
          </h2>
          <div className="publication-grid">
            {publications.bookChapters.map((chapter, index) => (
              <ResearchCard
                key={`chapter-${index}`}
                title={chapter.title}
                authors={chapter.authors}
                journal={chapter.journal}
                year={chapter.year}
                doi={chapter.doi}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resource;
