const Assignments = () => {
  return (
    <section id="assignments" className="py-20 md:py-32 bg-gradient-to-b from-white to-[#EFE9E8]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Special Assignments</h2>
          <div className="w-24 h-1 bg-[#829CBA] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#EFE9E8] hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="w-2 h-12 bg-[#829CBA] rounded-full mr-4"></div>
              <h3 className="text-2xl font-bold text-black">
                Sector Magistrate - Lok Sabha Election 2019
              </h3>
            </div>
            <div className="pl-6 space-y-3">
              <p className="text-base text-gray-700">
                <span className="font-semibold text-black">Location:</span> Seelampur, Delhi
              </p>
              <p className="text-base text-gray-700">
                Successfully conducted the assignment and received wide coverage by National Media.
              </p>
              <a 
                href="https://www.youtube.com/watch?v=Lkc7Lt6Z4ig" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#829CBA] hover:text-[#829CBA]/80 font-semibold transition-colors mt-4"
              >
                Watch on YouTube 
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#EFE9E8] hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="w-2 h-12 bg-[#829CBA] rounded-full mr-4"></div>
              <h3 className="text-2xl font-bold text-black">
                Sector Magistrate - Assembly Election Delhi 2020
              </h3>
            </div>
            <div className="pl-6 space-y-3">
              <p className="text-base text-gray-700">
                <span className="font-semibold text-black">Location:</span> Shahdara, Delhi
              </p>
              <p className="text-base text-gray-700">
                Successfully conducted the assignment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Assignments

