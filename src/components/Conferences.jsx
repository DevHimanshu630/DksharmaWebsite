const Conferences = () => {
  return (
    <section id="conferences" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">International Conferences</h2>
          <div className="w-24 h-1 bg-[#829CBA] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#829CBA]/10 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#829CBA]/20 hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-6 text-black">
              11th International Congress on Library as a Cultural Phenomenon
            </h3>
            <div className="space-y-3 text-base text-gray-700">
              <p>
                <span className="font-semibold text-black">Location:</span> Minsk
              </p>
              <p>
                <span className="font-semibold text-black">Date:</span> October 24-25, 2024
              </p>
              <p className="pt-2">
                The event commemorated the 80th anniversary of Belarus's liberation from Nazi invaders.
              </p>
              <p className="pt-2">
                <span className="font-semibold text-black">Paper Presented:</span> "National Archives: Shaping the Future"
              </p>
              <p className="text-[#829CBA] font-medium">
                Received enthusiastic appreciation from participants across 11 countries.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#829CBA]/10 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#829CBA]/20 hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-6 text-black">
              Research Paper on Manuscripts and Sources of Indian Genealogy
            </h3>
            <div className="space-y-3 text-base text-gray-700">
              <p>
                <span className="font-semibold text-black">Event:</span> Gyan Bharatam Mission
              </p>
              <p>
                <span className="font-semibold text-black">Location:</span> Vigyan Bhawan, New Delhi
              </p>
              <p>
                <span className="font-semibold text-black">Date:</span> September 11-13, 2025
              </p>
              <p className="pt-2">
                <span className="font-semibold text-black">Paper Presented:</span> "Manuscripts and Sources of Indian Genealogy and the Use of Artificial Intelligence"
              </p>
              <p className="text-[#829CBA] font-medium pt-2">
                Highlighted the role of technology in reclaiming India's manuscript heritage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Conferences

