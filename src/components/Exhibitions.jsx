// Import exhibition images
import instrumentOfAccession from '../assets/exhibitions/Instrument of Accession.JPG'
import sagaOfFreedom1 from '../assets/exhibitions/Saga of Freedom.JPG'
import sagaOfFreedom2 from '../assets/exhibitions/Saga of Freedom 1.JPG'
import sagaOfFreedom3 from '../assets/exhibitions/Saga of Freedom 2.JPG'
import sagaOfFreedom4 from '../assets/exhibitions/Saga of Freedom 3.JPG'
import womenNationBuilding1 from '../assets/exhibitions/Women and Nation Building.JPG'
import womenNationBuilding2 from '../assets/exhibitions/Women and Nation Building 1.JPG'
import womenNationBuilding3 from '../assets/exhibitions/Women and Nation Building 2.JPG'
import sushasan1 from '../assets/exhibitions/Sushasan aur Abhilekh 1 (1).JPG'
import sushasan2 from '../assets/exhibitions/Sushasan aur Abhilekh 1 (2).JPG'
import sushasan3 from '../assets/exhibitions/Sushasan aur Abhilekh 1 (3).JPG'
import sushasan4 from '../assets/exhibitions/Sushasan aur Abhilekh 1 (4).JPG'
import sushasan2025_1 from '../assets/exhibitions/Sushasan aur Abhilekh 2025.JPG'
import sushasan2025_2 from '../assets/exhibitions/Sushasan aur Abhilekh 2025 (1).JPG'
import nagaLand from '../assets/exhibitions/Naga Land and People.jpeg'
import bharatSwades1 from '../assets/exhibitions/Bharat Bhartiya Swades Pardes.JPG'
import bharatSwades2 from '../assets/exhibitions/Bharat Bhariya Swades Pardes 2.jpg'
import bharatSwades3 from '../assets/exhibitions/Bharat Bhariya Swades Pardes 2 (1).jpg'
import indianHeritage1 from '../assets/exhibitions/Indian Heritage through Architecture.JPG'
import indianHeritage2 from '../assets/exhibitions/Indian Heritage Through Architecture 1.JPG'
import indianHeritage3 from '../assets/exhibitions/Indian Heritage through Architecture 2.JPG'
import indianHeritage4 from '../assets/exhibitions/Indian Heritage through Architecture 3.JPG'
import indianHeritage5 from '../assets/exhibitions/Indian Heritage through Architecture 4.JPG'

const Exhibitions = () => {
  const exhibitions = [
    {
      title: "Instrument of Accession and Merger",
      description: "Curated Exhibition on the occasion of 132nd foundation day of NAI",
      inauguratedBy: "Smt. Meenakshi Lekhi, honorable Minister of State for culture and External affaires",
      images: [instrumentOfAccession]
    },
    {
      title: "Saga of Freedom: Known and Lesser Known struggles",
      inauguratedBy: "Shri Arjun Ram Meghwal, honorable Minister of State for culture and Parliament Affaires",
      images: [sagaOfFreedom1, sagaOfFreedom2, sagaOfFreedom3, sagaOfFreedom4]
    },
    {
      title: "Women and Nation Building",
      inauguratedBy: "Shri Arjun Ram Meghwal, honorable Minister of State for culture and Parliament Affaires",
      images: [womenNationBuilding1, womenNationBuilding2, womenNationBuilding3]
    },
    {
      title: "Hamari Bhasha Hamari Virasat",
      inauguratedBy: "Smt. Meenakshi Lekhi, honorable Minister of State for Culture and External Affairs",
      note: "The event was also twitted by Honorable Prime minister of India"
    },
    {
      title: "Swatantrata ke Swar",
      inauguratedBy: "Hon'ble President of India",
      date: "4th August 2023",
      location: "Pragati Maidan, New Delhi"
    },
    {
      title: "Subhas Abhinandan",
      inauguratedBy: "Hon'ble Prime Minister of India",
      date: "23 January 2024",
      location: "Lalqula, New Delhi",
      note: "Also launched in digital version"
    },
    {
      title: "Bharteey Shiksha aur Abhilekh",
      date: "28th June 2024",
      location: "Dr. Ambedkar International, New Delhi"
    },
    {
      title: "Sushasan aur Abhilekh",
      inauguratedBy: "Shri Gajendra Singh Shekhawat, hon'ble Tourism & Culture Minister",
      date: "1st October 2024",
      location: "National Archives of India",
      images: [sushasan1, sushasan2, sushasan3, sushasan4]
    },
    {
      title: "Naga-land & People in Archival Mirror",
      inauguratedBy: "Shri K. Kommgam Konayak, hon'ble Advisor Art and Culture, Government of Nagaland",
      date: "1st December 2024",
      location: "Nagaland",
      images: [nagaLand]
    },
    {
      title: "Bharat Bharteeya: Swades Pardesh",
      inauguratedBy: "Shri Narendra Modi, hon'ble Prime Minister of India",
      date: "9 January 2025",
      location: "Bhubaneswar, Odisha, India",
      images: [bharatSwades2, bharatSwades3 , bharatSwades1,  ]
    },
    {
      title: "Indian heritage through architecture",
      inauguratedBy: "Shri Gajendra Singh Shekhawat, hon'ble Tourism & Culture Minister",
      date: "11th March 2025",
      location: "Dr. Ambedkar International Centre, New Delhi",
      images: [indianHeritage1, indianHeritage2, indianHeritage3, indianHeritage4, indianHeritage5]
    },
    {
      title: "Sushasan aur Abhilekh 2025",
      inauguratedBy: "Shri Gajendra Singh Shekhawat, hon'ble Tourism & Culture Minister",
      date: "10 October 2025",
      location: "Dr. Ambedkar International Centre, New Delhi",
      images: [sushasan2025_1, sushasan2025_2]
    }
  ]

  return (
    <section id="exhibitions" className="py-20 md:py-32 bg-gradient-to-b from-white to-[#EFE9E8]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Curated Exhibitions</h2>
          <div className="w-24 h-1 bg-[#829CBA] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exhibitions.map((exhibition, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#EFE9E8] hover:-translate-y-2 group">
              {/* Exhibition Image */}
              {exhibition.images && exhibition.images.length > 0 && (
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={exhibition.images[0]} 
                    alt={exhibition.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {exhibition.images.length > 1 && (
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                      +{exhibition.images.length - 1}
                    </div>
                  )}
                </div>
              )}
              
              {/* Exhibition Content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-1 bg-[#829CBA] mb-3 group-hover:w-20 transition-all duration-300"></div>
                  <h3 className="text-xl font-bold mb-3 text-black group-hover:text-[#829CBA] transition-colors">{exhibition.title}</h3>
                </div>
                {exhibition.description && (
                  <p className="text-base text-gray-700 mb-3">{exhibition.description}</p>
                )}
                <div className="space-y-2 text-sm text-gray-600">
                  {exhibition.inauguratedBy && (
                    <p>
                      <span className="font-semibold text-black">Inaugurated by:</span> {exhibition.inauguratedBy}
                    </p>
                  )}
                  {exhibition.date && (
                    <p>
                      <span className="font-semibold text-black">Date:</span> {exhibition.date}
                    </p>
                  )}
                  {exhibition.location && (
                    <p>
                      <span className="font-semibold text-black">Location:</span> {exhibition.location}
                    </p>
                  )}
                  {exhibition.note && (
                    <p className="text-[#829CBA] italic mt-3 font-medium">{exhibition.note}</p>
                  )}
                </div>
                
                {/* Image Gallery Preview */}
                {exhibition.images && exhibition.images.length > 1 && (
                  <div className="mt-4 pt-4 border-t border-[#EFE9E8]">
                    <div className="flex gap-2 overflow-x-auto">
                      {exhibition.images.slice(1, 4).map((img, imgIndex) => (
                        <div key={imgIndex} className="flex-shrink-0 w-16 h-16 rounded overflow-hidden border border-[#EFE9E8]">
                          <img 
                            src={img} 
                            alt={`${exhibition.title} ${imgIndex + 2}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                      {exhibition.images.length > 4 && (
                        <div className="flex-shrink-0 w-16 h-16 rounded bg-[#829CBA]/10 border border-[#829CBA] flex items-center justify-center">
                          <span className="text-xs font-semibold text-[#829CBA]">+{exhibition.images.length - 4}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Exhibitions

