const Research = () => {
  const books = [
    {
      title: "Hindi Sahitya Ka Vikas: Aitihasik Drishtikon",
      details: "Covers the period 1900-50",
      publisher: "Vani Prakashan, New Delhi",
      amazonLink: "https://www.amazon.in/Hindi-Sahitya-Vikas-Aitihasik-Drishtikon/dp/9350727196/ref=sr_1_3?crid=3RPQ93KYGPYG4&dib=eyJ2IjoiMSJ9.3QmwvNdb_x6laFwUtWZwcpdxs1SIuBFkQX13sSnMsPLGjHj071QN20LucGBJIEps.25qFYk-ct8qwasGgasGDHs91kl26JK081fED6HgTFRc&dib_tag=se&keywords=hindi+sahitya+ka+vikas+devendra+kumar+sharma&qid=1762596357&s=books&sprefix=hindi+sahitya+ka+vikas+devendra+kumar+sharma%2Cstripbooks%2C183&sr=1-3"
    },
    {
      title: "Bharat Ratna Mahamana",
      details: "Co-Authored",
      publisher: "Vani Prakashan, New Delhi",
      amazonLink: "https://www.amazon.in/Bharat-Ratn-Mahamana-Balmukund-Pandey/dp/9350729881"
    },
    {
      title: "Partition & Refugee Resettlement",
      publisher: "Nisha Publications, New Delhi"
    },
    {
      title: "Swatantrata ke Swar",
      publisher: "Government of India Publications",
      details: "Launched by the Hon'ble Vice President of India on 5th August 2023"
    },
    {
      title: "Ramanujan: Journey of Great Mathematician",
      details: "Joint publication",
      publisher: "National Archives of India and Yatra Books",
      amazonLink: "https://www.amazon.in/Ramanujan-Devendra-Kumar-Sharma-Singhal/dp/9348235575"
    }
  ]

  const papers = [
    {
      title: "Educational Ideology of Pandit Madan Mohan Malviya",
      journal: "Hindustani, the Journal of the Hindustani Academy, Allahabad",
      details: "Vol. 61, July – Dec. 2000"
    },
    {
      title: "Archives of Marathas",
      journal: "the Journal of the Institute of Rajasthan Studies",
      details: "2001"
    },
    {
      title: "Sir Shafat Ahmed Khan and Indian History",
      journal: "The Indian Archives, the Journal of National Archives of India",
      details: "Vol. XLX No. 1-2, Jan. – Dec. 2001"
    },
    {
      title: "Article on Mahadevi Verma",
      journal: "Tripthaga, Journal of the Allahabad University Alumni Association",
      details: "2013"
    },
    {
      title: "Partition & Refugee Resettlement in Datia",
      journal: "the Proceedings of the Fifty Ninth Session of Indian Historical Records Commission",
      details: "Vol. LIX, 2011"
    },
    {
      title: "Sir Shafat Ahmad Khan aur Bhartiya Itihas Abhilekh Ayog",
      journal: "the Proceedings of 60th Session of IHRC",
      details: "2013"
    }
  ]

  const presentations = [
    {
      title: "Role of Revolutionaries in Uttar Pradesh 1921-31",
      venue: "National Seminar in History of DAV College, Kanpur (U.P.)",
      year: "1999"
    },
    {
      title: "Allahabad Ki Sahityik Sansthayen Aur Unka Rashtriya Andolan me Yogdan",
      venue: "National Seminar in National Archives of India, New Delhi",
      year: "2007"
    },
    {
      title: "Understanding 1857 in Bhopal State",
      venue: "National Seminar on 'Revolution of 1857' special reference to Bhopal, Swaraj Sansthan, Bhopal",
      year: "8-9 March 2008"
    },
    {
      title: "Development of Education under the Company Rule",
      venue: "National Seminar on living conditions of the Working Classes (Through the Ages), Deptt. Of History, Institute for Excellence in Higher Education (IEHE) Bhopal",
      year: "22nd and 23rd January 2010"
    },
    {
      title: "Khan Shakir Ali Khan aur Prajamandal (1938-48)",
      venue: "National Seminar",
      year: "Various"
    }
  ]

  return (
    <section id="research" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Research & Publications</h2>
          <div className="w-24 h-1 bg-[#829CBA] mx-auto"></div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-black pb-3 border-b-2 border-[#829CBA]">Books</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {books.map((book, index) => (
              <div key={index} className="bg-gradient-to-br from-[#EFE9E8] to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#EFE9E8] hover:-translate-y-1">
                <h4 className="text-xl font-bold mb-3 text-black">{book.title}</h4>
                {book.details && <p className="text-base text-gray-700 mb-2">{book.details}</p>}
                <p className="text-sm text-[#829CBA] font-medium mb-3">{book.publisher}</p>
                {book.amazonLink && (
                  <a 
                    href={book.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                    </svg>
                    Buy on Amazon
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-black pb-3 border-b-2 border-[#829CBA]">Research Papers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {papers.map((paper, index) => (
              <div key={index} className="bg-gradient-to-br from-[#EFE9E8] to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#EFE9E8] hover:-translate-y-1">
                <h4 className="text-xl font-bold mb-2 text-black">"{paper.title}"</h4>
                <p className="text-sm text-gray-600 italic mb-2">{paper.journal}</p>
                {paper.details && <p className="text-base text-gray-700">{paper.details}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-black pb-3 border-b-2 border-[#829CBA]">Papers Presented at National Seminars</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {presentations.map((presentation, index) => (
              <div key={index} className="bg-gradient-to-br from-[#EFE9E8] to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#EFE9E8] hover:-translate-y-1">
                <h4 className="text-xl font-bold mb-2 text-black">"{presentation.title}"</h4>
                <p className="text-base text-gray-700 mb-1">{presentation.venue}</p>
                <p className="text-sm text-[#829CBA] font-medium">{presentation.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research

